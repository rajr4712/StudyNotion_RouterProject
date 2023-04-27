import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"

//Template is created for common thing wch is common in both login and signup form {ex-heading, description, --or--,image position,sign up google button so write code write and render on both component me}
//props {} ki help se all title,description ,image etc wch take it from Login.js and SignUp.js pages folder k file se
function Template({title, desc1, desc2, image, formtype, setIsLoggedIn})  {
 
    console.log(formtype)
 
    return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'> 
    {/*justify-between: coz both form and image are at extreme position,gap-y-0: coz vertically gap nhi input tag or text k bich*/}

        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1> 
             
             {/*for Description line*/}
            <p className='text-[1.125rem] leading[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
      
      {/*Ternary opr use if fromtype is equal to signupform then render if not loggedinform render*/}
            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

           
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>     
                <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                 <FcGoogle/>        {/*this is google icon get from npm react icon website*/}
                <p>Sign Up with Google</p>
            </button>

        </div>
 
        {/*for image and frame*/}
        <div className='relative w-11/12 max-w-[450px]'>  {/*frame position relative*/}
           <img src={frameImage}           //get frameimage form assets se 
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>

            <img src={image}         //get both login and signup image use of props form login.js and Signup.js se loc11 check ,
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute -top-4 right-4' /> 
  {/*image position is overlap, image frame k upar aa rha hai, dts y its absolute*/}
        </div>
        
    </div>
  )
}

export default Template
