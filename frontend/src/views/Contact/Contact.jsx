import React from "react";
import Footer from "../../componentes/Footer/Footer";
import ContactForm from "../../componentes/ContactForm/ContactForm";
import Header from "../../componentes/Header/Header";
import FrameContact from "../../componentes/Frame/FrameContact";
import { AiTwotonePhone, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="w-full">
      <FrameContact />
      <Header />
      <div className="w-full flex flex-wrap justify-center items-start py-32 px-52">
          <div className="w-1/2 flex flex-wrap justify-center items-center space-y-6 mt-4">
            <div className="w-full flex justify-center items-center">
              <h1 className="text-left font-barlow-500 text-xl text-gray-700">
              ¡Gracias por tu interés en contactar con Sustentacorp! Estamos emocionados por saber cómo podemos colaborar contigo en tu próximo proyecto. Ya sea que necesites más información, desees solicitar un presupuesto o simplemente quieras conocernos mejor, estamos aquí para escucharte y responder a tus consultas.
              </h1>
            </div>
            <div className="w-full flex justify-start items-center text-left text-3xl text-blue-600">
              <h1>Información de Contacto</h1>
            </div>
            <div className="w-full flex flex-wrap justify-start items-center text-left text-lg text-gray-500 space-y-4">
              <a
                href="/"
                target="_blank"
                className="w-full flex justify-start items-start"
              >
                <AiTwotonePhone
                  className="w-8"
                  style={{ marginTop: "0.3rem" }}
                />
                <h1>+3814455678</h1>
              </a>
              <a
                href="/"
                target="_blank"
                className="w-full flex justify-start items-start"
              >
                <IoMailOutline
                  className="w-8"
                  style={{ marginTop: "0.3rem" }}
                />
                <h1>info@fzobras.com</h1>
              </a>
              <a
                href="/"
                target="_blank"
                className="w-full flex justify-start items-start"
              >
                <BsPinMapFill className="w-8" style={{ marginTop: "0.3rem" }} />
                <h1>
                  Ituzaingó 1409, Piso 6, Oficina 602, Montevideo, Uruguay
                </h1>
              </a>
              <a
                href="/"
                target="_blank"
                className="w-full flex justify-start items-start"
              >
                <FaWhatsapp className="w-8" style={{ marginTop: "0.3rem" }} />
                <h1>+3814455678</h1>
              </a>
            </div>
            <div className="w-full flex justify-start items-center space-x-4 text-gray-700 pl-2">
            <BiLogoLinkedin className="text-2xl" />
            <BiLogoFacebook className="text-2xl" />
            <AiOutlineInstagram className=" text-2xl" />
          </div>
          </div>
        <div className="w-1/2 flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
