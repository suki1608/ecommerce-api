const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const itemSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  qty: {
    type: Number,
    default: 1,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: [itemSchema],
    default: [],
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = async function (attempt, next) {
  try {
    return await bcrypt.compare(attempt, this.password);
  } catch (err) {
    return next(err);
  }
};

module.exports = mongoose.model("User", userSchema);
