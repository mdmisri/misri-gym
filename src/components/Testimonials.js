import React from 'react';
import testimonialData from './TestimonialData'; // Import the testimonialsData from TestimonialData file


const Testimonials = () => {
  const {  title, testimonials } = testimonialData; 
  
 
  return (
    <section id='testimonials' className='bg-pink-100 section'>
      {/* section title */}
      <div className='section-title-group  max-w-[540px] mx-auto px-4 lg:px-0'
      data-aos='fade-up' 
      data-aos-delay='200' //
      >
        {/* <img src={icon} alt=''/> */}
        <h2 className='h2 section-title text-center text-3xl' >Testimonials
        <span className="text-primary-200">.</span>
          </h2>
      </div>
      <div className="flex flex-wrap text-left ">
        {testimonialData.map((testimonial) => (  
          <div
            key={testimonial.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 mx-5 bg-white rounded-lg shadow-lg"
          >
            {/* <h3
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            /> */}
            <h2 className="text-lg font-semibold mb-2">-{testimonial.name}</h2>
            <p className="italic text-gray-700">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
