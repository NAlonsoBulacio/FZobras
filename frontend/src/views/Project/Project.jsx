import React, { useState, useEffect } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FrameContact from "../../componentes/Frame/FrameContact";
import { useParams } from "react-router-dom";
import proyectos from "../../utils/proyectos";
import ContactUs from "../../componentes/ContactUs/ContactUs";
import { FaCheckCircle } from "react-icons/fa";
import ProjectGallery from "../../componentes/ProjectGallery/ProjectGallery";
const Project = () => {
  const [project, setProject] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    let objetoEncontrado = null;

    for (let i = 0; i < proyectos.length; i++) {
      if (proyectos[i].path === path) {
        objetoEncontrado = proyectos[i];
        break;
      }
    }
    if (objetoEncontrado) {
      setProject(objetoEncontrado);
    } else {
      console.log("Objeto no encontrado");
    }
  }, [path, proyectos]);
  return (
    <>
      {project ? (
        <div>
          <Header />
          <FrameContact />
          <div className="py-12">
            <div className="flex justify-center items-center">
              <div className="w-[1000px] flex justify-start space-x-2 text-green-700">
                <a href="/" className="hover:underline">
                  Inicio
                </a>
                <p>→</p>
                <a href="/portafolio" className="hover:underline">
                  Portafolio
                </a>
                <p>→</p>
                <a href="" className="underline">
                  {project.name}
                </a>
              </div>
            </div>
            <div className="space-y-12">
              <div className="w-full flex flex-wrap justify-center items-center py-12">
                <div className="w-[1000px] flex flex-wrap justify-start items-center space-y-6">
                  <div className="w-full">
                    <h1 className="text-left text-5xl font-barlow-500 text-green-700">
                      {project.name}
                    </h1>
                  </div>
                  <div className="space-y-4">
                    <div
                      className={`flex justify-start items-start space-x-4 text-left`}
                    >
                      <div className="w-[15px] md:w-[20px] h-[20px] md:h-[35px] flex items-center pt-[3px]">
                        <FaCheckCircle className="w-[20px] h-[20px] text-green-700" />
                      </div>
                      <div className="flex justify-start items-start">
                        <p className="text-xl md:text-xl">
                          <strong>Descripcion:</strong> {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-start space-x-4 text-left">
                      <div className="w-[15px] md:w-[20px] h-[20px] md:h-[35px] flex items-center">
                        <FaCheckCircle className="w-[20px] h-[20px] text-green-700" />
                      </div>
                      <div className="flex justify-start items-start">
                        <p className="text-xl md:text-xl">
                          <strong>Date:</strong> {project.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-start space-x-4 text-left">
                      <div className="w-[15px] md:w-[20px] h-[20px] md:h-[35px] flex items-center">
                        <FaCheckCircle className="w-[20px] h-[20px] text-green-700" />
                      </div>
                      <div className="flex justify-start items-start">
                        <p className="text-xl md:text-xl">
                          <strong>Cliente:</strong> El cliente X
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-12">
                <ProjectGallery />
              </div>
              <div className="text-center max-w-[1223px] mx-auto ">
                <ContactUs />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div>Lol</div>
      )}
    </>
  );
};

export default Project;
