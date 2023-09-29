import React, {useState, useEffect} from 'react';
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";


import { About, Contact, Projects, Hero, Navbar, Value, Slider, Experience, Footer, StarsCanvas } from "./components";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, []);
  return (
    <BrowserRouter>
    {
      loading ? <div className='flexColCenter mt-50px'>
        <ClimbingBoxLoader color="#5180dd"  /> 
      </div>
      :
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <ToastContainer/>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Slider/>
        <Experience/>
        <Value />
        <Projects />
        <div className='relative z-0'>
          <Contact />
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    }
      
    </BrowserRouter>
  );
}

export default App;
