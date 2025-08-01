import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import {
  deleteProduct,
  fetchAdminProducts,
} from "../../redux/slices/adminProductSlice";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.adminProducts
  );

  useEffect(() => {
    dispatch(fetchAdminProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete the product")) {
      try {
        await dispatch(deleteProduct(id));
        dispatch(fetchAdminProducts());
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Something Went Wrong.... {error}</p>;
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Sku</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {product.name}
                </td>
                <td className="p-4 ">$ {product.price}</td>
                <td className="p-4 "> {product.sku}</td>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  <Link
                    to={`/admin/products/${product._id}`}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600
                  "
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
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

export default ProductManagement;
