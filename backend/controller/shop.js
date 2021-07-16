const Product = require("../model/product");

exports.getProducts = (req, res, next) => {
  try {
    console.log(req.user);
    Product.find()
      .then((products) => {
        return res.status(200).json(products);
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  } catch {
    return res.status(500).json(error.message);
  }
};

exports.getProductById = (req, res, next) => {
  try {
    const { id } = req.params;
    Product.findById(id)
      .then((product) => {
        return res.status(200).json(product);
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  } catch {
    return res.status(500).json(error.message);
  }
};

exports.addToCart = (req, res, next) => {
  const { id } = req.params;
  console.log(req.user);
  console.log(id);
  Product.findById(id)
    .then((product) => {
      console.log(product);
      return req.user.addToCart(product);
    })
    .then(() => {
      return res.status(200).json("product added to cart");
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
};
