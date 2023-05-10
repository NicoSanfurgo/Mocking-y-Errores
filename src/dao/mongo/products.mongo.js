import { productModel } from "./models/product.model.js";

class ProductDao{
    getAll(query, options){
        return productModel.paginate(query, options);
    }

    getByID(id){
        console.log('dao')
        return productModel.findById(id);
    }

    create(data){
        return productModel.create(data);
    }

    update(id, data){
        return productModel.findByIdAndUpdate(id, data, {new: true});
    }

    delete(id){
        return productModel.findByIdAndDelete(id);
    }
}

export default new ProductDao();