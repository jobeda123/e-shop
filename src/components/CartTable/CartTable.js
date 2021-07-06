import React from "react";
import { Table } from "react-bootstrap";
import "./CartTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";



const CartTable = () => {
  const myArray = localStorage.getItem("cart");
  const fromLocalStorage = JSON.parse(myArray); // json theke array te convert
  // console.log(fromLocalStorage);

  const deliveryCharge = 7;
  let totalPrice = 0;
  // calculate total price
  let subTotalPrice = 0;
  for (let i = 0; i < fromLocalStorage.length; i++) {
    if (fromLocalStorage[i].discount !== 0) {
      subTotalPrice +=
        fromLocalStorage[i].oldPrice -
        (fromLocalStorage[i].oldPrice * fromLocalStorage[i].discount) / 100;
    } else {
      subTotalPrice += fromLocalStorage[i].oldPrice;
    }

    totalPrice = deliveryCharge + subTotalPrice;

    // console.log("total price: ", subTotalPrice);
  }
  return (
    <div className="container my-5 d-flex">
      <Table className="col-md-8 col-sm-12" bordered size="sm">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {fromLocalStorage.map((data) => (
            <tr className="cartTable">
              <td>
                <div>
                  <p style={{ fontWeight: 700 }}>{data.itemTitle}</p>
                  <img src={data.itemPic} alt="" width="100px" />
                </div>
              </td>
              <td>
                {data.discount === 0 ? (
                  <p>${data.oldPrice}</p>
                ) : (
                  <div>
                    <p style={{ textDecoration: "line-through" }}>
                      ${data.oldPrice}
                    </p>
                    <p style={{ color: "red" }}>
                      ${data.oldPrice - (data.discount * data.oldPrice) / 100}
                    </p>
                  </div>
                )}
              </td>
              <td>
                <div className="d-flex justify-content-evenly">
                  <button style={{ backgroundColor: "white"}}className="smallRemoveBtn">
                    <FontAwesomeIcon icon={faTrashAlt} size="1x" />
                  </button>
                  <p>1</p>
                </div>
              </td>
              <td>
                {data.discount === 0 ? (
                  <p style={{ color: "black", fontWeight: 700 }}>
                    ${data.oldPrice}
                  </p>
                ) : (
                  <p style={{ color: "black", fontWeight: 700 }}>
                    ${data.oldPrice - (data.discount * data.oldPrice) / 100}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="calculateArea col-md-4 col-sm-12 ml-4">
        <div className="d-flex justify-content-between">
          <h5>Shipping Charge:</h5>
          <h5>${deliveryCharge.toFixed(2)}</h5>
        </div>
        <div className="d-flex justify-content-between">
          <h5>Sub Total Price:</h5>
          <h5>${subTotalPrice.toFixed(2)}</h5>
        </div>
        <div className="d-flex justify-content-between ">
          <h3>Total Price:</h3>
          <h3>${totalPrice.toFixed(2)}</h3>
        </div>
        <button onClick={() => console.log("Check out button click")}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTable;
