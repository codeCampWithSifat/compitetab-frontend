import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fectchUserOrders } from "../redux/slices/orderSlice";

const MyOrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fectchUserOrders());
  }, [dispatch]);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Something Went Wrong {error}</p>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray100 text-xs uppercase text-gray-600">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">OrderId</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:border-gray50 cursor-pointer"
                  onClick={() => handleRowClick(order._id)}
                >
                  <td className="py-2 px-2 sm:py-4">
                    <img
                      src={order.orderItems[0].image}
                      alt=""
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-4 font-medium text-gray-600">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4  text-gray-600">
                    {new Date(order.createdAt).toDateString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4  text-gray-600">
                    {order.shippingAddress.city},{order.shippingAddress.country}
                  </td>
                  <td className="py-2 px-2 sm:py-4  text-gray-600">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4  text-gray-600">
                    {order.totalPrice}
                  </td>
                  <td className="py-2 px-2 sm:py-4  text-gray-600">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      } p-2 rounded-lg text-xs`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Orders Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
