import { ProductService as ProductsDao } from "../../repository/index.repository.js";
import CustomError from "../../middleware/error-management/CustomError.js";
import { addProductError } from "../../middleware/error-management/info.js";
import { ErrorList } from "../../middleware/error-management/error.dictionary.js";

class ProductValidator{
    async getProducts({page, limit, sort, category, status}){
        const sortValidValues = [-1, 1, '-1', '1']
        let query = {};
        
        if(category || status){
            query = {category} || {status}
        }

        if(limit) if(isNaN(limit)) throw new Error('Limit must be a number over 0');
        if(page) if(isNaN(page) || page <= 0) throw new Error('Page must be a number over 0');

        const options = {page: page || 1, limit: limit || 10}
        
        if(sortValidValues.includes(sort)){
            options.sort = { price: sort }
            return await ProductsDao.getAllProducts( query, options )
        }else{
            if(sort) throw new Error('Sort values can only be 1 or -1')
        }
        const products = await ProductsDao.getAllProducts( query, options );
        return products;
    }

    async getProductByID(id){
        if(!id) throw new Error('Product ID is required.');

        const product = await ProductsDao.getProductByID(id)
        return product;
    }

    async createProduct({title, description, code, price, stock, status=true, category, thumbnails}){
        if( !title || !description || !code || !price || typeof status != 'boolean' || !stock || !category ) CustomError.createError({
            name: 'Product creation Error',
            cause: addProductError({title, description, code, price, stock, status, category}),
            message: 'Invalid data input',
            code: ErrorList.INVALID_TYPE_ERROR
        });

        const product = ProductsDao.createProduct({title, description, code, price, stock, status, category, thumbnails});
        return product;
    }

    async updateProduct(id, {title, description, code, price, stock, category, thumbnails}){
        if(!id) throw new Error('Product ID is required.');

        const product = await ProductsDao.updateProduct(id, {title, description, code, price, stock, category, thumbnails});
        return product;
    }

    async deleteProduct(id){
        if(!id) throw new Error('Product ID is required.');

        const product = await ProductsDao.deleteProduct(id);
        return product;
    }
}

export default new ProductValidator();