import React from "react";

const Flyer1 = () => {
  return (
    <div className="w-full relative h-52 md:h-64">
      <img
        src="https://res.cloudinary.com/doczyujqf/image/upload/v1704293836/FZ%20OBRAs/fons-heijnsbroek-vBfEZdpEr-E-unsplash_cvqckd.jpg"
        alt="agua-tulum"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-barlow-700 text-2xl md:text-4xl text-white font-bold">
        Nos especializamos en ofrecer soluciones integrales y sustentables para la gestión.
        </h1>
      </div>
    </div>
  );
};

export default Flyer1;
