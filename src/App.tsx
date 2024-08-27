import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SoftwareDevelopment from "./components/service/SoftwareDevelopment";
import ProductDevelopment from "./components/service/ProductDevelopment";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
          <Route path="/productdevelopment" element={<ProductDevelopment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
