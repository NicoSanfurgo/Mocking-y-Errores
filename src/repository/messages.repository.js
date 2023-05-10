export default class MessagesRepository{
    constructor(dao){
        this.dao = dao;
    }

    async saveMessage(data){
        return this.dao.save(data);
    }

    async getAllMessages(id){
        return this.dao.getAll(id);
    }
}