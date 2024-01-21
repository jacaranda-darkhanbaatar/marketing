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
    <nav>
      <div>
        <a href="index.html">
          <img src="images/logo.svg" alt="alternative" />
        </a>
        <div>
          <ul>
            {menus.map((menu) => (
              <li>
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
