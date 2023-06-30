import React from 'react';
import { workouts } from '../data';
import WorkoutSlider from './GymGallerySlider';

const Workouts = () => {
  const { title, icon } = workouts;

  return (
    <section id="gymgallery" className="section">
      <div className="flex flex-wrap">
        <div className="w-full h-auto">
          {/* section title */}
          <div
            className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
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
      <div data-aos="fade-up" data-aos-delay="300">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
