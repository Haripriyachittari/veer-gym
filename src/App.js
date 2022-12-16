import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="text-4xl">
      <Navbar/>
      <Hero/>
      {/* <Gallery/> */}
       <About/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
