import React from "react";
import BestProject from "../BestProject/BestProject";
const ProjectsContainer = () => {
  const projects = [
    {
      img: "https://maxproperties.com.mx/wp-content/uploads/2021/09/paam.webp",
      title: "Site Survey en Terminal Paita",
    },
    {
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/05/INICIO-1.webp",
      title: "Vivienda familiar en Country de San Pablo",
    },
    {
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/05/lik_orga_inicio.png",
      title: "Site Survey en Terminal Paita",
    },
    {
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/09/vidara_inicio.png",
      title: "Vivienda familiar en Country de San Pablo",
    },
    {
      img: "https://maxproperties.com.mx/wp-content/uploads/2022/07/BECAN_INDES.webp",
      title: "Site Survey en Terminal Paita",
    },
    {
      img: "https://maxproperties.com.mx/wp-content/uploads/2023/08/qwe.png",
      title: "Vivienda familiar en Country de San Pablo",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="w-full flex flex-wrap items-center justify-center">
        <div className="w-full flex flex-wrap justify-center items-center py-8">
          <div className="w-full flex justify-center items-center ">
            <h1 className="text-green-800 text-2xl font-barlow-400 tracking-widest">
              Nuestro trabajo
            </h1>
          </div>
          <div className="w-full flex justify-center ">
            <div className="w-1/5">
              <hr className="my-2 border-[1.5px] border-green-500" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center ">
            <h1 className="w-2/3 text-5xl font-barlow-400">Proyectos</h1>
          </div>
        </div>
        <div className="flex flex-wrap md:max-w-[1200px] items-center justify-center">
          {projects.map((datos, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 py-4">
              <BestProject img={datos.img} title={datos.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="">
      <button className="text-2xl text-gray-200 px-4 py-2 font-barlow-400" style={{ backgroundColor: "#0b341b" }}>
          Ver todos los proyectos
        </button>
      </div>
    </div>
  );
};

export default ProjectsContainer;
