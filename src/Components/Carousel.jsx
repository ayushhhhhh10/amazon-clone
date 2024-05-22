import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="h-[500px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 6000,
        }}
        className="h-[80%]"
      >
        <SwiperSlide>
          <img className="h-full w-full object-top object-cover" src={"../images/carousel_1.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full object-top object-cover" src={"../images/carousel_2.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video className="h-full object-cover" controls muted="muted">
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full object-top object-cover" src={"../images/carousel_4.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full object-top object-cover" src={"../images/carousel_5.jpg"} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[8%] bg-gradient-to-b from-black" />
    </div>
  );
};

export default Carousel;
