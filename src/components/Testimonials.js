import React from 'react';

import testimonialData from './TestimonialData';
import { Testimonial } from './TestimonialData';
const Testimonials = () => {
  const { icon, title, testimonials } = testimonialsData;  //var1
  
  return (
    <section id='testimonials' className='bg-pink-100 section'>
      {/* section title */}
      <div className='section-title-group justify-start' 
      data-aos='fade-up' 
      data-aos-delay='100'
      >
        <img src={icon} alt=''/>
        <h2 className='h2 section-title'>
          {title} <span className='text-primary-200'>.
            </span>
          </h2>
      </div>
      <div className="flex items-center justify-center py-8">
        {testimonialData.map((testimonial) => (  //ye code 2 2 bar kyun likhna padhra?? ye waala?yep icon and title data mei se lene
          <div
            key={testimonial.id}
            className="w-1/3 p-6 mx-4 bg-white rounded-lg shadow-lg"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            {/* <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3> */}
            <p className="italic text-gray-700">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
