const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, requied: true },
      },
    ],
  },
});

userSchema.methods.addToCart = function (product) {
  console.log(this.cart.items);
  const cartProductIndex = this.cart.items.findIndex((item) => {
    return item.productId.toString() === product._id.toString();
  });
  let updatedQuantity = 1;
  const updatedCartItems = [...this.cart.items];
  if (cartProductIndex >= 0) {
    updatedQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = updatedQuantity;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: updatedQuantity,
    });
  }
  const updatedCart = {
    items: updatedCartItems,
  };
  this.cart = updatedCart;
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
