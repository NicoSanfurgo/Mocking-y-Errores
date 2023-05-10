import ProductValidator from "../dao/validators/product.validator.js";

class ProductsController{
    async getAllProducts(req,res){
        try{
            const {page, limit, sort, category, status} = req.query;
            const products = await ProductValidator.getProducts({ page, limit, sort, category, status });
            res.status(200).json(products);
        }catch(err){
            res.status(500).json(err)
        }
    }

    async getProductByID(req, res){
        try{
            const id = req.params.id;
            const product = await ProductValidator.getProductByID(id);
            res.status(200).json(product);
        }catch(err){
            res.status(500).json(err)
        }
    }

    async addProduct(req, res){
        try{
            const {title, description, code, price, status, stock, category, thumbnails} = req.body;
            const product = await ProductValidator.createProduct({title, description, code, price, stock, status, category, thumbnails});
            res.status(200).json(product);
        }catch(err){
            res.status(500).json(err)
        }
    }

    async editProduct(req, res){
        try{
            const id = req.params.id;
            const {title, description, code, price, stock, category, thumbnails} = req.body;
            const product = await ProductValidator.updateProduct(id, {title, description, code, price, stock, category, thumbnails});
            res.status(200).json(product);
        }catch(err){
            res.status(500).json({error: err.message})
        }
    }

    async deleteProduct(req, res){
        try{
            const id = req.params.id;
            const product = await ProductValidator.deleteProduct(id);
            res.status(200).json(product);
        }catch(err){
            res.status(500).json(err)
        }
    }
}

export default new ProductsController();