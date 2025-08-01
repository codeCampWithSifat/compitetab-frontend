import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  fetchProductDetails,
  updateProduct,
} from "../../redux/slices/productsSlice";
import axios from "axios";

const EditProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    countInStock: "",
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    materail: "",
    gender: "",
    images: [],
  });
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );

  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedProduct) {
      setProductData(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const { data } = axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: data.imageUrl, altText: "" }],
      }));
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, productData }));
    navigate("/admin/products");
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error}</p>;
  }
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md roudned-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-pink-400"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            type="text"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-pink-400"
            rows={4}
            required
          />
        </div>

        {/* Price */}

        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-pink-400"
            required
          />
        </div>

        {/* Count In Stock */}

        <div className="mb-6">
          <label className="block font-semibold mb-2">Count In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-pink-400"
            required
          />
        </div>

        {/* Sku */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-pink-400"
            required
          />
        </div>

        {/* Sizes */}

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Size {"Comma Seperated"}
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-pink-400"
            required
          />
        </div>
        {/* Color */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Color</label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-pink-400"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Image Upload</label>
          <input type="file" onChange={handleImageUpload} />
          {uploading && <p>Uploading Image...</p>}
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt=""
                  className="w-20 h-20 object-cover rounded-md shdow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/*  */}

        <button
          type="submit"
          className="w-full bg-green-500 py-2 rounded-md hover:bg-gray-600 text-white transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
