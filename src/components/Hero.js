import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex items-center h-full'>
        <div className='flex flex-col items-start '>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
          </div>
          <h1 className='text-[30px] md:text-[50px] lg:text-[70px] leading-[1.1] font-light mb-4'>
            Browse the Collection <br />
            <span className='font-semibold'>Shop Now</span>
          </h1>
          <Link
            to={'/'}
            className='self-start uppercase font-semibold border-b-2 border-primary'
          >
            Hot New Arrivals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
