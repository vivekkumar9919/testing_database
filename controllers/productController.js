const Product = require("../model/Product");

// get all product
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (err) {
        res.json({ message: error });
    }
}

// single product
const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    }
    catch (err) {
        res.json({ message: err });
    }
}

// Add new product
const product_create = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        brand: req.body.brand,
        details: req.body.details
    });
    try {
        const saveProduct = await product.save();
        res.send(saveProduct);
    }
    catch (err) {
        res.status(400).send(error);
    }
}


// update product
const product_update = async (req, res) => {
    try {
        const product = {
          title: req.body.title,
          price: req.body.price,
          brand: req.body.brand,
          details: req.body.details
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
}


// delete product

const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
}



module.exports = {
    product_all,
    product_create,
    product_delete,
    product_update,
    product_details
}