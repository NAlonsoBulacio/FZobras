import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/" target="_blank">
      <button
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 rounded-full h-32 w-32 flex justify-center items-center text-white z-10"
        style={{ height: "58px", width: "58px" }}
      >
        <FaWhatsapp size={35} />
      </button>
    </a>
  );
};

export default WhatsAppButton;
