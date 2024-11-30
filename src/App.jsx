import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Charity from './components/Charity'
import Clients from './components/Clients'
import ProjectsSection from './components/ProjectsSection'
import ClientFeedback from './components/ClientFeedback'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <ClientFeedback/>
      <ProjectsSection/>
      <Clients/>



      <div className="flex justify-center">
        <Charity />
      </div>

      <div className="flex justify-center">
        <FAQ />
      </div>

      <div className="flex justify-center">
        <CTA />
      </div>

      <div className="flex justify-center">
        <Footer />
      </div>


    </>
  )
}

export default App
