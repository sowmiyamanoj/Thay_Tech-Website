import React from 'react';
import ClientLogos from './ClientLogos'
import AccordionImage from './AccordionImage'
import Carousel1 from './Carousel1';
import HomeContent from './HomeContent';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Carousel1 />
      <HomeContent/>
      <ClientLogos />
      <AccordionImage/>
    </div>
  );
};

export default HomePage;
