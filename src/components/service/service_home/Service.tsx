import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCloud, faCogs, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import HeaderService from "./HeaderService";

const Service: React.FC = () => {
  return (
    <div>
      <HeaderService />
      {/* Our Services Section */}
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
            <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
          </div>
        </div>
        <div className="row g-4 justify-content-center text-center">
          {/* Service Items */}
          <div className="col-md-7 col-lg-8 col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="service/cloud/cloud.jpg" className="img-fluid w-100 rounded-top" alt="Service 1" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="service/cloud/cloud.jpg" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faLaptopCode} size="1x" className="me-2" />
                    Software training
                  </a>
                  <p className="mb-4">Enhance your team's skills with our tailored software training programs for all proficiency levels.</p>
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
                <img src="service/cloud/cloud.jpg" className="img-fluid w-100 rounded-top" alt="Service 2" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="/CloudSupport" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faCloud} size="1x" className="me-2" />
                    Cloud support
                  </a>
                  <p className="mb-4">Reliable cloud migration, management, and 24/7 support to optimize your cloud infrastructure.</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="/CloudSupport">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 col-xl-5 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="service/cloud/cloud.jpg" className="img-fluid w-100 rounded-top" alt="Service 3" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faBook} size="1x" className="me-2" />
                    IT consulting
                  </a>
                  <p className="mb-4">Expert IT consulting to streamline your operations and drive innovation with strategic solutions.</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="/ITConsulting">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-5 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="/Software-Logos/img-2.jpg" className="img-fluid w-100 rounded-top" alt="Service 4" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-start">
                    <FontAwesomeIcon icon={faCogs} size="1x" className="me-2" />
                    Outsourcing
                  </a>
                  <p className="mb-4">Outsource your IT needs to us and focus on your core business while we handle the rest.</p>
                  <a className="btn btn-light rounded-pill py-2 px-4" href="/OutSourcing">
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

export default Service;
