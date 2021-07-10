import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("login-----", data);
    // store data in the mongoDB
    // form input will be empty
  };

  return (
    <div className="loginArea">
      <div className="title">
        <h2>Hello!</h2>
        <p>Sign Into Your Account</p>
      </div>

      <div className="loginForm d-flex justify-content-center">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              className="loginBtn my-3 align-self-start"
              onClick={() => {
                console.log("log into the account.....");
              }}
            >
              Login
            </button>
            <p>Don't Have An Account?<a href="/signUp"> Creat An Account</a></p>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default LoginForm;
