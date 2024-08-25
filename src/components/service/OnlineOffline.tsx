

import React, { useEffect, useRef } from 'react';
import './OnlineOffline.css';

const OnLineOffline: React.FC = () => {
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
                        <h1 className='text-gray-600 pb-3 text-2xl'><b>Online Training</b></h1>
                        <b>Flexible learning at our convenience :</b>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        To provide an adaptable and accessible learning experience that empowers participants to learn at their own pace, from any location.Engage with interactive online courses that combine video lectures, comprehensive reading materials, and assessment quizzes to reinforce learning.Participants gain the skills and knowledge necessary to effectively use the software, all within a framework that supports self-paced and flexible learning.
                        </p>
                        <br></br>
                        <p>
                        Participate in dynamic discussions with trainers and peers, sharing insights, asking questions, and enhancing your understanding through collaboration.Study from anywhere, at any time, making it easy to fit learning into your schedule, regardless of location or time zone.

                        </p>

                        
                        
                        {/* <h2 className='text-gray-600 pb-3 text-xl'><b>The Essence of Software Development</b></h2>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        Software development is a strategic process involving design, coding, testing, and deployment of applications tailored to solve specific business problems. At Thay Technologies, we blend creativity with rigorous engineering practices to deliver solutions that are robust, scalable, and aligned with your business objectives.
                        </p> */}
                       
                    </div>
                    <div className="img p-10">
                        <img src="public/service_images/OnlineOffline-img1.jpg" alt="Training" />
                    </div>
                </div>
               
                <div className='reverse-content'>
                    <div className="content-box flex fade-in-section" >
                        <div className="img p-10">
                            <img src="service_images/OnlineOffline-img2.jpg" alt="Marketing" />
                        </div>
                        
                        <div className="content p-10">
                            <h1 className='text-gray-600 pb-3 text-3xl'><b>Offline Training </b></h1>
                            <p className='text-l text-justify whitespace-normal'>
                            To provide a structured and engaging in-person learning experience, where participants benefit from direct interaction with expert trainers.Focus on your studies in a dedicated learning environment that encourages engagement and networking.
                            </p>
                            <br />
                            
                            <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                            Apply what you’ve learned through practical sessions, guided by experienced trainers who provide real-time feedback.Collaborate with peers in team-based exercises that build problem-solving skills and foster a deeper understanding of the material.Participants receive comprehensive, hands-on training, leading to a deep and practical understanding of the software and its applications.


                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="content-box flex fade-in-section">
                    <div className="content p-10">
                        <h1 className='text-gray-600 pb-3 text-2xl'><b>Why us?</b></h1>
                        <p className='text-l text-justify whitespace-normal'>
                        We don’t just offer courses we offer a community. Engage in dynamic discussions with trainers and peers, exchange insights, and deepen your understanding through collaborative learning. With our online training, you can study from anywhere, making it easier to fit learning into your busy lifestyle, no matter where you are or what time zone you're in.
                        </p>
                        <br/>
                        
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        Choosing <b>Thay Technologies</b> means choosing a partner dedicated to your success. Whether you prefer the flexibility of online learning or the hands-on approach of offline training, we are committed to providing an exceptional learning experience that equips you with the skills and knowledge you need to excel. Our programs are not just about teaching; they’re about empowering you to achieve your goals and advance your career.
                        </p>
                        
                        
                        <br></br>
                         
                        
                    </div>
                    <div className="img p-10">
                        <img src="public/service_images/OnlineOffline-img3.jpg" alt="Training" />
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

export default OnLineOffline;
