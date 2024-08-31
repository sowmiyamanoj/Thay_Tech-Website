import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SoftwareDevelopment from "./components/service/SoftwareDevelopment";
import ProductDevelopment from "./components/service/ProductDevelopment";
import Footer from "./components/footer/Footer";
import Service from "./components/service/service_home/Service";
import Development from "./components/service/devlopment/Development";
import OutSourcing from "./components/service/outsourcing/Outsourcing";
import ITConsulting from "./components/service/it_consulting/ItConsulting";
import CloudSupport from "./components/service/cloud_support/Cloud_Support";
import SoftwareTraining from "./components/service/software_training/SoftwareTraining";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/development" element={<Development />} />
          <Route path="/service/outsourcing" element={<OutSourcing />} />
          <Route path="/service/it-consulting" element={<ITConsulting />} />
          <Route path="/service/cloud-support" element={<CloudSupport />} />
          <Route path="/service/software-training" element={<SoftwareTraining />} />
          <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
          <Route path="/productdevelopment" element={<ProductDevelopment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
