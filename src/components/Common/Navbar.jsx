import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarDrawerOpen, setNavbarDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavbarDrawer = () => {
    setNavbarDrawerOpen(!navbarDrawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/admin" className="block bg-black px-2 rounded text-white">
            Admin
          </Link>
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className=" absolute -top-2 bg-rabbit-red text-white text-sm rounded-full px-2 py-0.5">
              4
            </span>
          </button>
          {/* Search Icon */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavbarDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navbar Navigation */}

      <div
        className={`fixed
      shadow-lg
       top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white transform transition-transform duration-300 z-50 ${
         navbarDrawerOpen ? "translate-x-0" : "-translate-x-full"
       }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavbarDrawer}>
            <IoMdClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav>
            <Link
              className="block mt-3 text-gray-600 hover:text-black"
              to="#"
              onClick={toggleNavbarDrawer}
            >
              Men
            </Link>
            <Link
              className="block mt-3 text-gray-600 hover:text-black"
              to="#"
              onClick={toggleNavbarDrawer}
            >
              Women
            </Link>

            <Link
              className="block mt-3 text-gray-600 hover:text-black"
              to="#"
              onClick={toggleNavbarDrawer}
            >
              Top Wear
            </Link>
            <Link
              className="block mt-3 text-gray-600 hover:text-black"
              to="#"
              onClick={toggleNavbarDrawer}
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
