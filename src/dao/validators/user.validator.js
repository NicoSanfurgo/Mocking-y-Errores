import { UserService as userDao } from "../../repository/index.repository.js";
import { hashPassword, isValidPass } from '../../utils.js'
import CustomError from "../../middleware/error-management/CustomError.js";
import { ErrorList } from "../../middleware/error-management/error.dictionary.js";

class UserValidator{
    async userLogin( email, password ){
        
        if( !email || !password ) CustomError.createError({
            name: 'Login Error',
            cause: 'Email and password are required',
            message: 'Invalid data input',
            code: ErrorList.INVALID_PARAMS
        });

        const user = await userDao.findByEmail(email);

        if(!user) CustomError.createError({
            name: 'User not found',
            cause: 'User does not exist in the database',
            message: 'User is not registered',
            code: ErrorList.NOT_FOUND
        });

        if(!isValidPass(user, password)) CustomError.createError({
            name: 'Invalid password',
            cause: 'Invalid password',
            message: 'Invalid password',
            code: ErrorList.ACCESS_FORBIDDEN
        });

        return user;
    }

    async registerUser({first_name, last_name, email, age, password}){
        try{
            if( !first_name || !last_name || !age || !email || !password ) throw new Error('Missing required fields');

            const user = await userDao.findByEmail(email);
            if(user) throw new Error('Email already in use');
            const data = {
                first_name, 
                last_name, 
                age, 
                email, 
                password: hashPassword(password)
            };

            const newUser = await userDao.createUser(data)
            return newUser;
        }catch(err){
            return err;
        }
    }
}

export default new UserValidator();