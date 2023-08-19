const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  units_in_stock: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
