import { HiShoppingBag } from "react-icons/hi";

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8
      text-center"
      >
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">Free Internation Shipping</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            ON All Orders over $100.00
          </p>
        </div>
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">Free Internation Shipping</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            ON All Orders over $100.00
          </p>
        </div>
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">Free Internation Shipping</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            ON All Orders over $100.00
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
