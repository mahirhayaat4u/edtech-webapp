import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getResetPasswordToken } from "../services/operations/authAPI";
import Spinner from "../components/common/Spinner";

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getResetPasswordToken(email, setEmailSent));
  };

  return (
    <div className="bg-richblack-100 h-[100vh]">
      {loading ? (
         <Spinner/>
      ) : (
        <div className=" flex flex-col justify-center items-center mt-40 text-3xl gap-6">
          <h1>{!emailSent ? "Reset Password " : "Check your email"}</h1>

          <p>
            {!emailSent
              ? "Type your email"
              : `we have sent reset password email to the  ${email}`}
          </p>
           
       

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-4"
          >
            {!emailSent && (
              <fieldset className="border rounded-xl p-6 h-[200px] text-center">
                <legend>Email address </legend>
                <input
                  required
                  placeholder="enter your email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-lg p-3 m-5"
                />
              </fieldset>
            )}

            <button
              type="submit"
              className=" bg-yellow-200 p-2 rounded-xl w-[300px]"
            >
              {!emailSent ? "Reset password" : "Resend Email"}
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

export default ForgotPassword;
