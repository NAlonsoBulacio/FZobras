import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../multimedia/logo.png";
import menu from "../../multimedia/menu.svg";
import "./Header.css";
import MenuPhone from "../MenuPhone/MenuPhone";
import { useLocation } from "react-router-dom";
const Header = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    console.log("Realizar búsqueda con la consulta:");
  };
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    setCurrentPage(currentPath);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <header
        className={
          navbar
            ? "header-l header-bg text-white p-4"
            : "header transparent text-white p-4"
        }
        style={{ height: navbar ? "98px" : "106px" }}
      >
        <div
          className="mx-auto flex items-center justify-between lg:hidden"
          style={{ maxWidth: "1150px", height: "70px" }}
        >
          <div className="logo flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "87px", weight: "87px" }}
            />
            <nav className="font-poppins-200 space-x-4"></nav>
          </div>
          <button className="hamburguer" onClick={handleMenuToggle}>
            <img src={menu} alt="MI-MENU" width={40} height={40} />
          </button>
        </div>
        <div
          className="mx-auto flex items-center justify-between hidden lg:flex"
          style={{ maxWidth: "1150px", height: navbar ? "65px" : "70px" }}
        >
          <div className="logo flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo"
              style={{ height: navbar ? "74px" : "87px", weight: navbar ? "74px" : "87px" }}
            />
            <nav className="font-poppins-200 space-x-4"></nav>
          </div>

          <div className="flex-grow"></div>

          <nav className="font-poppins-400 space-x-10">
            <a
              href="/"
              onClick={() => handleNavClick("/")}
              className={currentPage === "/" ? "active" : "a-h"}
            >
              Inicio
            </a>
            <a
              href="/sobre-nosotros"
              onClick={() => handleNavClick("/sobre-nosotros")}
              className={currentPage === "/sobre-nosotros" ? "active" : "a-h"}
            >
              Nosotros
            </a>
            <a
              href="/servicios"
              onClick={() => handleNavClick("/servicios")}
              className={currentPage === "/servicios" ? "active" : "a-h"}
            >
              Servicios
            </a>
            <a
              href="/portafolio"
              onClick={() => handleNavClick("/portafolio")}
              className={currentPage === "/portafolio" ? "active" : "a-h"}
            >
              Portafolio
            </a>
            <a
              href="/novedades"
              onClick={() => handleNavClick("/novedades")}
              className={currentPage === "/novedades" ? "active" : "a-h"}
            >
              Novedades
            </a>
            <a
              href="/contacto"
              onClick={() => handleNavClick("/contacto")}
              className={currentPage === "/contacto" ? "active" : "a-h"}
            >
              Contacto
            </a>
          </nav>
          <div className="flex items-center ml-6">
            <button
              onClick={handleSearch}
              className=" text-white px-4 py-1 rounded-r"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </header>
      <div>{menuOpen ? <MenuPhone /> : ""}</div>
    </div>
  );
};

export default Header;
