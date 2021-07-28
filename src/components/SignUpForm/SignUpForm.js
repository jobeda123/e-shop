import React from "react";
import firebase from "firebase/app";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const SignUpForm = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/login" } } || {
      from: { pathname: "/" },
    };
  const [addUser, setAddUser] = useState({});

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (e.target.name === "userName") {
      const newUserInfo = { ...addUser };
      newUserInfo[e.target.name] = e.target.value;
      setAddUser(newUserInfo);
    }
    if (isFieldValid) {
      const newUserInfo = { ...addUser };
      newUserInfo[e.target.name] = e.target.value;
      setAddUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (addUser.email && addUser.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(addUser.email, addUser.password)
        .then((res) => {
          const newUserInfo = { ...addUser };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setAddUser(newUserInfo);
          updateUserName(addUser.userName);
          alert("You Are Registered Successfully");
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...addUser };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setAddUser(newUserInfo);
          alert(error.message);
          document.getElementById("pass").value = "";
          document.getElementById("email").value = "";
        });
    }
    e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="loginArea">
      <div className="title">
        <h2>Sign Up</h2>
      </div>

      <div className="loginForm d-flex justify-content-center">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              name="userName"
              type="text"
              onBlur={handleBlur}
              placeholder="Your name"
            />

            <br />
            <input
              type="text"
              name="email"
              onBlur={handleBlur}
              placeholder="Your Email address"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              onBlur={handleBlur}
              placeholder="Your Password"
              required
            />
            <br />
            <button className="loginBtn my-3 align-self-start">Sign Up</button>
            <p>
              Already Have an Account?<Link to="/login"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
