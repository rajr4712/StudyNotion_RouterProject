import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


function LoginForm({setIsLoggedIn})  {
//setIsloggedin pass coz all data is enter by user in setIsloggedIn loc 13 in app.js 
   
   const navigate = useNavigate();                  //used for loc34, useNavigate is function wch used for travel b/w pages or navigte.

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    
    const[showPassword, setShowPassword] = useState(false);  
    //showPassword is password icon, Starting me password not show so false show, setShowPassword define in a function loc 70 onclick pe
   
    function changeHandler(event) {
            setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
    }

    function submitHandler(event) {
        event.preventDefault();                 //by default kuch nhi karna hai
        setIsLoggedIn(true);                    //now isLoggedIn true ,false se. 
        toast.success("Logged In");             // toast show of logged in written
        console.log(formData)                    //check in console 
        navigate("/dashboard");                 //move to Dashboard page
    }

  return (
    <form onSubmit={submitHandler}
     className="flex flex-col w-full gap-y-4 mt-6">  {/*form content comes in vertically so flex-col*/}
        
        <label className='w-full'>                    {/*we can use input tag inside label tag here its automatic attach*/}
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
             Email Address<sup className='text-pink-200'>*</sup> </p>   {/*sup is superscript tag used for star emai address k upar attch k liye*/}   
            <input 
                required
                type="email"
                value = {formData.email}      //formData.email: formData se email ki value take wch is empty at starting loc 11,12
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        </label>

        <label className='w-full relative'>       {/*relative takes coz pass icon ko iske under overlap karna hai so his position is absolute loc69 */}
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
             Password<sup className='text-pink-200'>*</sup> </p>
            
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
//loc57: if password input tag showPassword(eye icon) pe click then text show otherwise show  in password form (ex- ***** ).
                value = {formData.password}                       //its name.
                onChange={changeHandler}
                placeholder="Enter Password" 
                name="password"
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
    
    
     {/*For Password icon in password input tag */}
            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>


{/*Loc 66:(prev) => !prev) - its toogle method.The code sets the showPassword property to false when the value of prev is true, i.e if password in star form(****) usko text form me kr dega onclick pe and vice versa
 loc 67: if showPassword icon pe click then show AiOutlineEyeInvisible (icon pe cross line aayega otherwise show AiOutlineEye icon  */}
            
            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'> Forgot Password</p>
            </Link>
        
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
         Sign In</button>

    </form>
  )
}

export default LoginForm
