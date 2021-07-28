import React, { useContext, useState, useEffect } from "react";
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
    axios
      .get("https://boiling-headland-36176.herokuapp.com/allAdmin")
      .then((res) => {
        setAllAdmin(res.data);
      });
  }, []);

  const handleBlur = (e) => {
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
          const newUserInfo = { ...user };
          newUserInfo.name = res.user.displayName;
          newUserInfo.error = "";
          newUserInfo.isSignedIn = true;
          newUserInfo.success = true;

          // check whether the user is admin or not
          const checkAdmin = allAdmin.find(
            (singleAdmin) => singleAdmin.adminEmail === user.email
          );
          checkAdmin !== undefined
            ? (newUserInfo.role = "admin")
            : (newUserInfo.role = "user");

          setUser(newUserInfo);
          storeToken();
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          alert(error.message);
          document.getElementById("pass").value = "";
          document.getElementById("email").value = "";
        });
    }
    e.preventDefault();
  };

  const storeToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then((idToken) => {
        window.sessionStorage.setItem("token", idToken);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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
              id="email"
              type="text"
              name="email"
              onBlur={handleBlur}
              placeholder="Your Email address"
              required
            />
            <br />
            <input
              id="pass"
              type="password"
              name="password"
              onBlur={handleBlur}
              placeholder="Your Password"
              required
            />
            <br />
            <button className="loginBtn my-3 align-self-start">Login</button>
            <p>
              Don't Have An Account?<Link to="/signUp"> Creat An Account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
