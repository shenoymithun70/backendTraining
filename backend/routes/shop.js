const express = require("express");

const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

const shopController = require("../controller/shop");

router.get("/getproducts", shopController.getProducts);

router.get("/getproduct/:id", shopController.getProductById);

router.get("/addtocart/:id", shopController.addToCart);

module.exports = router;
