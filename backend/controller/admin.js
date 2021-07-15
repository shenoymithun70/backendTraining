const Product = require("../model/product");

exports.postAddProduct = (req, res, next) => {
  try {
    const bodyData = req.body;
    const product = new Product({ ...bodyData });
    product
      .save()
      .then((result) => {
        console.log(result);
        return res.status(200).json("product added");
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  } catch {
    res.status(500).json(error.message);
  }
};

exports.getAllProduct = (req, res, next) => {
  try {
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

exports.editProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    const bodyData = req.body;
    Product.updateOne({ _id: id }, { $set: { ...bodyData } })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  } catch {
    return res.status(500).json(error.message);
  }
};

exports.deleteProductById = (req, res, next) => {
  try {
    const id = req.params.id;
    Product.deleteOne({ _id: id })
      .then((result) => {
        return res.status(200).json(`Product with ${id} is deleted`);
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  } catch {
    return res.status(500).json(error.message);
  }
};
