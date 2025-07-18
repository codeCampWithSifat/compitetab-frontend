import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // const newArrivals = [
  //   {
  //     _id: "1",
  //     name: "",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=1",
  //         alttext: "Stylish Jacket",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "2",
  //     name: "",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=2",
  //         alttext: "Stylish Jacket",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "3",
  //     name: "",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=3",
  //         alttext: "Stylish Jacket",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "4",
  //     name: "",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=4",
  //         alttext: "Stylish Jacket",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "5",
  //     name: "",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=5",
  //         alttext: "Stylish Jacket",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "6",
  //     name: "",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=6",
  //         alttext: "Stylish Jacket",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "7",
  //     name: "",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=7",
  //         alttext: "Stylish Jacket",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "8",
  //     name: "",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=8",
  //         alttext: "Stylish Jacket",
  //       },
  //     ],
  //   },
  // ];

  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewArrivals();
  }, []);
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  }, []);
  return (
    <section>
      <div className="container relative mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="tex-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet</p>

        {/* Scroll Button */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 rounded border bg-white text-black">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 rounded border bg-white text-black">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="container relative mx-auto overflow-x-scroll flex space-x-6"
      >
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-[100%] sm:min-w-[50%]">
            <img
              src={product.images[0]?.url}
              alt=""
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0  backgdrop-blur-md text-black p-4 rounded-b-lg">
              <Link className="block" to={`/product/${product._id}`}>
                <h4 className="font-medium">{product?.name}</h4>
                <p className="mt-4">Price : $ {product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
