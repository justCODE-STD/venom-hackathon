import React, { useEffect, useState }from 'react'
import './Testimonials.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import content from '../../Data/Testimonials.json'

const Testimonials = () => {
    // const [currentSlide, setCurrentSlide] = useState(0);

    // const handleSlideChange = (swiper) => {
    //   setCurrentSlide(swiper.activeIndex);
    // };
  
    // useEffect(() => {
    //   const swiperInstance = document.querySelector('.swiper-container').swiper;
    //   swiperInstance.on('slideChange', handleSlideChange);
    // }, []);

  return (
    <div id='testimonials'>
        <h1>Testimonials</h1>

        <div className="t-container">
            <Swiper autoplay={Autoplay} className='t-content' >
                {content.map((items, index) => (
                    <div className="t-content" key={index}>

                        <SwiperSlide className='t-content' >
                            {items.one.map((testimonial, index) => (
                                <div className="t-items t-one" key={index}>
                                    <h2>{testimonial.title}</h2>
                                    <p>{testimonial.text}</p>
                                    <span>
                                        <p>- {testimonial.name}</p>
                                        <img src={testimonial.image} alt="" />
                                    </span>
                                </div>
                            ))}
                        </SwiperSlide>

                        <SwiperSlide className='t-content'>
                            {items.two.map((testimonial, index) => (
                                <div className="t-items t-two" key={index}>
                                    <h2>{testimonial.title}</h2>
                                    <p>{testimonial.text}</p>
                                    <span>
                                        <p>- {testimonial.name}</p>
                                        <img src={testimonial.image} alt="" />
                                    </span>
                                </div>
                            ))}
                        </SwiperSlide>

                        <SwiperSlide className='t-content'>
                            {items.three.map((testimonial, index) => (
                                <div className="t-items t-three" key={index}>
                                    <h2>{testimonial.title}</h2>
                                    <p>{testimonial.text}</p>
                                    <span>
                                        <p>- {testimonial.name}</p>
                                        <img src={testimonial.image} alt="" />
                                    </span>
                                </div>
                            ))}
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>

        {/* <div className="target">
            {content.map((items, index) => (
                <div className={`indicator ${currentSlide === index ? 'active' : ''}`} key={index} />
            ))}
        </div> */}
    </div>
  )
}

export default Testimonials
