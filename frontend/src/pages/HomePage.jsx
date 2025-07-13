import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useProductStore } from "../store.js/product";
import ProductCard from "../components/ProductCard";
function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="w-full min-h-screen bg-slate-900 p-4">
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        Current Products
      </h1>
      {products.length > 0 ? (
        <div className="flex flex-wrap gap-4 ">
          {products.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-xl text-center font-bold text-gray-500">
          No products found 😢{" "}
          <NavLink to="/create">
            <div className="text-blue-600 hover:underline">
              Create a product
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default HomePage;
