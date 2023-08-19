const db = require("../models");

module.exports.getCartById = async (req, res, next) => {
  try {
    const user = await db.User.findById({ _id: req.params.customerId });
    res.json(user.cart);
  } catch (err) {
    next(err);
  }
};

module.exports.addItemToCart = async (req, res, next) => {
  try {
    const user = await db.User.findById({ _id: req.params.customerId });
    const { product_id, qty } = req.body;
    const product = await db.Product.findById({ _id: product_id });
    if (!product) throw new Error("No such product found");
    let flag = false;
    user.cart.forEach((item, index) => {
      if (item.product_id == product_id) {
        item.qty += qty;
        flag = true;
      }
    });
    if (!flag) {
      const cartItem = {
        product_id,
        qty,
      };
      user.cart.push(cartItem);
    }

    await user.save();
    res.json(user.cart);
  } catch (err) {
    next(err);
  }
};

module.exports.updateCart = async (req, res, next) => {
  try {
    const { product_id, qty } = req.body;
    const user = await db.User.findById({ _id: req.params.customerId });
    user.cart.forEach((item, index) => {
      if (item.product_id == product_id) item.qty = qty;
    });
    await user.save();
    res.json(user.cart);
  } catch (err) {
    next(err);
  }
};
