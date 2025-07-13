import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import {
  addProduct,
  deleteProduct,
  updateProduct,
  getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", addProduct);

router.delete("/:id", deleteProduct);

router.get("/", getProducts);

router.put("/:id", updateProduct);

export default router;
