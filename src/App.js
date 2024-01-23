import './App.css';
import Menu from './Menu/Menu';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import { useState } from "react";
import { useEffect } from "react";

function App() {
  
  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function(){
      function posicaoScroll(){
          if(window.scrollY > 40){
              setAtivaCor(true)
          } else {
              setAtivaCor(false)
          }
      }

      window.addEventListener('scroll', posicaoScroll)
  }, [])

  return (
    <div className="App">
      <Menu acao={ativaCor}/>
      <AboutMe/>
      <div className='spacing' id="skills"></div>
      <Skills/>
      <div className='spacing-projects' id='projects'></div>
      <Projects/>
      <div className='spacing' id='projects'></div>
      <Footer/>
    </div>
  );
}

export default App;
