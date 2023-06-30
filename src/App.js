import './App.css';
import Menu from './Menu/Menu';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Menu/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
