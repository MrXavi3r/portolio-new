import React from 'react';
import '../App.css';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects';
import Contact from './Contact';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(fab)
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
