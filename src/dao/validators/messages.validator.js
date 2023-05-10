import { MessageService as MessagesDao } from "../../repository/index.repository.js";

class MessagesValidator{
    async sendMessage({user, message}){
        if(!user) throw new Error('Forbidden');
        if(!message) throw new Error('Message cannot be empty');
        await MessagesDao.saveMessage({user, message});
        return await MessagesDao.getAllMessages();   
    };

    async getAllMessages(){
        return await MessagesDao.getAllMessages();        
    }
}

export default new MessagesValidator();