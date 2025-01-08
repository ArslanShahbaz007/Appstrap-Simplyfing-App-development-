import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from "../assets/1.bmp";
import image2 from "../assets/2.bmp";
import image3 from "../assets/3.bmp";
import image4 from "../assets/4.bmp";
import image5 from "../assets/5.bmp";
import image6 from "../assets/6.bmp";
import image7 from "../assets/7.bmp";
import image8 from "../assets/8.bmp";
import image9 from "../assets/9.bmp";
import image10 from "../assets/10.bmp";
import "./Templates.css";

function Templates() {
  const [activeIndexLeft, setActiveIndexLeft] = useState(0);
  const [activeIndexRight, setActiveIndexRight] = useState(0);

  // Images for each carousel
  const ecomImages = [image1, image2, image3, image4, image5, image6, image7];
  const handymanImages = [image8, image9, image10];

  const handlePrev = (setIndex, index, images) => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNext = (setIndex, index, images) => {
    setIndex((index + 1) % images.length);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 ">
        <Navbar />
        <div className="carousel-container container mx-auto min-h-screen mt-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* E-commerce Template Carousel */}
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4">E-commerce Template</h2>
              <div className="relative overflow-hidden w-full h-96 border rounded-lg bg-gray-200">
                <img
                  src={ecomImages[activeIndexLeft]}
                  alt={`Slide ${activeIndexLeft + 1}`}
                  className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
                />
                {/* Controls */}
                <button
                  onClick={() =>
                    handlePrev(setActiveIndexLeft, activeIndexLeft, ecomImages)
                  }
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-700"
                >
                  &#8249;
                </button>
                <button
                  onClick={() =>
                    handleNext(setActiveIndexLeft, activeIndexLeft, ecomImages)
                  }
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-700"
                >
                  &#8250;
                </button>
              </div>
              {/* Buttons */}
              <div className="mt-4 flex justify-center space-x-4">
                <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                  Code
                </button>
                <button className="btn btn-secondary bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
                  Configure
                </button>
              </div>
            </div>

            {/* Handyman Services Carousel */}
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4">Handyman Services</h2>
              <div className="relative overflow-hidden w-full h-96 border rounded-lg bg-gray-200">
                <img
                  src={handymanImages[activeIndexRight]}
                  alt={`Slide ${activeIndexRight + 1}`}
                  className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
                />
                {/* Controls */}
                <button
                  onClick={() =>
                    handlePrev(
                      setActiveIndexRight,
                      activeIndexRight,
                      handymanImages
                    )
                  }
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-700"
                >
                  &#8249;
                </button>
                <button
                  onClick={() =>
                    handleNext(
                      setActiveIndexRight,
                      activeIndexRight,
                      handymanImages
                    )
                  }
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-700"
                >
                  &#8250;
                </button>
              </div>
              {/* Buttons */}
              <div className="mt-4 flex justify-center space-x-4">
                <button className="btn btn-primary bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
                  Code
                </button>
                <button className="btn btn-secondary bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Templates;
