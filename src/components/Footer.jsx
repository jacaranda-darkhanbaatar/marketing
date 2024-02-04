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
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-5 gap-5">
            <a
              href="#"
              className="bg-white rounded-full p-2 hover:bg-black text-black hover:text-white duration-200"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-2 hover:bg-black text-black hover:text-white duration-200"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-2 hover:bg-black text-black hover:text-white duration-200"
            >
              <FaPinterestP size={25} />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-2 hover:bg-black text-black hover:text-white duration-200"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-2 hover:bg-black text-black hover:text-white duration-200"
            >
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
