import React from 'react'
import {useSelector} from "react-redux"
import {sidebarLinks} from "../../../data/dashboard-links"
import { logout } from '../../../services/operations/authAPI'
import Spinner from '../../common/Spinner'
import SidebarLink from './SidebarLink'

const Sidebar = () => {

   const {user ,loading:profileLoading}= useSelector( (state)=>state.auth )     
   const { loading:authLoading}= useSelector( (state)=>state.auth )     

   if (authLoading || profileLoading) {
    return (
        <div className='mt-12'>
          <Spinner/>
        </div>
        
    )
}
   
  return (
    <div> 
        <div className='flex flex-col min-w-[250px] border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-700 py-10'>

          <div className='flex flex-col'>

             {
              sidebarLinks.map((link,index)=>{
                if(link.type && user?.accountType !== link.type) return null;
                return (
                  <SidebarLink />
                )
              })
             }

          </div>

        </div>
    </div>
  )
}

export default Sidebar