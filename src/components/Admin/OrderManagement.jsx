import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  fetchAllOrders,
  updateOrderStatus,
} from "../../redux/slices/adminOrderSlice";

const OrderManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { orders, loading, error } = useSelector((state) => state.adminOrders);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    } else {
      dispatch(fetchAllOrders());
    }
  }, [navigate, user, dispatch]);

  const handleStatusChanged = (orderId, status) => {
    dispatch(updateOrderStatus({ id: orderId, status }));
    // You can add logic to update the order status here
  };

  if (loading) {
    return <p>Loading....</p>;
  } else if (error) {
    return <p>Something Went Wrong... {error}</p>;
  }
  return (
    <div className="max-w-7xl mx-autdo p-6">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Order Id</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                  # {order._id}
                </td>
                <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                  {order?.user?.name}
                </td>
                <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                  ${order.totalPrice}
                </td>
                <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                  <select
                    onChange={(e) =>
                      handleStatusChanged(order._id, e.target.value)
                    }
                    value={order.status}
                    className="border rounded px-2 py-1 bg-gray-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block"
                  >
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                  {/* Add action buttons here if needed */}
                  <button
                    onClick={() => handleStatusChanged(order._id, "Delivered")}
                    className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm hover:bg-green-800"
                  >
                    Mark As Delivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
