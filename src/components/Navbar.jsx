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
    <nav className="navbar fixed top-0 w-full">
      <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
        <a
          class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
          href="index.html"
        >
          <img src="images/logo.svg" alt="alternative" class="h-8" />
        </a>
        <div className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center">
          <ul className="pl-0 mt-3 mb-2 ml-auto flex list-none  flex-row">
            {menus.map((menu) => (
              <li>
                <a
                  href={`#${menu.link}`}
                  className="nav-link page-scroll active px-3 py-2 text-"
                >
                  {menu.text}
                </a>
              </li>
            ))}
            <li>
                <a
                  href={`images/todo.png`}
                  className="nav-link page-scroll active px-3 py-2 text-"
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
