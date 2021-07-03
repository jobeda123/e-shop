import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import "./LatestCollectionCard.css";
import dress from "../../images/lok.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";
import { UserContext } from "../../App";

const LatestCollectionCard = () => {
  const [addCart, setAddCart] = useContext(UserContext);

  const cardDetails = {
    itemPic: dress,
    itemTitle: "Blue Shirt",
    itemDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam quisquam aut, error illo natus exercitationem architecto sapiente tempore nihil",
    oldPrice: 95.86,
    discount: 0,
  };

  const [modalShow, setModalShow] = useState(false);
  const p = 95.86;

  const handleAddCart = (cardDetails) =>{
    console.log("add to cart button click from latest offer");

    const myArray = localStorage.getItem('cart');
    const fromLocalStorage = JSON.parse(myArray); // json theke array te convert

    //console.log("From local Storage", fromLocalStorage);
    const newCart = [...fromLocalStorage, cardDetails];   // all cart item copy

    setAddCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    
    // localStorage.removeItem('cart');
  }

  return (
    <>
      <Card style={{ width: "16rem", padding: "0px", margin: "0px auto" }}>
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
        </div>
        <Card.Body style={{ height: "6rem" }} className="text-left">
          <Card.Title>{cardDetails.itemTitle}</Card.Title>
          <div className="d-flex">
            <Card.Text className="price">${p}</Card.Text>
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

export default LatestCollectionCard;
