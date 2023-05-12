import React, { useRef, useState } from 'react'
import { Navigation, Pagination as swiperPagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import Pagination from '@mui/material/Pagination';
import { makeStyles } from "@mui/styles";



import './BlogPage.css'

import arrowIcon2 from './assets/arrow-icon2.svg'
import searchIcon from './assets/search-icon.svg'
import Button from '../../components/Button/Button';
import { useEffect } from 'react';



const swiperCards = [
  {
    image: 'https://s3-alpha-sig.figma.com/img/226a/0064/0e66d0f8291e1b67d787b9ec137bcc2b?Expires=1684713600&Signature=gVsZzdxwPJra886ojqvMTur9YP6KkeE-s23H9M0JQklSz7lPvbcQUux6Vt-cbRdOKwLjog-N9ujqfhYMKm6b1AsB8f7pyB8M7bFhtpZkM4coq4P3O2nVjDnV1B~3LnRJr8pmsXNZyrXG6VL70aIKQ2ackmTMYK8UJCxFhayC01kMSC1Nl5dYEnxUhAuf7QfrgK3K6m7v8wEBaep8QFClFXu5sEaprFfKYmMFADBMNxztI5f5J9TSiRyTyHF1DeUQN4jOOfvkVjD0xSNYUfYjl3~r6Gpa09lr273AlvT-OF0b-X6nxObJtCrAGSg19JP7vSLvZRwbwQ24i5LYi8Vg8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'February 28, 2018',
    readTime: '8 min read',
    title: 'How to Maximize Your ROI Through Scientific SEM?',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    avatar: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1684713600&Signature=U5cxOz~WZgQczidBXk~BtwS~fO7k9~UD6SWL96xovHCyD~r0pS9ddte8l1tX0hQuKBG9442~q0P3QfGrk9BfL-O9xViXAdUm93TXLNY-ounPBNRmor-PLnwjxCHjYqpf~-BBSNtzvbuXrpjXvu8l3x0apU~kBx3kzj0pItqM34FZcxAKBFEZ9XcqojBQoKUtTfrC5j2P2OOnMTEzGwyYuCfR~Wq3ALddw-2qipRG-fa6NdZJI0Qmy7DtDgdWRQ-yX7m38GzPcxUNz3mFLQhf12bLjqYtbz6cvQi0f6kEZa8SVdx9SYqtbmYi71zWmznRZ8eJTg~85-m~x6NKt8Jx2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Jane Cooper'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/226a/0064/0e66d0f8291e1b67d787b9ec137bcc2b?Expires=1684713600&Signature=gVsZzdxwPJra886ojqvMTur9YP6KkeE-s23H9M0JQklSz7lPvbcQUux6Vt-cbRdOKwLjog-N9ujqfhYMKm6b1AsB8f7pyB8M7bFhtpZkM4coq4P3O2nVjDnV1B~3LnRJr8pmsXNZyrXG6VL70aIKQ2ackmTMYK8UJCxFhayC01kMSC1Nl5dYEnxUhAuf7QfrgK3K6m7v8wEBaep8QFClFXu5sEaprFfKYmMFADBMNxztI5f5J9TSiRyTyHF1DeUQN4jOOfvkVjD0xSNYUfYjl3~r6Gpa09lr273AlvT-OF0b-X6nxObJtCrAGSg19JP7vSLvZRwbwQ24i5LYi8Vg8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'February 28, 2018',
    readTime: '8 min read',
    title: 'How to Maximize Your ROI Through Scientific SEM?',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    avatar: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1684713600&Signature=U5cxOz~WZgQczidBXk~BtwS~fO7k9~UD6SWL96xovHCyD~r0pS9ddte8l1tX0hQuKBG9442~q0P3QfGrk9BfL-O9xViXAdUm93TXLNY-ounPBNRmor-PLnwjxCHjYqpf~-BBSNtzvbuXrpjXvu8l3x0apU~kBx3kzj0pItqM34FZcxAKBFEZ9XcqojBQoKUtTfrC5j2P2OOnMTEzGwyYuCfR~Wq3ALddw-2qipRG-fa6NdZJI0Qmy7DtDgdWRQ-yX7m38GzPcxUNz3mFLQhf12bLjqYtbz6cvQi0f6kEZa8SVdx9SYqtbmYi71zWmznRZ8eJTg~85-m~x6NKt8Jx2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Jane Cooper'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/226a/0064/0e66d0f8291e1b67d787b9ec137bcc2b?Expires=1684713600&Signature=gVsZzdxwPJra886ojqvMTur9YP6KkeE-s23H9M0JQklSz7lPvbcQUux6Vt-cbRdOKwLjog-N9ujqfhYMKm6b1AsB8f7pyB8M7bFhtpZkM4coq4P3O2nVjDnV1B~3LnRJr8pmsXNZyrXG6VL70aIKQ2ackmTMYK8UJCxFhayC01kMSC1Nl5dYEnxUhAuf7QfrgK3K6m7v8wEBaep8QFClFXu5sEaprFfKYmMFADBMNxztI5f5J9TSiRyTyHF1DeUQN4jOOfvkVjD0xSNYUfYjl3~r6Gpa09lr273AlvT-OF0b-X6nxObJtCrAGSg19JP7vSLvZRwbwQ24i5LYi8Vg8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'February 28, 2018',
    readTime: '8 min read',
    title: 'How to Maximize Your ROI Through Scientific SEM?',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    avatar: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1684713600&Signature=U5cxOz~WZgQczidBXk~BtwS~fO7k9~UD6SWL96xovHCyD~r0pS9ddte8l1tX0hQuKBG9442~q0P3QfGrk9BfL-O9xViXAdUm93TXLNY-ounPBNRmor-PLnwjxCHjYqpf~-BBSNtzvbuXrpjXvu8l3x0apU~kBx3kzj0pItqM34FZcxAKBFEZ9XcqojBQoKUtTfrC5j2P2OOnMTEzGwyYuCfR~Wq3ALddw-2qipRG-fa6NdZJI0Qmy7DtDgdWRQ-yX7m38GzPcxUNz3mFLQhf12bLjqYtbz6cvQi0f6kEZa8SVdx9SYqtbmYi71zWmznRZ8eJTg~85-m~x6NKt8Jx2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Jane Cooper'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/226a/0064/0e66d0f8291e1b67d787b9ec137bcc2b?Expires=1684713600&Signature=gVsZzdxwPJra886ojqvMTur9YP6KkeE-s23H9M0JQklSz7lPvbcQUux6Vt-cbRdOKwLjog-N9ujqfhYMKm6b1AsB8f7pyB8M7bFhtpZkM4coq4P3O2nVjDnV1B~3LnRJr8pmsXNZyrXG6VL70aIKQ2ackmTMYK8UJCxFhayC01kMSC1Nl5dYEnxUhAuf7QfrgK3K6m7v8wEBaep8QFClFXu5sEaprFfKYmMFADBMNxztI5f5J9TSiRyTyHF1DeUQN4jOOfvkVjD0xSNYUfYjl3~r6Gpa09lr273AlvT-OF0b-X6nxObJtCrAGSg19JP7vSLvZRwbwQ24i5LYi8Vg8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'February 28, 2018',
    readTime: '8 min read',
    title: 'How to Maximize Your ROI Through Scientific SEM?',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    avatar: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1684713600&Signature=U5cxOz~WZgQczidBXk~BtwS~fO7k9~UD6SWL96xovHCyD~r0pS9ddte8l1tX0hQuKBG9442~q0P3QfGrk9BfL-O9xViXAdUm93TXLNY-ounPBNRmor-PLnwjxCHjYqpf~-BBSNtzvbuXrpjXvu8l3x0apU~kBx3kzj0pItqM34FZcxAKBFEZ9XcqojBQoKUtTfrC5j2P2OOnMTEzGwyYuCfR~Wq3ALddw-2qipRG-fa6NdZJI0Qmy7DtDgdWRQ-yX7m38GzPcxUNz3mFLQhf12bLjqYtbz6cvQi0f6kEZa8SVdx9SYqtbmYi71zWmznRZ8eJTg~85-m~x6NKt8Jx2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: 'Jane Cooper'
  },
]



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



const useStyles = makeStyles(() => ({
  ul: {
    ".App-dark & .MuiPaginationItem-root": {
      color: '#ffffff',
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      color: 'rgba(250, 84, 28, 1)',
      backgroundColor: 'rgba(250, 84, 28, 0.1)'
    },
  }
}));


function BlogPage() {

  const prevBtn = useRef()
  const nextBtn = useRef()

  const classes = useStyles()


  const [page, setPage] = useState(1)
  const [cards, setCards] = useState(postsArray.filter((elem, index) => index >= 0+(page-1)*8 && index < 8*page))
  const handlePaginationCHange = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    setCards(postsArray.filter((elem, index) => index >= 0+(page-1)*8 && index < 8*page))
  }, [page])
  
  return (
    <>
      <div className='BlogPage'>
        <article className='BlogPage__swiper-article'>
          <div className="BlogPage__swiper-background"></div>
          <div className="container BlogPage__swiper-container">
            <Swiper
              breakpoints={{
                0: {
                  allowTouchMove: true
                },
                577: {
                  allowTouchMove: false
                }
              }}
              spaceBetween={50}
              navigation={{
                prevEl: prevBtn.current,
                nextEl: nextBtn.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevBtn.current;
                swiper.params.navigation.nextEl = nextBtn.current;
              }}
              pagination={{
                clickable: true,
              }}
              modules={[swiperPagination, Navigation]}
              className="BlogPage__swiper"
            >
              {swiperCards.length ? swiperCards.map((elem, index) => 
                <SwiperSlide key={Date.now() + index} className='BlogPage__swiper-slide'>
                  <div className="BlogPage__swiper-slide-image">
                    <img src={elem.image} alt={elem.title} />
                  </div>

                  <div className="BlogPage__swiper-slide-content">
                    <div className='BlogPage__swiper-slide-content-top'>
                      <span>{elem.date} • {elem.readTime}</span>
                      <h1>{elem.title}</h1>
                      <p>{elem.description}</p>
                    </div>

                    <div className="BlogPage__swiper-slide-content-bottom">
                      <img className='BlogPage__swiper-slide-avatar' src={elem.avatar} alt={elem.name} />
                      <h3>{elem.name}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ) : (
                <div className="CaseStudies__list-swiper-empty">
                  <h1>Empty...</h1>
                </div>
              )}
            </Swiper>

            <button ref={prevBtn} className="BlogPage__swiper-prev-btn">
              <img src={arrowIcon2} alt="arrow-icon" />
            </button>
            <button ref={nextBtn} className="BlogPage__swiper-next-btn">
              <img src={arrowIcon2} alt="arrow-icon" />
            </button>
          </div>
        </article>

        <article className='BlogPage__posts-article'>
          <div className="container BlogPage__posts-container">
            <div className="BlogPage__posts-main">
              <div className="BlogPage__posts-main-list">
                {cards.map((elem, index) => <section key={index + elem.day} className={`LatestPosts__swiper-slide BlogPage__post-card`}>
                    <img className='BlogPage__post-card-background-image' src={elem.backgroundImage} alt="background-image" />

                    <div className='swiper-slide-background BlogPage__post-card-dimming'>
                    </div>
                    
                    <div className='swiper-slide-header BlogPage__post-card-header'>
                      <p>{elem.day} {elem.month} {elem.year} • {elem.min} mins read</p>

                      <h3>{elem.title}</h3>
                    </div>

                    <div className='swiper-slide-footer BlogPage__post-card-footer'>
                      <img src={elem.image} alt="avatar" />
                      <p>{elem.user}</p>
                    </div>
                  </section>
                )}
              </div>

              <Pagination 
                count={Math.ceil(postsArray.length/8)} 
                className='BlogPage__posts-main-pagination' classes={{ ul: classes.ul}}
                page={page}
                onChange={handlePaginationCHange}
              />
            </div>

            <aside className="BlogPage__posts-aside">
              <label className='BlogPage__posts-aside-search'>
                <img src={searchIcon} alt="search-icon" />
                <input type="text" placeholder='Search...' />
              </label>

              <div className="BlogPage__posts-aside-categories">
                <h1>Categories</h1>

                <ul>
                  <li>Marketing</li>
                  <li>Community</li>
                  <li>Tutorials</li>
                  <li>Business</li>
                  <li>Management</li>
                </ul>
              </div>

              <div className="BlogPage__posts-aside-recentPosts">
                <h1>Recent Posts</h1>
                {postsArray.map((elem, index) => index < 3?  <div key={Date.now() + index} className='BlogPage__posts-aside-recentPosts-card'>
                  <img src={elem.backgroundImage} alt={`${elem.title}`} />
                  <div>
                    <h1>{elem.title}</h1>
                    <span>{elem.day} {elem.month} {elem.year} • {elem.min} mins read</span>
                  </div>
                </div> : '')}
              </div>

              <div className="BlogPage__posts-aside-popularTags">
                <h1>Popular Tags</h1>
                <div>
                  <button>Marketing</button>
                  <button>Development</button>
                  <button>Banking</button>
                  <button>HR & Recruting</button>
                  <button>Desing</button>
                  <button>Management</button>
                  <button>Business</button>
                  <button>Community</button>
                  <button>Tutorials</button>
                </div>
              </div>

              <div className="BlogPage__posts-aside-advertisement">
                <h1>Advertisement</h1>
                <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
                <Button elem="Go Now" mod='orange' />
              </div>
            </aside>
          </div>
        </article>
      </div>
    </>
  )
}

export default BlogPage