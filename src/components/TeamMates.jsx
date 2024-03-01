import { Navigation, Pagination, Autoplay } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamMates = () => {
    const data = [
        {
            image: "images/testimonial-1.jpg",
            description: "It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great",
            name: "Jude Thorn - Designer",
        },
        {
            image: "images/testimonial-2.jpg",
            description: "We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers",
            name: "Roy Smith - Developer",
        },
        {
            image: "images/testimonial-3.jpg",
            description: "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy",
            name: "Marsha Singer - Marketer",
        },
        {
            image: "images/testimonial-4.jpg",
            description: "We've been waiting for a powerful piece of software that can help businesses manage their marketing projects",
            name: "Tim Shaw - Designer",
        },
        {
            image: "images/testimonial-5.jpg",
            description: "Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly",
            name: "Lindsay Spice - Marketer",
        },
        {
            image: "images/testimonial-6.jpg",
            description: "The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team",
            name: "Ann Blake - Developer",
        },
    ];
    return (
        <div className="container mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="bg-sky-50 mt-32"

            >
                {data.map((item) => (
                    <SwiperSlide>
                        <img src={item.image} className="  rounded-full size-24 h-24 m-auto place-items:center align-items:center"/> 
                        <div className="pt-4 text-gray-500 grid text-1xl text-center w-64 size-40  mx-40 italic mb-3">{item.description}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>);
};

export default TeamMates;
