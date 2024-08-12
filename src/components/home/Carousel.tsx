import React, { useEffect, useRef } from 'react';

const carouselData = [
    { src: '/img1.avif', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img2.avif', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img3.avif', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img4.avif', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img5.avif', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img6.avif', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img7.avif', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' }
];

const Carousel: React.FC = () => {
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const thumbnailBorderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const nextDom = nextRef.current;
        const prevDom = prevRef.current;
        const carouselDom = carouselRef.current;
        const sliderDom = sliderRef.current;
        const thumbnailBorderDom = thumbnailBorderRef.current;

        if (!nextDom || !prevDom || !carouselDom || !sliderDom || !thumbnailBorderDom) {
            return;
        }

        const updateSliderAndThumbnails = (type: 'next' | 'prev') => {
            const sliderItemsDom = Array.from(sliderDom.querySelectorAll('.item'));
            const thumbnailItemsDom = Array.from(thumbnailBorderDom.querySelectorAll('.item'));

            if (type === 'next') {
                sliderDom.appendChild(sliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            } else {
                sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            }

            carouselDom.classList.add(type);
            setTimeout(() => {
                carouselDom.classList.remove(type);
            }, 500); // Adjust the duration to match your CSS transition
        };

        let runNextAuto: ReturnType<typeof setInterval> | undefined;

        nextDom.onclick = () => {
            updateSliderAndThumbnails('next');
        };

        prevDom.onclick = () => {
            updateSliderAndThumbnails('prev');
        };

        runNextAuto = setInterval(() => {
            nextDom.click();
        }, 7000);

        return () => {
            if (runNextAuto) clearInterval(runNextAuto);
        };
    }, []);

    return (
        <div className="h-screen w-auto overflow-hidden relative pt-15" ref={carouselRef}>
            <div className="list" ref={sliderRef}>
                {carouselData.map((item, index) => (
                    <div className="w-full h-full absolute inset-0" key={index}>
                        <img src={item.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute top-1/5 w-[1140px] max-w-[80%] left-1/2 transform -translate-x-1/2 pr-[30%] box-border text-white shadow-lg">
                            <div className="font-bold tracking-[10px]">{item.author}</div>
                            <div className="text-5xl font-bold leading-tight">{item.title}</div>
                            <div className="text-5xl font-bold leading-tight text-[#f1683a]">{item.topic}</div>
                            <div>{item.description}</div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <button className="bg-gray-200 tracking-[3px] font-medium">SEE MORE</button>
                                <button className="bg-transparent border border-white text-gray-200 tracking-[3px] font-medium">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-[50px] left-1/2 z-100 flex gap-5" ref={thumbnailBorderRef}>
                {carouselData.map((item, index) => (
                    <div className="w-[150px] h-[220px] flex-shrink-0 relative" key={index}>
                        <img src={item.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-[20px]" />
                        <div className="absolute bottom-[10px] left-[10px] right-[10px] text-white">
                            <div className="font-medium">Name Slider {index + 1}</div>
                            <div className="font-light">Description</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-4/5 right-[52%] z-100 w-[300px] max-w-[30%] flex gap-[10px] items-center">
                <button id="prev" ref={prevRef} className="w-10 h-10 rounded-full bg-opacity-25 bg-gray-200 text-white font-bold transition-all duration-500 hover:bg-white hover:text-black">‹</button>
                <button id="next" ref={nextRef} className="w-10 h-10 rounded-full bg-opacity-25 bg-gray-200 text-white font-bold transition-all duration-500 hover:bg-white hover:text-black">›</button>
            </div>
        </div>
    );
};

export default Carousel;