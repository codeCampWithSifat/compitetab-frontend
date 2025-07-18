import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useId } from "react";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;

  const handleChekout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };
  return (
    <div
      className={`fixed top-0 right-0 
        w-3/4 sm:w-1/2 md:1/4 h-full bg-white shadow-lg transform transition-transform duration-300  flex flex-col z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      {/* Close Button */}

      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>

      {/* Cart Content With Scrollbar */}
      <div className="flex-grow p-4 overflow-y-auto ">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* Component for cart contents */}
        {cart?.products?.length > 0 ? (
          <CartContent cart={cart} userId={useId} guestId={guestId} />
        ) : (
          <p>Your Cart is empty</p>
        )}
        <CartContent />

        {/* checkout button fixed at the botton */}
        <div className="p-4 bg-white fixed  bottom-0 ">
          {cart?.products?.length > 0 && (
            <>
              {" "}
              <button
                onClick={handleChekout}
                className="w-full bg-black text-white rounded-xl py-4 font-semibold hover:bg-gray-800 transition"
              >
                Checkout
              </button>
            </>
          )}

          <p className="mt-2 text-gray-600">
            Shipping, Taxes And Discount Calculated All Checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
