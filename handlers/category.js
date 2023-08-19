const db = require("../models");

module.exports.getCategories = async (req, res, next) => {
  try {
    const categories = await db.Category.find({});
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports.addCategories = async (req, res, next) => {
  try {
    const newCategory = await db.Category.create(req.body);
    res.json({ newCategory, success: true });
  } catch (err) {
    if (err.code == 11000) err.message = "Category with the same name exists";
    next(err);
  }
};

module.exports.deleteCategories = async (req, res, next) => {
  try {
    await db.Category.deleteOne({ category_name: req.body.category_name });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
