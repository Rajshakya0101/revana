import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Footer from './components/Footer'
import About from './components/About';
import Service from './components/Service';
// import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
