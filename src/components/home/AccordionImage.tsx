import React, { useState, useEffect } from 'react';

// TypeScript interface for the Place object
interface Place {
  name: string;
  image: string;
  description: string;
}

// Array of place objects with descriptions using HTML line breaks
const places: Place[] = [
  {
    name: 'Taj Mahal',
    image: 'img1.avif',
    description:
      '• A magnificent white marble mausoleum.<br />• Located in Agra, India.<br />• Built by Mughal Emperor Shah Jahan.',
  },
  {
    name: 'Marina Bay',
    image: 'img2.avif',
    description:
      '• A vibrant waterfront with iconic skyline.<br />• Located in Singapore.<br />• Features the Marina Bay Sands and Gardens by the Bay.',
  },
  {
    name: 'Great Wall',
    image: 'img3.avif',
    description:
      '• A historic fortification stretching over 13,000 miles.<br />• Built to protect against invasions.<br />• Extends across northern China.',
  },
  {
    name: 'Statue Liberty',
    image: 'img4.avif',
    description:
      '• A symbol of freedom and democracy.<br />• Gift from France to the USA.<br />• Located on Liberty Island in New York Harbor.',
  },
  {
    name: 'Fuji Mountain',
    image: 'img5.avif',
    description:
      '• An iconic and sacred mountain in Japan.<br />• The highest peak in Japan.<br />• A popular site for pilgrimage and climbing.',
  },
];

// Define the props for ImageCard
interface ImageCardProps {
  place: Place;
  onClick?: () => void; // Optional onClick for mobile
  isActive: boolean;
  onMouseEnter?: () => void; // Optional prop for desktop hover effect
  onMouseLeave?: () => void; // Optional prop to handle mouse leave
}

const ImageCard: React.FC<ImageCardProps> = ({
  place,
  onClick,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className={`relative flex-none sm:flex-1 cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 w-full sm:w-[calc(33.333%_-_1rem)] md:w-[calc(20%_-_1rem)] lg:w-[calc(16%_-_1rem)] h-[180px] sm:h-[250px] md:h-[300px] lg:h-[450px] xl:h-[500px] group
      ${isActive ? 'bg-black bg-opacity-50' : ''}
      sm:hover:flex-1 sm:hover:scale-105`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <img
      src={place.image}
      alt={place.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 to-transparent text-white p-4 flex items-center justify-center rounded-t-lg transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
      <span className="text-lg md:text-2xl font-semibold tracking-wide uppercase shadow-md font-poppins">
        {place.name}
      </span>
    </div>
    {isActive && (
      <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div
          className="text-white text-sm md:text-lg p-4 rounded-lg text-center border border-white border-opacity-20 bg-opacity-70"
          dangerouslySetInnerHTML={{ __html: place.description }}
        />
      </div>
    )}
  </div>
);

// BackgroundImage component for the background image
const BackgroundImage: React.FC<{ image: string }> = ({ image }) => (
  <div
    className="absolute inset-0 bg-cover bg-center filter brightness-50 z-0 transition-all duration-500"
    style={{ backgroundImage: `url('${image}')` }}
  />
);

// AccordionImage component that uses the ImageCard and BackgroundImage components
const AccordionImage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string>(places[0].image);
  const [activePlace, setActivePlace] = useState<string | null>(null);
  const [hoveredPlace, setHoveredPlace] = useState<string | null>(null); // State for managing hover

  const isMobile = window.innerWidth <= 1024;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setActivePlace(null); // Reset activePlace on mobile resize
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageClick = (place: Place) => {
    if (isMobile) {
      setActiveImage(place.image);
      setActivePlace(activePlace === place.name ? null : place.name);
    }
  };

  const handleMouseEnter = (place: Place) => {
    if (!isMobile) {
      setHoveredPlace(place.name);
      setActiveImage(place.image);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredPlace(null); // Clear hovered place on mouse leave
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <BackgroundImage image={activeImage} />

      <main className="relative z-10 w-full h-auto flex flex-col sm:flex-row lg:flex-wrap gap-4 p-4 overflow-x-auto">
        {places.map((place) => (
          <ImageCard
            key={place.image}
            place={place}
            onClick={() => handleImageClick(place)}
            isActive={activePlace === place.name || hoveredPlace === place.name}
            onMouseEnter={() => handleMouseEnter(place)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </main>
    </div>
  );
};

export default AccordionImage;
