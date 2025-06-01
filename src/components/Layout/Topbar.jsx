import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white ">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="" className="hover:text-gray-300">
            <RiTwitterXFill className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-center flex-grow">
          <span>We Ship Worldwide Fast and Reliable shipping</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="" className="hover:text-gray-300">
            01997741967
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
