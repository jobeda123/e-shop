import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";


const LoginSignPage = () => {
  return (
    <>
      <HeaderNavbar></HeaderNavbar>

      {/* Login Form Area */}
      <div
        style={{ marginTop: "50px", marginBottom: "50px" }}
        className="container"
      >
          <LoginForm></LoginForm>
      </div>

      <Footer></Footer>
    </>
  );
};

export default LoginSignPage;
