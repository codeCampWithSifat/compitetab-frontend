import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mocOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Paypal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "New Work",
        country: "Dhaka",
      },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 2,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "Shirt",
          price: 240,
          quantity: 2,
          image: "https://picsum.photos/150?random=2",
        },
        {
          productId: "3",
          name: "Leather Wallet",
          price: 280,
          quantity: 1,
          image: "https://picsum.photos/150?random=3",
        },
      ],
    };
    setOrderDetails(mocOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 ">Order Details</h2>

      {!orderDetails ? (
        <p>No Order Details Found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg mb:text-xl font-semibold">
                Order Id : # {orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-200 text-gray-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-200 text-gray-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>

          {/* Customer, Payment, Shipping Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p>Payment Method : {orderDetails.paymentMethod}</p>
              <p>Status : {orderDetails.isPaid ? "Paid" : "UnPaid"}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p>Shipping Method : {orderDetails.shippingMethod}</p>
              <p>
                Address : {orderDetails.shippingAddress.city} ,
                {orderDetails.shippingAddress.country}{" "}
              </p>
            </div>
          </div>

          {/* Product List */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className="border-b">
                    <td className="py-2 px-4 flex items-center justify-center ">
                      <img
                        src={item.image}
                        className="w-12 h-12 object-cover rounded mr-4"
                        alt=""
                      />

                      {/* <Link
                        className=" text-blue-500 hover:underline '
                      "
                        to={`/product/${item.productId}`}
                      >
                        {item.name}
                      </Link> */}
                    </td>

                    <td className="py-2 px-4 text-center">{item.price}</td>
                    <td className="py-2 px-4 text-center">{item.quantity}</td>
                    <td className="py-2 px-4 text-center">
                      {item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Back To Order Link */}
          <Link to="/my-orders" className="text-blue-500 hover:underline">
            Back To My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
