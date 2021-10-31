
import './App.css';
import Landing from './components/Landing/Landing';
import Header  from './components/Header/Header';
import Contact from './components/Contact/Contact.jsx';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About.jsx'


function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
