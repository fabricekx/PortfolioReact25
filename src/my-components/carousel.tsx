import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// Import des styles nécessaires
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Images pour le carousel
const slides = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
];

const Carousel = () => {
  
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      loop={true}
      
      autoplay={{ delay: 3000, disableOnInteraction: false ,
                reverseDirection: true}}
      navigation={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 0.5,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="mySwiper"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index} style={{ maxWidth: "200px" }}>
          <img src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
