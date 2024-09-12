import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faRobot } from "@fortawesome/free-solid-svg-icons";
import "./Tech.css";
import TechHeader from "./TechHeader";
import TechLogos from "./Techlogos";

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
      <TechHeader />
      <br />
      <br />
      <div className="body">
        <div className="container-fluid bg-white py-15 p-6 ">
          <div className="container py-29">
            <div className="about grid grid-cols-1 lg:grid-cols-2 gap-10 fade-in-section">
              <div className="about-img rounded-lg h-full fadeInLeft">
                <div className="img p-5 border-l-8 border-t-8 border-[#041f3b] rounded-md  mt-[-5px] ml-[-5px] ">
                  <div className="image-container">
                    <img
                      src="/technology_images/tech.jpg"
                      alt="Technology"
                      className="w-full sm:w-[550px] h-auto"
                    />
                    <div className="absolute top-1 left-1 w-[290px] sm:w-[290px] h-[60px] sm:h-[90px] bg-[#041f3b] border border-[#041f3b] rounded-br-[10px] z-[1] mt-[-5px] ml-[-5px] flex items-center justify-center text-white text-[16px] sm:text-[20px] font-bold">
                      <span className="rectangle-content">Tech Revolution</span>
                    </div>
                    <div className="image-container relative"></div>
                  </div>
                </div>
              </div>

              <div className="about-item p-5 sm:p-10 fadeInRight">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
                  Driving Efficiency and Innovation
                </h1>
                <p className="mb-4 sm:mb-6">
                  Our expertise covers everything from foundational technologies
                  to the most advanced systems, ensuring your team is always
                  equipped to meet the demands of today's competitive
                  environment.
                </p>

                {/* Card 1 */}
                <div className="bg-gray-100 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <div
                      className="bg-blue-600 text-white flex items-center justify-center rounded-full flex-shrink-0"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <FontAwesomeIcon icon={faRobot} />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <a
                        href="#"
                        className="text-lg sm:text-xl font-semibold text-blue-600"
                      >
                        Transform Your Workforce
                      </a>
                      <p className="mt-1 sm:mt-2 text-sm sm:text-base">
                        Prepare your workforce for the future with comprehensive
                        training programs in emerging technologies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <div
                      className="bg-blue-600 text-white flex items-center justify-center rounded-full flex-shrink-0"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <FontAwesomeIcon icon={faMicrochip} />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <a
                        href="#"
                        className="text-lg sm:text-xl font-semibold text-blue-600"
                      >
                        Data-Driven Success
                      </a>
                      <p className="mt-1 sm:mt-2 text-sm sm:text-base">
                        Leverage advanced analytics and big data to inform
                        strategic business decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechLogos />
      <br />
      <br />
    </>
  );
};

export default Tech;
