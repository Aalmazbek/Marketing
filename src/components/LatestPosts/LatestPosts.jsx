import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import './LatestPosts.css'

import leftArrow from './assets/leftArrow.svg'
import rightArrow from './assets/rightArrow.svg'
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';





const postsArray = [
  {
    data: t('LatestPosts.data1'),
    title: 'Any mechanical keyboard enthusiasts in design?',
    user: 'Maddox Fletcher',
    image: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1684108800&Signature=ECs32kJKMyc~M8aOosFC1vrcZss8HPMJEPu4GGAU8YqVhhmydFKbhpgbNqXvkqT~g0n3dC65e2PPRvEgUR7etYHR8wqe1JEVimMnjvxeoUlfe5WbCMSJMnuxU6PzykHlh7lnxB5wb1KrOyuF0x1wASOODeV-n7L-0l8ZOWlVfyDAvwTxfDsvP04sba10tfYeKykhGbyWJ71CABdVbU06JDPBHVZQeZnoYzagT9afhWcUlYegTeMj7Lsg~kP7FJOv6KgWUaOcOhVm0oXwS64CjUX3fgIDqJdrLR5alSfqdjL2xr9aSpaj1xEbIc71liw7w2l~orNyvgPsPeOZH3kDaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    data: t('LatestPosts.data2'),
    title: 'How to design a product that can grow itself 10x in year:',
    user: 'Cruz Truong',
    image: 'https://s3-alpha-sig.figma.com/img/f336/22c4/08039bca0f03abd1bb2e7f4349fc721c?Expires=1684108800&Signature=ItU78EW1sQZWjfG9P950tWT7ANxoQ0kKv8q3C9OFGlcbLCLRZ~NVSESDzckI5dqzKtr~eDxZ8R4hzbCtf3XBzjksXNOKJX9~HwyRjjAOymSkmacksj7rCV65dYKIVWUC2lpI0oTBtP6Sd~en1ur7yuoGND3Sq6Stava25dbq~PKifFsPL3OqdCplULTLjoFyhEmRfXSgW3gzbTdqwLQOkwcdyejPBjij3noOPWf15rwbVsHx9326S57shk8d1HkZHti4paZPYu~JTPdHyME2jzir4yJVKHbMFJAxG~LljuOnPThxx6vMidC8tNAUK-sDjW6tK2BPyVRfCGfCtkk6Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    background: true
  },
  {
    data: t('LatestPosts.data3'),
    title: 'Any mechanical keyboard enthusiasts in design?',
    user: 'Margaret Donnelly',
    image: 'https://s3-alpha-sig.figma.com/img/02a0/0328/0a8e049b23745a2db3b4f6113223895e?Expires=1684108800&Signature=ciCXOtTBLl6ik3b8HEBjvPgkiwDEgoHYeXrP-v7ZJtXU4EpLaMVBVDB2NR9liRe4UiDd664Tr-utkeVRHc2F7FHQSQqWvkGc4mD4i37KvP-VgNCNHyFoZG7XoTihWlkP047iyllrzvpoP5ar01i5X2sKeark43NWsVM2Mu8mPRKxfXI8WfWUnr4r67-dgOMTr59k6Q4TaUAiVcpjZVZ28MurbIpNioJ8Oy8l~AmpF93YK1UY1BR7nnJA~a-W1y0mxfc6gUFZTnMqwdVa46lGSi8vhL-RRR0DB6F36K3oGL1Cb4LJKCC2CZDbNr551okWcNsehLIm-jh72g62gl85mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  }
]


function LatestPosts() {

  const { t } = useTranslation()


  return (
    <article className='LatestPosts'>
      <div className="container">
        <h1>{t('LatestPosts.title')}</h1>
      </div>

      <div className="container LatestPosts__container">
        <div className='swiper-react-wrapper'>
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className='LatestPosts__swiper'
            initialSlide={1}
            slidesPerView={3}
            spaceBetween={35}
            centeredSlides={true}
            navigation={{
              nextEl: '.swiper-button-next-unique',
              prevEl: '.swiper-button-prev-unique'
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              dynamicBullets: true,
              clickable: true
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {[1,1,1,1,1,1].map(item => postsArray.map(elem => 
              <SwiperSlide className={`LatestPosts__swiper-slide ${elem.background ? 'swiper-slide-background-image' : ''}`}>
                <div className='swiper-slide-background'></div>
                <div className='swiper-slide-header'>
                  <div>{elem.data}</div>

                  <h3>{elem.title}</h3>
                </div>

                <div className='swiper-slide-footer'>
                  <img src={elem.image} alt="" />
                  <p>{elem.user}</p>
                </div>
              </SwiperSlide>
            ))}
            {/* // <SwiperSlide className='LatestPosts__swiper-slide'>slide1</SwiperSlide>
            // <SwiperSlide className='LatestPosts__swiper-slide slide-background'>slide2</SwiperSlide>
            // <SwiperSlide className='LatestPosts__swiper-slide'>slide3</SwiperSlide>
            // <SwiperSlide className='LatestPosts__swiper-slide'>slide4</SwiperSlide>
            // <SwiperSlide className='LatestPosts__swiper-slide slide-background'>slide5</SwiperSlide>
            // <SwiperSlide className='LatestPosts__swiper-slide'>slide6</SwiperSlide> */}
          </Swiper>

          <button className="swiper-button-prev-unique">
            <img src={leftArrow} alt="arrow icon" />
          </button>

          <button className="swiper-button-next-unique">
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default LatestPosts