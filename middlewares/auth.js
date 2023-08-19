const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(req.headers.auth);
  if (req.headers.auth) {
    const token = req.headers.auth.split(" ")[1];
    jwt.verify(token, "JWT_TOKEN", (err, decoded) => {
      if (err) {
        next(Error("Failed to authenticate token"));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    next(Error("No token was provided"));
  }
};
