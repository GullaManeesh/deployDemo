import React from "react";
import { Plus, ShoppingCart, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-slate-800 text-white px-6 py-2">
      {/* Top section - Logo/title on left, icons on right */}
      <div className="flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-cyan-400 text-xl font-bold">PRODUCT STORE</span>
          <ShoppingCart className="text-cyan-400 w-6 h-6" />
        </NavLink>
        <div className="flex items-center space-x-4">
          <NavLink to="/create">
            <Plus className=" text-gray-300 hover:text-white cursor-pointer" />
          </NavLink>
          <Sun className="text-gray-300 hover:text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
