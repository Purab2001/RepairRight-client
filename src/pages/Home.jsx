import React from 'react'
import PageHelmet from '../components/PageHelmet'
import Header from '../components/Header'
import Team from '../components/Team'
import WhyChooseUs from '../components/WhyChooseUs'
import PopularServices from '../components/PopularServices/PopularServices'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <PageHelmet />
      <Header />
      <PopularServices />
      <div className='bg-base-200'>
        <Team />
      <Testimonials />
      </div>
      <WhyChooseUs />
    </div>
  )
}

export default Home