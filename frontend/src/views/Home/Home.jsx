import React from "react";
import Header from "../../componentes/Header/Header";
import MyCarousel from "../../componentes/Carousel/Carousel";
import ItemsContainer from "../../componentes/ItemsContainer/ItemsContainer";
import ContactUs from "../../componentes/ContactUs/ContactUs";
import FollowUs from "../../componentes/SocialMedia/FollowUs";
import WhatWeDoContainer from "../../componentes/WhatWeDoContainer/WhatWeDoContainer";
import CarrouselProject from "../../componentes/CarrouselProject/CarrouselProject";
import Counter from "../../componentes/Counter/Counter";
import Clients from "../../componentes/Clients/Clients";
import Footer from "../../componentes/Footer/Footer";
import ProjectsContainer from "../../componentes/ProjectsContainer/ProjectsContainer";
import Flyer1 from "../../componentes/Flyer1/Flyer1";
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <CarrouselProject />
      <div className="w-full">
        <Counter />
      </div>
      <div className="w-full">
        <WhatWeDoContainer />
      </div>
      <Flyer1 />
      <ProjectsContainer />
      <div className="text-center py-4 max-w-[1223px] mx-auto ">
        <ItemsContainer />
      </div>
      <div className="w-full">
        <Clients />
      </div>
      <div className="w-full">
        <FollowUs />
      </div>
      <div className="text-center py-4 max-w-[1223px] mx-auto ">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
