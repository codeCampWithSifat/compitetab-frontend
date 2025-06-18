import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sideberRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    // close the sidebar
    if (sideberRef.current && !sideberRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // add eventlistener
    document.addEventListener("mousedown", handleClickOutside);

    // clean event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
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
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Filter Side bar */}
      <div
        ref={sideberRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All collection</h2>
        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
