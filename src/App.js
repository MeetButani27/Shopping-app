import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Electronics from './components/Electronics';
import Fashion from './components/Fashion';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={ <Home /> } key="/" />
            <Route exact path="/home" element={ <Home /> } key="home" />
            <Route exact path="/electronics" element={ <Electronics /> } key="electronics" />
            <Route exact path="/fashion" element={ <Fashion /> } key="fashion" />
            <Route exact path="/about" element={ <About /> } key="about" />
          </Routes>
        </Router>
    </>
  );
}

export default App;
