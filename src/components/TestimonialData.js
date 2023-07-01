import React from 'react';

// import CommunityIcn from '../src/assets/img/community/icons';
// import I1 from "./photos/img1.png"
export const testimonialData = [
  // icon: CommunityIcn,


  {
    id: 1,
    name: 'Mohammed K.',
    // image: {I1},
    quote: '“Gym is Well maintained. Coach is very kind, a professional body builder and ofcourse a dietitian too. He makes everyone to focus on each muscle of their body throughout a week. A Good inspiration for our younger generation.”',
  },
  {
    id: 2,
    name: 'hameed M',
    // image: {I1},
    quote: '“Awesome gym by Esa Misri sahab equipment is also very good.”',
  },
  {
    id: 3,
    name: 'Salman A.',
    // image: {I1},
    quote: '“Have been a member since a long time , one of the best gym in old city and won’t Burn a hole in your pocket very affordable . Awesome equipment can go for it undoubtedly, strongly recommend.”',
  },
  
];// i am writing some points as comments for claiity ok

export const Testimonial = () => {    //function which maps the images from the data--
  //func to be exported
  //chalo ye file all clear hai
  return (
    <div className="flex items-center justify-center py-8 bg-gray-100">
      {testimonialData.map((testimonial) => (
        <div
          key={testimonial.id}
          className="w-1/3 p-6 mx-4 bg-white rounded-lg shadow-lg"  // id
        >
          <img
            src={testimonial.image}                                 //image
            alt={testimonial.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />    
          <p className="italic text-gray-700">{testimonial.quote}</p>   
        </div>                                                //info
      ))}
    </div>
  );
};

export default testimonialData;  //data to be exported in Testimonial.js
