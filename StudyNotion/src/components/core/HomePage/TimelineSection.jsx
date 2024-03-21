import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline=[
  {
    Logo:Logo1,
    Heading:"Leadership",
    Description:"Fully committed to the success company"
  },
  {
    Logo:Logo2,
    Heading:"Leadership",
    Description:"Fully committed to the success company"
  },
  {
    Logo:Logo3,
    Heading:"Leadership",
    Description:"Fully committed to the success company"
  },
  {
    Logo:Logo4,
    Heading:"Leadership",
    Description:"Fully committed to the success company"
  },
]

const TimelineSection = () => {
  return (
    <div> 
       <div className='flex flex-row gap-15 items-center'>

         <div className='flex flex-col gap-5 w-[45%]'>
            {
              timeline.map((element,index)=>{
                  return (
                    <div className='flex flex-row gap-6 ' key={index}>

                         <div className='w-[50px] h-[50px] flex items-center bg-white  '>
                            <img src={element.Logo} alt='logo'/>
                         </div>

                         <div >
                            <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
                            <p className='text-base '>{element.Description}</p>
                         </div>
                    </div>
                  ) 
              })
            }
           
         </div>

         <div className='relative shadow-blue-200 mt-[50px]'>

            <img src={timelineImage} alt='timelineimage' className='shadow-white object-cover h-fit'/>

            <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 -translate-y-1/2  translate-x-14'>
                  <div className='flex flex-row  gap-5 border-r border-caribbeangreen-300 items-center px-5'>
                    <p className='text-3xl font-bold'>10</p>
                    <p className='text-caribbeangreen-300 text-sm'>Years of experiance</p>
                  </div>
                  <div className='flex gap-5 items-center px-5'>
                    <p className='text-3xl font-bold'>250</p>
                    <p className='text-caribbeangreen-300 text-sm'>Types of courses</p>
                  </div>
            </div>

         </div>

       </div>
    </div>
  )
}

export default TimelineSection