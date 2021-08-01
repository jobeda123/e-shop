import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderNavbar from "../../components/HeaderNavBar/HeaderNavBar";
import Footer from "../../components/Footer/Footer";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import LatestCollectionCard from "../../components/LatestCollectionCard/LatestCollectionCard";
import womenBack from "../../images/womenBanner.jpeg";
import LocationTrack from "../../components/LocationTrack/LocationTrack";
import productNotFound from "../../images/productNotFound.png";
import FlashSaleCard from "../../components/FlashSaleCard/FlashSaleCard";

const SearchPage = () => {
  let { searchText } = useParams();
  const [searchProduct, setSearchProduct] = useState([]);
  const [empty, setEmpty] = useState(true);

  const bannerDetail = {
    pic: womenBack,
    title: "Search Result",
  };

  useEffect(() => {
    fetch(
      `https://boiling-headland-36176.herokuapp.com/productBySearch/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setSearchProduct(data);
          setEmpty(false);
        } else {
          setEmpty(true);
        }
      })
      .catch((err) => console.log(err));
  }, [searchText]);


  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <CategoryBanner bannerDetail={bannerDetail}></CategoryBanner>
      <LocationTrack data={"Search Result"}></LocationTrack>

      {/* Product Cards */}

      {empty === false ? (
        <div
          style={{ marginTop: "50px", marginBottom: "100px" }}
          className="container row d-flex justify-content-center cardArea"
        >
          {/* Latest Collection Cards */}
          <div className="row cardArea">
            {searchProduct.map((product, index) => {
              if (product.discount === 0) {
                return (
                  <LatestCollectionCard
                    item={product}
                    key={index}
                  ></LatestCollectionCard>
                );
              } else {
                return (
                  <FlashSaleCard item={product} key={index}></FlashSaleCard>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <div className="my-5 row" style={{ paddingBottom: "0px" }}>
          <img className="fluid" src={productNotFound} alt="" />
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default SearchPage;
