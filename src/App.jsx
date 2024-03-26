import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Service from "./components/Service"


const App = () => {
  return (
    <div className="bg-gray-50">
  <Hero />
  
  <Experience />
  <Service />
  <Projects />
  <Contact />
    </div>
  )
}

export default App
