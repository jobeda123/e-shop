import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <HeaderNavbar></HeaderNavbar>

      {/* Login Form Area */}
      <div
        style={{ marginTop: "50px", marginBottom: "50px" }}
        className="container"
      >
        <SignUpForm />
      </div>

      <Footer></Footer>
    </>
  );
};

export default SignUpPage;
