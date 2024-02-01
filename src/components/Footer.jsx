import { FaCircle } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[6rem] pb-[3rem] bg-gradient-to-b from-transparent to-sky-200">
      <div className="max-w-[72rem] mx-auto px-4">
        <h4 className="mb-8 lg:max-w-3xl lg:mx-auto text-[1.5rem] leading-[2rem] font-bold text-center">
          Pavo is a mobile application for marketing automation and you can
          reach the team at
          <a className="text-indigo-600 hover:text-gray-500">
            {" "}
            email@domain.com
          </a>
        </h4>
        <div className="block text-center">
          <span className="inline-block w-[2em] mb-[1.25rem] mr-[0.375rem] text-[1.5rem] h-[2em] leading-[2em] align-middle">
            <a>
              <FaCircle className="text-white hover:text-black duration-200 text-[2em] text-center" />
              <FaFacebookF className="text-black hover:text-white duration-200 text-center"/>
            </a>
          </span>
          <span className="inline-block w-[2em] mb-[1.25rem] mr-[0.375rem] text-[1.5rem] h-[2em] leading-[2em] align-middle">
            <a>
              <FaCircle className="text-white hover:text-black duration-200 text-[2em] text-center" />
              <FaTwitter className="text-black hover:text-white duration-200 text-center" />
            </a>
          </span>
          <span className="inline-block w-[2em] mb-[1.25rem] mr-[0.375rem] text-[1.5rem] h-[2em] leading-[2em] align-middle">
            <a>
              <FaCircle className="text-white hover:text-black duration-200 text-[2em] text-center" />
              <FaPinterestP className="text-black hover:text-white duration-200 text-center" />
            </a>
          </span>
          <span className="inline-block w-[2em] mb-[1.25rem] mr-[0.375rem] text-[1.5rem] h-[2em] leading-[2em] align-middle">
            <a>
              <FaCircle className="text-white hover:text-black duration-200 text-[2em] text-center" />
              <FaInstagram className="text-black hover:text-white duration-200 text-center" />
            </a>
          </span>
          <span className="inline-block w-[2em] mb-[1.25rem] mr-[0.375rem] text-[1.5rem] h-[2em] leading-[2em] align-middle">
            <a>
              <FaCircle className="text-white hover:text-black duration-200 text-[2em] text-center" />
              <FaYoutube className="text-black hover:text-white duration-200 text-center" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
