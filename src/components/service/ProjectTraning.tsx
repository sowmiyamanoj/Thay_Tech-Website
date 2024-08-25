import React, { useEffect, useRef } from 'react';
import './ProjectTraining.css';

const ProjectTraining : React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play();
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 } // Adjust this value if you want more or less of the video visible before it starts
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in-section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <>
          
            <div className='body '>
            <div className="header-content">
                    <div className="flex-1 animate-down-to-up">
                        <h1 className="font-bold">
                            <b>Software Development</b>
                        </h1>
                        <p>
                            Let decide on what you want. We will deliver what you need.
                        </p>
                    </div>
                    <div className="flex-1">
                        <img
                            src="/Software-Logos/Software.svg"
                            alt="Head Software Development"
                        />
                    </div>
                </div>
                {/* <div className="bg-[#F6F4EB] flex items-center p-5" style={{ height: "90vh" }}>
                    <div className="flex-1">
                        <h1 className="font-bold text-6xl mb-4 ml-20 animate-down-to-up">
                            <b>Software Development</b>
                        </h1>
                        <p
                            className="ml-20 mb-20 animate-down-to-up"
                            style={{ animationDelay: '0.5s' }}
                        >
                            Let decide on what you want. We will deliver what you need.
                        </p>
                    </div>
                    <div className="flex-1 text-right">
                        <img
                            src="public/service_iamges/training-img1.jpg"
                            alt="Head Software Development"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div> */}
                {/* <h1 className='content text-5xl font-bold text-center mt-6'>We design tools to unveil
                your superpowers</h1> */}
                <div className="content-box flex fade-in-section">
                    <div className="content p-10">
                        <h1 className='text-gray-600 pb-3 text-2xl'><b>Transformative Workforce Preparation</b></h1>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        To prepare students for the workforce by providing hands-on experience with the latest technologies and project management practices. This training equips them with the skills needed to excel in their future careers.

                        We emphasize preparing students for the workforce by immersing them in projects that mirror contemporary industry standards, utilizing cutting-edge technologies and best practices in project management.
                        </p>
                        <br></br>
                        <b>Real World Application:</b>
                        <p>
                        The selected projects are not mere theoretical exercises; they are modeled after genuine business challenges, providing students with a realistic and invaluable learning experience.
                        </p>
                        

                        
                        
                        {/* <h2 className='text-gray-600 pb-3 text-xl'><b>The Essence of Software Development</b></h2>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        Software development is a strategic process involving design, coding, testing, and deployment of applications tailored to solve specific business problems. At Thay Technologies, we blend creativity with rigorous engineering practices to deliver solutions that are robust, scalable, and aligned with your business objectives.
                        </p> */}
                       
                    </div>
                    <div className="img p-10">
                        <img src="public/service_images/Project-img1.jpg" alt="Training" />
                    </div>
                </div>
               
                <div className='reverse-content'>
                    <div className="content-box flex fade-in-section" >
                        <div className="img p-10">
                            <img src="service_images/OnJob-img2.jpg" alt="Marketing" />
                        </div>
                        
                        <div className="content p-10">
                            <h1 className='text-gray-600 pb-3 text-3xl'><b>Tailored Learning Opportunities </b></h1>
                            <p className='text-l text-justify whitespace-normal'>
                            Participants are given the choice or are assigned projects that align with their professional interests and career goals. These projects are meticulously chosen to reflect current industry trends, technologies, and practices, ensuring relevance and practical application.
                            </p>
                            <br />
                            <b>Emerging Technologies:</b>
                            <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                            Each case study and exercise is strategically developed to align with specific learning objectives, ensuring that participants leave the training with a robust understanding of the software’s functionalities. 
                            </p>
                            <br />
                            <b>Real World Application :</b>
                            <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                            As employees acquire new skills, they immediately apply them to their job tasks. This real-time application solidifies learning through direct experience, ensuring the training is highly relevant to their work environment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content-box flex fade-in-section">
                    <div className="content p-10">
                        <h1 className='text-gray-600 pb-3 text-2xl'><b>Why us?</b></h1>
                        <b>Real world focus :</b>
                        <p className='text-l text-justify whitespace-normal'>
                        We don’t just teach concepts we immerse students in projects that mirror the complexities and challenges faced by today’s businesses. This real-world focus ensures that our trainees are not only learning but are also gaining relevant experience that they can immediately apply in their future careers.
                        </p>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        </p>
                        
                        <br></br>
                         <b>Cutting-Edge Technology and Practices:</b>
                         <p>We ensure that our students are trained on the most up-to-date technologies and best practices in project management. This commitment to current industry standards ensures that they are equipped with the skills needed to excel in today’s fast-paced tech environment.</p>

                        
                    </div>
                    <div className="img p-10">
                        <img src="public/service_images/OnJob-img3.jpg" alt="Training" />
                    </div>
                </div>
                <div>
                    <video
                        className="videoPlayer"
                        ref={videoRef}
                        src="/Software-Logos/Presentation.mp4"
                        muted
                    ></video>
                </div>
                
                    </div>
                    </>
    );
};

export default ProjectTraining;
