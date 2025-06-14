import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg broder shadow-sm">
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
            className="w-full bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition py-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
