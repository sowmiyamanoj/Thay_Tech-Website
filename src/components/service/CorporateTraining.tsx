

import React, { useEffect, useRef } from 'react';
import './CorporateTraining.css';

const CorporateTraining: React.FC = () => {
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
                        <h1 className='text-gray-600 pb-3 text-2xl'><b>Achieving Operational Excellence</b></h1>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        The primary goal of corporate training is to enhance the proficiency of your workforce with the software tools they use daily. This includes mastering software features, understanding best practices, and improving overall productivity.

                        Creating training modules that cover the software’s features, functionalities, and applications relevant to your business processes.
                        Identifying the skills gap and understanding the software’s role in your operations.Creating training modules that cover the software’s features, functionalities, and applications relevant to your business processes.</p>
                        <br></br>
                        <b>Customization:</b>
                        <p>We begin by conducting a thorough assessment of your organization's needs, goals, and the specific software in use. Based on this assessment, we tailor the training content to address your unique requirements. 
                        </p>
                        

                        
                        
                        {/* <h2 className='text-gray-600 pb-3 text-xl'><b>The Essence of Software Development</b></h2>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        Software development is a strategic process involving design, coding, testing, and deployment of applications tailored to solve specific business problems. At Thay Technologies, we blend creativity with rigorous engineering practices to deliver solutions that are robust, scalable, and aligned with your business objectives.
                        </p> */}
                       
                    </div>
                    <div className="img p-10">
                        <img src="public/service_images/training-img1.jpg" alt="Training" />
                    </div>
                </div>
               
                <div className='reverse-content'>
                    <div className="content-box flex fade-in-section" >
                        <div className="img p-10">
                            <img src="service_images/training-img2.jpg" alt="Marketing" />
                        </div>
                        
                        <div className="content p-10">
                            <h1 className='text-gray-600 pb-3 text-3xl'><b>Experience-Driven Learning:</b></h1>
                            <p className='text-l text-justify whitespace-normal'>
                            Detailed exploration of software features, functionalities, and advanced options.Developing realistic scenarios and case studies that reflect your industry and operational challenges. Our training programs are designed to provide a comprehensive exploration of the software tools your team utilizes, ensuring that every participant can harness their full potential.
                            </p>
                            <br />
                            <b>Hands-On Training :</b>
                            <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                            Each case study and exercise is strategically developed to align with specific learning objectives, ensuring that participants leave the training with a robust understanding of the software’s functionalities. 
                            </p>
                            <br />
                            <b>Real World Application :</b>
                            <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                            The practical application of software tools leads to increased proficiency, enabling your team to leverage technology effectively and efficiently. Our training empowers employees to not only understand how to use the software but to master it in ways that drive business success.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content-box flex fade-in-section">
                    <div className="content p-10">
                        <h1 className='text-gray-600 pb-3 text-2xl'><b>Why us?</b></h1>
                        <p className='text-l text-justify whitespace-normal'>
                        At Thay Technologies, we are committed to transforming your workforce into skilled users of essential software tools. Our training programs offer a comprehensive exploration of software features, functionalities, and advanced options, ensuring participants move beyond surface-level knowledge. We equip your team with the expertise needed to navigate complex software confidently, empowering them to tackle challenges and maximize productivity.
                        </p>
                        <br/>
                        
                        
                        
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        Our focus on practical application ensures that participants can seamlessly integrate their training into their daily operations. By emphasizing real-world scenarios and hands-on exercises, we enhance proficiency and efficiency, allowing your team to not only understand how to use the software but to master it. This mastery translates into tangible business success as employees leverage technology to streamline processes and drive results.
                        </p>
                        <br></br>
                        <p className='text-l text-justify whitespace-normal'>
                        By choosing Thay Technologies for your corporate training needs, you are investing in a partnership that prioritizes your organizational goals. Together, we can unlock your team’s full potential and pave the way for operational excellence
                        </p>
                        
                    </div>
                    <div className="img p-10">
                        <img src="public/service_images/training-img3.jpg" alt="Training" />
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

export default CorporateTraining;
