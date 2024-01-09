import React from "react";

const Clients = () => {
  const clients = [
    "https://sustentacorp.com/wp-content/uploads/2023/08/anp-e1635078274328.jpg",
    "https://sustentacorp.com/wp-content/uploads/2023/08/ose.png",
    "https://sustentacorp.com/wp-content/uploads/2023/08/EscARMADA-e1635078233155.jpg",
    "https://sustentacorp.com/wp-content/uploads/2023/08/montes-del-plata.jpg",
    "https://sustentacorp.com/wp-content/uploads/2023/08/berkes-e1635078660661.jpg",
    "https://sustentacorp.com/wp-content/uploads/2023/09/logostiler.png",
    "https://sustentacorp.com/wp-content/uploads/2023/08/dnh.jpg",
    "https://sustentacorp.com/wp-content/uploads/2023/08/Corporacion-Navios-.jpg",
    "https://sustentacorp.com/wp-content/uploads/2023/08/jan-de-nul-02.png",
    "https://sustentacorp.com/wp-content/uploads/2023/08/CSI-Ingenieros.jpg",
    "https://sustentacorp.com/wp-content/uploads/2023/08/ciemsa.jpg",
    "https://sustentacorp.com/wp-content/uploads/2023/08/tgn.jpg",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center py-10">
      <div className="w-full flex justify-center items-center ">
        <h1 className="text-green-800 text-2xl font-barlow-400 tracking-widest">CLIENTES QUE CONFÍAN EN FZ OBRAS </h1>
      </div>
      <div className="w-full flex justify-center ">
            <div className="w-1/5">
              <hr className="my-2 border-[1.5px] border-green-500" />
            </div>
          </div>
      <div className="w-full flex justify-center items-center">
        <h1 className="w-2/3 text-5xl font-barlow-400">
          Hemos ayudado a decenas de
          <br /> empresas a lograr sus objetivos
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center py-12 px-20 space-x-8">
        {clients?.map((client, index) => (
          <div key={index} className="w-1/6">
            <img src={client} alt="img-client" className="w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
