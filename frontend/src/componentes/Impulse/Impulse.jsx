import React from 'react'

const Impulse = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center">
    <div className="w-full flex flex-wrap justify-center items-center py-6 mb-4">
      <div className="w-full">
        <h1 className="w-full text-6xl font-barlow-500">F Z Obras</h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-2/5">
          <hr className="my-2 border-[1.5px] border-green-500" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <h1 className="w-2/3 text-3xl font-barlow-300">
          Impulsando el Éxito de tu Proyecto con Soluciones Sustentables
        </h1>
      </div>
    </div>
    <div className="flex justify-center items-start px-14 space-x-4 my-10">
      <div className="w-1/2 flex flex-wrap justify-center text-left text-xl font-barlow-400 text-gray-800 px-12 py-6 space-y-8">
        <div className="w-full">
          <p className="">
            Somos un estudio de arquitectura joven que tiene como premisa
            combinar innovación y excelencia trabajando siempre en equipo.
          </p>
        </div>
        <div className="w-full">
          <p>
            Caracterizándonos por la atención personalizada y la supervisión
            constante en el desarrollo y ejecución de las obras para generar
            la confianza que nuestros clientes necesitan, aportando el valor
            agregado que nos diferencia día a día.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-80 overflow-hidden rounded-lg">
        <img
          src="https://res.cloudinary.com/doczyujqf/image/upload/v1704298991/FZ%20OBRAs/jacek-dylag-nhCPOp4A2Xo-unsplash_yahkvb.jpg"
          alt=""
          className="w-full object-cover object-center "
        />
      </div>
    </div>
  </div>
  )
}

export default Impulse
