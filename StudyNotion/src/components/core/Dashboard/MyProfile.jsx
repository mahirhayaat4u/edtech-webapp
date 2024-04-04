import React from 'react'
import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from "../../common/IconBtn"
const MyProfile = () => {

    const {user}=useSelector((state)=>state.profile)
    const navigate=useNavigate()

  return (
    <div className='w-[1000px]  bg-yellow-400'> 
        
        <h1>
            My Profile
        </h1>

       {/* section 1 */}
        <div className='text-white'>
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

        {/* section 2 */}

        <div className='text-white mt-5'>
          <div>
            <p>About</p>
            <IconBtn
              text="Edit"
              onclick={()=>{
                navigate("/dashboard/settings")
              }}
            />
          </div>

          <div> { user?.additionalDetails?.about ?? "write something about yourself...."}  </div> 
          
        </div>

        {/* section 3 */}

        <div>
          <div>
            <p>Personel Details</p>
            <IconBtn
               text="Edit"
              onclick={()=>{
                navigate("/dashboard/settings")
              }}
            />
          </div>

          <div>
            <div>
              <p>First name</p>
              <p> {user?.firstName} </p>
            </div>

            <div>
              <p>Last name</p>
              <p> {user?.lastName} </p>
            </div>

            <div>
              <p>email</p>
              <p> {user?.email} </p>
            </div>

            <div>
              <p>Gender</p>
              <p> {user?.additionalDetails?.gender ??"are you male or female"} </p>
            </div>

            <div>
              <p>Phone Number</p>
              <p> {user?.additionalDetails?.contactNumber ?? "Your phone number .."} </p>
            </div>

            <div>
              <p>Date of Birth</p>
              <p> {user?.additionalDetails?.dateOfBirth  ?? "add dob.."} </p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default MyProfile