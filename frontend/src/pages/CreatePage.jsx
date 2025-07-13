import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useProductStore } from "../store.js/product";
import toast from "react-hot-toast";

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleSubmit = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };

  const { createProduct } = useProductStore();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-white text-3xl font-bold text-center mb-8">
          Create New Product
        </h1>

        <div className="space-y-6">
          <div>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <input
              name="imageUrl"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="cursor-pointer w-full bg-blue-400 hover:bg-blue-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
            <Plus size={20} />
            <span>Add Product</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
