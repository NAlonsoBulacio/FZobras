import React from "react";
import "./Project.css";

const Project = ({ img, title }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <div className="div-project w-[380px] h-[280px] overflow-hidden rounded-lg">
          <div className="w-full h-full relative">
            <img
              src={img}
              alt="Project"
              className="img-project w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center">
        <h1 className="text-xl font-barlow-500 text-green-800">{title}</h1>
      </div>
    </div>
  );
};

export default Project;
