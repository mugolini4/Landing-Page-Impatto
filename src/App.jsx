import Hero from './components/Hero'
import Timeline from './components/Timeline'
import About from './components/About'
import CallToAction from './components/CallToAction'
import ScrollingBanner from './components/ScrollingBanner'

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <Timeline />
        <About />
        <ScrollingBanner direction="left" />
        <CallToAction />
      </main>
    </div>
  )
}

export default App
