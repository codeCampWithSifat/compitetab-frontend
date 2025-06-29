import MyOrderPage from "./MyOrderPage";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6">
          {/* Left Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h1 className="text-2x md:text-3xl font-bold mb-4">Sayed Sifat</h1>
            <p className="text-lg text-gray-600 mb-4">sifat100@gmail.com</p>
            <button className="w-full bg-red-500 text-white py-3 px-4 rounded hover:bg-red-500">
              Log out
            </button>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
