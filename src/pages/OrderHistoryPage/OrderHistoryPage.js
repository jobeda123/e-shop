import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import menBack from "../../images/men_back.jpg";
import orderHistoryBanner from "../../images/orderHistoryBanner.jpg";
import Dashboard from "../../components/Dashboard/Dashboard";
import OrderHistory from "../../components/OrderHistory/OrderHistory";


const OrderHistoryPage = () => {
  const bannerDetail = {
    pic: orderHistoryBanner,
    title: "View Order History",
  };
  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Order History"}></LocationTrack>
      {/* Profile Area */}
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
            <Dashboard whichBtn="order" />
          </div>

          <div
            className="col-md-8 col-sm-12"
            // style={{ border: "1px solid black" }}
          >
            <OrderHistory />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default OrderHistoryPage;
