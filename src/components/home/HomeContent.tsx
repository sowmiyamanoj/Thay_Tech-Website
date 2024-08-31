import './HomeContent.css'

const CompanyIntro = () => {
  return (
    <div>
    <section className="flex flex-col md:flex-row items-center py-12 px-6 md:px-12">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img 
          src="home-page/img6.jpg" 
          alt="Company Image" 
          className="w-full h-auto rounded-lg shadow-lg"
          style={{filter: 'drop-shadow(5px 0px 15px rgba(0, 0, 0, 0.5))' }}
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold text-cyan-800 mb-4">Welcome to Thay Technologies</h2>
        <p className="text-lg text-gray-600 mb-4">
          Our company has been at the forefront of innovation, delivering high-quality products and services to our customers worldwide. We pride ourselves on our commitment to excellence and our ability to adapt to the ever-changing market.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          With a team of dedicated professionals, we continuously strive to exceed expectations and drive success for our clients. Join us on our journey as we continue to make a positive impact across industries.
        </p>
        <a 
          href="/about-us" 
          className="inline-flex items-center text-blue-500 hover:text-blue-700 font-semibold"
        >
          About Us 
          <span className="ml-2 arrow">→</span>
        </a>
      </div>
    </section>
    <div>
      <h1 className="text-3xl font-bold text-center text-cyan-900 mt-10 ">Our Service</h1>
      <h1 className="text-5xl font-bold text-center text-blue-800 ">What We Can Do For You</h1>
      <p className="text-lg text-gray-600 mt-5 mx-28">
          Our company has been at the forefront of innovation, delivering high-quality products and services to our customers worldwide. We pride ourselves on our commitment to excellence and our ability to adapt to the ever-changing market.
          Our company has been at the forefront of innovation, delivering high-quality products and services to our customers worldwide. We pride ourselves on our commitment to excellence and our ability to adapt to the ever-changing market.

        </p>
        <p className="text-lg text-gray-600 mt-2 mx-28">
          Our company has been at the forefront of innovation, delivering high-quality products and services to our customers worldwide. We pride ourselves on our commitment to excellence and our ability to adapt to the ever-changing market.
        </p>
    </div>
    </div>
  );
};

export default CompanyIntro;
