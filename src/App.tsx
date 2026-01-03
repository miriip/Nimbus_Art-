import CosmicBackground from './components/CosmicBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Gallery from './components/Gallery'
import SocialLinks from './components/SocialLinks'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      <CosmicBackground />
      <Header />
      <div className="relative z-10">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <SocialLinks />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App

