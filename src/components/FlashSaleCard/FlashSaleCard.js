import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import "./FlashSaleCard.css";
import dress from "../../images/women_category.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";
import { UserContext } from "../../App";


const FlashSaleCard = () => {
  const [addCart, setAddCart] = useContext(UserContext);

  const cardDetails = {
    itemID:0,
    itemPic: dress,
    itemTitle: "Pink Dress",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam quisquam aut, error illo natus exercitationem architecto sapiente tempore nihil",
    oldPrice: 84.8,
    discount: 15,
  };

  const [modalShow, setModalShow] = useState(false);
  const discount = 15;
  const p = 84.8;
  const price = p - (p * discount) / 100;

  const handleAddCart = (cardDetails) =>{
    console.log("add to cart button click");

    const myArray = localStorage.getItem('cart');
    const fromLocalStorage = JSON.parse(myArray); // json theke array te convert

    //console.log("From local Storage", fromLocalStorage);
    const newCart = [...fromLocalStorage, cardDetails];   // all cart item copy

    setAddCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    
    // localStorage.removeItem('cart');
  }

  // console.log("total cart item: ", addCart);

  return (
    <>
      <Card style={{ width: "16rem", padding: "0px", margin: "0px auto 30px auto" }}>
        <div className="imageArea">
          <Card.Img
            variant="top"
            style={{ height: "16rem" }}
            src={dress}
            className="cardImg"
          />
          <span>
            <button
              onClick={() => handleAddCart(cardDetails)}
              className="addCartBtn"
            >
              <FontAwesomeIcon icon={faShoppingCart} size="1x" /> Quick Shop
            </button>
          </span>

          <span className="quickBtn">
            <button onClick={() => setModalShow(true)} className="addCartBtn">
              <FontAwesomeIcon icon={faEye} size="1x" /> Quick View
            </button>
          </span>

          <p className="discountArea">-{discount}%</p>
        </div>
        <Card.Body style={{ height: "6rem" }} className="text-left">
          <Card.Title>Pink Dress</Card.Title>
          <div className="d-flex">
            <Card.Text className="actualPrice pr-3">${p}</Card.Text>
            <Card.Text className="updatedPrice">${price}</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <ProductModal
        show={modalShow}
        data={cardDetails}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default FlashSaleCard;
