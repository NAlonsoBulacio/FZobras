import React from "react";
import Items from "../Items/Items";
import exp from "../../multimedia/experiencia.png";
import tech from "../../multimedia/mecanico.png";
import atencion from "../../multimedia/equipo.png";
import confianza from '../../multimedia/confianza.png';
import planta from '../../multimedia/planta.png'
const WhyUs = () => {
  const datosComponenteB = [
    {
      img: exp,
      text: "Contamos con una amplia experiencia en el ámbito geofísico y de ingeniería, lo que nos convierte en referentes en el sector.",
      title: "Experiencia y trayectoria internacional",
    },
    {
      img: tech,
      text: "Mediante la integración de tecnología no intrusiva y sustentable, obtenemos una gran cantidad de datos que nos permite transformarla en soluciones prácticas para nuestros clientes.",
      title: "Tecnología de Vanguardia",
    },
    {
      img: atencion,
      text: "Nuestro enfoque personalizado garantiza que recibas soluciones confiables y adaptadas a tus objetivos y requisitos.",
      title: "Atención Personalizada",
    },
    {
      img: planta,
      text: "Nos esforzamos por ofrecer soluciones geofísicas que minimicen el impacto ambiental y promuevan la sustentabilidad y resiliencia en la industria de la construcción.",
      title: "Enfoque Sustentable",
    },
    {
      img: confianza,
      text: "En FZ Obras, entendemos que la confianza y confidencialidad es esencial en cualquier relación comercial. Aquí están las razones para elegirnos como tu socio confiable:",
      title: "Confianza y Credibilidad Garantizadas",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <div className="w-full flex flex-wrap justify-center items-center py-6 mb-4">
        <div className="w-full">
          <h1 className="text-green-800 text-3xl font-barlow-400 tracking-widest">
            F Z Obras
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-2/5">
            <hr className="my-2 border-[1.5px] border-green-500" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <h1 className="w-4/4 text-5xl font-barlow-400">
            ¿Por qué Elegirnos?
          </h1>
        </div>
      </div>
      <div className="w-full py-12 flex justify-center items-center">
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
        <div className="flex flex-wrap justify-center md:max-w-[1300px]">
          {datosComponenteB.map((datos, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <Items img={datos.img} text={datos.text} title={datos.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
