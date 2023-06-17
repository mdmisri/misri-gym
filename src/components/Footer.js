import React from 'react';

// import data
import { footer } from '../data'
const Footer = () => {
  // destructure footer data
 const {copyrightText} = footer;
  return ( 
  <footer className='bg-neutral-500 h-[100px] md:h-[120px]px-[10px]'>
    <div
     className='container mx-auto h-full flex justify-center items-center md:items-end md:pb-[35px]
    ' 
    data-aos='fade-up' 
    data-aos-delay='100'
    >
      {/*contact */}
     <p className='text-neutral-300  text-xl'>{copyrightText}</p>
    </div>
  </footer>
  );
};

export default Footer;
