export default class UserRepository{
    constructor(dao){
        this.dao = dao;
    }

    createUser({first_name, last_name, email, age, password}){
        return this.dao.create({first_name: first_name, last_name: last_name, email: email, age: age, password: password});
    }

    findByEmail(email){
        return this.dao.find(email);
    }
}