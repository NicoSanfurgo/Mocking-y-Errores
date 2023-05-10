import config from '../config/config.js';
export let Carts;
export let Products;
export let Users;
export let Tickets;
export let Messages;
import mongoose from 'mongoose';

switch(config.PERSISTENCE){
    case "MONGO":
        mongoose.set('strictQuery', true);
        mongoose.connect(config.MONGO_URL).
            then( () => console.log('Connected to MongoDB') ).
            catch(err => console.log('Error al conectar a MongoDB', err));  

        const {default:CartsMongo} = await import('./mongo/carts.mongo.js');
        const {default:ProductsMongo} = await import('./mongo/products.mongo.js');
        const {default:MSGMongo} = await import('./mongo/messages.mongo.js');
        const {default:UsersMongo} = await import('./mongo/users.mongo.js');
        const {default:TicketsMongo} = await import('./mongo/ticket.mongo.js');
        Carts = CartsMongo;
        Products = ProductsMongo;
        Users = UsersMongo;
        Messages = MSGMongo;
        Tickets = TicketsMongo;
        break;        
}