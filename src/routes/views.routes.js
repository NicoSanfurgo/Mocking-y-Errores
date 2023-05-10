import { Router } from "express";
import CartValidator from "../dao/validators/cart.validator.js";
import ProductValidator from "../dao/validators/product.validator.js";
import UserDTO from "../dao/dto/user.dto.js"
import { __dirname, passportCall } from '../utils.js';

const router = Router();

router.get('/', (req, res) => {
    res.redirect('/login')
})

router.get('/products', passportCall('current'), async (req, res) => {
    if (!req.user) {
        return res.redirect('/login')
    }
    const {page, limit, sort, category, status} = req.query;
    const products = await ProductValidator.getProducts({page, limit, sort, category, status})
    const user = new UserDTO(req.user)
    res.render('products', { products, user})
})

router.get('/products/:id', async (req, res) => {
    const product = await ProductValidator.getProductByID(req.params.id)

    res.render('productDetails', { product })
})

router.get('/carts/:cid', async (req,res) => {
    const cart = await CartValidator.getCartByID(req.params.cid)
    console.log(cart)
    res.render('cart', { cart })
})

router.get('/login', async (req, res) => {    
    res.render('login')
})

router.get('/register', async (req, res) => {    
    res.render('register')
})

export default router;