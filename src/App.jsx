import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonial.jsx'
import Faqs from './components/Faqs.jsx'
import Footer from './components/Footer.jsx'




function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  )
}

export default App
