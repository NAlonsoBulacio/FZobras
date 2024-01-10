import React from "react";
import FrameContact from "../../componentes/Frame/FrameContact";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Impulse from "../../componentes/Impulse/Impulse";
import ContactUs from "../../componentes/ContactUs/ContactUs";
import WhyUs from "../../componentes/WhyUs/WhyUs";
const AboutUs = () => {
  return (
    <div>
      <FrameContact />
      <Header />
      <div className="py-8 pb-16 space-y-10">
        <Impulse />
        <WhyUs />
        <div className="text-center max-w-[1223px] mx-auto ">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
