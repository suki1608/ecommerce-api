const db = require("../models");

module.exports.getOrderById = async (req, res, next) => {
  try {
    const order = await db.Order.findById({ _id: req.params.orderId });
    res.json(order);
  } catch (err) {
    next(err);
  }
};

module.exports.getOrderHistory = async (req, res, next) => {
  try {
    const orders = await db.Order.find({ user_id: req.params.customerId });
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

module.exports.addOrder = async (req, res, next) => {
  try {
    const newOrder = await db.Order.create(req.body);
    res.json({ newOrder, success: true });
  } catch (err) {
    next(err);
  }
};
