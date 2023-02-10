import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Homepage from "./Components/Homepage";
import Skills from './Components/Skills';
import Resume from './Components/Resume';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/resume" element={<Resume/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
