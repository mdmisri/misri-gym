import React from 'react';

export const testimonialData = [
  {
    id: 1,
    name: 'Mohammed K.',
    quote: '“Gym is Well maintained. Coach is very kind, a professional body builder and of course a dietitian too. He makes everyone focus on each muscle of their body throughout a week. A Good inspiration for our younger generation.”',
  },
  {
    id: 2,
    name: 'Hameed M',
    quote: '“Awesome gym by Esa Misri Sahab. Equipment is also very good.”',
  },
  {
    id: 3,
    name: 'Salman A.',
    quote: '“Have been a member since a long time, one of the best gyms in the old city and won’t burn a hole in your pocket. Very affordable. Awesome equipment, can go for it undoubtedly. Strongly recommend.”',
  },
];

export const Testimonial = () => {
  return (
    <div className="flex items-center justify-center py-8 bg-gray-100">
      {testimonialData.map((testimonial) => (
        <div
          key={testimonial.id}
          className="w-1/3 p-6 mx-4 bg-white rounded-lg shadow-lg"
        >
          <p className="italic text-gray-700">{testimonial.quote}</p>
        </div>
      ))}
    </div>
  );
};
//d
export default testimonialData;
