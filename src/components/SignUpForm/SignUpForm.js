import React from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("login-----", data);
    // store data in the mongoDB
    // form input will be empty
  };

  return (
    <div className="loginArea">
      <div className="title">
        <h2>Sign Up</h2>
      </div>

      <div className="loginForm d-flex justify-content-center">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="name"
              {...register("userName", { required: true })}
              placeholder="Enter Name"
            />
            <br />
            <input
              type="email"
              {...register("userEmail", { required: true })}
              placeholder="Enter Email"
            />
            <br />
            <input
              type="password"
              {...register("userPassword", { required: true })}
              placeholder="Enter Password"
            />
            <br />
            <button
              className="loginBtn ml-2 my-3 align-self-start"
              onClick={() => {
                console.log("Sign up for new the account.....");
              }}
            >
              Sign Up
            </button>
            <p>
              Already Have An Account?<a href="/login"> Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
