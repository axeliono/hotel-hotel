import React from 'react';
import Slider from "react-slick";
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2200
      };
    return (
        <Slider {...settings} className="sliderDivs">
        <div>
          <img src="https://i.imgur.com/us6gMou.jpg"/>
        </div>
        <div>
          <img src="https://i.imgur.com/qVqdkRm.jpg"/>
        </div>
        <div>
          <img src="https://i.imgur.com/4L5JS9Z.jpg"/>
        </div>
        <div>
          <img src="https://i.imgur.com/AhxPlW9.jpg"/>
        </div>
      </Slider>
    )
}

export default Carousel;

