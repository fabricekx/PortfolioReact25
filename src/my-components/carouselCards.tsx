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

const Carousel = (card:Array<T>) => {
  
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
      {card.map((src, index) => (
        <SwiperSlide key={index} style={{ maxWidth: "200px" }}>
          <div>
              <Card className="hover:scale-105 border-0 transition-transform bg-gray-800 flex flex-col md:flex-row items-center p-4 w-full">
                {" "}
                {imageUrl && (
                  <img
                    src={`http://localhost:1337${imageUrl}`}
                    alt={project.Title}
                    className=" md:w-1/3 h-48 object-cover rounded-lg"
                  />
                )}
                <div className="flex flex-col  justify-between h-full w-full">
                  <CardHeader className="flex-grow w-full">
                    <CardTitle className="text-white">
                      {" "}
                      {i18n.language === "fr" ? project.TitleFr : project.Title}
                    </CardTitle>
                    <CardDescription>
                      {" "}
                      {i18n.language === "fr"
                        ? project.DescriptionFr
                        : project.Description}
                    </CardDescription>
                    {/* Affichage des technos */}
                    <div className="mt-2 flex flex-wrap">
                      {project.technos.map((techno) => (
                        <span
                          key={techno.id}
                          className="bg-blue-500 text-white py-1 px-3 rounded-full text-tiny m-1"
                        >
                          {techno.Technos}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto m-2">
                    <a
                      
                      href={project.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hide-cursor inline-block text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      onClick={() => setIsHovering(false)}
                    >
                      {t("showProject")}
                    </a>
                  </CardContent>
                </div>
              </Card>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
