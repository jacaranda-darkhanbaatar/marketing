import { Navigation,  Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamMates = () => {
    const data = [
        {
            image: "images/testimonial-1.jpg",
            name: "Jude Thorn - Designer",
            description: "It's been so fun to wok with Pavo, I've managed to integrate it properly into my business flow and it's great"
        },
        {
            image: "images/testimonial-2.jpg",
            name: "Roy Smith - Developer",
            description: "We were so focused on launching as many compaigns as possible that we've forgotten to target out loyal customers"
        },
        {
            image: "images/testimonial-3.jpg",
            name: "Marsha Singer - Marketer",
            description: "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy"
        },
        {
            image: "images/testimonial-4.jpg",
            name: "Tim Shaw - Designer",
            description: "We've been waiting for a powerful piece of software that can help businesses manage their marketing projects"
        },
        {
            image: "images/testimonial-5.jpg",
            name: "Lindsay Spice - Marketer",
            description: "Searching for a great prototyping and layout design app was difficult but thankfully i found app suite quickly"
        },
        {
            image: "images/testimonial-6.jpg",
            name: "Ann Blake - Developer",
            description: "The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team"
        },

    ];
    return (
        <div className="bg-sky-50 p-20">
            <h1 className="font-bold text-4xl mb-20 text-center">What do users think about Pavo</h1>
            <Swiper modules={[Navigation, Autoplay]}
                navigation={true}
                
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,

                }}
                
            >              
                {data.map((item) => (
                    <SwiperSlide>
                        <div>
                            
                            <div className=" flex justify-center">
                                <img src={item.image} alt=""  className="rounded-full size-20" />
                            </div>
                            
                            <div className="mb-4 text-gray-500 text-md text-center px-20">{item.description}</div>
                            <div className="italic font-bold text-center ">{item.name}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TeamMates;