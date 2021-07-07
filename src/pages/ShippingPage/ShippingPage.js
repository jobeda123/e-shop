import React, { useState } from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import shippingBack from "../../images/shipping_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import TotalAmountSummaryCard from "../../components/TotalAmountSummaryCard/TotalAmountSummaryCard";
import ShippingAddress from "../../components/ShippingAddress/ShippingAddress";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";

const ShippingPage = () => {
  const bannerDetail = {
    pic: shippingBack,
    title: "Shipping Details",
  };

  const [paymentMethod, setPaymentMethod] = useState("");

  const submitMethod = (data) => {
    setPaymentMethod(data);
  };
  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Shipping"}></LocationTrack>

      {/* Shopping cart detail page  and total amount summary*/}
      <div className="container d-flex">
        <div className="col-md-6 my-5">
          <ShippingAddress></ShippingAddress>
        </div>
        <div className="col-md-4 offset-1 my-5">
          <TotalAmountSummaryCard role="shipping" />
          <PaymentMethod paymentFunction={submitMethod}/>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default ShippingPage;
