import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import loginImage from "../assets/login.webp";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  // Get Redirect Parameter and check if it's checkout or something
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products.length > 0 && guestId) {
        dispatch(mergeCart({ guestId, user })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [
    user,
    cart?.products.length,
    dispatch,
    guestId,
    isCheckoutRedirect,
    navigate,
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg broder shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium ">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">
            Hey There ! 🖐
          </h2>
          <p className="text-center mb-6">Enter Your Username and Password</p>
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg outline-none focus:border-pink-600"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg outline-none focus:border-pink-600"
              placeholder="Enter Your Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition p-2"
          >
            {loading ? (
              <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-[#3B9DF8] border-[#3b9df84b]"></div>
            ) : (
              "Login"
            )}
          </button>

          <p className="mt-6 text-center text-sm">
            Don't have an account ? {""}
            <Link
              className="text-red-700 font-bold cursor-pointer"
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
            >
              Click For Register 🦾
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={loginImage}
            alt=""
            className="h-[570px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
