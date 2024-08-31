import React from "react";
import "./HeaderService.css";
import "./HomeService.css";

const HeaderService: React.FC = () => {
  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="bg-breadcrumb-single"></div>
      <div className="container text-center py-8" style={{ maxWidth: "900px" }}>
        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
          Our Services
        </h4>
      </div>
    </div>
  );
};

export default HeaderService;
