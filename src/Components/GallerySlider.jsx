import React, { useState, useEffect } from "react";

export default function GallerySlider() {
  const images = [
    { src: "/images/img1.jpg", title: "Food Distribution" },
    { src: "/images/img2.jpg", title: "Medical Camp" },
    { src: "/images/img3.jpg", title: "Education Support" },
    { src: "/images/img4.jpg", title: "Clothing Drive" },
    { src: "/images/img5.jpg", title: "Orphan Care" },
    { src: "/images/img6.jpg", title: "Clean Water Project" },
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide Every 3 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Discover Our Activities
      </h2>
      <p className="text-center text-gray-600 mb-10">
        A glimpse of our charity work & community support.
      </p>

      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">
        
        {/* SLIDER */}
        <div
          className="flex transition-all duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((item, i) => (
            <div key={i} className="min-w-full relative group">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-80 object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 
                flex items-center justify-center text-white text-2xl font-semibold transition-all">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 
          bg-white p-3 rounded-full shadow hover:bg-gray-100"
        >
          ❮
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 
          bg-white p-3 rounded-full shadow hover:bg-gray-100"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
