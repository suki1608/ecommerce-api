const db = require("../models");

module.exports.getProduct = async (req, res, next) => {
  try {
    const product = await db.Product.findOne({
      product_name: req.params.productId,
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

module.exports.getProductsByCategory = async (req, res, next) => {
  try {
    const products = await db.Product.find({
      category_id: req.params.category_id,
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
};

module.exports.addProduct = async (req, res, next) => {
  try {
    const newProduct = await db.Product.create(req.body);
    res.json({ newProduct, success: true });
  } catch (err) {
    if (err.code === 11000) err.message = "Product with same name exists";
    next(err);
  }
};
