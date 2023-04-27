import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //at starting user is not logged in so pass a false in useState. 
 
   return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">   {/*flex-col:coz in this div logIn and SignUp page where form content vertically*/}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
     <Routes>
         {/*Home page render by default when run where user is not login coz false pass currently*/}
        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />        
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} /> 
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
         <Route path="/about" element={<About isLoggedIn={isLoggedIn}/>} />
        <Route path="/dashboard" element ={
              <PrivateRoute isLoggedIn={isLoggedIn}>
  {/*if user is logged in then show Dashboard otherwise send to loginPage wch code is PrivateRoute.js me, its done for security purpose taki browser search bar me,dashboard attach krne par direct dashboard par naa ja paye ex-http://localhost:3000/dashboard*/}
              <Dashboard/>                 
          </PrivateRoute>
        }/>
 
       </Routes>
 {/*dashboard is children coz it inside under parent PrivateRoute.concept: if we login then pass dashboard dts y isLoggedIn pass as a parameter */}
    </div>
    )
}

export default App;

{/*click to login we come to blanck login page now user enter a data wch is set loc 21To25 in login form so setISlogged(true) pass loc31 check in loginform.js me, */}
