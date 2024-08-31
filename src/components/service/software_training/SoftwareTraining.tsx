import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "../service_home/Service.css";
import HeaderService from "../service_home/HeaderService";

const Training: React.FC = () => {
  return (
    <div>
      <HeaderService />

      {/* Our Services Section */}
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "500px" }}>
            <h4 className="text-primary">Software Training</h4>
          </div>
          <p className="display-6">Effective software training is key to empowering your team with the skills needed to drive productivity and achieve business success.</p>
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
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faLaptopCode} size="1x" className="me-2" />
                    Corporate Training
                  </a>
                  <p className="mb-4">Aligning Skills to Drive Organizational Success</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">
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
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faLaptopCode} size="1x" className="me-2" />
                    On-the-Job Training
                  </a>
                  <p className="mb-4">Immediate Skill Application and Enhanced Productivity</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 col-xl-5 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="public/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="Service 3" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faLaptopCode} size="2x" className="me-2" />
                    Project-Based Training
                  </a>
                  <p className="mb-4">Expert IT consulting to streamline your operations and drive innovation with strategic solutions.</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-5 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="public/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="Service 4" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faLaptopCode} size="2x" className="me-2" />
                    Online and Offline Training
                  </a>
                  <p className="mb-4">Outsource your IT needs to us and focus on your core business while we handle the rest.</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="#">
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

export default Training;
