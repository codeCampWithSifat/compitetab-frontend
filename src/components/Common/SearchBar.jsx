import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term Value", searchTerm);
    setIsOpen(false);
    setSearchTerm("");
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full "
        >
          <div className="relative w-1/2">
            <input
              className="bg-gray-100 border border-gray-200
               px-4 py-2 focus:outline-none rounded-lg w-full placeholder:text-gray-700"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Search Icon */}
            <button
              type="submit"
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
            >
              <HiMagnifyingGlass className="h-6 w-6 " />
            </button>
          </div>
          {/* Close Search Bar Icon */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute top-1 transform right-10  text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="w-7 h-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
