import { Link } from "react-router";
import mensCollection from "../../assets/mens-collection.webp";
import womensCollection from "../../assets/womens-collection.webp";

const GenderCollection = () => {
  return (
    <section className="py-13 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Womens colllection */}
        <div className=" relative flex-1">
          <img
            src={womensCollection}
            alt=""
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 lef-8 bg-white p-3 rounded-md mx-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Womens Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src={mensCollection}
            alt=""
            className="w-full h-[700px] object-cover "
          />
          <div className="absolute bottom-8 lef-8 bg-white p-3 rounded-md mx-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Mens Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
