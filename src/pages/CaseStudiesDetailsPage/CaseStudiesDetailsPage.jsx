import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


import './CaseStudiesDetailsPage.css'
import Testimonials from '../../components/Testimonials/Testimonials'

import mainImage from './assets/main-image.jfif'
import arrowIcon1 from './assets/arrow-icon1.svg'
import arrowIcon2 from './assets/arrow-icon2.svg'
import facebookIcon from './assets/ic_facebook.svg'
import instagramIcon from './assets/ic_instagram.svg'
import linkedinIcon from './assets/ic_linked-in.svg'
import twitterIcon from './assets/ic_twitter.svg'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'



const galleryArray = [
  'https://s3-alpha-sig.figma.com/img/4916/7994/bac567a0b380ef90c5912fa45cbbe13b?Expires=1684108800&Signature=F-~pG0LVKxEbivn~i-7PWRlvbumjA6ohB-KFxQNVGZtGlEf7fQrY52l6qF50q5qzoijnlPPCxFwGDleA83-xKv5kHwYDoZ--nDve3qKoo0C5i71s-wZxk0fLVpqcL5fv~nR-Dr5IUHkcuIqorh5MZJh-OgQt4N0nh8I53eX46qTDiK07SUQ5WMkYmpVy8CcISD5rJ-hhbRN-ZNxieNDGeLBXcy22BR1NyJRnzEI05FUu~kIw4BFSflXeCbu-yn37glXUDaPtBwpnjRyBEBBEkZffF9i~wGxRkld9ibrGkXtcDVq7G8ibzN0gMvwnPmfXkTG37d6Skwjoc7ie7JATeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/1caf/faf6/0f68d71d23f8d880c921a1f4e0537c26?Expires=1684713600&Signature=PrXz69oJNDR55-9vOaaAJowUAXzcAmKAxzl-AGwb-XBEv~BEVbzjwq9R-lU-nWKiKP4YVTtzdtMW7jvneO5Hfk5Ax1FCaSz0VGStcFt81qga3-zkbJvWZfmPRlWi7S-W9n0iFoj3bonv89gVN4Z0Ltj9n05C-6r-Mwrr7NVrmEAxjnCkd1SCyM2IECqg0l-ZdSGGsPuxll0BLqfNhNmE-3-JbqfnJph~7yZlCOK-gpw4Nk~6IrnPIo6gLovZCsnMFN94G4cxbyWNWyC9K3SCwwwBBjCf5cXtOjVRyFwlJd6aeSVUfm6mzzgHr49mW5wvpKzVfe3GvWAn10c7QpHx3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/207b/b29f/74e746b1d38101a99f7e83905e80508e?Expires=1684713600&Signature=WkfFBCsx4IsrAAIYbqC0xagOMXY-reel3psvHVT9V5YYh8v-LknhRveXXlt-5ouvk3suzjntOnKLo9rQ0xuR4Qf9oT1PPRLU3G2OVRAX1deOeuklzV~FGMRy8pweq4q6CsiL6fwTfL8Fjvsxf3aCcOUaKOsFf4~RQYwZYI5BSYhEj4iOc21eOjCw4wbioLcGwDW4Ac20CBpeKUZ3dqvPTqNnTXj5sAF~oHswLT2bnjdfa9guHJmaiFqLlnKYHyjucyJyf8q0DfcEgopVBrwT3LJdl7O6OzULahVzNmDKWXeQI4Tesxy8i6-1irGCfSFf7twtIKnCyYGtB4rdf1~QWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/81ae/1b14/f858343370894680816c8f371496996b?Expires=1684713600&Signature=c2T-DuMMmOlm18srBKQNapus1wzb27Pu2tXIXViPVUZ-~BI5FxfhKTzoXtJN8NGBtvmHafkD-gbdrNu5RU0FgRbyBzC1OWK1D0qgBsj41~muBzYSTPun8ZiM9mQW1pBZ4RfC8JbEIEC5WMu95EI-~QENZXGerKx98Rv9fk9WYW65y8ohg1PiIr7O0-JrG4HpZQsLb1HGCkGh9ZMQBo~K42Z8j05EL8-nUDQIra8LfNqp1EddKrlB5NvGkr2MgoYA0OpGooR99YmbCymuIdu-6abXLMZSVgrU2tluFvHBihV~KLSgH2Bo71SxAIpNJDqYoYr9m9PDvhcecDhIMsRqLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/95d5/1b22/86366a7e1edc97af46a46c79bdb16038?Expires=1684713600&Signature=jHy4KHPQiFqpywif4DbEcENrqLlHLkHPExhFGzCIZeWFWaHMEokb9jh9KWfFMUe7RehTURv37jYKQB~v1yXbrMDdfXyZjcmGv3cN6Bb73ZnwrSwjJClZTOLD~JVSa3yn1FjH8iLu7s5uOcY~jhDQYQ7QnJHZSNALGFTV3hV2UuX5hLhX67udOVV0Qki~nfMaKwAz7M1ZTlLuWNJDmLHS0a7oDE3ti1gA7mvZ24wWdyutN8QZv5hMq~tRNoG0Nq-TYT2ZYvIqkkGo9tXwXZoiQoLaUBZ4~o0AcvRfRpDmpSx1eBZ2EDqg-Y84NxhFGKJpEfsRO5ub9UtSOeTEMMz7Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  'https://s3-alpha-sig.figma.com/img/226a/0064/0e66d0f8291e1b67d787b9ec137bcc2b?Expires=1684713600&Signature=gVsZzdxwPJra886ojqvMTur9YP6KkeE-s23H9M0JQklSz7lPvbcQUux6Vt-cbRdOKwLjog-N9ujqfhYMKm6b1AsB8f7pyB8M7bFhtpZkM4coq4P3O2nVjDnV1B~3LnRJr8pmsXNZyrXG6VL70aIKQ2ackmTMYK8UJCxFhayC01kMSC1Nl5dYEnxUhAuf7QfrgK3K6m7v8wEBaep8QFClFXu5sEaprFfKYmMFADBMNxztI5f5J9TSiRyTyHF1DeUQN4jOOfvkVjD0xSNYUfYjl3~r6Gpa09lr273AlvT-OF0b-X6nxObJtCrAGSg19JP7vSLvZRwbwQ24i5LYi8Vg8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
]



function CaseStudiesDetailsPage() {
  const darkScheme = useSelector(state => state.general.darkScheme)
  const caseStudiesDetails = useSelector(state => state.general.caseStudiesDetails)

  const {t} = useTranslation()


  const prevBtn = useRef()
  const nextBtn = useRef()

  return (
    <>
      <div className={`CaseStudiesDetails`}>
        <article className='CaseStudiesDetails__top-image'>
          <div className='container CaseStudiesDetails__top-image-container'>
          <img src={mainImage} alt="main-image" />
          </div>
        </article>

        <div className='container CaseStudiesDetails__nav-container'>
          <nav className='CaseStudiesDetails__nav'>
            <Link to='/'>{t('header.home')}</Link>
            <img src={arrowIcon1} alt="arrow-icon" />
            <Link to='/case-studies/list'>{t('header.select.case-studies')}</Link>
            <img src={arrowIcon1} alt="arrow-icon" />
            <Link to='/case-studies/list/details' className='link-disabled'>{caseStudiesDetails.title.length > 10 ? caseStudiesDetails.title.substring(0, 30)+'...' : caseStudiesDetails.title}</Link>
          </nav>
        </div>

        <article className='CaseStudiesDetails__main'>
          <div className='container CaseStudiesDetails__main-container'>
            <div className='CaseStudiesDetails__main-content'>
              <section>
                <h1>Project Brief</h1>
                <p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
              </section>

              <section>
                <h1>How We Work</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <ul>
                  <li>Medical Assitant</li>
                  <li>Web Designer</li>
                  <li>Dog Trainer</li>
                  <li>Nursing Assistant</li>
                  <li>President of Sales</li>
                </ul>
              </section>

              <section>
                <h1>Results</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <ul>
                  <li>Medical Assitant</li>
                  <li>Web Designer</li>
                  <li>Dog Trainer</li>
                  <li>Nursing Assistant</li>
                  <li>President of Sales</li>
                </ul>
              </section>

              <section className='CaseStudiesDetails__main-swiper-wrapper'>
                <div className='CaseStudiesDetails__main-swiper-header'>
                  <h1>Gallery</h1>

                  <div>
                    <button ref={prevBtn}>
                      <img src={arrowIcon2} alt="left-arrow" />
                    </button>

                    <button ref={nextBtn}>
                      <img src={arrowIcon2} alt="right-arrow" />
                    </button>
                  </div>
                </div>

                <Swiper
                breakpoints={{
                  // when window width is >= 640px
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  }
                }}
                spaceBetween={30}
                allowTouchMove={false}
                navigation={{
                  prevEl: prevBtn.current,
                  nextEl: nextBtn.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevBtn.current;
                  swiper.params.navigation.nextEl = nextBtn.current;
                }}
                modules={[Navigation]}
                className="CaseStudiesDetails__main-swiper"
              >
                {galleryArray.map((elem, index) => 
                  <SwiperSlide key={Date.now() + index} className='CaseStudiesDetails__main-swiper-slide'>
                    <img src={elem} alt={'image-'+index} />
                  </SwiperSlide>
                )}
              </Swiper>
              </section>
            </div>

            <aside className='CaseStudiesDetails__main-aside'>
              <span>{t('CaseStudies.details.aside.summary')}</span>
              <h1>{caseStudiesDetails.title}</h1>
              <p>Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet augue. </p>

              <hr />

              <span>{t('CaseStudies.details.aside.website')}</span>
              <p>example@gmail.com</p>
              <span>{t('CaseStudies.details.aside.category')}</span>
              <p>{
                caseStudiesDetails.type === 'seo' ? caseStudiesDetails.type.toUpperCase() : caseStudiesDetails.type.charAt(0).toUpperCase() + caseStudiesDetails.type.slice(1)
              }</p>
              <span>{t('CaseStudies.details.aside.date')}</span>
              <p>October 25, 2019</p>

              <hr />

              <div className='CaseStudiesDetails__main-aside-links'>
                <h2>{t('CaseStudies.details.aside.share')}:</h2>
                <a href="https://facebook.com">
                  <img src={facebookIcon} alt="facebook-icon" />
                </a>
                <a href="https://instagram.com">
                  <img src={instagramIcon} alt="instagram-icon" />
                </a>
                <a href="https://linkedin.com">
                  <img src={linkedinIcon} alt="linkedin-icon" />
                </a>
                <a href="https://twitter.com">
                  <img src={twitterIcon} alt="twitter-icon" />
                </a>
              </div>
            </aside>
          </div>
        </article>
      </div>
      <Testimonials />
    </>
  )
}

export default CaseStudiesDetailsPage