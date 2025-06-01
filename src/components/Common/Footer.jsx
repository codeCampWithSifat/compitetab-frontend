import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 ">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products
          </p>
          <p>Sign UP And Get 10 % off your first order</p>

          {/* Newsletter */}
          <form className="flex mt-4">
            <input
              className="p-3 w-full text-sm border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <button
              type="submit"
              className="bg-black text-sm text-white px-2 rounded-lg ml-2 py-1.5"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* shop  links */}
        <div>
          <h3 className="textlg text-gray-800 mb-4 ">Shop</h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link className="hover:text-gray-600 transition-colors" to="#">
                Mens Top Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-600 transition-colors" to="#">
                Women Top Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-600 transition-colors" to="#">
                Mens Bottom Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-600 transition-colors" to="#">
                Womens Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}

        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Support</h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link className="hover:text-gray-600 transition-colors" to="#">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-600 transition-colors" to="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-600 transition-colors" to="#">
                FAQS
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-600 transition-colors" to="#">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Folow Us On</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-gray-800"
            >
              <TbBrandMeta className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-gray-800"
            >
              <IoLogoInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-gray-800"
            >
              <RiTwitterXLine className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Copy Right Text */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t broder-gray-200 pt-6">
        <p className="text-center text-sm tracking-tighter text-gray-500">
          {" "}
          All Right Revered sayedhossainsifat100@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
