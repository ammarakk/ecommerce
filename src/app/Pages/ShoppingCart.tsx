import BrandSpeciality from '@/app/Components/BrandSpeciality'
import ContactUs from '@/app/Components/ContactUs'
import Hero from '@/app/Components/Hero'
import Hero2 from '@/app/Components/Hero2'
import NavBar from '@/app/Components/NavBar'
import NewCeramics from '@/app/Components/NewCeramics'
import OurPopularProduct from '@/app/Components/OurPopularProduct'
import React from 'react'


const Home= () => {
  return (
    <div>
      
      <Hero/>
      <BrandSpeciality/>
      <NewCeramics/>
      <OurPopularProduct/>
      <ContactUs/>
      <Hero2/>
    </div>
  )
}

export default Home

