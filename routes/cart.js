const router = require("express").Router();
const handle = require("../handlers");

router
  .get("/:customerId", handle.getCartById)
  .post("/:customerId", handle.addItemToCart)
  .put("/:customerId", handle.updateCart);

module.exports = router;
