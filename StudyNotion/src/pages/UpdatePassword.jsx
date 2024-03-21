 
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/common/Spinner";
import { Link, useLocation } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { resetPassword } from "../services/operations/authAPI";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  //   console.log("e.target.name",[ e.target.name]);
  // console.log("e.target.name",e.target.name);
  };
  

  const handleOnSUBMIT = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1)
    dispatch(resetPassword(password, confirmPassword, token));
  };

  return (
    <div className="bg-richblack-100 flex flex-col justify-center items-center gap-8 p-4">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1>Choose New password</h1>
          <form onSubmit={handleOnSUBMIT}>
            <label>
              <p>
                Enter new password <sup className="color- text-red">*</sup>{" "}
              </p>

              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                placeholder="password"
                onChange={handleOnChange}
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {
                    showPassword ? (
                  <AiFillEyeInvisible fontSize={24} />
                ) : (
                  <AiFillEye fontSize={24} />
                )
                }
              </span>
            </label>

            <label>
              <p>
                 confirm new password <sup className="color- text-red">*</sup>{" "}
              </p>

              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                placeholder="confirm password"
                onChange={handleOnChange}
              />
              <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {
                    showConfirmPassword ? (
                  <AiFillEyeInvisible fontSize={24} />
                ) : (
                  <AiFillEye fontSize={24} />
                )
                }
              </span>
            </label>

            <button
              type="submit"
              className=" bg-yellow-200 p-2 rounded-xl w-[300px]"
            >
               Update Password

            </button>
          </form>

          <div>
            <Link to="/login">
              <p> Back to login</p>
            </Link>
          </div>

        </div>

      )}

    </div>
  );
};

export default UpdatePassword;
