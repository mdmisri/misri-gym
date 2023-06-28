import React from 'react';
import testimonialData from './TestimonialData'; // Import the testimonialsData from TestimonialData file


const Testimonials = () => {
  const {  title, testimonials } = testimonialData; // Use testimonialData instead of undefined testimonialsData - ye tha problem wo? nope, brackets [] use karna tha instead of {😭😅}
  
  // Rest of the code...now u continue ok sunno title daaldinge  website pe kidhar woich testimonial ki jagah pe ic ik baar website khol ke batao udhr hmm ok lets try
  return (
    <section id='testimonials' className='bg-pink-100 section'>
      {/* section title */}
      <div className='section-title-group justify-start' 
      data-aos='fade-up' 
      data-aos-delay='100' //css style karna aata hao theek ye karletao href daalding mobile nav mei ye last hai
      >
        {/* <img src={icon} alt=''/> */}
        <h2 className='h2 section-title' >Testinomials
          
          </h2>
      </div>
      <div className="flex items-center justify-center py-8">
        {testimonialData.map((testimonial) => (  
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
