import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="pt-[6rem] pb-[3rem] bg-gradient-to-b from-transparent to-sky-200">
            <div className="lg:max-w-[72rem] mx-auto px-4">
                <h4 className="mb-8 text-[2rem] leading-[2rem] font-bold text-center">Pavo is a mobile application for marketing automation and you can reach the team at <a href="#" className="text-indigo-600 hover:text-gray-500">email@domain.com</a></h4>
                <div className="flex justify-center items-center">
                    <div className="lg:grid lg:grid-cols-5 gap-5 pb-20">
                        <a className="bg-white text-2xl rounded-full hover:bg-black hover:text-white duration-300"><FaFacebookF className="m-3" /></a>
                        <a className="bg-white text-2xl rounded-full hover:bg-black hover:text-white duration-300"><FaTwitter className="m-3" /></a>
                        <a className="bg-white text-2xl rounded-full hover:bg-black hover:text-white duration-300"><FaPinterestP className="m-3" /></a>
                        <a className="bg-white text-2xl rounded-full hover:bg-black hover:text-white duration-300"><FaInstagram className="m-3" /></a>
                        <a className="bg-white text-2xl rounded-full hover:bg-black hover:text-white duration-300"><FaYoutube className="m-3" /></a>
                    </div>
                </div>
                <div>
                    <div className="mb-2 flex flex-wrap lg:flex-nowrop text-sm text-gray-500">
                        <p className=" pl-4">Article Details</p>
                        <p className=" pl-4">Terms & Conditions</p>
                        <p className=" pl-4"> Privacy Policy</p>
                        <p className="pl-[10.5rem]">Copyright © Your name</p>
                        <p className="md:pl-[12.5rem] pl-[42] pt-[2rem] ">Distributed by :Themewagon</p>
                    </div>
                </div>
            </div>
        </div>);
}

export default Footer;