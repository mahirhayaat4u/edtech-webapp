import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { apiConnector } from '../../services/apiconnector';
import { contactusEndpoint } from '../../services/api';
import CountryCode from "../../data/countrycode.json"

const ContactUsForm = () => {


    const [loading,setLoading] =useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors ,isSubmitSuccessful}

    }=useForm();

    const submitContactForm=async(data) => {
        console.log("form data",data)

        try {
            setLoading(true)
            // const response=await apiConnector("POST",contactusEndpoint.CONTACT_US_API)
            const response={status:"OK contact"}
            console.log("logging response ",response)
            setLoading(false)
        } catch (error) {
            console.log("error ",error.message)
            setLoading(false)
            
        }
    }

    useEffect(()=>{
        if(isSubmitSuccessful){
             
            reset({
                email:"",
                firstName:"",
                lastName:"",
                message:"",
                phoneNo:"",
            },[reset,isSubmitSuccessful])
        }
    })

  return (
    <form onSubmit={handleSubmit(submitContactForm)} className='my-[50px]'> 
     <div className='flex gap-3'>
        {/* first name */}
        <div className='flex flex-col gap-2'>
            <label htmlFor='firstname'>First Name</label>
            <input
                 
                type='text' 
                name='firsname'
                placeholder='First Name'
                className='text-black'
                id='firstname'
              {...register("firstname",{required:true})}
            />
            {
                errors.firstName && (
                    <span>Please enter first name</span>
                )
            }
        </div>

        {/* last name */}
        <div className='flex flex-col gap-2'>
            <label htmlFor='lastname'>last Name</label>
            <input
                 
                type='text' 
                name='lastname'
                placeholder='last Name'
                className='text-black'
                id='lastname'
              {...register("lastname",{required:true})}
            />
            {
                errors.lastname && (
                    <span>Please enter first name</span>
                )
            }
        </div>
     </div>

     <div>
        {/* email */}
        <div className='flex flex-col gap-2'>
            <label htmlFor='email'>email</label>
            <input
                 
                type='email' 
                name='email'
                placeholder='Enter email address'
                className='text-black'
                id='email'
              {...register("email",{required:true})}
            />
            {
                errors.email && (
                    <span>Please enter email</span>
                )
            }
        </div>


        {/* phoneNo */}

        <div>
            <label htmlFor='phonenumber'>Phone No</label>

            <div className='flex flex-row gap-5'>

                   {/* dropdown */}
                   <div className='text-black flex flex-col w-[50px] '>
                      <select
                       name='dropdown'
                       id='dropdown'
                       {...register("countryCode",{required:true})}

                      >
                         <option className='text-black'>select country code</option>

                         {
                              CountryCode.map((country,index)=>{
                                return (
                                    <option key={index} value={country.code} className='text-black '>
                                      {country.code} - {country.country}
                                    </option>
                                )
                              })
                         }
                      </select>
                   </div>

                   {/* phonenumber */}
                   <div className='w-[80%]'>
                      <input
                        type='number'
                        name='phonenumber'
                        id='phonenumber'
                        placeholder='12345 67890'
                        className='text-black'
                        {...register("phoneNo",{
                            required:{value:true ,message:"Please enter phone number"},
                            maxLength:{value:10 ,message:"Inavalid phone number"},
                            minLength:{value:10,message:"Inavalid phone number"} })}

                      />
                   </div>

            </div>
            {
                errors.phoneNo && (
                    <span>
                        {errors.phoneNo.message}
                    </span>
                )
            }

        </div>

        {/* message box */}

        <div className='flex flex-col gap-2'>
            <label htmlFor='message'>Enter your message</label>
            <textarea 
                name='message'
                placeholder='Type your message .....'
                id='message'
                className='text-black'
                cols="30"
                rows="10"
                {...register("message",{required:true})}
            />
            {
                errors.message && (
                    <span>Please enter message</span>
                )
            }
        </div>
        
     </div>
     <button type='submit' className='bg-yellow-200 px-3 py-2 rounded-xl mt-4'>
              send message  
     </button>
    </form>
  )
}

export default ContactUsForm