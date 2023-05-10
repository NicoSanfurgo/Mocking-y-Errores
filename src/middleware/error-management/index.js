import { ErrorList } from './error.dictionary.js';

export default (error, req, res, next) => {
    console.log(error.cause)

    switch(error.code) {
        case ErrorList.DATABASE_ERROR:
            res.send({status: 'Error', payload: error.name})
            break;

        case ErrorList.INVALID_TYPE_ERROR:
            res.send({status: 'Error', payload: error.name})
            break;
        
        case ErrorList.INVALID_PARAMS:
            res.send({status: 'Error', payload: error.name})
            break;
        
        case ErrorList.ACCESS_FORBIDDEN:
            res.send({status: 'Error', payload: error.name})
            break;

        case ErrorList.NOT_FOUND:
            res.send({status: 'Error', payload: error.name})
            break;

        case ErrorList.USER_ALREADY_EXISTS:
            res.send({status: 'Error', payload: error.name})
            break;
        
        case ErrorList.EMPTY_CART:
            res.send({status: 'Error', payload: error.name})
            break;

        default:
            res.send({status: 'Error', payload: 'Unhandled Error'})
    }
}