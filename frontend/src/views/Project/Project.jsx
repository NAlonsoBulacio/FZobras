import React, { useState, useEffect } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FrameContact from "../../componentes/Frame/FrameContact";
import { useParams } from "react-router-dom";
import proyectos from "../../utils/proyectos";
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
          <div className="w-full flex flex-wrap justify-center items-center py-12">
            <div className="w-full px-32">
              <img src={project.img} alt="imagen proyecto" />
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
