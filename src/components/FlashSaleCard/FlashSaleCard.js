import React, {useState, useContext} from "react";
import { Card } from "react-bootstrap";
import "./FlashSaleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faEye } from "@fortawesome/free-solid-svg-icons";
import ProductModal from "../ProductModal/ProductModal";
import { HandleAddCartContext } from "../../App";



const FlashSaleCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const handleAddCart = useContext(HandleAddCartContext);

  const { description, discount, _id, title, price, image} = props.item;
  const updatedPrice = (price - (price * discount) / 100).toFixed(2);

  const cardDetails = {
    itemID:_id,
    itemPic: image,
    itemTitle: title,
    itemDescription:description,
    oldPrice: price,
    discount: discount,
    updatedPrice: updatedPrice,
  };


  return (
    <>
      <Card style={{ width: "16rem", padding: "0px", margin: "0px auto 30px auto" }}>
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

          <p className="discountArea">-{discount}%</p>
        </div>
        <Card.Body style={{ height: "15rem" }} className="text-left">
          <Card.Title>{title}</Card.Title>
          <div className="d-flex">
            <Card.Text className="actualPrice pr-3">${price}</Card.Text>
            <Card.Text className="updatedPrice">${updatedPrice}</Card.Text>
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
