import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Mobiles from './components/Mobiles';
import Electronics from './components/Electronics';
import Fashion from './components/Fashion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from './components/AddItem';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {

  const [userData, setUserData] = useState({});
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <>
      <Router>
          <Navbar userLoggedIn={userLoggedIn} userData={userData} setUserData={setUserData} />
          <Routes>
            <Route exact path="/" element={ <Home userData={userData} setUserData={setUserData} /> } key="/" />
            <Route exact path="/home" element={ <Home userData={userData} setUserData={setUserData} /> } key="home" />
            <Route exact path="/mobiles" element={ <Mobiles /> } key="mobiles" />
            <Route exact path="/electronics" element={ <Electronics /> } key="electronics" />
            <Route exact path="/fashion" element={ <Fashion /> } key="fashion" />
            <Route exact path="/additem" element={ <AddItem /> } key="additem" />
            <Route exact path="/login" element={ <Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} /> } key="login" />
            <Route exact path="/signup" element={ <Signup userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} /> } key="signup" />
          </Routes>
        </Router>
    </>
  );
}

export default App;
