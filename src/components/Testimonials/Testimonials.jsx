import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Testimonials.css'
import leftArrow from './assets/leftArrow.svg'



const testimonialsArray = [
  {
    text: 'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
    user: 'Robert Fox',
    prof: 'designer',
    image: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1684108800&Signature=ECs32kJKMyc~M8aOosFC1vrcZss8HPMJEPu4GGAU8YqVhhmydFKbhpgbNqXvkqT~g0n3dC65e2PPRvEgUR7etYHR8wqe1JEVimMnjvxeoUlfe5WbCMSJMnuxU6PzykHlh7lnxB5wb1KrOyuF0x1wASOODeV-n7L-0l8ZOWlVfyDAvwTxfDsvP04sba10tfYeKykhGbyWJ71CABdVbU06JDPBHVZQeZnoYzagT9afhWcUlYegTeMj7Lsg~kP7FJOv6KgWUaOcOhVm0oXwS64CjUX3fgIDqJdrLR5alSfqdjL2xr9aSpaj1xEbIc71liw7w2l~orNyvgPsPeOZH3kDaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada laoreet erat, vel euismod augue aliquam in. Vivamus ut auctor libero. Proin facilisis augue eu lorem vulputate, maximus dignissim massa ullamcorper.',
    user: 'Cruz Truong',
    prof: 'designer',
    image: 'https://s3-alpha-sig.figma.com/img/f336/22c4/08039bca0f03abd1bb2e7f4349fc721c?Expires=1684108800&Signature=ItU78EW1sQZWjfG9P950tWT7ANxoQ0kKv8q3C9OFGlcbLCLRZ~NVSESDzckI5dqzKtr~eDxZ8R4hzbCtf3XBzjksXNOKJX9~HwyRjjAOymSkmacksj7rCV65dYKIVWUC2lpI0oTBtP6Sd~en1ur7yuoGND3Sq6Stava25dbq~PKifFsPL3OqdCplULTLjoFyhEmRfXSgW3gzbTdqwLQOkwcdyejPBjij3noOPWf15rwbVsHx9326S57shk8d1HkZHti4paZPYu~JTPdHyME2jzir4yJVKHbMFJAxG~LljuOnPThxx6vMidC8tNAUK-sDjW6tK2BPyVRfCGfCtkk6Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    background: true
  },
  {
    text: 'Vivamus vulputate vulputate ligula, eget ultricies purus egestas ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    user: 'Maddox Fletcher',
    prof: 'designer',
    image: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1684108800&Signature=ECs32kJKMyc~M8aOosFC1vrcZss8HPMJEPu4GGAU8YqVhhmydFKbhpgbNqXvkqT~g0n3dC65e2PPRvEgUR7etYHR8wqe1JEVimMnjvxeoUlfe5WbCMSJMnuxU6PzykHlh7lnxB5wb1KrOyuF0x1wASOODeV-n7L-0l8ZOWlVfyDAvwTxfDsvP04sba10tfYeKykhGbyWJ71CABdVbU06JDPBHVZQeZnoYzagT9afhWcUlYegTeMj7Lsg~kP7FJOv6KgWUaOcOhVm0oXwS64CjUX3fgIDqJdrLR5alSfqdjL2xr9aSpaj1xEbIc71liw7w2l~orNyvgPsPeOZH3kDaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    text: 'Proin ultrices vitae est non vehicula. Sed tincidunt maximus metus et sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user: 'Margaret Donnelly',
    prof: 'designer',
    image: 'https://s3-alpha-sig.figma.com/img/02a0/0328/0a8e049b23745a2db3b4f6113223895e?Expires=1684108800&Signature=ciCXOtTBLl6ik3b8HEBjvPgkiwDEgoHYeXrP-v7ZJtXU4EpLaMVBVDB2NR9liRe4UiDd664Tr-utkeVRHc2F7FHQSQqWvkGc4mD4i37KvP-VgNCNHyFoZG7XoTihWlkP047iyllrzvpoP5ar01i5X2sKeark43NWsVM2Mu8mPRKxfXI8WfWUnr4r67-dgOMTr59k6Q4TaUAiVcpjZVZ28MurbIpNioJ8Oy8l~AmpF93YK1UY1BR7nnJA~a-W1y0mxfc6gUFZTnMqwdVa46lGSi8vhL-RRR0DB6F36K3oGL1Cb4LJKCC2CZDbNr551okWcNsehLIm-jh72g62gl85mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  }
]

// let amount = [...postsArray, ...postsArray, ...postsArray]


function Testimonials() {
  const darkScheme = useSelector(state => state.general.darkScheme)

  const { t } = useTranslation()

  return (
    <article className={`Testimonials ${darkScheme ? 'Testimonials-dark' : ''}`}>
      <div className="container Testimonials__container">
        <div className='Testimonials__title'>
          <p>{t('Testimonials.title1')}</p>
          <h1>{t('Testimonials.title2')}</h1>
        </div>

        <Swiper
          breakpoints={{
            // when window width is >= 640px
            0: {
            },
            // when window width is >= 768px
            576: {
            },
            1024: {
            },
          }}
          className='Testimonials__swiper'
          initialSlide={1}
          slidesPerView={1}
          spaceBetween={35}
          centeredSlides={true}
          navigation={{
            nextEl: '.Testimonials__swiper-button-next-unique',
            prevEl: '.Testimonials__swiper-button-prev-unique'
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {testimonialsArray.map((elem, index) => 
            <SwiperSlide key={index} className={`Testimonials__swiper-slide`}>
              <div className='Testimonials__swiper-slide-title'>
                <p>{elem.text}</p>
              </div>

              <div className='Testimonials__swiper-slide-footer'>
                <img src={elem.image} alt="" />

                <div>
                  <h4>{elem.user}</h4>
                  <p>{t('Testimonials.' + elem.prof)}</p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>

        <button className="swiper-button-prev-unique Testimonials__swiper-button-prev-unique">
            <img src={leftArrow} alt="arrow icon" />
          </button>

        <button className= "swiper-button-next-unique Testimonials__swiper-button-next-unique">
          <img src={leftArrow} alt="" />
        </button>
      </div>
    </article>
  )
}

export default Testimonials