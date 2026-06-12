import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import Announce from './components/Announce';
import Customer from './components/Customer';
import Contact from './components/Contact';
import Review from './components/Review'
import Footer from './components/Footer'
function App() {
return (
    <>
    <Announce/>
    <Navbar/>
    <Home/>
    <About/>
    <WhyChoose/>
    <Customer/>
    <Contact/>
    <Review/>
    <Footer/>
    </>
  )
}

export default App
