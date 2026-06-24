'use client'

import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Films from './components/Films.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
import AnimationSection from './components/AnimationSection.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <Films />
      <Services />
      <Stats />
      <AnimationSection />
      <CTA />
      <Footer />
    </>
  )
}
