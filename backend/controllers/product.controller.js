import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const addProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct, // <-- This line is essential
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Error saving product",
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Error fetching products",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid product id",
    });
  }

  try {
    const product = await Product.findByIdAndDelete(id);
    return res.json({
      success: true,
      message: `product deleted successfully`,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Error deleting product",
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid product id",
    });
  }

  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res.json({
      success: true,
      data: updateProduct,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
    });
  }
};
