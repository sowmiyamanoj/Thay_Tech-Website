import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../service_home/HomeService.css";
import SvelteSignals from "./SvelteSignals";

const Development: React.FC = () => {
  const scrollToSection = (direction: "up" | "down") => {
    const section = document.querySelector(".container");
    if (section) {
      const top = direction === "down" ? section.scrollHeight : 0;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Include SvelteSignals Component */}
      <SvelteSignals />

      {/* Our Services Section */}
      <div className="container p-32 py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "500px" }}>
            <h4 className="text-primary">Development</h4>
          </div>
        </div>
        <div className="row g-4 justify-content-center text-center">
          {/* Service Items */}
          <div className="col-md-7 col-lg-8 col-xl-5  wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="/service/development/development.jpg" className="img-fluid w-100 rounded-top" alt="Service 1" />
              </div>
              <div className="service-content text-center p-10">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faCode} size="1x" className="me-2" />
                    Software Development
                  </a>
                  <p className="mb-4">Expert software development services to build robust and scalable solutions.</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="/SoftwareDeveloper">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7 col-lg-8 col-xl-5 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="/service/development/development.jpg" className="img-fluid w-100 rounded-top" alt="Service 2" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faCode} size="2x" className="me-2" />
                    product Development
                  </a>
                  <p className="mb-4">End-to-end product development to bring your innovative ideas to life.</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Up and Down Buttons */}
      <div className="scroll-buttons">
        <button className="scroll-button" onClick={() => scrollToSection("up")}>
          <FontAwesomeIcon icon={faChevronUp} size="2x" />
        </button>
        <button className="scroll-button" onClick={() => scrollToSection("down")}>
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </button>
      </div>
    </div>
  );
};

export default Development;
