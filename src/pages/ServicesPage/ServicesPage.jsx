import React from 'react'
import LatestPosts from '../../components/LatestPosts/LatestPosts'
import Testimonials from '../../components/Testimonials/Testimonials'
import OfflineSEOAnalyse from './components/OfflineSEOAnalyse/OfflineSEOAnalyse'

function ServicesPage() {
  return (
    <>
      <OfflineSEOAnalyse />
      <Testimonials />
      <LatestPosts />
    </>
  )
}

export default ServicesPage