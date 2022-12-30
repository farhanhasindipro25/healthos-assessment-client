import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const Login = () => {
  useTitle("Login");
  
  return (
    <div>
      <div className="mt-44">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">
          Welcome back to String Symphony!
        </h2>
        <p className="font-medium text-slate-900 text-center text-lg mt-2">
          Please log in to continue.
        </p>
      </div>
      <form
        className="container mx-auto mt-10 pb-96"
        //   onSubmit={handleSubmit(handleLogin)}
      >
        <div className="form-control w-1/2 mx-auto">
          <label className="label">
            <span className="label-text text-slate-900 font-semibold">
              Phone Number
            </span>
          </label>
          <input
            type="number"
            // {...register("email", { required: "Email is required" })}
            className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal"
            placeholder="Your Phone Number"
          />
          {/* {errors.email && (
            <p className="text-red-400 ml-1 mt-3" role="alert">
              {errors.email?.message}
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
            // })}
            className="input input-bordered border-slate-300 bg-slate-50 mb-3 text-secondary font-normal"
            placeholder="Your Password"
          />
          {/* {errors.password && (
            <p className="text-red-400 ml-1 mt-3" role="alert">
              {errors.password?.message}
            </p>
          )} */}
        </div>
        <div className="flex justify-center mt-2">
          <button className="btn btn-secondary w-1/2">LOGIN</button>
        </div>
        <p className="text-center mt-6 text-slate-900 text-sm font-medium">
          Don't have an account?{" "}
          <Link to="/signup" className="text-success">
            Sign up.
          </Link>
        </p>
        {/* {loginError === "Firebase: Error (auth/user-not-found)." && (
          <p className="text-error text-center mt-4">
            Invalid Email. User not found!
          </p>
        )} */}
        {/* {loginError === "Firebase: Error (auth/wrong-password)." && (
          <p className="text-error text-center mt-4">Wrong Password</p>
        )} */}
      </form>
    </div>
  );
};

export default Login;
