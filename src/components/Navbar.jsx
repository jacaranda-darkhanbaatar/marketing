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

  return (
    <nav className="fixed w-full top-0">
      <div className=" container mx-auto flex justify-between ">
        <a href="index.html">
          <img src="images/logo.svg" alt="alternative" className="h-8" />
        </a>
        <div>
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
    </nav>
  );
};

export default Navbar;
