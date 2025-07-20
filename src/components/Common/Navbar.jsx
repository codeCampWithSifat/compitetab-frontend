import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarDrawerOpen, setNavbarDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  const { user } = useSelector((state) => state.auth);

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
            to="/collections/all?gender=Men"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="/collections/all?gender=Women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="block bg-black px-2 rounded text-white"
            >
              Admin
            </Link>
          )}
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className=" absolute -top-2 bg-rabbit-red text-white text-sm rounded-full px-2 py-0.5">
              {cartItemCount}
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
              to="/collections/all?gender=Men"
              onClick={toggleNavbarDrawer}
            >
              Men
            </Link>
            <Link
              className="block mt-3 text-gray-600 hover:text-black"
              to="/collections/all?gender=Women"
              onClick={toggleNavbarDrawer}
            >
              Women
            </Link>

            <Link
              className="block mt-3 text-gray-600 hover:text-black"
              to="/collections/all?category=Top Wear"
              onClick={toggleNavbarDrawer}
            >
              Top Wear
            </Link>
            <Link
              className="block mt-3 text-gray-600 hover:text-black"
              to="/collections/all?category=Bottom Wear"
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
