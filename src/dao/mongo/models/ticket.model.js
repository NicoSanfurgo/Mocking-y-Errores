import { Schema, model } from 'mongoose';


const randomString = () => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    const n = 9;
    for (let i = 0; i < n; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    
    return result
}

const ticketCollection = 'tickets'

const ticketSchema = new Schema({
    code: { type: String, auto: true, unique: true, default: randomString()},
    purchase_datetime: {type: Date, required: true},
    amount: { type: Number, required: true },
    purchaser: {type: String, required: true}
})

export const ticketModel = model(ticketCollection, ticketSchema);
