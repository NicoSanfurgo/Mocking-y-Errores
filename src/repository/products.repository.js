export default class ProductsRepository{
    constructor(dao){
        this.dao = dao;
    }

    getAllProducts(query, options){
        return this.dao.getAll();
    }

    async getProductByID(id){
        return this.dao.getByID(id);
    }

    createProduct(data){
        return this.dao.create(data);
    }

    updateProduct(id, data){
        return this.dao.update(id, data, {new: true});
    }

    deleteProduct(id){
        return this.dao.delete(id);
    }
}