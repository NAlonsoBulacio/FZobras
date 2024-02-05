import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const serviceId = "service_d3be1jm";
  const templateId = "template_s5qu5dh";
  const apiKey = "2MjSYyOi2hn-e8l4w";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceId, templateId, formData, apiKey).then(
      (response) => {
        console.log("Correo electrónico enviado con éxito", response);
        // Puedes mostrar un mensaje de éxito o redirigir al usuario a una página de confirmación.
      },
      (error) => {
        console.error("Error al enviar el correo electrónico", error);
        // Puedes mostrar un mensaje de error al usuario.
      }
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="justify-center items-center"
      >
        <div className="ml-4">
          <h1
            className="font-outfit-800 text-center md:text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            style={{ color: "#081022" }}
          >
            CONTACTANOS
          </h1>
        </div>
        <div className="w-full max-w-6xl px-4 py-4 font-roboto-300">
          <div className="">
            <div className="w-full mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-left font-bold text-blue-600"
              >
                ¿Cuál es tu nombre y apellido?
              </label>
              <input
                className="w-full bg-gray-200 rounded-md"
                style={{ padding: "16px" }}
                placeholder="Ingresá tu nombre y apellido"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-left font-bold text-blue-600"
              >
                Correo Electrónico:
              </label>
              <input
                className="w-full bg-gray-200 rounded-md"
                style={{ padding: "16px" }}
                placeholder="Ingresá tu Correo Electrónico"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block mb-2 text-left font-bold text-blue-600"
            >
              Asunto
            </label>
            <input
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingresá el asunto del mensaje"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block mb-2 text-left font-bold text-blue-600"
            >
              Mensaje
            </label>
            <textarea
              className="w-full bg-gray-200 rounded-md"
              style={{ padding: "16px" }}
              placeholder="Ingresá tu mensaje"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end relative">
            <button
              className="text-white py-2 px-4 font-barlow-500 text-lg w-full md:w-1/5 rounded-md transform transition-transform hover:scale-105"
              type="submit"
              style={{ backgroundColor: "#081022", padding: "12px" }}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
