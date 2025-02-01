import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const AnimalProduct = ({ images }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="swiper-container">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} className="swiper-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default AnimalProduct