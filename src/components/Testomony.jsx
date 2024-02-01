import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testomony = () => {
  const data = [
    {
      image : "images/testimonial-1.jpg",
      Test : "It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great",
      Name : "Jude Thorn - Designer",
    },
    {
      image : "images/testimonial-2.jpg",
      Test : "We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers",
      Name : "Roy Smith - Developer",
    },
    {
      image : "images/testimonial-3.jpg",
      Test : "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy",
      Name : "Marsha Singer - Marketer",
    },
    {
      image : "images/testimonial-4.jpg",
      Test : "We've been waiting for a powerful piece of software that can help businesses manage their marketing projects",
      Name : "Tim Shaw - Designer",
    },
    {
      image : "images/testimonial-5.jpg",
      Test : "Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly",
      Name : "Lindsay Spice - Marketer",
    },
    {
      image : "images/testimonial-6.jpg",
      Test : "The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team",
      Name : "Ann Blake - Developer",
    },
  ];

  return (
    <div className="bg-sky-50 px-32 py-32">
      <div className="mx-auto px-10 py-28 max-w-6xl">
        <h2 className="mb-12 text-center font-bold text-3xl">
          What do users think about Pavo
        </h2>
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            {data.map((item) => (
              <SwiperSlide>
                <img
                src={item.image}
                alt={item.Name}
                className="w-20 h-20 mx-auto mb-5 max-w-full align-middle border-solid rounded-full"
                />
                <div className="italic mb-3 text-slate-500 text-center mx-10">{item.Test}</div>
                <div className="font-bold text-lg text-center">{item.Name}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testomony;
