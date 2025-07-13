import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { useProductStore } from "../store.js/product";
import toast from "react-hot-toast";

function ProductCard({ item }) {
  const { deleteProduct, products } = useProductStore();

  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    console.log(success);
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  return (
    <div className="min-w-[16rem] bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {/* Product Image */}
      <div className="bg-gray-200 h-48 flex items-center justify-center">
        <img src={item.image} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold mb-1">{item.name}</h3>
        <p className="text-white text-xl font-bold mb-4">{item.price}</p>

        {/* Action Buttons */}
        <div className="flex justify-between ">
          <button className="cursor-pointer bg-blue-400 hover:bg-blue-500 p-2 rounded-lg transition-colors duration-200">
            <Edit size={16} className="text-gray-900" />
          </button>
          <button
            onClick={() => handleDelete(item._id)}
            className="cursor-pointer bg-red-400 hover:bg-red-500 p-2 rounded-lg transition-colors duration-200">
            <Trash2 size={16} className="text-gray-900" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
