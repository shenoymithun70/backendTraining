const express = require("express");

const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

const adminController = require("../controller/admin");

router.post("/addproduct", adminController.postAddProduct);

router.get("/getproducts", adminController.getAllProduct);

router.put("/editproduct/:id", adminController.editProduct);

router.delete("/deleteproduct/:id", adminController.deleteProductById);

// router.get("/home", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "sendmessage.html"));
// });

module.exports = router;
