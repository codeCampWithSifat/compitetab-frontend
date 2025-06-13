import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeatureSection from "../components/Products/FeatureSection";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=10",
        altText: "Stylish Leather",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 250,
    images: [
      {
        url: "https://picsum.photos/500/500?random=11",
        altText: "Stylish Leather",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 260,
    images: [
      {
        url: "https://picsum.photos/500/500?random=12",
        altText: "Stylish Leather",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=13",
        altText: "Stylish Leather",
      },
    ],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=14",
        altText: "Stylish Leather",
      },
    ],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=15",
        altText: "Stylish Leather",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      {/* <NewArrivals /> */}

      {/* Best Seller Section */}
      <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
        Best Seller
      </h2>
      <ProductDetails />

      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears For Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeatureSection />
    </div>
  );
};

export default Home;
