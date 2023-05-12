import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Grid, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import LatestPosts from '../../components/LatestPosts/LatestPosts'
import Testimonials from '../../components/Testimonials/Testimonials'

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


import './CaseStudiesPage.css'
import css from './CaseStudiesPage.module.css'
import prevArrowIcon from './assets/prev-arrow-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { setCaseStudiesDetails } from '../../redux'




const cardsArray = [
  {
    image: 'https://s3-alpha-sig.figma.com/img/4916/7994/bac567a0b380ef90c5912fa45cbbe13b?Expires=1684108800&Signature=F-~pG0LVKxEbivn~i-7PWRlvbumjA6ohB-KFxQNVGZtGlEf7fQrY52l6qF50q5qzoijnlPPCxFwGDleA83-xKv5kHwYDoZ--nDve3qKoo0C5i71s-wZxk0fLVpqcL5fv~nR-Dr5IUHkcuIqorh5MZJh-OgQt4N0nh8I53eX46qTDiK07SUQ5WMkYmpVy8CcISD5rJ-hhbRN-ZNxieNDGeLBXcy22BR1NyJRnzEI05FUu~kIw4BFSflXeCbu-yn37glXUDaPtBwpnjRyBEBBEkZffF9i~wGxRkld9ibrGkXtcDVq7G8ibzN0gMvwnPmfXkTG37d6Skwjoc7ie7JATeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'branding',
    title: "Event Doesn't Have To Be Hard. Read These 7 Tips"
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/1caf/faf6/0f68d71d23f8d880c921a1f4e0537c26?Expires=1684713600&Signature=PrXz69oJNDR55-9vOaaAJowUAXzcAmKAxzl-AGwb-XBEv~BEVbzjwq9R-lU-nWKiKP4YVTtzdtMW7jvneO5Hfk5Ax1FCaSz0VGStcFt81qga3-zkbJvWZfmPRlWi7S-W9n0iFoj3bonv89gVN4Z0Ltj9n05C-6r-Mwrr7NVrmEAxjnCkd1SCyM2IECqg0l-ZdSGGsPuxll0BLqfNhNmE-3-JbqfnJph~7yZlCOK-gpw4Nk~6IrnPIo6gLovZCsnMFN94G4cxbyWNWyC9K3SCwwwBBjCf5cXtOjVRyFwlJd6aeSVUfm6mzzgHr49mW5wvpKzVfe3GvWAn10c7QpHx3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'seo',
    title: 'How 7 Things Will Change The Way You Approach Event'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/207b/b29f/74e746b1d38101a99f7e83905e80508e?Expires=1684713600&Signature=WkfFBCsx4IsrAAIYbqC0xagOMXY-reel3psvHVT9V5YYh8v-LknhRveXXlt-5ouvk3suzjntOnKLo9rQ0xuR4Qf9oT1PPRLU3G2OVRAX1deOeuklzV~FGMRy8pweq4q6CsiL6fwTfL8Fjvsxf3aCcOUaKOsFf4~RQYwZYI5BSYhEj4iOc21eOjCw4wbioLcGwDW4Ac20CBpeKUZ3dqvPTqNnTXj5sAF~oHswLT2bnjdfa9guHJmaiFqLlnKYHyjucyJyf8q0DfcEgopVBrwT3LJdl7O6OzULahVzNmDKWXeQI4Tesxy8i6-1irGCfSFf7twtIKnCyYGtB4rdf1~QWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'marketing',
    title: 'My Life, My Job, My Career: How 7 Simple Event Helped Me Succeed'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/81ae/1b14/f858343370894680816c8f371496996b?Expires=1684713600&Signature=c2T-DuMMmOlm18srBKQNapus1wzb27Pu2tXIXViPVUZ-~BI5FxfhKTzoXtJN8NGBtvmHafkD-gbdrNu5RU0FgRbyBzC1OWK1D0qgBsj41~muBzYSTPun8ZiM9mQW1pBZ4RfC8JbEIEC5WMu95EI-~QENZXGerKx98Rv9fk9WYW65y8ohg1PiIr7O0-JrG4HpZQsLb1HGCkGh9ZMQBo~K42Z8j05EL8-nUDQIra8LfNqp1EddKrlB5NvGkr2MgoYA0OpGooR99YmbCymuIdu-6abXLMZSVgrU2tluFvHBihV~KLSgH2Bo71SxAIpNJDqYoYr9m9PDvhcecDhIMsRqLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'marketing',
    title: "Believing These 7 Myths About Event Keeps You From Growing"
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/95d5/1b22/86366a7e1edc97af46a46c79bdb16038?Expires=1684713600&Signature=jHy4KHPQiFqpywif4DbEcENrqLlHLkHPExhFGzCIZeWFWaHMEokb9jh9KWfFMUe7RehTURv37jYKQB~v1yXbrMDdfXyZjcmGv3cN6Bb73ZnwrSwjJClZTOLD~JVSa3yn1FjH8iLu7s5uOcY~jhDQYQ7QnJHZSNALGFTV3hV2UuX5hLhX67udOVV0Qki~nfMaKwAz7M1ZTlLuWNJDmLHS0a7oDE3ti1gA7mvZ24wWdyutN8QZv5hMq~tRNoG0Nq-TYT2ZYvIqkkGo9tXwXZoiQoLaUBZ4~o0AcvRfRpDmpSx1eBZ2EDqg-Y84NxhFGKJpEfsRO5ub9UtSOeTEMMz7Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'seo',
    title: "Don't Waste Time! 7 Facts Until You Reach Your Event"
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/226a/0064/0e66d0f8291e1b67d787b9ec137bcc2b?Expires=1684713600&Signature=gVsZzdxwPJra886ojqvMTur9YP6KkeE-s23H9M0JQklSz7lPvbcQUux6Vt-cbRdOKwLjog-N9ujqfhYMKm6b1AsB8f7pyB8M7bFhtpZkM4coq4P3O2nVjDnV1B~3LnRJr8pmsXNZyrXG6VL70aIKQ2ackmTMYK8UJCxFhayC01kMSC1Nl5dYEnxUhAuf7QfrgK3K6m7v8wEBaep8QFClFXu5sEaprFfKYmMFADBMNxztI5f5J9TSiRyTyHF1DeUQN4jOOfvkVjD0xSNYUfYjl3~r6Gpa09lr273AlvT-OF0b-X6nxObJtCrAGSg19JP7vSLvZRwbwQ24i5LYi8Vg8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'seo',
    title: '7 Places To Get Deals On Event'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/2c1d/7a72/99daa9cab18ade57ffb9807a9f3dccfe?Expires=1684713600&Signature=Relo1Y64EU-CA-8MWpe5wJ0RFvYV3TniVpcZDCHK5TYByOkycLCSywjgn8NBiEcsk322skZW3DsQKBVdOTU~UwRiVkiXLH~JDtNxZ98Ejb3zGmIXKcVxfpbiC4xXmvcOnf-3UyEgSGMpltW0kxl4heOLHhq8kt6YR8iPeVKYUxEdpEddqNJdR4~QxEpikganyVC5-cLZRLM6RALNbN0lIrQvflFOLZ7QPhiokwfEGYMWBMKqjgsDkMKgySMSJPWlalj~sOaCqQ8Vk40WWi2EwVlpwYA-pLeZkrgzrDDrwodDd-MwKC6ycEiMpP57HajD1B264~1yIPTLgU126sX3hA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'seo',
    title: 'The 7 Most Successful Event Companies In Region'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/2631/43e1/4ba056112a8d70b98a3b53405cef8add?Expires=1684713600&Signature=o51ELcE0nthV8Lfo7maUw4OWBiQWy6~hLSClk~ADZNbvNgNSqKWTOqdScgQYAezx~7V-v4xQaK2-pwxQaYjM3xJhrb5V1jxMpuFx13gGedA0O7X1sfs8JUMsz-Q7hB4owrZskp3KSrdkG5NRzSXAjFSNot~Je4c7O1HrORoQ3H9N-8ru8s1ICkL8s4OdJ6jt7qdpiECqh~VrvgUQWRGGhGpjODAj4338wlETRLGykgz6q9ZaynYhHoTeLiJYmuhsS889d9wMWhXy6kZZ6pB2-IGvNMZ0OcDT7z2Fhb88~Q~467x7JflxvNFLuLkLFhfIcWb45hARgX~2blG18u1Uog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'branding',
    title: 'Apply These 7 Secret Techniques To Improve Event'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/10ab/0dc1/02447ebb0a457b01fd1fe027c112ada3?Expires=1684713600&Signature=kSy7mTZJF943cuacc02BXT~w3igZd9ecXNsZrWNi~iwIsl7fu3Uq6GyupmP20pqffXE2kZ32SwIZg3s66gNVc8~aE53nLd1k3WfARWtiqW6TW7vc2GkGnFFXPvDXV0IVYnl6ggVb4VVm~e26SLS13C4qHF6KyYSUdaFthkHI-ekmkEpJJHEudPGMl9HFnd2msjdomvpq2R08nTlHCPP8k0yygQyzXHSiEdKw-uCfKcRa~AyazHT4HlXYOuE-bv~Cy~Nm-qXxuSy75U3YdVOPI2VWgWFvV5JLcfTGraL6qhO5wN~jbbFuNDK2O9Z0ZHBjlcjURhY2C5p7NGz9WRSIcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'branding',
    title: 'The 7 Biggest Event Mistakes You Can Easily Avoid'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/4916/7994/bac567a0b380ef90c5912fa45cbbe13b?Expires=1684108800&Signature=F-~pG0LVKxEbivn~i-7PWRlvbumjA6ohB-KFxQNVGZtGlEf7fQrY52l6qF50q5qzoijnlPPCxFwGDleA83-xKv5kHwYDoZ--nDve3qKoo0C5i71s-wZxk0fLVpqcL5fv~nR-Dr5IUHkcuIqorh5MZJh-OgQt4N0nh8I53eX46qTDiK07SUQ5WMkYmpVy8CcISD5rJ-hhbRN-ZNxieNDGeLBXcy22BR1NyJRnzEI05FUu~kIw4BFSflXeCbu-yn37glXUDaPtBwpnjRyBEBBEkZffF9i~wGxRkld9ibrGkXtcDVq7G8ibzN0gMvwnPmfXkTG37d6Skwjoc7ie7JATeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'branding',
    title: "Event Doesn't Have To Be Hard. Read These 7 Tips"
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/1caf/faf6/0f68d71d23f8d880c921a1f4e0537c26?Expires=1684713600&Signature=PrXz69oJNDR55-9vOaaAJowUAXzcAmKAxzl-AGwb-XBEv~BEVbzjwq9R-lU-nWKiKP4YVTtzdtMW7jvneO5Hfk5Ax1FCaSz0VGStcFt81qga3-zkbJvWZfmPRlWi7S-W9n0iFoj3bonv89gVN4Z0Ltj9n05C-6r-Mwrr7NVrmEAxjnCkd1SCyM2IECqg0l-ZdSGGsPuxll0BLqfNhNmE-3-JbqfnJph~7yZlCOK-gpw4Nk~6IrnPIo6gLovZCsnMFN94G4cxbyWNWyC9K3SCwwwBBjCf5cXtOjVRyFwlJd6aeSVUfm6mzzgHr49mW5wvpKzVfe3GvWAn10c7QpHx3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'seo',
    title: 'How 7 Things Will Change The Way You Approach Event'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/207b/b29f/74e746b1d38101a99f7e83905e80508e?Expires=1684713600&Signature=WkfFBCsx4IsrAAIYbqC0xagOMXY-reel3psvHVT9V5YYh8v-LknhRveXXlt-5ouvk3suzjntOnKLo9rQ0xuR4Qf9oT1PPRLU3G2OVRAX1deOeuklzV~FGMRy8pweq4q6CsiL6fwTfL8Fjvsxf3aCcOUaKOsFf4~RQYwZYI5BSYhEj4iOc21eOjCw4wbioLcGwDW4Ac20CBpeKUZ3dqvPTqNnTXj5sAF~oHswLT2bnjdfa9guHJmaiFqLlnKYHyjucyJyf8q0DfcEgopVBrwT3LJdl7O6OzULahVzNmDKWXeQI4Tesxy8i6-1irGCfSFf7twtIKnCyYGtB4rdf1~QWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'marketing',
    title: 'My Life, My Job, My Career: How 7 Simple Event Helped Me Succeed'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/81ae/1b14/f858343370894680816c8f371496996b?Expires=1684713600&Signature=c2T-DuMMmOlm18srBKQNapus1wzb27Pu2tXIXViPVUZ-~BI5FxfhKTzoXtJN8NGBtvmHafkD-gbdrNu5RU0FgRbyBzC1OWK1D0qgBsj41~muBzYSTPun8ZiM9mQW1pBZ4RfC8JbEIEC5WMu95EI-~QENZXGerKx98Rv9fk9WYW65y8ohg1PiIr7O0-JrG4HpZQsLb1HGCkGh9ZMQBo~K42Z8j05EL8-nUDQIra8LfNqp1EddKrlB5NvGkr2MgoYA0OpGooR99YmbCymuIdu-6abXLMZSVgrU2tluFvHBihV~KLSgH2Bo71SxAIpNJDqYoYr9m9PDvhcecDhIMsRqLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'marketing',
    title: "Believing These 7 Myths About Event Keeps You From Growing"
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/95d5/1b22/86366a7e1edc97af46a46c79bdb16038?Expires=1684713600&Signature=jHy4KHPQiFqpywif4DbEcENrqLlHLkHPExhFGzCIZeWFWaHMEokb9jh9KWfFMUe7RehTURv37jYKQB~v1yXbrMDdfXyZjcmGv3cN6Bb73ZnwrSwjJClZTOLD~JVSa3yn1FjH8iLu7s5uOcY~jhDQYQ7QnJHZSNALGFTV3hV2UuX5hLhX67udOVV0Qki~nfMaKwAz7M1ZTlLuWNJDmLHS0a7oDE3ti1gA7mvZ24wWdyutN8QZv5hMq~tRNoG0Nq-TYT2ZYvIqkkGo9tXwXZoiQoLaUBZ4~o0AcvRfRpDmpSx1eBZ2EDqg-Y84NxhFGKJpEfsRO5ub9UtSOeTEMMz7Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'seo',
    title: "Don't Waste Time! 7 Facts Until You Reach Your Event"
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/226a/0064/0e66d0f8291e1b67d787b9ec137bcc2b?Expires=1684713600&Signature=gVsZzdxwPJra886ojqvMTur9YP6KkeE-s23H9M0JQklSz7lPvbcQUux6Vt-cbRdOKwLjog-N9ujqfhYMKm6b1AsB8f7pyB8M7bFhtpZkM4coq4P3O2nVjDnV1B~3LnRJr8pmsXNZyrXG6VL70aIKQ2ackmTMYK8UJCxFhayC01kMSC1Nl5dYEnxUhAuf7QfrgK3K6m7v8wEBaep8QFClFXu5sEaprFfKYmMFADBMNxztI5f5J9TSiRyTyHF1DeUQN4jOOfvkVjD0xSNYUfYjl3~r6Gpa09lr273AlvT-OF0b-X6nxObJtCrAGSg19JP7vSLvZRwbwQ24i5LYi8Vg8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'seo',
    title: '7 Places To Get Deals On Event'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/2c1d/7a72/99daa9cab18ade57ffb9807a9f3dccfe?Expires=1684713600&Signature=Relo1Y64EU-CA-8MWpe5wJ0RFvYV3TniVpcZDCHK5TYByOkycLCSywjgn8NBiEcsk322skZW3DsQKBVdOTU~UwRiVkiXLH~JDtNxZ98Ejb3zGmIXKcVxfpbiC4xXmvcOnf-3UyEgSGMpltW0kxl4heOLHhq8kt6YR8iPeVKYUxEdpEddqNJdR4~QxEpikganyVC5-cLZRLM6RALNbN0lIrQvflFOLZ7QPhiokwfEGYMWBMKqjgsDkMKgySMSJPWlalj~sOaCqQ8Vk40WWi2EwVlpwYA-pLeZkrgzrDDrwodDd-MwKC6ycEiMpP57HajD1B264~1yIPTLgU126sX3hA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'seo',
    title: 'The 7 Most Successful Event Companies In Region'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/2631/43e1/4ba056112a8d70b98a3b53405cef8add?Expires=1684713600&Signature=o51ELcE0nthV8Lfo7maUw4OWBiQWy6~hLSClk~ADZNbvNgNSqKWTOqdScgQYAezx~7V-v4xQaK2-pwxQaYjM3xJhrb5V1jxMpuFx13gGedA0O7X1sfs8JUMsz-Q7hB4owrZskp3KSrdkG5NRzSXAjFSNot~Je4c7O1HrORoQ3H9N-8ru8s1ICkL8s4OdJ6jt7qdpiECqh~VrvgUQWRGGhGpjODAj4338wlETRLGykgz6q9ZaynYhHoTeLiJYmuhsS889d9wMWhXy6kZZ6pB2-IGvNMZ0OcDT7z2Fhb88~Q~467x7JflxvNFLuLkLFhfIcWb45hARgX~2blG18u1Uog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'branding',
    title: 'Apply These 7 Secret Techniques To Improve Event'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/10ab/0dc1/02447ebb0a457b01fd1fe027c112ada3?Expires=1684713600&Signature=kSy7mTZJF943cuacc02BXT~w3igZd9ecXNsZrWNi~iwIsl7fu3Uq6GyupmP20pqffXE2kZ32SwIZg3s66gNVc8~aE53nLd1k3WfARWtiqW6TW7vc2GkGnFFXPvDXV0IVYnl6ggVb4VVm~e26SLS13C4qHF6KyYSUdaFthkHI-ekmkEpJJHEudPGMl9HFnd2msjdomvpq2R08nTlHCPP8k0yygQyzXHSiEdKw-uCfKcRa~AyazHT4HlXYOuE-bv~Cy~Nm-qXxuSy75U3YdVOPI2VWgWFvV5JLcfTGraL6qhO5wN~jbbFuNDK2O9Z0ZHBjlcjURhY2C5p7NGz9WRSIcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    type: 'branding',
    title: 'The 7 Biggest Event Mistakes You Can Easily Avoid'
  },
]

function CaseStudiesPage() {

  const darkScheme = useSelector(state => state.general.darkScheme)

  const { t } = useTranslation()


  const indicator = useRef();
  const items = useRef([]);
  const itemsArray = ['all', 'branding', 'digital', 'marketing', 'seo', 'development']
  const [activeType, setActiveType] = useState(itemsArray[0])
  

  const handleIndicator = (el, id) => {
    setActiveType(itemsArray[id])

    items.current.forEach((elem, index) => {
      elem.classList.remove('CaseStudies__list-nav-item-active');
      // elem.current.removeAttribute('style');
    });

    indicator.current.style.width = "".concat(el.offsetWidth, "px");
    indicator.current.style.left = "".concat(el.offsetLeft, "px");
    el.classList.add('CaseStudies__list-nav-item-active');
  }


  const [cards, setCards] = useState(cardsArray)

  useEffect(() => {
    setTimeout(() => {
      if (activeType === "all") {
        setCards(cardsArray)
        return
      }
      setCards(cardsArray.filter(elem => elem.type === activeType.toLocaleLowerCase()))
    }, 300)
  }, [activeType])

  const prevBtn = useRef()
  const customPagination = useRef()
  const nextBtn = useRef()


  const dispatch = useDispatch()

  const handleSlideClick = (elem) => {
    dispatch(setCaseStudiesDetails({
      title: elem.title,
      type: elem.type
    }))
  }




  return (
    <>
      <article className={`CaseStudies__main ${darkScheme ? 'CaseStudies-dark' : ''}`}>
        <div className="container CaseStudies__main-container">
          <h1>{t('CaseStudies.list.title')}</h1>
          <p>{t('CaseStudies.list.description')}</p>

          <div className='CaseStudies__list-wrapper'>
            <nav className='CaseStudies__list-nav'>
              {itemsArray.map((elem, index) => <p key={Date.now() + index} ref={el => items.current[index] = el} className={`CaseStudies__list-nav-item ${elem === activeType ? 'CaseStudies__list-nav-item-active' : ''}`} onClick={e => handleIndicator(e.target, index)}>{t('CaseStudies.list.swiper-nav.' + elem)}</p>)}

              <span ref={indicator} className='CaseStudies__list-nav-indicator'></span>
            </nav>

            <div className='CaseStudies__list-items-container'>
              <Swiper
                breakpoints={{
                  // when window width is >= 640px
                  0: {
                    slidesPerView: 1,
                    slidesPerGroup: 9,
                    grid: {
                      rows: 9,
                      fill: 'row'
                    }
                  },
                  // when window width is >= 768px
                  576: {
                    slidesPerView: 2,
                    slidesPerGroup: 8,
                    grid: {
                      rows: 4,
                      fill: 'row'
                    }
                  },
                  1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 9,
                    grid: {
                      rows: 3,
                      fill: 'row'
                    }
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
                pagination={{
                  el: '.CaseStudies__list-swiper-pagination',
                  clickable: true,
                  renderBullet: (index, className) => {
                    return '<span class="' + className + '">' + (index + 1) + '</span>'
                  }
                }}
                speed={0}
                modules={[Grid, Pagination, Navigation]}
                className="CaseStudies__list-swiper"
              >
                {cards.length ? cards.map((elem, index) => 
                  <SwiperSlide key={Date.now() + index} className='CaseStudies__list-swiper-slide'>
                    <Link to='/case-studies/list/details' onClick={() => handleSlideClick(elem)}>
                      <img src={elem.image} alt={'image-'+index} />
                      <div>
                        <p>{t('CaseStudies.list.swiper-nav.' + elem.type)}</p>
                        <h1>{elem.title}</h1>
                      </div>
                    </Link>
                  </SwiperSlide>
                ) : (
                  <div className="CaseStudies__list-swiper-empty">
                    <h1>Empty...</h1>
                  </div>
                )}
              </Swiper>

              <div className="CaseStudies__list-swiper-navigation">
                <button ref={prevBtn} className='CaseStudies__list-swiper-prevBtn'>
                  <img src={prevArrowIcon} alt="prev-arrow-icon" />
                </button>
                <div ref={customPagination} className="CaseStudies__list-swiper-pagination"/>
                <button ref={nextBtn} className='CaseStudies__list-swiper-nextBtn'>
                  <img src={prevArrowIcon} alt="next-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>


      <Testimonials />
      <LatestPosts />
    </>
  )
}

export default CaseStudiesPage