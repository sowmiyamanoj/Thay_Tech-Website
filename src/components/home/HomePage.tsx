import React from 'react';
import Carousel from './Carousel';
import ClientLogos from './ClientLogos'
import AccordionImage from './AccordionImage'

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Carousel />
      <ClientLogos />
      <AccordionImage/>
    </div>
  );
};

export default HomePage;
