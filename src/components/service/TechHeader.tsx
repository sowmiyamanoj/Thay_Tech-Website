import React from 'react';

const TechHeader: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src="/service_images/TechHeader.jpg"
        
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Technology!</h1>
        <p className="text-xl text-white mt-4">Transforming Ideas into Digital Reality</p>
      </div>
    </div>
  );
};

export default TechHeader;
