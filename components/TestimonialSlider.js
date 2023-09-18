// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react'

// swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image';
import { Pagination } from "swiper";
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {
        testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                {/* avatar, name, position */}
                <div>
                  <div>
                    {/* avatar */}
                    <div>avatar image</div>
                    {/* name */}
                    <div>name</div>
                    {/* position */}
                    <div>position</div>
                  </div>
                </div>
                {/* quote & msg */}
                <div className='bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'> 
                  {/* quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-6' />
                  </div>
                  {/* message */}
                  <div>{person.message}</div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
};

export default TestimonialSlider;
