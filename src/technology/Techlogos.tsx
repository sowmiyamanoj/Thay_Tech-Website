import Marquee from "react-fast-marquee";
import imageUrls from "./TechlogoImages.json";

function TechLogos() {
  const filepath = "/technology_images/";
  return (
    <>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row align-items-center">
            <h2 className="text-3xl font-bold text-center p-10 text-Blue-800">
              Technologies
            </h2>
            <br></br>
            <br></br>
            <div>
              <Marquee direction="left" speed={100}>
                <div className="flex flex-row overflow-hidden">
                  {imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={`${filepath}${url}`}
                      alt={`Logo ${index + 1}`}
                      className="w-20 h-20 mr-40"
                    />
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </section>
    </>
  );
}

export default TechLogos;
