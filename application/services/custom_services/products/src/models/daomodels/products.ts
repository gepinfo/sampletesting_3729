
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const productsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   qunatity: { type: String },
   price: { type: String },
   offer_price: { type: String },
   description: { type: String },
   prod_images: { type: String },
   imagess: { type: String },
   pros: { type: String }
})

const productsModel = mongoose.model('products', productsSchema, 'products');
export default productsModel;
