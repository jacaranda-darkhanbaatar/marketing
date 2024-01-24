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
      <div className="container mx-auto flex justify-between">
        <a href="index.html">
          <img src="images/logo.svg" alt="alternative" className="size-24 ml-4 mt-1" />
        </a>
        <div>
          <ul>
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
      </div>
    </nav>
  );
};

export default Navbar;
