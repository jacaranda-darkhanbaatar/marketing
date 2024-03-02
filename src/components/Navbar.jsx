import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const menus = [
    {
      link: "header",
      text: "Home",
    },
    {
      link: "features",
      text: "Feature",
    },
    {
      link: "details",
      text: "Details",
    },
    {
      link: "pricing",
      text: "Pricing",
    },
    {
      link: "download",
      text: "Download",
    },
  ];
  const [show, setShow] = useState(false);
  const [background, setBackground] = useState("");
  const changeColor = () => {
    if(window.scrollY>100){
      setBackground("bg-sky-100");
    }else{
      setBackground("");
    }
  }
  window.addEventListener("scroll",changeColor);
  return (
    <nav className={`fixed w-full top-0 ${background}`}>
      <div className=" container mx-auto flex justify-between ">
        <a href="index.html">
          <img src="images/logo.svg" alt="alternative" className="h-8" />
        </a>
        <div>

          <div className="hidden  md:block">
            <ul className="flex ">
              {menus.map((menu) => (
                <li className="px-3 py-2 font-bold text-gray-600 hover:text-pink-500">
                  <a href={`#${menu.link}`}>{menu.text}</a>
                </li>
              ))}
              <li>
                <a
                  href={`images/todo.png`}
                >
                  Instruction
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden">

          <button className="pl-6" onClick={() => { setShow(!show) }}><IoMdMenu size={38} /></button>
         <div >
            <ul className={show ? "fixed mt-10 right-0 top-0 h-full bg-sky-100 w-[100%] ease-in-out duration-500 " 
            : "fixed mt-10 top-0 bottom-0 right-[-100%] w-[60%] ease-in-out duration-500 " }>
              
              {menus.map((menu, index)=>(
                <li key={index} className="p-4 border-b border-sky-300 hover:bg-sky-400 hover:text-white">
                  {menu.text}
                </li>
              ))}
            </ul>
            </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
