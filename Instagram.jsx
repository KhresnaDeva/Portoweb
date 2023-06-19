import React from 'react'
import IgImg3 from '../public/pr3.png';
import IgImg4 from '../public/pr4.png';
import IgImg5 from '../public/pr5.png';
import IgImg6 from '../public/pr6.png';
import IgImg7 from '../public/pr7.png';
import IgImg8 from '../public/pr8.png';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>My Instagram</p>
        <p className='pb-4'>@khresnadva</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
            <InstagramImg socialImg={IgImg7} />
            <InstagramImg socialImg={IgImg8} />
        </div>
    </div>
  )
}

export default Instagram