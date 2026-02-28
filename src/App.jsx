import React, { useState } from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import About from './components/About'
import CallToAction from './components/CallToAction'
import ScrollingBanner from './components/ScrollingBanner'
import Popup from './components/Popup'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = (e) => {
    e.preventDefault() // prevent jump to # or default target
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }
  return (
    <div className="app">
      <main>
        <Hero onOpenPopup={openPopup} />
        <Timeline />
        <About onOpenPopup={openPopup} />
        <ScrollingBanner direction="left" />
        <CallToAction />
      </main>

      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  )
}

export default App
