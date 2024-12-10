import Product from '../models/product.model.js';
import mongoose from "mongoose"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({success: true, data: products});
    } catch (error) {
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product ID not valid" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;
    
    
    // to check if the id is correct or not
    // if(!mongoose.Types.ObjectId.isValid(id)) { 
    //     return res.status(404).json({success: false, message: "Product id  not found"});
    // }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({success: false, message: "Product not found"});
    }
}