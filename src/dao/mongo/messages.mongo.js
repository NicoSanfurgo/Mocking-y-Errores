import { messageModel } from "./models/message.model.js";

class MessagesDao {
    async save(data){
        return await messageModel.create(data);
    }

    async getAll(){
        return await messageModel.find();
    }
}

export default new MessagesDao();