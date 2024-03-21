import React from 'react'

const StatsComponent = () => {


    const stats=[
        {count:"5k",label:"Active Students"},
        {count:"10+",label:"Mentors"},
        {count:"200+",label:"Courses"},
        {count:"50+",label:"Awards"},
    ]

  return (
    <section className='bg-richblack-800  mb-[100px]'>
         <div className='p-14'>
            <div className='flex w-11/12 mx-auto  justify-center items-center  '>
                {
                    stats.map((stat,index)=>{
                        return (
                            <div className='mx-[120px] flex flex-col justify-center items-center gap-4 ' key={index}>
                            <h1 className='text-3xl font-semibold'>
                                {stat.count}
                            </h1>
                            <h2 className='text-richblack-500'>
                            {stat.label}
                            </h2>

                            </div>
                        )
                    })
                }
            </div>
         </div>
    </section>
  )
}

export default StatsComponent