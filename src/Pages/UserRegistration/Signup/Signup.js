import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const Signup = () => {
  useTitle("Sign Up");
  return (
    <div>
      <div className="mt-24">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">
          You need to create an account to get started!
        </h2>
        <p className="font-semibold text-slate-900 text-center text-lg mt-2">
          Sign up for an account now.
        </p>
      </div>
      <form
        className="container mx-auto mt-10 pb-16"
        //   onSubmit={handleSubmit(handleSignup)}
      >
        <div className="form-control w-1/2 mx-auto">
          <label className="label">
            <span className="label-text text-slate-900 font-semibold">
              Name
            </span>
          </label>
          <input
            type="text"
            // {...register("name", { required: "Name is required" })}
            className="input input-bordered border-slate-300 bg-slate-50 text-secondary font-normal"
            placeholder="Your Full Name"
          />
          {/* {errors.name && (
            <p className="text-red-400 ml-1 mt-3" role="alert">
              {errors.name?.message}
            </p>
          )} */}
        </div>
        <div className="form-control w-1/2 mx-auto">
          <label className="label">
            <span className="label-text text-slate-900 font-semibold">
              Email
            </span>
          </label>
          <input
            type="text"
            // {...register("email", { required: "Email is required" })}
            className="input input-bordered border-slate-300 bg-slate-50 text-secondary font-normal"
            placeholder="Your Email ID"
          />
          {/* {errors.email && (
            <p className="text-red-400 ml-1 mt-3" role="alert">
              {errors.email?.message}
            </p>
          )}
          {signUpError === "Firebase: Error (auth/email-already-in-use)." && (
            <p className="text-error text-center mt-4">
              This email is already in use.
            </p>
          )} */}
        </div>
        <div className="form-control w-1/2 mx-auto">
          <label className="label">
            <span className="label-text text-slate-900 font-semibold">
              Phone Number
            </span>
          </label>
          <input
            type="number"
            // {...register("email", { required: "Email is required" })}
            className="input input-bordered border-slate-300 bg-slate-50 text-secondary font-normal"
            placeholder="Your Phone Number"
          />
          {/* {errors.email && (
            <p className="text-red-400 ml-1 mt-3" role="alert">
              {errors.email?.message}
            </p>
          )}
          {signUpError === "Firebase: Error (auth/email-already-in-use)." && (
            <p className="text-error text-center mt-4">
              This email is already in use.
            </p>
          )} */}
        </div>
        <div className="form-control w-1/2 mx-auto">
          <label className="label">
            <span className="label-text text-slate-900 font-semibold">
              Password
            </span>
          </label>
          <input
            type="password"
            // {...register("password", {
            //   required: "Password is required",
            //   minLength: {
            //     value: 6,
            //     message: "Password must be alteast 6 characters longer!",
            //   },
            //   pattern: {
            //     value:
            //       /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/,
            //     message:
            //       "Your password must have at least 2 capital letters, 2 small letters, 2 digits, and 1 special character!",
            //   },
            // })}
            className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal"
            placeholder="Your Password"
          />
          {/* {errors.password && (
            <p className="text-red-400 ml-1" role="alert">
              {errors.password?.message}
            </p>
          )} */}
          <div className="mt-6 py-3 rounded-lg bg-slate-900">
            <h2 className="text-xs text-center font-semibold">
              Password Criteria
            </h2>
            <ul className="my-4">
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule1"
                  className="radio radio-primary ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs font-semibold">
                  Must have two capital letters
                </p>
              </li>
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule2"
                  className="radio radio-primary ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs font-semibold">
                  Must have two small letters
                </p>
              </li>
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule3"
                  className="radio radio-primary ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs font-semibold">Must have two digits</p>
              </li>
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule4"
                  className="radio radio-primary ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs font-semibold">
                  Must have one special character
                </p>
              </li>
              <li className="flex gap-4 my-1">
                <input
                  type="radio"
                  name="rule5"
                  className="radio radio-primary ml-8 w-4 h-4"
                  checked
                  disabled
                />
                <p className="text-xs font-semibold">
                  Must be of at least 6 in length
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button className="btn btn-secondary w-1/2">SIGN UP</button>
        </div>
        {/* {signUpError === "Firebase: Error (auth/user-not-found)." && (
          <p className="text-red-400 text-center mt-4">
            Invalid Email. User not found!
          </p>
        )} */}
        {/* {signUpError === "Firebase: Error (auth/wrong-password)." && (
          <p className="text-red-400 text-center mt-4">Wrong Password</p>
        )} */}
        <p className="text-center mt-4 text-slate-900 font-medium text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-success">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
