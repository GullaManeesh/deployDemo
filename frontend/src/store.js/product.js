import { create } from "zustand";
import { deleteProduct } from "../../../backend/controllers/product.controller";
import Product from "../../../backend/models/product.model";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully." };
  },
  fetchProducts: async (products) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },
  deleteProduct: async (pid) => {
    const res = await fetch(`api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) {
      return {
        success: false,
        data: data.message,
      };
    }
    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    return {
      success: true,
      data: data.message,
    };
  },
}));
