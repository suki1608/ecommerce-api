const router = require("express").Router();
const handle = require("../handlers");

router
  .get("/categories", handle.getCategories)
  .post("/categories", handle.addCategories)
  .delete("/categories", handle.deleteCategories);

module.exports = router;
