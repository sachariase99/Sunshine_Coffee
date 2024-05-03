const product = require("../controllers/product.controller.js");
const { verifyToken } = require("../middleware/auth.middleware.js");
let router = require("express").Router();

// product Routes for CRUD operations on products
router.get("/products/getAll", product.findAll);
router.get("/products/getOne/:id", product.findOne);

module.exports = router;
