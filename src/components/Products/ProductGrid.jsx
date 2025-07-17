import { Link } from "react-router";

const ProductGrid = ({ products, loading, error }) => {
  // console.log("Product Grid", products);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something Went Wrong : {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
      {products.length &&
        products.map((product) => (
          <Link
            className="block"
            key={product._id}
            to={`/product/${product._id}`}
          >
            <div className="bg-white p-4 rounded-lg ">
              <div className="w-full h-96 ">
                <img
                  src={product.images[0].url}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-sm mb-2 mt-2">{product.name}</h3>
              <p className="text-gray-500 font-medium text-sm tracking-tighter">
                $ {product.price}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProductGrid;
