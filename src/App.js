import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={ <Home /> } key="projects" />
            <Route exact path="/home" element={ <Home /> } key="projects" />
            <Route exact path="/about" element={ <About /> } key="about" />
          </Routes>
        </Router>
    </>
  );
}

export default App;
