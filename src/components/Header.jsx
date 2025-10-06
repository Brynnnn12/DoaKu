import { useState, useCallback } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const logo = "https://via.placeholder.com/150";
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Doa", path: "/doa" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="p-4">
      <div className="container mx-auto bg-blue-500 p-4 lg:px-6 lg:mx-10 my-4 rounded-md relative ">
        <nav className="flex items-center justify-between ">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {/* Hamburger icon */}
            <FaBars />
          </button>
          <ul
            className={`md:flex space-x-4 ${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex-row absolute md:relative top-full left-0 md:top-auto md:left-auto bg-blue-500 md:bg-transparent w-full md:w-auto p-4 md:p-0  z-10`}
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:underline block py-2 md:py-0"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
