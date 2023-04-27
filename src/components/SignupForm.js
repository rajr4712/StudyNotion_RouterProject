import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

//Signup component 
function SignupForm({setIsLoggedIn})  {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);            //showPassword is password icon wch starting flase pass i.e not show 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);    
    const [accountType, setAccountType] = useState("student");        //at starting student pe rahega,setAccountType define in onclick function loc63

    function changeHandler(event) {
          setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) ) 
    }
 //loc24:setFormData is set value in formData k loc12 to 16 variable me jaise hi is variable pe value enter ho rha or change ho rha hai.
    
 function submitHandler(event) {
        event.preventDefault();                             //by default nothing do
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");        //if formData me password is not equal to confirm password then toast display "Passwords do not match".
            return ;
        }
        
     //if both password is same
        setIsLoggedIn(true);
        toast.success("Account Created");            //toast come with Account Created msg if match
        const accountData = {                      
            ...formData                            //formData ki copy daal dega where stored loc12 to 16 all value
        };
         
        const finalData = {
            ...accountData,                    //at final me accountDatae ki copy where formData value store , and accountType save i.e its instructor or student it is.
            accountType
        }
        console.log(finalData);
       navigate("/dashboard");
       }

    
     return (
    <div>
        {/* student and Instructor tab div */}
        <div  className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        
        <button className={`${accountType === "student"  ? "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}> Student </button>

         <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5"
        :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}> Instructor </button>

{/*if accounttype student k equal ho then uska background color black, text white,rounded . if not then background: bg-trasnsparent text rich color ka  and rest all style apply
onclick pe student set kr do if user instructor tab par ho to*/ }
         </div>

        <form onSubmit={submitHandler}>
        {/* first name and lastName */}
          <div className='flex gap-x-4 mt-[20px]'>   {/*flex take coz first and second input tag horizontally aa jaye and bich me gap 1rem ka ho (flex by default nature)*/}
            <label className='w-full'>
     <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'> * </sup></p>
             <input
                  required
                 type="text"
                  name="firstName"
                onChange={changeHandler}
                 placeholder="Enter First Name"
                 value={formData.firstName} 
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    </label>

         <label  className='w-full'>
         <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
        Last Name<sup className='text-pink-200'>*</sup></p>
             <input
            required
            type="text"
           name="lastName"
          onChange={changeHandler}
            placeholder="Enter Last Name"
          value={formData.lastName}
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>
            </div>
            
            {/* email Add */}
            <div className='mt-[20px]'>
              <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>
            </div>
              

            {/* createPassword and Confirm Password */}
            <div className='w-full flex gap-x-4 mt-[20px]'>
                <label  className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}      
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        
        {/*for password icon wch is in password input tag me, for understand go Loginform.js me all are explain there */}
                    <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} />) :
                      (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
            {/* AiOutlineEyeInvisible: its name of password icon ka*/}
                </label>

               
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password
                      <sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                    
                    <span  className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                         (<AiOutlineEye  fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label>
            {/* Fill is password icon color in hexadecimal format */}
            </div>
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account  </button>

        </form>
  {/*w-full : pura container ka width take and stretch dts y button look big */}  

    </div>
  )
}

export default SignupForm
