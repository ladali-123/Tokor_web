import { Routes, Route } from 'react-router-dom';  
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Announce from './components/Announce';
import Customer from './components/Customer';
import Contact from './components/Contact';
import Review from './components/Review';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Slot from './components/Slot';
function App() {
  return (
    <>
      <Announce />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <WhyChoose />
              <Customer />
              <Contact />
              <Review />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/why-choose" element={<WhyChoose />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path ="/book-a-slot" element={<Slot/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;