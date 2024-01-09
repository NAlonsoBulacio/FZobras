import React from "react";
import "./Frame.css";
import img1 from "../../multimedia/slide1.jpg";
const FrameContact = () => {
  return (
    <div className="relative">
      <div className="w-full flex justify-center items-center relative h-[550px] overflow-hidden">
        <img
          src={img1}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute h-[550px] inset-0 bg-black opacity-70 flex justify-center items-center "></div>
      <div>
        <div className="absolute h-[550px] inset-0 flex flex-wrap justify-center items-center text-white text-center">
          <h1 className="text-5xl px-40">
            Contáctate con nosotros y adquiere de manera integral todos los
            datos y soluciones sustentables para la eficiencia de tu proyecto.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FrameContact;
