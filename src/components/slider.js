import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./slideCard"

const SliderCase = () => {


  const images = [
    <SliderCard key={0} contentImg={"./assets/developer.webp"} />,
    <SliderCard key={1} contentImg={"./assets/iphone.png"}/>,
    <SliderCard key={2} contentImg={"./assets/teddyBear.webp"}/>
  ]
  const settings = {
    dots: "false",
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className='bg-red-900' >
      <Slider className='bg-black text-white flex justify-between items-center' {...settings}>
        {images.map((image) => (image))}        
      </Slider>
    </div>
  );
};

export default SliderCase;