// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/M/MV5BMTM5ODEwOTM0OV5BMl5BanBnXkFtZTcwOTQ3NzI3Nw@@._V1_SX300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/M/MV5BMTM5ODEwOTM0OV5BMl5BanBnXkFtZTcwOTQ3NzI3Nw@@._V1_SX300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/M/MV5BMTM5ODEwOTM0OV5BMl5BanBnXkFtZTcwOTQ3NzI3Nw@@._V1_SX300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/M/MV5BMTM5ODEwOTM0OV5BMl5BanBnXkFtZTcwOTQ3NzI3Nw@@._V1_SX300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/M/MV5BMTM5ODEwOTM0OV5BMl5BanBnXkFtZTcwOTQ3NzI3Nw@@._V1_SX300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/M/MV5BMTM5ODEwOTM0OV5BMl5BanBnXkFtZTcwOTQ3NzI3Nw@@._V1_SX300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/M/MV5BMTM5ODEwOTM0OV5BMl5BanBnXkFtZTcwOTQ3NzI3Nw@@._V1_SX300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/M/MV5BMTM5ODEwOTM0OV5BMl5BanBnXkFtZTcwOTQ3NzI3Nw@@._V1_SX300.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
