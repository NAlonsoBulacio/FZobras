import React from "react";
import FrameContact from "../../componentes/Frame/FrameContact";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import proyectos from "../../utils/proyectos";

const Projects = () => {
  return (
    <div>
      <FrameContact />
      <Header />
      <div className="w-full flex flex-wrap justify-center items-center py-20 bg-gray-100">
        <div className="w-full flex flex-wrap justify-center items-center py-6 mb-4">
          <div className="w-full">
            <h1 className="w-full text-5xl font-barlow-400">
              Nuestros Proyectos
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-2/5">
              <hr className="my-2 border-[1.5px] border-green-500" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <h1 className="w-2/3 text-2xl font-barlow-300">
              Trabajamos en estrecha colaboración con nuestros clientes para
              entender sus objetivos y desafíos, y desarrollamos soluciones
              innovadoras y personalizadas para cada proyecto.
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-center items-center px-20">
          <div className="w-full space-y-12">
            {proyectos?.map((project, index) => (
              <div
                key={index}
                className="w-full h-[370px] flex justify-start items-start space-x-8 border-[1.5px] border-gray-300 bg-white overflow-hidden"
              >
                <div className="w-[40%] flex justify-center items-center relative overflow-hidden">
                  <img
                    src={project.img}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-1/2 flex flex-wrap justify-start items-start py-4 pr-4">
                  <h1 className="w-full text-left text-xl">{project.name}</h1>
                  <h1 className="w-full text-left text-gray-400">
                    {project.date}
                  </h1>
                  <div className="h-56">
                    <h1 className="w-full text-left py-4 text-lg">
                      {project.description}
                    </h1>
                  </div>
                  <a href="" className="text-green-600 text-lg">
                    Seguir leyendo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
