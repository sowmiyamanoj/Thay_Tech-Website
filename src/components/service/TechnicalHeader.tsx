const TechnicalHeader: React.FC = () => {
    return (
      <section style={{ backgroundColor: '808080' }} className="py-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center text-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-black font-bold text-5xl leading-tight mb-6">
                Technology
              </h1>
              <p
              className="text-xl mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontStyle: 'italic',
                color: '#262626', // Dark color
              }}
            >
              Redefining Possibilities with Digital Precision
            </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/Technology/techheader.jpg"
                alt="Coffee beans"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TechnicalHeader;
  