

import React, { useEffect, useRef } from 'react';
import './CorporateTraining.css';

const OnJobTraining: React.FC = () => {
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
                        <h1 className='text-gray-600 pb-3 text-2xl'><b>Elevating Expertise</b></h1>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        Our On-Job Training (OJT) programs are meticulously crafted to provide employees with immersive, hands-on experience by embedding learning directly into their day-to-day responsibilities. This strategic approach cultivates a profound comprehension of the software while simultaneously enhancing the ability to apply newly acquired skills with precision in real-world scenarios.
                        </p>
                        <br></br>
                        <p>
                        Our seasoned trainers work in close collaboration with employees at their workstations, delivering step-by-step guidance and support tailored to the specific tasks they perform. This personalized mentorship ensures that each participant gains a comprehensive understanding of the software’s critical role in their daily operations, driving both proficiency and performance.
                        </p>
                        

                        
                        
                        {/* <h2 className='text-gray-600 pb-3 text-xl'><b>The Essence of Software Development</b></h2>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        Software development is a strategic process involving design, coding, testing, and deployment of applications tailored to solve specific business problems. At Thay Technologies, we blend creativity with rigorous engineering practices to deliver solutions that are robust, scalable, and aligned with your business objectives.
                        </p> */}
                       
                    </div>
                    <div className="img p-10">
                        <img src="public/service_images/OnJob-img1.jpg" alt="Training" />
                    </div>
                </div>
               
                <div className='reverse-content'>
                    <div className="content-box flex fade-in-section" >
                        <div className="img p-10">
                            <img src="service_images/OnJob-img2.jpg" alt="Marketing" />
                        </div>
                        
                        <div className="content p-10">
                            <h1 className='text-gray-600 pb-3 text-3xl'><b>Comprehensive Training Approach </b></h1>
                            <p className='text-l text-justify whitespace-normal'>
                            Our expert trainers work in close partnership with employees at their workstations, delivering step-by-step instructions and tailored support for the tasks at hand. This personalized approach ensures that each participant fully grasps the software’s integral role in their daily responsibilities.
                            </p>
                            <br />
                            <b>Hands-On Training :</b>
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
                        <p className='text-l text-justify whitespace-normal'>
                        We emphasize real-time application of skills, allowing your employees to implement what they’ve learned directly into their job tasks. This method reinforces learning through hands-on experience, ensuring that new skills are retained and effectively utilized in your business environment.
                        </p>
                        <br/>
                        
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        By choosing us, you are investing in a training program that prioritizes your team’s success. Our approach drives both proficiency and performance, empowering your employees to leverage technology effectively and contribute to your organization’s overall success.
                        </p>
                        
                        
                        <br></br>
                         
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        We don’t just train—we foster continuous growth. Our trainers provide ongoing support, offering feedback and adjusting the training to meet your team’s evolving needs. This adaptive approach ensures that your workforce continues to develop long after the initial training is complete.
                        </p>
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

export default OnJobTraining;
