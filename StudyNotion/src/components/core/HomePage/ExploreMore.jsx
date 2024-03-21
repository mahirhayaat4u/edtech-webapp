import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore" 
import HighLightText from "../HomePage/HighLightText"
import CourseCard from './CourseCard';
const tabsName=[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {

    const[currentTab,setCurrentTab]=useState(tabsName[0])
    const[courses,setCourses]=useState(HomePageExplore[0].courses)
    const[currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading)

    const setMyCard=(value)=>{
           setCurrentTab(value)
           const result= HomePageExplore.filter((course)=>(course.tag===value))
           setCourses(result[0].courses)
           setCurrentCard(HomePageExplore[0].courses[0].heading)
    }

  return (
    <div className='flex flex-col items-center mt-[150px]' > 
        <div className='text-4xl font-semibold'>
          Unlock the <HighLightText text={"Power of code"}/>
        </div>

        <p className='text-center text-richblack-300 text-lg font-semibold mt-3'>
           Learn to Build Anything You Can Imagine
        </p>

        <div className='flex flex-row rounded-full bg-richblack-800 mt-4 border-richblue-300 px-4 py-2'>
           {
            tabsName.map((element,index)=>{
                return (
                  <div
                   className={`text-[16px] flex flex-row items-center gap-2
                   ${currentTab===element 
                   ? "bg-richblack-900 text-richblack-5 font-medium rounded-full px-8 drop-shadow "
                   : "text-richblack-200 rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-3 "}`}
                   key={index}
                   onClick={()=>setMyCard(element)}
                  >
                     {element}
                  </div>
                  )
            })
           }
        </div>


        <div className='lg:h-[150px]'></div>

        
          {/* course card ka group */}

        <div className='absolute flex flex-row  gap-10 justify-between w-full'>
            {
              courses.map((element,index)=>{
                return(
                  <CourseCard
                    key={index}
                    cardData={element}
                    currentCard={currentCard}
                    setCurrentCard={setCurrentCard}
                  />
                )
              })
            }
        </div>
       
    </div>
  )
}

export default ExploreMore