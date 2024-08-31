import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import "../service_home/Service.css";
import HeaderService from "../service_home/HeaderService";

const OutSourcing: React.FC = () => {
  return (
    <div>
      <HeaderService />
      {/* Our Services Section */}
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            <h5 className="fw-bold text-primary text-uppercase">Out Sourcing</h5>
            <h1 className="mb-0">Flexible and cost-effective outsourcing services to rapidly expand your IT business.</h1>
          </div>
        </div>
        <div className="row g-4 justify-content-center text-center">
          {/* Service Items */}
          <div className="col-md-7 col-lg-8 col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="public/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="Service 1" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="/SoftwareTraining" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faGears} size="2x" className="me-2" />
                    Infrastructure Outsourcing
                  </a>
                  <p className="mb-4">Affordable and secure IT infrastructure services to quickly scale your business with flexible options and top-notch facilities.</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="/SoftwareTraining">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7 col-lg-8 col-xl-5 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="public/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="Service 2" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faGears} size="2x" className="me-2" />
                    Staff Outsourcing
                  </a>
                  <p className="mb-4">Swift, risk-free staff outsourcing and offshoring solutions with highly qualified IT professionals to enhance your business performance</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="/SoftwareTraining">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutSourcing;
