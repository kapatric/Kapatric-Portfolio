import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Content from './components/Content/Content'
import { Routes, Route,  } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <Content />
       <Routes>
       <Route path="/"  />
         <Route path="/projects" element={<Projects />}></Route> 
        </Routes>  
      </div>
  );
}

export default App;
