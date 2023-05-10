import MessageValidator from "../dao/validators/messages.validator.js";

class ChatController{
    async sendMessage(req, res){
        try{
            const result = await MessageValidator.sendMessage({user: req.user.email, message: req.body.message})
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    }
    
    async getAllMessages(req, res){
        try{
            const result = await MessageValidator.getAllMessages()
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    }
}

export default new ChatController();