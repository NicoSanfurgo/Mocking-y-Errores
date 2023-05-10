export default class TicketsRepository{
    constructor(dao){
        this.dao = dao;
    }

    createTicket(data){
        return this.dao.create(data);
    }
}