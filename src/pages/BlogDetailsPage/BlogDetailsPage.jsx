import React from 'react'
import LatestPosts from '../../components/LatestPosts/LatestPosts'
import { Link, useParams } from 'react-router-dom'

import './BlogDetailsPage.css'

import arrowIcon1 from './assets/arrow-icon1.svg'
import shareIcon from './assets/share-icon.svg'
import likeIcon from './assets/like-icon.svg'
import iconQuotes from './assets/ic_quotes.svg'
import iconFacebook from './assets/ic_facebook.svg'
import iconInstagram from './assets/ic_instagram.svg'
import iconLinkedin from './assets/ic_linkedin.svg'
import iconTwitter from './assets/ic_twitter.svg'
import iconFacebook2 from './assets/ic_facebook2.svg'
import iconInstagram2 from './assets/ic_instagram2.svg'
import iconLinkedin2 from './assets/ic_linkedin2.svg'
import iconTwitter2 from './assets/ic_twitter2.svg'
import { useTranslation } from 'react-i18next'



const postsArray1 = [
  {
    backgroundImage: 'https://s3-alpha-sig.figma.com/img/4d1a/0671/febd417125bf6e127a0c336f01bf3c40?Expires=1684713600&Signature=EA-b6R1IMXkPm5TllbDVBoULngLtGd3O8pHA1sa22TJg7Xo97v1CTMZs10o1TehdbSBH28Q~b18P5~5uckX9l~yg8~2RkD-dEPaPBtK0KnI72ch9F5NIJIKc2wZPFjrxu2DBFxOhMluh6neovhuCEWGYH8MDmzIFLX~JMnnSQTGPrJEvLDKxpao7otc8tkiDFJSL7cmz33CVzMK1e3wX09P58IXKrEWmo9c0Jpk-ziXPVwNN0lRUTh1ToKnGJlW~UK~wi8qxFUw7Vef0l68aK9lOP9oqL27xJocl~1TFGL-ssjuL102GPfGURo7R8geggO~uNLT953W2PRbJ1gP5xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    day: '15',
    month: 'Dec',
    year: '2022',
    min: 8,
    title: 'Any mechanical keyboard enthusiasts in design?',
    user: 'Francesca Richards',
    image: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1684108800&Signature=ECs32kJKMyc~M8aOosFC1vrcZss8HPMJEPu4GGAU8YqVhhmydFKbhpgbNqXvkqT~g0n3dC65e2PPRvEgUR7etYHR8wqe1JEVimMnjvxeoUlfe5WbCMSJMnuxU6PzykHlh7lnxB5wb1KrOyuF0x1wASOODeV-n7L-0l8ZOWlVfyDAvwTxfDsvP04sba10tfYeKykhGbyWJ71CABdVbU06JDPBHVZQeZnoYzagT9afhWcUlYegTeMj7Lsg~kP7FJOv6KgWUaOcOhVm0oXwS64CjUX3fgIDqJdrLR5alSfqdjL2xr9aSpaj1xEbIc71liw7w2l~orNyvgPsPeOZH3kDaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    backgroundImage: 'https://s3-alpha-sig.figma.com/img/5faf/53e9/1b8f419402a1ea54472856b61a5faecd?Expires=1684713600&Signature=fBtjqABDX~C3liwmGA2voT3UwR7kJdqVTqKrmgkO3cF8qIvhS9GEbj9hgcLaWoX4lx3REexmsde7TuGjCDaJsXeytbmiPxiCTjGDdN9Usy8iHSu2JjqKTexyWu15UP1~47mMBsBg0FqraWjZlIZMsgmfv0W8XkESO2hfqzw4K6gIdI8X8Vz8XY-QvIP9byn--lHGRUJEWTvWxg1Rf0pHf6yYyzRO97Q0reTak08F8fFX0EzDRYS4Iea4JGEOAuzNCO8u-x8InuQwxXSq0ihxvyH4U~YX2l28d-3TUUzIcZ7~nqNmv9GRpcI6EFPkgf1l8~AlQueVh~OCTQScXXhIzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    day: '4',
    month: 'Jul',
    year: '2021',
    min: 8,
    title: 'How to design a product that can grow itself 10x in year:',
    user: 'Bianka Lancaster',
    image: 'https://s3-alpha-sig.figma.com/img/d788/205e/b900394b7ef6d2f786b811f7439ee84c?Expires=1684713600&Signature=Mm0QRBVtqYc3EkfRNdkb5Pp2xzfieK6GbXHnkb6tyidRucyvs-7rNaZLsziUlroM4TXnluTHvnSkIuw5Boq5DMdUQ~AcDYSYYN12sOAfXWMUw7yralm-w08eDfGZUmnCgprITqsjUrN72WC0BBCzIi9QfqyDjrm~uB8Xlwy0bugSFMUX2jtdcgTqv5WjfOapfkNFzJdPzeukquc4pPH8jQvKSwO1uhmu73ZdKHWQiHFdbTn2hZvZItkFRePZaw1kjtxGn06Xipwarei2HoGU69H930k4lx5D1a~D4D~iRfe4tQi7uI6ktQoVkMIfVcaECJ4rKn2GNKoyR7SBWJnppA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    background: true
  },
  {
    backgroundImage: 'https://s3-alpha-sig.figma.com/img/c3a3/3b51/0578db31cd97ffaced6fcbc120e9c402?Expires=1684713600&Signature=aTineQBMFjOHdA2-gzuo0fDSXpP5GDxPHTMSWP2UuYAF-Yv5QXh13aL540jJ9PIkKjdQAKNNV8KFWHaCz0Uo3RD~IcFE-kHkoOpafkpSNSlSya6rfc7GCx~ee1myRjna4f8xUMpZOfT~-GXDVIaGhndrpDq-NykMQFcfLWw9H2ytSjMG7FW9cWCSFS1mgzf6yYt7KlWCxSXf59uQtkbNJ-K2MM8C8OaJgtQQx9XrdFJppDBmWivfVMXfyKETwwCQo2ReJIXHxcJe4FFuH8TAJAVSKSCYG15uh2cWmn2PjbTli-G9iLolttA5XS1pp6m75wAjMnEhDRnyagy4vB-PVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    day: '19',
    month: 'Apr',
    year: '2019',
    min: 8,
    title: 'Any mechanical keyboard enthusiasts in design?',
    user: 'Husna Navarro',
    image: 'https://s3-alpha-sig.figma.com/img/db23/a13b/b8ff26fefffb11e757767cc8eefa11d9?Expires=1684713600&Signature=cIKV9R~7dNy1kXQkjsihGDIjv5Q2yJC4FoQi5i9XWKWJMUisgoyC6OW3wBlFOuwpMZS4Uebfl~hWXSlB~lNBxSiWbE5xU524NqpOBwHxeEZb9MA1QRHUSF4gAd09KraejlkQRv4nji09YWotw~9rVb7Q5xKD3JDRZa7hcwOH4jmxzducZcaTkJ1CD7dvgjfpLScVCtTQA98H12Tqw2ivXnzpR4o6dTLPNmHmjEQWq-yvK~oeNKr1OFJ-XPCSyeSTxl0sRMdjy1H~4SHbH16X~XreWqi8urGc-4yBrjAKnkh2zi9k6i9pNcN7NWoXpiK2Mtk808FCCj~cAiMjs5kKYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    backgroundImage: 'https://s3-alpha-sig.figma.com/img/207b/b29f/74e746b1d38101a99f7e83905e80508e?Expires=1684713600&Signature=WkfFBCsx4IsrAAIYbqC0xagOMXY-reel3psvHVT9V5YYh8v-LknhRveXXlt-5ouvk3suzjntOnKLo9rQ0xuR4Qf9oT1PPRLU3G2OVRAX1deOeuklzV~FGMRy8pweq4q6CsiL6fwTfL8Fjvsxf3aCcOUaKOsFf4~RQYwZYI5BSYhEj4iOc21eOjCw4wbioLcGwDW4Ac20CBpeKUZ3dqvPTqNnTXj5sAF~oHswLT2bnjdfa9guHJmaiFqLlnKYHyjucyJyf8q0DfcEgopVBrwT3LJdl7O6OzULahVzNmDKWXeQI4Tesxy8i6-1irGCfSFf7twtIKnCyYGtB4rdf1~QWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    day: '19',
    month: 'Apr',
    year: '2019',
    min: 8,
    title: 'Any mechanical keyboard enthusiasts in design?',
    user: 'Maddox Fletcher',
    image: 'https://s3-alpha-sig.figma.com/img/2d26/9b51/df9e5228311aab8c6a38d31109d4d31b?Expires=1684713600&Signature=UKr48TSANfGdRUBGSXKuDc7xpg4w-RZj9vvZoDhTLP54osLDleEGl1Kq-kxYuXJhO-PFoaerjDR-PhWem1ze6g~U0YapXHTizbLTO4ARTrXaTnO-BRGSONmdd8OvzfEtJDjp8emV~zzq6DlxsL6uk08dqymx~RNTouQVQu22ufVmAzPtNwXedwGgJ71WuT3O9Rm6t58mHOWaQotawS1xDKoc2GhcIcx6OfvJ2ASgM5SeS0gxOYqVBtLPZ~ajkYhkr~iSm7ocxXqDC4i1biaE4G72r9yVQ8aLJCDey5ARFPtAx~ybP-jWgj~DJn0hO0pgy~LOADtaSsmoQdTMwlMikA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    backgroundImage: 'https://s3-alpha-sig.figma.com/img/226a/0064/0e66d0f8291e1b67d787b9ec137bcc2b?Expires=1684713600&Signature=gVsZzdxwPJra886ojqvMTur9YP6KkeE-s23H9M0JQklSz7lPvbcQUux6Vt-cbRdOKwLjog-N9ujqfhYMKm6b1AsB8f7pyB8M7bFhtpZkM4coq4P3O2nVjDnV1B~3LnRJr8pmsXNZyrXG6VL70aIKQ2ackmTMYK8UJCxFhayC01kMSC1Nl5dYEnxUhAuf7QfrgK3K6m7v8wEBaep8QFClFXu5sEaprFfKYmMFADBMNxztI5f5J9TSiRyTyHF1DeUQN4jOOfvkVjD0xSNYUfYjl3~r6Gpa09lr273AlvT-OF0b-X6nxObJtCrAGSg19JP7vSLvZRwbwQ24i5LYi8Vg8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    day: '19',
    month: 'Apr',
    year: '2019',
    min: 8,
    title: 'Any mechanical keyboard enthusiasts in design?',
    user: 'Calista Campbell',
    image: 'https://s3-alpha-sig.figma.com/img/f336/22c4/08039bca0f03abd1bb2e7f4349fc721c?Expires=1684713600&Signature=CJrm9Bzo5UVMt6k-9zqtz9QrPU~GoLhZz85jPXmJHoIknMtRRybfpHRggVk7Lkr21hU3GMFVK9pb1H0NtcygBLQk0aTkXG~XpJczGWrdt-tstPcDduKK-VE9H3SZCLAPpMM0lZTC9IeY-4AMVPxEZjNO0e~4Z63lzDzbIcCP6UhdswgZ1EtMiYhCyIfSN57bckkt9znSMO~bk1N1jkz~HdKy1vEFFPVQh3xuSOhmsFAuT8GgziXNElJs59UzKBfqAMJcj~dbxHPQY8awoto2ORsyEbzWfXRYtVX6ks1oPo14Us7~o1I44ZCDhkj6mq7p3Amj7dxSx0kYUfQ6TX9VPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    backgroundImage: 'https://s3-alpha-sig.figma.com/img/7b96/f129/9b59dc9adcb5f888d0e9c1cb12ae0054?Expires=1684713600&Signature=bQ9lQ~BdTZYjPtYTT-va9MJgaCIgEh2ODodTL6e4XBTEfl0CuRqbnzdqfUOk125ynyRSUP~NsUtGouNbm5mnF4cKnhXl3uuW32ulBjlfoQeLJtVzU-pcFLJQWaYy9X08cmyCz8T4qUHvAZzH~UL7XTnP0Jb8J9WbTBons5rfz8etNfL1CdoLktk3fBJDZYayDcokCg1LCD8EaVLfB3onIlGI2AvapOobDqZ1aoj36Z5K8HCQLRBI5~AW9AIyjpQwM5uHPo-Sj1DNNsxlBK4439T3yQh550Jf2lr~1uX7sw-Jp2RE2osodPd16PKvv7MmKPlVLmZe6oVfkPwMFu2csQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    day: '19',
    month: 'Apr',
    year: '2019',
    min: 8,
    title: 'Any mechanical keyboard enthusiasts in design?',
    user: 'Antoine Findlay',
    image: 'https://s3-alpha-sig.figma.com/img/4106/12d4/d4c3fbfbd509a8bdf6135f61e8d42d75?Expires=1684713600&Signature=krYQpXUddfyTBGkz2YgtXHJzE3VT0HsLtnUBUWTdSuymHyDV14k7zzTnFWnhvAp3fyWXvkvpjQHEa7ujA9ckVO1IQALt2IFuz-sERRADLoZpV8gE3SsaDCPvD6WjHdbwjeEyR~odvg7QY1YoXZuJI-SZNJoMVpIymmcvzW4go-UHuyVGpDQKwBVvskdbzTPG8UGrQx-XkzwZ4Yx4bjbGQgBzBSRs5wPCzsbEitXXbtCLR9zgIWsGOi6JAjzzZ934laGwTBQQoOteWYnY32GLXAA46hyeCNLyChs9ZTRp18T0Qr7pPKk-8TNrYCbPT5dMaIuWNhMUNxnvYROeoK34KQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    backgroundImage: 'https://s3-alpha-sig.figma.com/img/1caf/faf6/0f68d71d23f8d880c921a1f4e0537c26?Expires=1684713600&Signature=PrXz69oJNDR55-9vOaaAJowUAXzcAmKAxzl-AGwb-XBEv~BEVbzjwq9R-lU-nWKiKP4YVTtzdtMW7jvneO5Hfk5Ax1FCaSz0VGStcFt81qga3-zkbJvWZfmPRlWi7S-W9n0iFoj3bonv89gVN4Z0Ltj9n05C-6r-Mwrr7NVrmEAxjnCkd1SCyM2IECqg0l-ZdSGGsPuxll0BLqfNhNmE-3-JbqfnJph~7yZlCOK-gpw4Nk~6IrnPIo6gLovZCsnMFN94G4cxbyWNWyC9K3SCwwwBBjCf5cXtOjVRyFwlJd6aeSVUfm6mzzgHr49mW5wvpKzVfe3GvWAn10c7QpHx3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    day: '19',
    month: 'Apr',
    year: '2019',
    min: 8,
    title: 'Any mechanical keyboard enthusiasts in design?',
    user: 'Margaret Donnelly',
    image: 'https://s3-alpha-sig.figma.com/img/c5f3/5d47/9a5e7db3cd2ec8afb0239cd7ee5c4697?Expires=1684713600&Signature=dbSlcpmz48xUBEpuf2Pu1bvwhvFQAVBzcaGeEdQf~3lfnAX0J-wul0b08w9~WuqKkYI07oe67hL8yLe4bK6qUulV-kzowVkIhu5vJ8uT9fe72gmFruITwMfGTLCcbW4dA-Bq~tEg4B6dkUT3LCtNB13wrXDjbhnVwec7zWOezgHEMO5llPi7oRVggZyls5NUtw6ujaw4XQMmQtMCQIzVGcsykQ3H56hD27fwDo3alETgXQ9HhSTTjzjkoexa0eX-WX-E7e15hXGJeouER77uVIQyQi8yrwOoaLki9Upj4uWn0v3xD4Kcp~UNxXts1JCcdfpJuyr7r7cGolfpb7C0pA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    backgroundImage: 'https://s3-alpha-sig.figma.com/img/95d5/1b22/86366a7e1edc97af46a46c79bdb16038?Expires=1684713600&Signature=jHy4KHPQiFqpywif4DbEcENrqLlHLkHPExhFGzCIZeWFWaHMEokb9jh9KWfFMUe7RehTURv37jYKQB~v1yXbrMDdfXyZjcmGv3cN6Bb73ZnwrSwjJClZTOLD~JVSa3yn1FjH8iLu7s5uOcY~jhDQYQ7QnJHZSNALGFTV3hV2UuX5hLhX67udOVV0Qki~nfMaKwAz7M1ZTlLuWNJDmLHS0a7oDE3ti1gA7mvZ24wWdyutN8QZv5hMq~tRNoG0Nq-TYT2ZYvIqkkGo9tXwXZoiQoLaUBZ4~o0AcvRfRpDmpSx1eBZ2EDqg-Y84NxhFGKJpEfsRO5ub9UtSOeTEMMz7Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    day: '19',
    month: 'Apr',
    year: '2019',
    min: 8,
    title: 'Any mechanical keyboard enthusiasts in design?',
    user: 'Pamela Mclellan',
    image: 'https://s3-alpha-sig.figma.com/img/eb5b/e8c3/076bf569f148b4de2137c7ae8404fbf7?Expires=1684713600&Signature=JYQ1byJmfnIPMwzYI4L0yiT5exnmiihMNPRcKNlwLXrTYpzpxRXZ43OiZcnvuJaQ0HoAs-LTD0wjF5A0u7tmNqO5R5AaZ1GD64hxsRwbMe2I3NWjNirLtINrcFN6Da1U2yw3V0Ff8XNCVH8hFkVFUEZljHJkc2pW6zQtybz026MGlE0~mRy2E5QGS0deIU0VnaOPD~NKjSeVjY4MOkSVem3cTxBTUcLAvrZfqXAcqw4818pM0OmZX8wF-1W7YV2XQlDaCC7uWYEaa6XaP33dd7rMrsraoOPlRShzLFb5HSeOZgSQmb9Q2yPfBEwz6sDKrnLLDbrtLiSqO6SEQjQ29w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  }
]


const postsArray = [...postsArray1, ...postsArray1.reverse(), ...postsArray1.reverse(), ...postsArray1.reverse(), ...postsArray1.reverse(), ...postsArray1.reverse(), ...postsArray1.reverse(), ...postsArray1.reverse(), ...postsArray1.reverse(),]




function BlogDetailsPage({match}) {
  const {t} = useTranslation()

  const {id} = useParams()

  const currentPost = postsArray.filter((elem, index) => index == id)[0]
  const nextPost = postsArray.filter((elem, index) => index == id+1)[0]
  const prevPost = postsArray.filter((elem, index) => index == id-1)[0] || {}

  return (
    <div className="BlogDetailsPage">
      <article className='BlogDetailsPage__image'>
        <img src="https://s3-alpha-sig.figma.com/img/4f8a/82bc/de34432dc35a4068f8dfc6150da87b7b?Expires=1684713600&Signature=a0HZZxADb9y7pzr~A6IQDPFWKFEtvnHpqIIoG-hYBE230UwCvRfXPY9~w3rvraLo5-LoRvocmf-KQnNsoPBhuzLOU4WpN5UshBXBvIga~ov~S3aSA2ssvNWqj2Si8CBq9s6aMj27o2ZWLbgwbw0y0MBSY6hA-zQKlcFLUfdlZdkWxIlEFrKW-iZSPgSLixmFH-bJnEJU9sZYIGMLYUeOLplHHEFehIoYsllGWfZ9s1YhhOrLF5tEGpAyD3lQg4jVFNkBDX7gEi3Q662a5f8FF6tQLWnWVbJy0JsOTpAaJRxvfQZxkPkjnHk5cnsRPz8pW9hwHlIRlmIz2FJd1li4SA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="main-image" />
      </article>

      <nav className='BlogDetailsPage__nav'>
        <div className='container BlogDetailsPage__nav-container'>
            <Link to='/'>{t('header.home')}</Link>
            <img src={arrowIcon1} alt="arrow-icon" />
            <Link to='/case-studies/list'>{t('header.select.blog')}</Link>
            <img src={arrowIcon1} alt="arrow-icon" />
            <Link to='/case-studies/list/details' className='link-disabled'>{currentPost.title.length > 20 ? currentPost.title.substring(0, 19)+'...' : currentPost.title}</Link>
        </div>
      </nav>

      <article className='BlogDetailsPage__content'>
        <div className="container BlogDetailsPage__content-container">
          <span>8 min read</span>
          <h1>{currentPost.title}</h1>
          <p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>

          <div className="BlogDetailsPage__content-autor">
            <div className="left">
              <img className='user-avatar' src={currentPost.image} alt="user-avatar" />

              <div>
                <h1>{currentPost.user}</h1>

                <span>{currentPost.month} {currentPost.day}, {currentPost.year}</span>
              </div>
            </div>

            <div className="right">
              <button>
                <img src={shareIcon} alt="share-icon" />
              </button>
              <button>
                <img src={likeIcon} alt="like-icon" />
              </button>
            </div>
          </div>

          <p className='BlogDetailsPage__bigletter'>
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh. Donec posuere vulputate arcu. Quisque rutrum.
            <br />
            <br />
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
            <br />
            <br />
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
          </p>

          <img src="https://s3-alpha-sig.figma.com/img/5faf/53e9/1b8f419402a1ea54472856b61a5faecd?Expires=1684713600&Signature=fBtjqABDX~C3liwmGA2voT3UwR7kJdqVTqKrmgkO3cF8qIvhS9GEbj9hgcLaWoX4lx3REexmsde7TuGjCDaJsXeytbmiPxiCTjGDdN9Usy8iHSu2JjqKTexyWu15UP1~47mMBsBg0FqraWjZlIZMsgmfv0W8XkESO2hfqzw4K6gIdI8X8Vz8XY-QvIP9byn--lHGRUJEWTvWxg1Rf0pHf6yYyzRO97Q0reTak08F8fFX0EzDRYS4Iea4JGEOAuzNCO8u-x8InuQwxXSq0ihxvyH4U~YX2l28d-3TUUzIcZ7~nqNmv9GRpcI6EFPkgf1l8~AlQueVh~OCTQScXXhIzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="content-image1" />

          <div>
            <h1>Curabitur suscipit suscipit tellus</h1>
            <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
          </div>

          <div>
            <h1>Nullam accumsan lorem in</h1>
            <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
          </div>

          <div className='quotes'>
            <img src={iconQuotes} alt="quotes" />
            <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.</p>
          </div>

          <img src="https://s3-alpha-sig.figma.com/img/7b96/f129/9b59dc9adcb5f888d0e9c1cb12ae0054?Expires=1684713600&Signature=bQ9lQ~BdTZYjPtYTT-va9MJgaCIgEh2ODodTL6e4XBTEfl0CuRqbnzdqfUOk125ynyRSUP~NsUtGouNbm5mnF4cKnhXl3uuW32ulBjlfoQeLJtVzU-pcFLJQWaYy9X08cmyCz8T4qUHvAZzH~UL7XTnP0Jb8J9WbTBons5rfz8etNfL1CdoLktk3fBJDZYayDcokCg1LCD8EaVLfB3onIlGI2AvapOobDqZ1aoj36Z5K8HCQLRBI5~AW9AIyjpQwM5uHPo-Sj1DNNsxlBK4439T3yQh550Jf2lr~1uX7sw-Jp2RE2osodPd16PKvv7MmKPlVLmZe6oVfkPwMFu2csQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="content-image2" />

          <p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
            <br />
            <br />
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
            <br />
            <br />
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
          </p>

          <div className='tags BlogDetailsPage__tags'>
            <h2>Tags:</h2>

            <button>Marketing</button>
            <button>Development</button>
            <button>HR & Recruting</button>
            <button>Design</button>
            <button>Management</button>
          </div>

          <div className='social-media BlogDetailsPage__social-media'>
            <h2>Share:</h2>

            <div>
              <button className='facebook-btn'>
                <img src={iconFacebook} alt="Facebook-icon" />
                Facebook
              </button>
              <button className='instagram-btn'>
                <img src={iconInstagram} alt="Instagram-icon" />
                Instagram
              </button>
              <button className='linkedin-btn'>
                <img src={iconLinkedin} alt="LinkedIn-icon" />
                LinkedIn
              </button>
              <button className='twitter-btn'>
                <img src={iconTwitter} alt="Twitter-icon" />
                Twitter
              </button>
            </div>
          </div>

          <hr />

          <div className='BlogDetailsPage__content-comments'>
            <img src={nextPost ? nextPost.image : prevPost.image} alt="user-avatar" />

            <div>
              <div className='BlogDetailsPage__content-comments-top'>
                <div className='left'>
                  <h1>{nextPost ? nextPost.user : prevPost.user}</h1>
                  <p>Curator of Marketing Course</p>
                </div>

                <div className='right'>
                  <a href="https://facebook.com">
                    <img src={iconFacebook2} alt="facebook-icon" />
                  </a>
                  <a href="https://instagram.com">
                    <img src={iconInstagram2} alt="instagram-icon" />
                  </a>
                  <a href="https://linkedin.com">
                    <img src={iconLinkedin2} alt="linkedin-icon" />
                  </a>
                  <a href="https://twitter.com">
                    <img src={iconTwitter2} alt="twitter-icon" />
                  </a>
                </div>
              </div>
              <p>Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..</p>
              <span>Member since Mar 15, 2021</span>
            </div>
          </div>
        </div>
      </article>

      <LatestPosts />
    </div>
  )
}

export default BlogDetailsPage