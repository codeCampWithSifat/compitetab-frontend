import { useState } from "react";
import { useNavigate } from "react-router";
import PaypalButton from "./PaypalButton";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 240,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Successfuly", details);
    navigate("/order-confirmation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="sifat100@gmail.com"
              className="w-full p-2 border rounded "
              disabled
            />
          </div>
          <h3 className="text-lg mb-4 ">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                type="text"
                className="w-full p-2 border rounded "
                required
              />
            </div>
            <div className="ml-2">
              <label className="block  text-gray-700">Last Name</label>
              <input
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...setShippingAddress,
                    lastName: e.target.value,
                  })
                }
                type="text"
                className="w-full p-2 border rounded "
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 ">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...setShippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded "
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 ">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...setShippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded "
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 ">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...setShippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded "
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 ">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...setShippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 ">Phone Number</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...setShippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded "
              required
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                className="w-full bg-black text-white py-3 rounded"
                type="submit"
              >
                Continue To Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay With Paypal</h3>
                {/* Paypal button Component */}
                <PaypalButton
                  amount={500}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment Failed. Try Later", err)}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-gray-50 p-6 rounded-lg ">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="bordet-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              className="flex items-start justify-between py-2 border-b"
              key={index}
            >
              <div className="flex items-start">
                <img
                  className="w-20 h-24 object-cover mr-4"
                  src={product.image}
                  alt=""
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size : {product.size}</p>
                  <p className="text-gray-500">Color : {product.color}</p>
                </div>
              </div>
              <p className="text-xl"> $ {product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>$ {cart?.totalPrice?.toLocaleString()}</p>
        </div>

        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>{cart?.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
