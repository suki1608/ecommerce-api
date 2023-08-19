const jwt = require("jsonwebtoken");
const db = require("../models");

module.exports.register = async (req, res, next) => {
  try {
    const user = await db.User.create(req.body);
    const { id, username } = user;

    const token = jwt.sign({ id, username }, "JWT_TOKEN");
    res.status(201).json({ id, username, token });
  } catch (err) {
    if (err.code == 11000) {
      err.message = "Sorry that username is already taken";
    }
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const user = await db.User.findOne({ username: req.body.username });
    if (!user) {
      throw new Error("No such user found");
    }
    const valid = await user.comparePassword(req.body.password);
    if (valid) {
      const { id, username } = user;
      const token = jwt.sign({ id, username }, "secret");
      user.invalid_logins = 0;
      await user.save();
      res.json({
        username,
        id,
        token,
      });
    } else {
      throw new Error(`Invalid password`);
    }
  } catch (err) {
    next(err);
  }
};
