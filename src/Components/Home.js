import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="content-container min-h-screen bg-gray-100">
        <div>
          <Navbar />
        </div>
        <div className="contain flex items-center justify-center flex-col text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            🚧 Under Construction 🚧
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            We're currently working hard to make this page awesome. Stay tuned for exciting updates! 
            Thank you for your patience.
          </p>
          <div className="mt-10">
            <img
              src="https://via.placeholder.com/600x400?text=Coming+Soon+Illustration"
              alt="Under Construction"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="mt-10">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Notify Me When Ready
            </a>
          </div>
        </div>
      </div>
      <div style={{  }}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
