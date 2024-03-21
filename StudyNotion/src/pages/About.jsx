import React from 'react'
import HighLightText from '../components/core/HomePage/HighLightText'
import bannerImage1 from '../assets/Images/aboutus1.webp'
import bannerImage2 from '../assets/Images/aboutus2.webp'
import bannerImage3 from '../assets/Images/aboutus3.webp'
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/StatsComponent'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactForm from '../components/core/AboutPage/ContactForm'

const About = () => {
  return (
    <div className='text-richblack-5 w-11/12 max-w-maxContent  mx-auto' >

       {/* section 1 */}

       <section className='flex flex-col justify-center items-center gap-6 '>
           <header className='flex flex-col justify-center items-center gap-6 mt-10 text-xl'>
             Driving innovation in Online Education For a
             <HighLightText  text={'Bright Future'} />
             <p className='w-[800px] mx-auto text-center'>
             Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
             </p>
           </header>

           <div className='flex  gap-x-4 w-11/12 mx-auto justify-center items-center'>
             <img src={bannerImage1} alt='aboutImage' loading='lazy'/>
             <img src={bannerImage2} alt='aboutImage' loading='lazy'/>
             <img src={bannerImage3} alt='aboutImage' loading='lazy'/>
           </div>
       </section>

       {/* section 2 */}

       <section>
          <div>
            <Quote/>
          </div>
       </section>

       <div className='w-full h-[1px] bg-richblack-600'></div>

       {/* section 3 */}

       <section className=' w-[90%] mx-auto mt-[100px] mb-[100px]'>

        <div className='flex flex-col justify-center items-between gap-[100px]'>
          {/* founding story parent div */}

          <div className='flex   items-center gap-10 justify-evenly'>
                    {/* founding story left div */}
                    <div className='flex flex-col justify-start  w-[500px] gap-6 text-richblack-300'>

                            <h1 className='text-pink-300 text-4xl font-bold'>Our Founding Story </h1>

                            <p>
                            Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                            </p>

                            <p>
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                            </p>

                    </div>


                    {/* founding story right div */}
                    <div>
                           <img src={FoundingStory} alt='founding' loading='lazy'/>
                    </div>
          </div>

          {/* vision and mission parent div */}
          
          
          <div className='flex   items-center gap-10 justify-evenly'>
                    {/* vision left div */}
                    <div className='flex flex-col justify-start  w-[500px] gap-6 text-richblack-300'>
                       <h1 className='text-yellow-300 text-4xl font-bold'>Our Vision</h1>
                       <p>
                        With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                       </p>
                    </div>


                    {/* mission right div */}
                    <div className='flex flex-col justify-start  w-[500px] gap-6 text-richblack-300'>
                        <h1 className='text-blue-300 text-4xl font-bold'>Our Mission</h1>
                          <p>
                          our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                          </p>
                    </div>
          </div>

        </div>
          
       </section>

       {/* section 4 */}

       <StatsComponent/>

       {/* section 5 */}

       <section className='flex flex-col justify-between gap-5 '>
        <LearningGrid/>
        <ContactForm/>
       </section>
    
    </div>
  )
}

export default About