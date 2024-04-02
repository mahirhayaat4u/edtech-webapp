import React from 'react'
import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from "../../common/IconBtn"
const MyProfile = () => {

    const {user}=useSelector((state)=>state.profile)
    const navigate=useNavigate()

  return (
    <div> 
        
        <h1>
            My Profile
        </h1>

       {/* section 1 */}
        <div>
        <div  >
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className='w-10 rounded-3xl'
            
          />
          <div  >
            <p >
              {user?.firstName + " " + user?.lastName}
            </p>
            <p  >{user?.email}</p>
          </div>
        </div>

         <IconBtn
         text="Edit"
         onclick={() => {
            navigate("/dashboard/settings")
          }}
         >
        <RiEditBoxLine />
         </IconBtn>

        </div>

    </div>
  )
}

export default MyProfile