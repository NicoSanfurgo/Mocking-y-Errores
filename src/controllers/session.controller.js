import UserValidator from "../dao/validators/user.validator.js";
import { admin } from '../utils.js';
import UserDTO from '../dao/dto/user.dto.js';
import jwt from 'jsonwebtoken';

class SessionController{
    async login(req, res){
        try{
            const { email, password } = req.body;
            let user = {};
            

            if(email == admin.user && password == admin.password){
                user = {...admin}
            }else{
                user = await UserValidator.userLogin(email, password);
            }
            
            const token = jwt.sign({email, first_name: user.first_name, last_name: user.last_name, role: user.role }, 'pageSecret', { expiresIn: '10m' });
            res.status(200).cookie('secretToken', token, {maxAge: 50000, httpOnly: true})
            res.redirect('/products');
        }catch(err){
            return res.status(400).json({error: err.message});
        }
    } 

    async register(req, res){
        try{
            const user = await UserValidator.registerUser(req.body);
            res.status(201).redirect('/login');
        }catch(err){
            res.status(400).json({error: err.message})
        }
    }

    async current(req, res){
        const user = new UserDTO(req.user)
        res.send(user);
    }

    async handleLogout(req, res){
        res.clearCookie('secretToken');
        res.redirect('/login');
    }
}

export default new SessionController();