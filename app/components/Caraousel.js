"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function Caraousel() {
    const swiperSlide= {
        textAlign: 'center',
        fontSize: '18px',
        'background': '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  return (
    <>
        <Swiper
        style={{
            width: '100%',
            height: '100%'
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide style={swiperSlide}>
            <Image height={600} width={900} alt="image1" src="/images/DSC_2650.JPG"/>
        </SwiperSlide>
        <SwiperSlide style={swiperSlide}>
            <Image height={600} width={900} alt="image1" src="/images/DSC_2798.JPG"/>
        </SwiperSlide>
        <SwiperSlide style={swiperSlide}>
            <Image height={600} width={900} alt="image1" src="/images/DSC_2821.JPG"/>
        </SwiperSlide>
        <SwiperSlide style={swiperSlide}>
            <Image height={600} width={900} alt="image1" src="/images/DSC_2841.JPG"/>
        </SwiperSlide>
        <SwiperSlide style={swiperSlide}>
            <Image height={600} width={900} alt="image1" src="/images/DSC_2850.JPG"/>
        </SwiperSlide>
      </Swiper>
    </>

  )
}
