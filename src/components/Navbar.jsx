import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const menus = [
    {
      link: "header",
      text: "Home",
      color: "pink-600",
    },
    {
      link: "features",
      text: "Features",
      color: "slate-500",
    },
    {
      link: "details",
      text: "Details",
      color: "slate-500",
    },
    {
      link: "pricing",
      text: "Pricing",
      color: "slate-500",
    },
    {
      link: "download",
      text: "Download",
      color: "slate-500",
    },
  ];

  return (
    <nav className="fixed w-full top-0 right-0 left-0 px-0 z-10">
      <div className="flex flex-wrap justify-between items-center sm:px-4 lg:px-8 lg:flex-nowrap">
        <a href="index.html">
          <img
            src="images/logo.svg"
            alt="alternative"
            className="w-40 h-30 ml-40 mt-10"
          />
        </a>
        <button className="bg-transparent rounded text-xl leading-none lg:hidden lg:text-gray-400" type="button">
          <span className="inline-block w-8 h-8 align-middle"><HiBars3 className="h-8 w-8"/></span>
        </button>
        <div className="lg:static lg:w-auto lg:px-0 lg:bg-transparent lg:overflow-y-visible lg:visible hidden md:block sm:hidden">
          <ul className="lg:flex lg:flex-row font-semibold mr-40 mt-10">
            {menus.map((menu) => (
              <li className="mx-3 first:text-pink-500 text-slate-500 hover:first:text-slate-500 hover:text-pink-500 duration-300">
                <a href={`#${menu.link}`}>{menu.text}</a>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

