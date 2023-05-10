import { Schema, model } from 'mongoose';

const messageCollection = 'messages'

const messageSchema = new Schema({
    user: { type: String, required: true },
    message: { type: String, required: true }
})

export const messageModel = model(messageCollection, messageSchema);
