const express = require("express");
const app = express();
const PORT = 5000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const routes = require("./routes");
const handle = require("./handlers");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ hello: "world" });
});

app.use("/api/auth", routes.auth);
app.use("/api", routes.categories);
app.use("/api", routes.product);
app.use("/api/order", routes.order);
app.use("/api/cart", routes.cart);

app.use(handle.notFound);
app.use(handle.errors);
