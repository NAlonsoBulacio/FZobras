import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
const ProjectGallery = () => {

const images = [
    {
      original: "https://res.cloudinary.com/doczyujqf/image/upload/c_scale,h_600,w_1000/v1701867160/Zuch%20Properties/Propiedades/The%20Boat/Exterior_V3.RGB_color_fvpanj.webp",
    },
    {
      original: "https://res.cloudinary.com/doczyujqf/image/upload/c_scale,h_600,w_1000/v1701694749/Zuch%20Properties/Propiedades/Bahia%20Tankah/FINAL_DEPA_2DO_PISO_LATERAL_3_vr3ng8.jpg",
    },
    {
      original: "https://res.cloudinary.com/doczyujqf/image/upload/c_scale,h_600,w_1000/v1701694715/Zuch%20Properties/Propiedades/Bahia%20Tankah/FINALES_FRONTAL_nt2sda.webp",
    }
]

  return (
    <div className=''>
      <ImageGallery items={images}
      showPlayButton={false}
      />
    </div>
  )
}

export default ProjectGallery
