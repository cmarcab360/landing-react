import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Nosotros",
    link: "#",
  },
  {
    id: 3,
    title: "Contacto",
    link: "#",
  },
  {
    id: 4,
    title: "Sporte",
    link: "#",
  },
];

const navbarRedes = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: "bi bi-instagram ",
  },
  {
    id: 2,
    title: "Tiktok",
    link: "https://www.Tiktok.com",
    icon: "bi bi-tiktok",
  },
];

const Navbar = () => {
  {
    /*Manejo del menu*/
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bg-purple-900/30 w-full backdrop-blur-md z-50">

      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/*Logo navbar con tamaño establecido*/}
        <div>
          <img src={Logo} alt="logo de la web" className="w-[100px]" />
        </div>

        {/*Menu para version movil*/}

        <button onClick={toggleMenu} className="text-white md:hidden">
          {/*Cambio de icono para abrir y cerrar menu*/}
          {isOpen ? (
            <i className="bi bi-x "></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </button>

        {/*Navegacion*/}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300"
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target="_black"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover scale-125"
                  href={link.link}
                >
                  <i
                    className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*Menu movil*/}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute w-full bg-purple-950 transition-all duration-300`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                className="text-white hover:text-sky-200"
                href={link.link}
                //Al hacer click en los enlaces se oculta el menu
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                target="_black"
                rel="noopener noreferrer"
                className="inline-block"
                href={link.link}
                //Al hacer click en los enlaces se oculta el menu
                onClick={() => setIsOpen(false)}
              >
                <i
                  className={`${link.icon} text-lg text-white  hover:text-sky-200`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
