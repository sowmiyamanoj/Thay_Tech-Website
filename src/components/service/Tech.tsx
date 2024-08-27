import React, { useEffect, useRef } from 'react';
import './Tech.css';

const Tech: React.FC = () => {
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
            { threshold: 0.5 }
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
            <div className='body'>
                <div className='reverse-content'>
                    <div className="content-box flex fade-in-section p-40">
                        <div className="img p-10  image-border">
                            <img  src="public/service_images/tech.jpg" alt="Marketing" />
                        </div>
                        <div className="content p-10">
                            <h1 className='text-gray-600 pb-3 text-2xl'><b>Why Choose Thay Technologies?</b></h1>
                            <p className='text-l text-justify whitespace-normal'>
                                Technological Excellence: Our team of experts leverages the latest technologies to create software that is not only innovative but also future-proof. We stay ahead of industry trends to ensure your solution remains cutting-edge.
                            </p>
                            <br />
                            <p className='text-l text-justify font-weight: 500 whitespace-normal'>
                                Client-Centric Innovation: We prioritize your vision and goals, working closely with you throughout the development process. Our solutions are tailored to address your specific needs and drive tangible results.
                            </p>
                            <br />
                            <p className='text-l text-justify font-weight: 500 whitespace-normal'>
                                Security and Compliance: We incorporate robust security measures and ensure compliance with industry standards, protecting your data and maintaining the integrity of your operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tech;
