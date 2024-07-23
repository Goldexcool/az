import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/service'
import Projects from './components/project'
import Contact from './components/contact'
import Footer from './components/footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
