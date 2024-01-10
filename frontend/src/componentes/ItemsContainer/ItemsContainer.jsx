import React from "react";
import Benefits from "../Items/Items";
import { motion } from "framer-motion";
import exp from '../../multimedia/experiencia.png';
import tech from '../../multimedia/mecanico.png';
import atencion from '../../multimedia/equipo.png'
const ItemsContainer = () => {
  const datosComponenteB = [
    {
      img:
        exp,
      text: "Contamos con una amplia experiencia en el ámbito geofísico y de ingeniería, lo que nos convierte en referentes en el sector.",
      title:"Experiencia y trayectoria internacional",
    },
    {
      img:
        tech,
      text: "Mediante la integración de tecnología no intrusiva y sustentable, obtenemos una gran cantidad de datos que nos permite transformarla en soluciones prácticas para nuestros clientes.",
      title:"Tecnología de Vanguardia",
    },
    {
      img:
        atencion,
      text: "Nuestro enfoque personalizado garantiza que recibas soluciones confiables y adaptadas a tus objetivos y requisitos.",
      title:"Atención Personalizada",
    },
  ];

  const titleVariants = {
    offscreen: {
      x: 200, // Empieza fuera de la pantalla a la derecha
      opacity: 0,
    },
    onscreen: {
      x: 0, // Llega a su posición original
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        duration: 0.5,
      },
    },
  };
  

  return (
    <div className="">
      {/* <motion.h1
        className="font-outfit-800 text-center md:text-left text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-0 md:mb-6 ml-0 md:ml-6"
        style={{ color: "#001659" }}
        variants={titleVariants}
        initial="offscreen"
        // animate="onscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        Nuestros Mercados
      </motion.h1> */}
      <div className="flex flex-wrap  md:max-w-[1300px]">
        {datosComponenteB.map((datos, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <Benefits img={datos.img} text={datos.text} title={datos.title}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsContainer;
