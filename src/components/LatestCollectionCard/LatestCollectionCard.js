import React from "react";
import { Card } from "react-bootstrap";
import "./LatestCollectionCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";
import { HandleAddCartContext } from "../../App";
import { useContext } from "react";
import StarRatings from "react-star-ratings";


const LatestCollectionCard = (props) => {
  const handleAddCart = useContext(HandleAddCartContext);

  const { description, discount, _id, title, price, image, rating } =
    props.item;
  const updatedPrice = (price - (price * discount) / 100).toFixed(2);

  const cardDetails = {
    itemID: _id,
    itemPic: image,
    itemTitle: title,
    itemDescription: description,
    oldPrice: price,
    discount: 0,
    updatedPrice: updatedPrice,
    rating: rating,
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card
        style={{ width: "16rem", padding: "0px", margin: "0px auto 30px auto" }}
      >
        <div className="imageArea">
          <Card.Img
            variant="top"
            style={{ height: "16rem" }}
            src={image}
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
      
        <Card.Body className="text-left">
          <Card.Title>{title}</Card.Title>
          <StarRatings
            rating={rating}
            starRatedColor="#FE8530"
            numberOfStars={5}
            starDimension="25px"
            starSpacing="1px"
          />
          <div className="d-flex">
            <Card.Text className="price">${price}</Card.Text>
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
