import { TicketsService } from "../../repository/index.repository.js";

class TicketValidator{
    createTicket(data){
        const { total, purchaser } = data;
        const purchase_datetime= new Date().toLocaleString();

        return TicketsService.createTicket({amount: total, purchaser: purchaser, purchase_datetime});
    }

};

export default new TicketValidator();

