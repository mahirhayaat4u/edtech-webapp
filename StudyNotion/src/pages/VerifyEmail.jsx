import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/common/Spinner'
import OTPInput from 'react-otp-input'
import { sendOtp, signUp } from '../services/operations/authAPI'
import { Link, useNavigate } from 'react-router-dom'

const VerifyEmail = () => {

    const {signupData,loading}=useSelector((state)=>state.auth)

    const[otp,setOtp]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
      if(!signupData){
        navigate("/signup");
      }
    },[navigate,signupData])

    const handleOnsubmit = (e) => {
        e.preventDefault();
        const{
          accountType,
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }=signupData;
        dispatch(signUp (accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
    };

  return (
     <div className="bg-richblack-100 flex flex-col justify-center items-center gap-8 p-4">
       {
         loading? (
            <Spinner/>
         ) : (
          <div>
            <h1>Verify Email</h1>
            <p>A verification has been sent to your email , please enter the otp below</p>
            <form onSubmit={handleOnsubmit}>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props)=> <input {...props}  />}
              />

              <button type='submit'>
                Verify Email
              </button>
            </form>

             <div>
                <Link to="/login">
                  <p> Back to login</p>
                </Link>
              </div>

              <button
              onClick={()=>dispatch(sendOtp(signupData.email,navigate))}
              > 
                Resend it
              </button>
   

          </div>
         )
       }
     </div>
  )
}

export default VerifyEmail