import React from 'react'
import HighLightText from '../HomePage/HighLightText'

const Quote = () => {
  return (
    <div className='w-11/12 mx-auto max-w-[60%] text-3xl  text-center py-1 mt-[100px] mb-[100px] '>
       We are passionate about revolutionizing the way we learn. Our innovative platform 
       <HighLightText text={"combines technology,"}/> 
        <span className='text-yellow-100'>
            {' '}
            expertise
        </span> 
        , and community to create an
         <span className='text-yellow-300'>
         {" "}
          unparalleled educational experience.
         </span>
    </div>
  )
}

export default Quote