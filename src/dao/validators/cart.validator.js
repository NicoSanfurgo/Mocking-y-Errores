import { Carts as cartsDao } from "../factory.js";
import ProductValidator from "./product.validator.js";
import TicketValidator from "./ticket.validator.js";

class CartValidator{
    async createCart(){
        const cart = await cartsDao.createCart();
        console.log(cart)
        return cart;
    }

    async getCartByID(id){
        if(!id) throw new Error('Cart ID is required.');

        const cart = await cartsDao.getByID(id);
        return cart;
    }

    async addProductToCart(id, list){
        if(!id) throw new Error('Cart ID is required.');

        list.forEach( async (data) => {
            let {product, quantity} = data;

            if(!product) throw new Error('Product ID is required.');
            if(quantity && isNaN(quantity)) throw new Error('Quantity must be a number.')

            const productInCart = await cartsDao.findProduct(id, product);
            if(productInCart){
                await cartsDao.addQuantity(id, product, quantity || 1);
            }else{
                await cartsDao.addProduct(id, product, quantity || 1);
            }
        })
            
        return await cartsDao.getByID(id);
    }

    async addQuantity(id, product, quantity){
        if(!id) throw new Error('Cart ID is required.');
        if(!product) throw new Error('Product ID is required.');
        if(!quantity) throw new Error('Quantity is required.');

        if(isNaN(quantity)){
            throw new Error('Quantity must be a number.')
        }

        const productInCart = await cartsDao.findProduct(id, product);
        console.log(productInCart)
        if(!productInCart) {
            throw new Error('Product not in cart.')
        }else{
            const cart = await cartsDao.addQuantity(id, product, quantity);
            return cart;
        }
    }

    async deleteProductFromCart(id, pid){
        if(!id) throw new Error('Cart ID is required.');
        if(!pid) throw new Error('Product ID is required.');

        const cart = await cartsDao.deleteProduct(id, pid);
        return cart;
    }

    async deleteAllProductsFromCart(id){
        if(!id) throw new Error('Cart ID is required.');

        const cart = await cartsDao.deleteAllProducts(id);
        return cart;
    }

    async completePurchase(id, user){
        if(!id) throw new Error('Cart ID is required.');
        const purchaser = user.email;

        let cart = await cartsDao.getByID(id);
        if(!cart.products.length) throw new Error('Cart is empty')

        const notProcessed = []
        let total = 0;

        cart.products.forEach( async item => {
            if(item.quantity <= item.product.stock){
                let updatedStock = item.product.stock - item.quantity;
                ProductValidator.updateProduct(item.product.id, {stock: updatedStock})

                total += item.quantity*item.product.price;
                
                await cartsDao.deleteProduct(id, item.product.id);
            }else{
                notProcessed.push(item.product.id)
            };
        })
        if( total == 0 ){
            return notProcessed;
        }
        let ticket = TicketValidator.createTicket({total, purchaser});
        return ticket;
    }
}

export default new CartValidator();