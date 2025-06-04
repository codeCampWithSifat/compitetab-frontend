const selectedProduct = {
  name: "Stylish Pant",
  price: 2200,
  originalPrice: 2500,
  description: "This is our own brand new this new collection",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Leather",
    },
    {
      url: "https://picsum.photos/500/500?random=3",
      altText: "Stylish Border",
    },
  ],
};

const ProductDetails = () => {
  return (
    <div className="p-6 ">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || "I love you"}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="md-4">
              <img
                className="w-full h-auto object-cover ronded-lg"
                src={selectedProduct.images[0]?.url}
                alt="Main Product"
              />
            </div>
          </div>

          {/* Mobile Thumbnai */}
          <div className="md:hidden mt-4 flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || "I love you"}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>

          {/* Right Section */}
          <div className="md:1/2 md:ml-10 ">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray 600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              $ {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-5">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Color : </p>
              <div className="flex gap-2 mt-2">
                {selectedProduct?.colors?.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border"
                    style={{ backgroundColor: color.toString() }}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
