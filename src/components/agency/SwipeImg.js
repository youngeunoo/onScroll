import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwipeImg = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <article className='swiperBox'>
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={1}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide><img src={path + "/images/cat1.jpg"} alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src={path + "/images/cat2.jpg"} alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src={path + "/images/cat3.jpg"} alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src={path + "/images/cat4.jpg"} alt="고양이" /></SwiperSlide>
        <SwiperSlide><img src={path + "/images/cat5.jpg"} alt="고양이" /></SwiperSlide>
        ...
      </Swiper>
      <p>Types of clients we want to work</p>
    </article>
  );
};

export default SwipeImg;
