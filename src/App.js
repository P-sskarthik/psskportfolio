

import Home from './Components/Home';

import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from "./Components/Layout";
function App() {
  return (
    <>
   

<Layout />
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='projects' element={<Projects />} />
      <Route path='skills' element={<Skill />}/>
      <Route path='contact' element={<Contact />} />
    </Routes>
  
    </>
  );
}

export default App;
