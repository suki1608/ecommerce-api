const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ecommerceDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.User = require("./user");
module.exports.Category = require("./category");
module.exports.Order = require("./order");
module.exports.Product = require("./product");
