import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const OrganizationsSlider = () => {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/WHO_Logo.svg/1200px-WHO_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/UN_Volunteers_logo.svg/1200px-UN_Volunteers_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/4/47/UNECE_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/46/UNICEF_Logo_2023.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Red_Cross_logo.svg/1200px-Red_Cross_logo.svg.png'
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    nextArrow: <FaChevronRight size={30} className="text-green-600" />,
    prevArrow: <FaChevronLeft size={30} className="text-green-600" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="bg-green-100 py-16 px-8">
      <h2 className="text-4xl font-semibold text-center text-green-700 mb-8">Organizations That Support Us</h2>
      <Slider {...settings} className="mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo} alt={`Organization ${index + 1}`} className="h-24 mx-4 object-contain" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OrganizationsSlider;
