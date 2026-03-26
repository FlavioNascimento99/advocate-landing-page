import { Navbar, Hero, StatsSection, Pillars, Resources, CTA, Footer } from './components'

function App() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <StatsSection />
        <Pillars />
        <Resources />
        <CTA />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
