import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import menBack from "../../images/men_back.jpg";
import Dashboard from "../../components/Dashboard/Dashboard";
import AddNewProduct from "../../components/AddNewProduct/AddNewProduct";


const AddProductPage = () => {
  const bannerDetail = {
    pic: menBack,
    title: "Add New Product",
  };
  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Add Product"}></LocationTrack>

      {/* Add Admin Area */}
      <div
        style={{ marginTop: "50px", marginBottom: "50px" }}
        className="container"
      >
        <div className="row">
          <div
            className="col-md-3 col-sm-6"
            style={{
              // border: "1px solid black",
              paddingRight: "50px",
              paddingLeft: "25px",
              marginBottom: "30px",
              marginRight: "50px",
            }}
          >
            <Dashboard whichBtn="addProduct" />
          </div>

          <div
            className="col-md-8 col-sm-12"
            // style={{ border: "1px solid black" }}
          >
            <AddNewProduct></AddNewProduct>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AddProductPage;
