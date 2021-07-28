import React, { useContext } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./ProductModal.css";
import StarRatings from "react-star-ratings";
import { HandleAddCartContext } from "../../App";

export default function ProductModal(props) {
  const handleAddCart = useContext(HandleAddCartContext);
  const { itemTitle, itemDescription, oldPrice, itemPic, discount, rating, _id } =
    props.data;

  const newPrice = (oldPrice - (oldPrice * discount) / 100).toFixed(2);

  const cardDetails = {
    itemID: _id,
    itemPic: itemPic,
    itemTitle: itemTitle,
    itemDescription: itemDescription,
    oldPrice: oldPrice,
    discount: discount,
    updatedPrice: newPrice,
    rating: rating,
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
    >
      <Modal.Header className="show-grid" closeButton>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <img src={itemPic} alt="" width="100%" height="350px" />
            </Col>
            <Col xs={12} md={6}>
              <div className="">
                <p className="modalCartTitle">{itemTitle}</p>
                <p>{itemDescription}</p>
                <StarRatings
                  rating={rating}
                  starRatedColor="#FE8530"
                  numberOfStars={5}
                  starDimension="35px"
                  starSpacing="1px"
                />
                <div className="py-3">
                  {discount !== 0 ? (
                    <div className="d-flex">
                      <p className="oldPrice">${oldPrice}</p>
                      <p className="newPrice">${newPrice}</p>
                    </div>
                  ) : (
                    <p className="modalPrice">${oldPrice}</p>
                  )}
                </div>

                <button
                  className="modalAddCartBtn"
                  onClick={() => handleAddCart(cardDetails)}
                >
                  Add To Cart
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Header>
    </Modal>
  );
}
