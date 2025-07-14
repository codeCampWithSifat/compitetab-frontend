import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeatureSection from "../components/Products/FeatureSection";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import { useEffect, useState } from "react";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";
import axios from "axios";

// const placeholderProducts = [
//   {
//     _id: 1,
//     name: "Product 1",
//     price: 200,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=10",
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
//         url: "https://picsum.photos/500/500?random=11",
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
//         url: "https://picsum.photos/500/500?random=12",
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
//         url: "https://picsum.photos/500/500?random=13",
//         altText: "Stylish Leather",
//       },
//     ],
//   },
//   {
//     _id: 5,
//     name: "Product 5",
//     price: 200,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=14",
//         altText: "Stylish Leather",
//       },
//     ],
//   },
//   {
//     _id: 6,
//     name: "Product 6",
//     price: 200,
//     images: [
//       {
//         url: "https://picsum.photos/500/500?random=15",
//         altText: "Stylish Leather",
//       },
//     ],
//   },
// ];

const Home = () => {
  const dispatch = useDispatch()
  const {products, loading, error} = useSelector((state) => state.products)

  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() =>{
    dispatch(fetchProductsByFilters({
      gender : "Women",
      category : "Bottom Wear",
      limit : 8
    }))

// Fetch The Best Seller Product
const fetchBestSeller = async () => {
try {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`)
  setBestSellerProduct(response.data)
} catch (error) {
  console.error(error);

}
}
fetchBestSeller()

  },[dispatch])
  return (
    <div>
      <Hero />
      <GenderCollection />
      {/* <NewArrivals /> */}

      {/* Best Seller Section */}
      <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
        Best Seller
      </h2>
      {
        bestSellerProduct ?  <ProductDetails productId={bestSellerProduct._id} /> : <p className="text-center">Loading Best Seller Product...</p>
      }

      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears For Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
      <FeaturedCollection />
      <FeatureSection />
    </div>
  );
};

export default Home;
