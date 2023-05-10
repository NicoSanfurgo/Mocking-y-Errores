import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productCollection = 'products'

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true, unique: true},
    price: { type: Number, required: true },
    status: { type: Boolean,  default: true, index: true},
    stock: { type: Number, required: true },
    category: { type: String, required: true, index: true },
    thumbnails: {type: Array }
})

productSchema.plugin(mongoosePaginate);

export const productModel = model(productCollection, productSchema);
