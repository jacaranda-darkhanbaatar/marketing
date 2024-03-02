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
  const [background, setBakground] = useState("");
  
  const changeColor = () =>{
    if(window.scrollY>100){
      setBakground("bg-sky-50");
    }else{
      setBakground("");
    }
  }
  window.addEventListener("scroll", changeColor);

  return (
    <nav className={`fixed w-full top-0 ${background} duration-300`}>
      <div className="container mx-auto flex justify-between max-w-6xl sm:px-4 lg:px-8 lg:flex-nowrap">
        <a href="index.html">
          <img src="images/logo.svg" alt="alternative" className="size-24 ml-4 mt-1" />
        </a>
        <div >
          <div>
            <ul className="flex hidden md:block ">
              {menus.map((menu) => (
                <li className="inline-block space-x-4 px-5 mt-10 hover:text-rose-400">
                  <a href={`#${menu.link}`}>{menu.text}</a>
                </li>
              ))}
              <li className="inline-block space-x-4 px-5 hover:text-rose-400">
                <a
                  href={`images/todo.png`}
                >
                  Instruction
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="p-1" onClick={() => setShow(!show)}><IoMdMenu size={38} /></button>
            <div>
              <ul className={show
                ? "fixed mt-10 right-0 top-0 h-full w-[60%] bg-sky-100 ease-in-out duration-500"
                : "fixed mt-10 top-0 bottom-0 right-[-100%] w-[60%] ease-in-out duration-500"
              }>
                {menus.map((menu, index)=> (
                  <li key={index} className="p-4 border-b border-sky-300 hover:bg-sky-300 hover:bg-sky-400 hover:text-white duration-300">
                    {menu.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
