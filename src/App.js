import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Electronics from './components/Electronics';
import Fashion from './components/Fashion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from './components/AddItem';


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
            <Route exact path="/additem" element={ <AddItem /> } key="additem" />
          </Routes>
        </Router>
    </>
  );
}

export default App;
