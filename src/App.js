import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Workouts from './components/GymGallery';
import Community from './components/Testimonials';
import Contactus from './components/Contactus';
import Footer from './components/Footer';

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Community />
      <Contactus />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
