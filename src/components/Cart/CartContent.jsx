import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartContent = (cart, userId, guestId) => {
  // const cartProducts = [
  //   {
  //     productId: 1,
  //     name: "T-Shirt",
  //     size: "M",
  //     color: "red",
  //     quantity: 1,
  //     image: "https://picsum.photos/200?random=1",
  //     price: 150,
  //   },
  //   {
  //     productId: 2,
  //     name: "T-Shirt",
  //     size: "M",
  //     color: "red",
  //     quantity: 1,
  //     image: "https://picsum.photos/200?random=2",
  //     price: 150,
  //   },
  //   {
  //     productId: 3,
  //     name: "T-Shirt",
  //     size: "M",
  //     color: "red",
  //     quantity: 1,
  //     image: "https://picsum.photos/200?random=3",
  //     price: 150,
  //   },
  // ];

  const dispatch = useDispatch();
  const handleAddToCart = (productId, delta, quantity, size, color) => {};

  return (
    <div>
      {cart.length &&
        cart?.products.map((product) => (
          <div
            key={product.productId}
            className="flex items-start justify-between py-4 border-b border-b-gray-400"
          >
            <div className="flex items-start">
              <img
                src={product.image}
                alt=""
                className="w-20 h-24 object-cover mr-4 rounded"
              />

              <div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500 ">
                  Size: {product.size} | {product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button className="border rounded px-2 py-1 text-xl font-medium">
                    -
                  </button>
                  <span className="mx-4">{product.quantity}</span>
                  <button className="border rounded px-2 py-1 text-xl   font-medium">
                    +
                  </button>
                </div>
              </div>
              <p>${product.price.toString()}</p>
              <button>
                <RiDeleteBin3Line className="h-6 w-6 mt.5 ml-4 text-red-600" />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartContent;
