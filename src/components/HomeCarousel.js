import React from 'react';
import Slider from 'react-slick';
import '../styles/HomeCarousel.css';

const carouselItems = [
  {
    image: '/images/banner1.png',
    title: 'HANDBAGS',
  },
  {
    image: '/images/banner2.png',
    title: 'US Polo',
  },
  {
    image: '/images/banner3.png',
    title: 'GYM Wear',
  },
];

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="carousel-caption">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
