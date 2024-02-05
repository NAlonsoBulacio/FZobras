import React from "react";
import { AiTwotonePhone, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import logo from '../../multimedia/logo.png'
const Footer = () => {
  return (
    <div
      className="w-full flex flex-wrap justify-center items-center py-6"
      style={{ backgroundColor: "#081022" }}
    >
      <div className="w-full flex justify-center items-start px-28 py-20 space-x-14">
        <div className="w-1/3 flex flex-wrap justify-start items-center space-y-6">
          <img
            src={logo}
            alt="logo"
            className="w-1/4"
          />
          <div className="w-full ">
            <h1 className="text-gray-300 text-left ">
              Contamos con una amplia experiencia en el ámbito geofísico y de
              ingeniería, lo que nos convierte en referentes en el sector.
            </h1>
          </div>
          <div className="w-full flex justify-start items-center space-x-4">
            <BiLogoLinkedin className=" text-white text-2xl" />
            <BiLogoFacebook className=" text-white text-2xl" />
            <AiOutlineInstagram className=" text-white text-2xl" />
          </div>
        </div>
        <div className="w-1/3 flex flex-wrap justify-center items-center space-y-6">
          <div className="w-full flex justify-start items-center text-left text-3xl text-gray-300">
            <h1>Servicios</h1>
          </div>
          <div className="w-full flex flex-wrap justify-start items-center space-y-4">
            <a href="/" className="w-full text-left text-lg text-gray-500 ">
              Survey Geofísico
            </a>
            <a href="/" className="w-full text-left text-lg text-gray-500 ">
              Soluciones de Ingeniería
            </a>
            <a href="/" className="w-full text-left text-lg text-gray-500 ">
              Suministros
            </a>
          </div>
        </div>
        <div className="w-1/3 flex flex-wrap justify-center items-center space-y-6">
          <div className="w-full flex justify-start items-center text-left text-3xl text-gray-300">
            <h1>Contacto</h1>
          </div>
          <div className="w-full flex flex-wrap justify-start items-center text-left text-lg text-gray-500 space-y-4">
            <a href="/" target="_blank" className="w-full flex justify-start items-start">
              <AiTwotonePhone className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>+3814455678</h1>
            </a>
            <a href="/" target="_blank" className="w-full flex justify-start items-start">
              <IoMailOutline className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>info@fzobras.com</h1>
            </a>
            <a href="/" target="_blank" className="w-full flex justify-start items-start">
              <BsPinMapFill className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>Ituzaingó 1409, Piso 6, Oficina 602, Montevideo, Uruguay</h1>
            </a>
            <a href="/" target="_blank" className="w-full flex justify-start items-start">
              <FaWhatsapp className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>+3814455678</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
