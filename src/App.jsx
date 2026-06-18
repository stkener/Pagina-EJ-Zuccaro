import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Servicios from "./components/Servicios";
import PorQueElegirnos from "./components/PorQueElegirnos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Servicios />
      <PorQueElegirnos />
      <Contacto />
      <Footer />
    </>
  )
}

export default App