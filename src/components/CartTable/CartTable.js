import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import "./CartTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { CartContext, HandleRemoveCartContext } from "../../App";
import axios from "axios";
import StarRatings from "react-star-ratings";


const CartTable = (props) => {
  const [addCart] = useContext(CartContext);
  const handleRemoveCart = useContext(HandleRemoveCartContext);
  const buttonDisplay = props.deleteButton;
  const [cart, setCart] = useState([]);


  useEffect(() => {
    if (props.id) {
      axios
        .get(
          "https://boiling-headland-36176.herokuapp.com/order?id=" + props.id,
          {
            headers: {
              authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          const newItem = [...res.data.allItemDetail];
          setCart(newItem);
        })
        .catch((err) => {});
    }
  }, [props.id]);

  
  return (
    <div className="my-5 d-flex">
      <Table bordered size="sm">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.length === 0
            ? addCart?.map((data) => (
                <tr className="cartTable">
                  <td>
                    <div>
                      <div>
                        <p style={{ fontWeight: 700 }}>{data.itemTitle}</p>
                        <StarRatings
                          rating={data.rating}
                          starRatedColor="#FE8530"
                          numberOfStars={5}
                          starDimension="20px"
                          starSpacing="1px"
                        />
                      </div>
                      <img
                        className="pt-3"
                        src={data.itemPic}
                        alt=""
                        width="100px"
                      />
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
                        <p style={{ color: "red" }}>${data.updatedPrice}</p>
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="d-flex justify-content-evenly">
                      <button
                        style={{
                          backgroundColor: "white",
                          display: buttonDisplay,
                        }}
                        className="smallRemoveBtn"
                        onClick={() => handleRemoveCart(data)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} size="1x" />
                      </button>
                      <p className="pt-3">1</p>
                    </div>
                  </td>
                  <td>
                    {data.discount === 0 ? (
                      <p style={{ color: "black", fontWeight: 700 }}>
                        ${data.oldPrice}
                      </p>
                    ) : (
                      <p style={{ color: "black", fontWeight: 700 }}>
                        ${data.updatedPrice}
                      </p>
                    )}
                  </td>
                </tr>
              ))
            : cart?.map((data) => (
                <tr className="cartTable">
                  <td>
                    <div>
                      <div>
                        <p style={{ fontWeight: 700 }}>{data.itemTitle}</p>
                        <StarRatings
                          rating={data.rating}
                          starRatedColor="#FE8530"
                          numberOfStars={5}
                          starDimension="20px"
                          starSpacing="1px"
                        />
                      </div>
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
                        <p style={{ color: "red" }}>${data.updatedPrice}</p>
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="d-flex justify-content-evenly">
                      <button
                        style={{
                          backgroundColor: "white",
                          display: buttonDisplay,
                        }}
                        className="smallRemoveBtn"
                        onClick={() => handleRemoveCart(data)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} size="1x" />
                      </button>
                      <p className="pt-3">1</p>
                    </div>
                  </td>
                  <td>
                    {data.discount === 0 ? (
                      <p style={{ color: "black", fontWeight: 700 }}>
                        ${data.oldPrice}
                      </p>
                    ) : (
                      <p style={{ color: "black", fontWeight: 700 }}>
                        ${data.updatedPrice}
                      </p>
                    )}
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartTable;
