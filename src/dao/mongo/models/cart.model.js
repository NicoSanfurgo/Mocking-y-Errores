import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const cartCollection = 'carts';

const cartSchema = new Schema({
    products: {
        type: [
            {
                product: {type: Schema.Types.ObjectId, ref: 'products'},
                quantity: {type: Number}
            }
        ], default: []
    }
})

cartSchema.pre('findOne', function() {
    this.populate('products.product');
})

cartSchema.plugin(mongoosePaginate);

export const cartModel = model(cartCollection, cartSchema);
