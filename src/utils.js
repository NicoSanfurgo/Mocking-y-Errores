import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";
import passport from 'passport';
import config from './config/config.js';

export const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPass = (user, password) => bcrypt.compareSync(password, user.password);

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const passportCall = (strategy) => {
    return async(req, res, next) => {
        passport.authenticate(strategy, (err, user, info) => {
            if(err) return next(err);
            if(!user) {
                return res.status(401).send({error: info.messages ? info.messages : info.toString()})
            }
            req.user = user;
            next();
        })(req, res, next);
    }
}

export const admin = {
    user: config.ADMIN_EMAIL,
    password: config.ADMIN_PASSWORD,
    first_name: 'ad',
    last_name: 'min',
    role: "admin"
}
