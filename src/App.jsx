import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Features from "./components/Features"
import AppMockup from "./components/AppMockup"
import Hero from "./components/Hero"



function App() {

  return (
    <div className="min-h-screen bg-gray-100 text-black px-4 md:px-16 xl:px-40 py-10">
    <Navbar />
    <Hero />
    <AppMockup />
    <Features />
    <Services />
    <Card />
    <Footer />
  </div>
)
}

export default App
