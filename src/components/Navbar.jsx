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
    <nav className="fixed w-full top-0 right-0 left-0 px-0">
      <div className="flex justify-between">
        <a href="index.html">
          <img
            src="images/logo.svg"
            alt="alternative"
            className="w-40 h-30 ml-40 mt-10"
          />
        </a>
        <div>
          <ul className="flex flex-row font-semibold mr-40 mt-10">
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
