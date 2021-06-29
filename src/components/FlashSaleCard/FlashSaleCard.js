import React from "react";
import { Card, Button } from "react-bootstrap";
import "./FlashSaleCard.css";
import dress from "../../images/women_category.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const FlashSaleCard = () => {
  const p = 84.8;
  const price = p - (p * 30) / 100;
  return (
    <Card style={{width:"16rem", padding: "0px", margin: "0px auto"}}>
      <div className="imageArea">
        <Card.Img variant="top" style={{ height: "16rem" }} src={dress} className="cardImg" />
        <span><button 
        onClick={() =>console.log("add to cart button click")}
        className="addCartBtn"><FontAwesomeIcon icon={faShoppingCart} size="1x" /> Add To Cart</button></span>
      </div>
      <Card.Body style={{ height: "6rem" }} className="text-left">
        <Card.Title>Pink Dress</Card.Title>
        <div className="d-flex">
          <Card.Text className="actualPrice pr-3">${p}</Card.Text>
          <Card.Text className="updatedPrice">${price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FlashSaleCard;
