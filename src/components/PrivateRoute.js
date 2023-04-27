import React from 'react'
import {Navigate} from 'react-router-dom';

//isLoggedIn pass dts means we are login now . so children pass wch is dasboard to render loc28To31 in App.js
const PrivateRoute = ({isLoggedIn, children}) => {
  if(isLoggedIn) {
    return children;                       //if isLoggedIN is true means data enter by user set. then return children dasboard, check in console after entering data in login page.
  }
  else {
    return <Navigate to="/login"/>                  //if not return to login page to enter all details
  }
}

export default PrivateRoute


{/*we create a PrIvate Route compoment: coz we want jab v hum browser search me http://localhost:3000 iske baad /dashboard likhe
then its not go to dashboard jab tak ki hum login nii hue studynotion me */}