import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";

// const selectedProduct = {
//   name: "Stylish Pant",
//   price: 2200,
//   originalPrice: 2500,
//   description: "This is our own brand new this new collection",
//   brand: "FashionBrand",
//   material: "Leather",
//   sizes: ["S", "M", "L", "XL"],
//   colors: ["Red", "Yellow"],
//   images: [
//     {
//       url: "https://picsum.photos/500/500?random=1",
//       altText: "Stylish Jacket",
//     },
//     {
//       url: "https://picsum.photos/500/500?random=2",
//       altText: "Stylish Leather",
//     },
//     {
//       url: "https://picsum.photos/500/500?random=3",
//       altText: "Stylish Border",
//     },
//   ],
// };

// const similarProducts = [
//   {
//     _id: 1,
//     name: "Product 1",
//     price: 200,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=4",
//         altText: "Stylish Leather",
//       },
//     ],
//   },
//   {
//     _id: 2,
//     name: "Product 2",
//     price: 250,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=5",
//         altText: "Stylish Leather",
//       },
//     ],
//   },
//   {
//     _id: 3,
//     name: "Product 3",
//     price: 260,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=6",
//         altText: "Stylish Leather",
//       },
//     ],
//   },
//   {
//     _id: 4,
//     name: "Product 4",
//     price: 200,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=7",
//         altText: "Stylish Leather",
//       },
//     ],
//   },
// ];

const ProductDetails = ({ productId }) => {
  // console.log("Product Id", productId);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );

  const { user, guestId } = useSelector((state) => state.auth);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;
  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Kindly Add Size And Color", { duration: 1000 });

      return;
    }

    setIsButtonDisabled(true);
    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId: user ? user?._id : null,
      })
    )
      .then(() => {
        toast.success("Product Added To Cart Succesfully");
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something Went Wrong : {error}</p>;
  }
  return (
    <div className="p-6 ">
      {selectedProduct && (
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {selectedProduct?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || "I love you"}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                    mainImage === image.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="md:w-1/2">
              <div className="md-4">
                <img
                  className="w-full h-auto object-cover ronded-lg"
                  src={mainImage}
                  alt="Main Product"
                />
              </div>
            </div>

            {/* Mobile Thumbnai */}
            <div className="md:hidden mt-4 flex overscroll-x-scroll space-x-4 mb-4">
              {selectedProduct?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || "I love you"}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                    mainImage === image.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* Right Section */}
            <div className="md:1/2 md:ml-10 ">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProduct?.name}
              </h1>
              <p className="text-lg text-gray 600 mb-1 line-through">
                {selectedProduct.price && `${selectedProduct?.price}`}
              </p>
              <p className="text-xl text-gray-500 mb-2">
                $ {selectedProduct.price}
              </p>
              <p className="text-gray-600 mb-5">
                {selectedProduct.description}
              </p>

              <div className="mb-4">
                <p className="text-gray-700">Color : </p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct?.colors?.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border ${
                        selectedColor === color
                          ? "border-4 border-black"
                          : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor: color.toLocaleLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700">Size :</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes?.map((size) => (
                    <button
                      onClick={() => setSelectedSize(size)}
                      key={size}
                      className={`px-4 py-2 rounded border ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "text-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">Quantity :</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    onClick={() => handleQuantityChange("minus")}
                    className="px-2 py-1 bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("plus")}
                    className="px-2 py-1 bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`uppercase bg-black text-white py-2 px6 rounded w-full ${
                  isButtonDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-gray-900"
                }`}
              >
                {isButtonDisabled ? "Adding....." : "Add To Cart"}
              </button>

              <div className="mt-10 text-gray-700">
                <h3 className="text-3xl font-bold mb-4">Features</h3>
                <table className="w-full text-left text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1">Brand</td>
                      <td className="py-1">{selectedProduct.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-1">Material</td>
                      <td className="py-1">{selectedProduct.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
              You May Also Like
            </h2>
            <ProductGrid
              products={similarProducts}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
