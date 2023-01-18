const mongoose = require("mongoose");

const reqString = { type: String, required: true };
const reqObj = { type: Object, required: true };
const reqArray = { type: Array, required: true };

const allProductsSchema = mongoose.Schema({
  name: reqString,
  mpn: reqString,
  info: reqString,
  data: reqObj,
  images: reqArray,
  prices: reqArray,
});
/**
name="Asus VIVOBOOK 15 K513EA"
mpn="90NB0SG2-M54150"
info="Intel® Core™ i7 - i7-1165G7 - 4 cores - 15.6 inch - 16GB - 1000GB SSD …"
data=Object
images =Array
prices=Array
 */
const ProductModel = mongoose.model("user", allProductsSchema);

module.exports = {
  ProductModel,
};
