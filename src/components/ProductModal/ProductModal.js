import React, { useContext } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./ProductModal.css";
import { CartContext } from "../../App";
import StarRatings from "react-star-ratings";

export default function ProductModal(props) {
  const [addCart, setAddCart] = useContext(CartContext);
  const { itemTitle, itemDescription, oldPrice, itemPic, discount, rating } =
    props.data;

  const cardDetails = {
    itemPic: itemPic,
    itemTitle: itemTitle,
    itemDescription: itemDescription,
    oldPrice: oldPrice,
    discount: discount,
    rating: rating,
  };

  const handleAddCart = (cardDetails) => {
    console.log("add to cart button click from latest offer");

    const myArray = window.localStorage.getItem("cart");
    const fromLocalStorage = JSON.parse(myArray); // json theke array te convert

    //console.log("From local Storage", fromLocalStorage);
    const newCart = [...fromLocalStorage, cardDetails]; // all cart item copy

    setAddCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));

    // window.localStorage.removeItem('cart');
  };

  const newPrice = (oldPrice - (oldPrice * discount) / 100).toFixed(2);
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
                  onClick={() => {
                    console.log("Modal add to cart button click..");
                    handleAddCart(cardDetails);
                  }}
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
