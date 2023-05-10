import { cartModel } from "./models/cart.model.js";

class CartDao {a
    create(){
        return cartModel.create({});
    }

    getByID(id){
        return cartModel.findOne({_id: id});
    }

    findProduct(cid, pid){
        return cartModel.findOne({_id: cid, "products.product": pid});
    }

    addProduct(cid, pid, qty){
        return cartModel.findOneAndUpdate({_id: cid}, {$push: {products: {product: pid, quantity: qty}}});
    }

    addQuantity(cid, pid, qty){
        return cartModel.findOneAndUpdate({_id: cid, "products.product": pid}, {$inc: {"products.$.quantity": qty}});
    }

    deleteProduct(cid, pid){
        return cartModel.findOneAndUpdate({_id: cid}, {$pull: {products: {product: pid}}})
    }

    deleteAllProducts(cid){
        return cartModel.findOneAndReplace({_id: cid}, {products: []});
    }
}

export default new CartDao();