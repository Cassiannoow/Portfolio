import './App.css';
import Menu from './Menu/Menu';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
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
