import React, { useContext } from "react";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import shoppingCartBack from "../../images/shopping_back.jpg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import CartTable from "../../components/CartTable/CartTable";
import TotalAmountSummaryCard from "../../components/TotalAmountSummaryCard/TotalAmountSummaryCard";
import { CartContext } from "../../App";
import { useHistory } from 'react-router-dom';


const ShoppingCartPage = (props) => {
  let history = useHistory();

  const [addCart, setAddCart] =useContext(CartContext);

  const bannerDetail = {
    pic: shoppingCartBack,
    title: "Shopping Cart",
  };

  if(addCart.length===0){
    history.push("/home");
  }


  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Shopping Cart"}></LocationTrack>

      {/* Shopping cart detail page  and total amount summary*/}
      <div
        className="container"
        // style={{ border: "1px solid black" }}
      >
        <div className="row d-flex">
          <div
            className="col-md-8 col-sm-12"
            // style={{ border: "1px solid red" }}
          >
            <CartTable deleteButton={"block"} ></CartTable>
          </div>
          <div
            className="col-md-4 my-5 col-sm-12"
            // style={{ border: "1px solid orange" }}
          >
            <TotalAmountSummaryCard
              displayButton={"block"}
              displayHeight={"280px"}
            ></TotalAmountSummaryCard>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default ShoppingCartPage;
