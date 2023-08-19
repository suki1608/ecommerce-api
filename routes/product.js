const router = require("express").Router();
const handle = require("../handlers");

router
  .get("/:productId", handle.getProduct)
  .get("/products/:category_id", handle.getProductsByCategory)
  .post("/products", handle.addProduct);

module.exports = router;
