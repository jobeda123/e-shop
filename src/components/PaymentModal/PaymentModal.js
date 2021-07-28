import React, { useState } from "react";
import {  Container, Modal, Row } from "react-bootstrap";
import "./PaymentModal.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCardForm from "../PaymentProcess/PaymentCardForm";

const stripePromise = loadStripe(
  "pk_test_51IgbSgCnLQQBj0PllEU41ojvpWm9EOcgrOV0eXc6yJPE1QXkKqsfSUkabMPMxhIgGVQo3PYFpbeywDDb0SnZNsoH000LI3xU5O"
);

export default function ProductModal(props) {
  const [setModalShow] = useState(false);
  
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="sm"
      top
    >
      <Modal.Header className="show-grid" closeButton>
        <Container>
          <Row>
            <h5 className="paymentModalTitle">Payment Information</h5>
            <Elements stripe={stripePromise}>
              <PaymentCardForm
                setModalShow={setModalShow}
              />
            </Elements>
          </Row>
        </Container>
      </Modal.Header>
    </Modal>
  );
}
