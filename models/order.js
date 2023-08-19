const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    delivered: {
      type: Boolean,
      default: false,
    },
    item_list: {
      type: [mongoose.Types.ObjectId],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
