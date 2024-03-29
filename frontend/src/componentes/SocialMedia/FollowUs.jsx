import React from "react";

import { SocialIcon } from "react-social-icons";
const FollowUs = () => {
  return (
    <div
      className="w-full flex justify-center"
      style={{ backgroundColor: "#f9f9f9", height: "120px" }}
    >
      <div className="block md:flex items-center justify-center h-full">
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <h1 className="font-barlow-700  text-2xl md:text-4xl mr-0 md:mr-8 mb-3 md:mb-0">
            Seguinos por nuestras Redes
          </h1>
        </div>
        <div className="w-full md:w-auto">
          <SocialIcon
            url="https://facebook.com"
            href="https://iconos8.es/icons/set/instagram"
            style={{ height: 45, width: 45 }}
            target="_blank"
          />
          <SocialIcon
            url="https://linkedin.com"
            href="https://iconos8.es/icons/set/instagram"
            className="mx-4"
            style={{ height: 45, width: 45 }}
            target="_blank"
          />
          <SocialIcon
            url="https://instagram.com"
            href="https://iconos8.es/icons/set/instagram"
            style={{ height: 45, width: 45 }}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
