import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";


const LoginForm = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useContext(UserContext);
  const [allAdmin, setAllAdmin] = useState([]);


  useEffect(() => {
    axios.get("https://boiling-headland-36176.herokuapp.com/allAdmin").then((res) => {
      console.log("all admin: ", res.data);
      setAllAdmin(res.data);
    });
  }, []);


  const handleBlur = (e) => {
    console.log(e.target.value);
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  };

  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log("sign in user info", res.user);
          const newUserInfo = { ...user };
          newUserInfo.name= res.user.displayName;
          newUserInfo.error = "";
          newUserInfo.isSignedIn= true
          newUserInfo.success = true;

          // check whether the user is admin or not
          const checkAdmin = allAdmin.find(
            (singleAdmin) => singleAdmin.adminEmail === user.email
          );
          checkAdmin!== undefined? newUserInfo.role="admin": newUserInfo.role="user";
  
          setUser(newUserInfo);
          storeToken();
          history.replace(from);
        })
        .catch(function (error) {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  const storeToken = ()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
      console.log("ID Token",idToken);
      window.sessionStorage.setItem("token",idToken);
    }).catch(function(error) {
      // Handle error
    });
  }

  return (
    <div className="loginArea">
      <div className="title">
        <h2>Hello!</h2>
        <p>Sign Into Your Account</p>
      </div>

      <div className="loginForm d-flex justify-content-center">
        <div>
          <form onSubmit={handleSubmit}>
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
            <button
              className="loginBtn my-3 align-self-start"
              onClick={() => {
                console.log("log into the account.....");
              }}
            >
              Login
            </button>
            <p>
              Don't Have An Account?<Link to="/signUp"> Creat An Account</Link>
            </p>
          </form>
          {user.error && <p style={{ color: "red" }}>{user.error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
