import React from "react";
const ContactUs = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center py-12 space-y-4">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-green-800 text-3xl font-barlow-400 tracking-widest">Contáctanos Ahora</h1>
      </div>
      <div className="w-full flex justify-center ">
            <div className="w-1/5">
              <hr className="border-[1.5px] border-green-500" />
            </div>
          </div>
      <div className="w-full flex justify-center items-center">
        <h1 className="w-4/4 text-5xl font-barlow-400">
          Descubre cómo podemos ayudarte a optimizar tus proyectos y mitigar los riesgos.
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <a href="/contacto">
        <button className="text-2xl text-gray-200 px-4 py-2 font-barlow-400 rounded-sm" style={{ backgroundColor: "#0b341b" }}>
          Contacto
        </button>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
