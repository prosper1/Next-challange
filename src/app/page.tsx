import Image from 'next/image'
import Navbar from './components/navbar/navbar'
import HeroSection from './components/hero/hero'
import WhatWeDoSection from './components/what-we-do/what-we-do'
import CaseStudySection from './components/case-study/case-study'
import Brands from './components/brands/brands'
import Footer from './components/footer/footer'

export default async function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <WhatWeDoSection></WhatWeDoSection>
      <CaseStudySection></CaseStudySection>
      <Brands></Brands>
      <Footer></Footer>

    
    </main>
  )
}
