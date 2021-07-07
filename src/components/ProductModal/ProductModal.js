import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./ProductModal.css";


export default function ProductModal(props) {
  const { itemTitle, itemDescription, oldPrice, itemPic, discount } =
    props.data;

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
                <div className="pb-3">
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
                  onClick={() =>
                    console.log("Modal add to cart button click..")
                  }
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
