import { ticketModel } from "./models/ticket.model.js";

class TicketDao{
    create(data){
        return ticketModel.create(data);
    }
}

export default new TicketDao();