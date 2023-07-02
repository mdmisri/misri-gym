import React from 'react';
import { workouts } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';
import { Navigation } from 'swiper';

const WorkoutSlider = () => {
  const { programs } = workouts;

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, idx) => {
        const { image, name } = program;

        return (
          <SwiperSlide
            key={idx}
            className="max-w-[320px] max-h-[320px] relative"
          >
            <img className="max-w-full max-h-full object-contain" src={image} alt="" />
            <div className="absolute left-0 bottom-0 p-4 text-white">
              <div className="text-sm font-semibold">{name}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
