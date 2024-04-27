import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import OpenRoute from "../src/components/core/Auth/OpenRoute";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error"
import Settings from "./components/core/Dashboard/Setting/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constant";
import AddCourse from "./components/core/Dashboard/AddCourse";
import {  useSelector } from "react-redux"
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";
import Catalog from "./pages/Catalog";
 



function App() {

  const { user } = useSelector((state) => state.profile)

  return (
    <div className="w-screen min-h-screen bg-richblack-800 flex flex-col font-inter">
      <Navbar />
      <Routes>

        {/* Home route */}
          <Route  path="/" element={ <Home />  } />
          <Route  path="catalog/:catalogName" element={ <Catalog />  } />

        {/* Signup route */}
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        {/* Login route */}
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        {/* Reset password route */}
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        {/* Update password route */}
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

          <Route
          path="about"
          element={
            // <OpenRoute>
            //   <About />
            // </OpenRoute>
            <About />
          }
        />
         <Route
          path="contact"
          element={
            // <OpenRoute>
            //   <Contact />
            // </OpenRoute>
            <Contact />
          }
        />

        <Route
        element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }
        >

           <Route path="dashboard/my-profile" element={<MyProfile/>}/>
           <Route path="dashboard/settings" element={<Settings/>}/>
           <Route path="dashboard/add-course" element={<AddCourse/>}/>
           <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>}/>
           <Route path="dashboard/cart" element={<Cart/>}/>
           <Route path="dashboard/my-courses" element={<MyCourses/>}/>
           <Route path="dashboard/edit-course/:courseId" element={<EditCourse/>}/>

           {
                user?.ACCOUNT_TYPE===ACCOUNT_TYPE.STUDENT &&(
                  <>
                  <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>}/>
                  <Route path="dashboard/cart" element={<Cart/>}/>
                  </>
                )
           }

           {/* {
            user?.ACCOUNT_TYPE===ACCOUNT_TYPE.INSTRUCTOR &&(
              <>
              <Route path="dashboard/add-course" element={<AddCourse/>}/>
             
              </>
            )
           } */}


        </Route> 
         

        
        <Route path="*" element={<Error/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
