import React, { useEffect, useRef } from "react";
import "./Tech.css";

const Tech: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* <div className="body">
         <div className="reverse-content">
          <div className="content-box flex fade-in-section p-40">
            <div className="img p-5 image-border">
              <div className="image-container">
                <img src="/service_images/tech.jpg" alt="Technology" />
                <div className="small-rectangle"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>  */}
      <div className="body">
      <div className="container-fluid bg-white py-15 p-16">
        <div className="container py-29">
          <div className="about grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="about-img rounded-lg h-full transform transition duration-500 hover:scale-105">
            <div className="img p-5 image-border">
              <div className="image-container">
                <img src="/service_images/tech.jpg" alt="Technology" />
                <div className="small-rectangle"></div>
              </div>
            </div>
             
            </div>
            <div className="about-item p-10">
              
              <h1 className="text-5xl font-bold mb-6">  <table> Driving Efficiency and Innovation</table></h1>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                quidem quas totam nostrum! Maxime rerum voluptatem sed, facility
                unde a aperiam nulla voluptatibus excepturi ipsam iusto
                consequuntur.
              </p>
              <div className="bg-gray-100 rounded-lg p-2 mb-6">
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center rounded-full">
                    <i className="fas fa-tint text-3xl"></i>
                  </div>
                  <div className="ml-1">
                    <a href="#" className="text-xl font-semibold text-blue-600">
                      Satisfied Customer
                    </a>
                    <p className="mt-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quas provident maiores quisquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center rounded-full">
                    <i className="fas fa-faucet text-3xl"></i>
                  </div>
                  <div className="ml-6">
                    <a href="#" className="text-xl font-semibold text-blue-600">
                      Standard Product
                    </a>
                    <p className="mt-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quas provident maiores quisquam.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="bg-blue-600 text-white rounded-full py-3 px-8 inline-block">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Tech;
