import React from 'react';
import { workouts } from '../data';
import WorkoutSlider from './GymGallerySlider';

const Workouts = () => {
  const { title, icon } = workouts;

  return (
    <section id="gymgallery" className="section">
      <div className="flex flex-wrap">
        <div className="w-full">
          {/* section title */}
          <div
            className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={icon} alt="" />
            <h2 className="h2 section-title">
              {title}
              <span className="text-primary-200">.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="flex flex-wrap justify-center">
        <div className="w-full max-w-3xl">
          <WorkoutSlider />
        </div>
      </div>
    </section>
  );
};

export default Workouts;