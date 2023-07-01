import React from 'react';
import { contactus } from '../data';

const ContactUs = () => {
  const { title1, subt1, icon } = contactus;
  const address =
    'Tadbhan, Bahadur Pura, Opp Nishat Hotel, Hyderabad, Telangana 500064, India';
  const directionsLink =
    'https://www.google.com/maps/dir//Misri+Gym/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb977d66679285:0x76dd778ad9e78fad!2m2!1d78.4511722!2d17.3456239'; // Replace with your own directions link
  const businessHours = [
    { day: 'Mon', timing: '6:00 – 11:00 AM, 3:00 – 11:00 PM' },
    { day: 'Tue', timing: '12:00 – 11:00 AM, 3:00 – 11:00 PM' },
    { day: 'Wed', timing: '6:00 – 11:00 AM, 3:00 – 11:00 PM' },
    { day: 'Thu', timing: '6:00 – 11:00 AM, 3:00 PM – 12:00 AM' },
    { day: 'Fri', timing: '6:00 – 11:00 AM, 3:00 – 11:00 PM' },
    { day: 'Sat', timing: '6:30 – 10:00 AM' },
    { day: 'Sun', timing: '6:00 – 10:00 AM' },
  ];

  return (
    <section
      id="contactus"
      className="bg-black py-20 md:py-18 lg:pt-140 lg:pb-180"
    >
      <div className="container mx-auto px-4 lg:px-0">
        {/* Section title */}
        <div
          className="section-title-group max-w-540 mx-auto flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img className="text-white mr-2" src={icon} alt="/" />
          <h2 className="h2 text-white section-title text-center">
            {title1}
            <span className="text-primary-200">.</span>
          </h2>
        </div>

        <div className="text-xl text-white">
          <p>
            <b>Phone Numbers - {subt1}</b>
          </p>
          {/* Address */}
          <div className="mt-8">
            <h1 className="text-xl text-white font-bold">Address - {address}</h1>
            <div className="mt-8">
              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-white hover:border-blue-500 rounded">
                  Get Directions📍
                </button>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-10">
            <h1 className="text-xl text-white font-bold">Business Hours</h1>
          </div>
          <div className="mt-5">
            <ul className="text-white">
              {businessHours.map((item) => (
                <li key={item.day}>
                  {item.day}: {item.timing}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
