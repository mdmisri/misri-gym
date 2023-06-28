import React from 'react';

// import CommunityIcn from '../src/assets/img/community/icons';
import I1 from "./photos/img1.png"
export const testimonialData = [
  // icon: CommunityIcn,


  {
    id: 1,
    name: 'John Doe',
    image: {I1},
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper augue at neque convallis, eget vulputate nisi volutpat. Mauris at velit et magna aliquet pharetra.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: {I1},
    quote: 'Nllam ultricies sapien a dolor consequat, et vestibulum nunc tristique. Ut varius condimentum ex, at semper risus fringilla non. Sed vulputate viverra risus ut placerat.',
  },
  {
    id: 3,
    name: 'David Johnson',
    image: {I1},
    quote: 'Proin malesuada enim nec augue aliquam varius. Sed aliquet justo quis enim placerat scelerisque. Sed malesuada ipsum a venenatis feugiat.',
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
