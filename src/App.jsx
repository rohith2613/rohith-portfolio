import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/NavBar"
import Projects from "./components/Projects"
import Service from "./components/Service"
import Skills from "./components/Skills"


const App = () => {
  return (
    <div className="bg-gray-50">
     
        <Navbar />       
        <Hero />         
        <Experience />   
        <Service />      
        <Projects /> 
        <Skills />  
        <Contact />      
      
    </div>
  )
}

export default App
