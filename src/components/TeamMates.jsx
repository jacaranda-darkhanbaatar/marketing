import { Navigation, Pagination , Autoplay} from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamMates = () => {
    const data = [
        "Slide1",
        "Slide2",
        "Slide3",
        "Slide4",
        "Slide5",
        "Slide6",
        "Slide7",
        "Slide8",
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
                    delay:2500,
                    disableOnInteraction: false,
                }}

            >
                {data.map((item) => (
                    <SwiperSlide>
                        <div className="bg-sky-50 p-28">{item}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>);
};

export default TeamMates;
