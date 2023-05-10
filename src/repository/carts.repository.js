export default class CartsRepository{
    constructor(dao){
        this.dao = dao;
    }

    createCart(){
        return this.dao.create({});
    }

    getByID(id){
        return this.dao.getByID(id);
    }

    findProduct(cid, pid){
        return this.dao.findProduct({cid, pid});
    }

    addProduct(cid, pid, qty){
        return cartModel.findOneAndUpdate({cid, pid, qty});
    }

    addQuantity(cid, pid, qty){
        return cartModel.addQuantity({cid, pid, qty});
    }

    deleteProduct(cid, pid){
        return cartModel.deleteProduct({cid, pid})
    }

    deleteAllProducts(cid){
        return cartModel.deleteAllProducts(cid);
    }
}