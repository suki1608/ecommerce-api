const router = require("express").Router();
const handle = require("../handlers");

router
  .get("/:orderId", handle.getOrderById)
  .get("/customer/:customerId", handle.getOrderHistory)
  .post("", handle.addOrder);

module.exports = router;
