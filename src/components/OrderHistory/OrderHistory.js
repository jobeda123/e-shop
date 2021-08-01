import React, { useContext, useEffect, useState } from "react";
import "./OrderHistory.css";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const OrderHistory = () => {
  const [user, setUser] = useContext(UserContext);
  const [allOrder, setAllOrder] = useState([]);
  const [statusChange, setStatusChange] = useState(false);
  const [pending, setPending] = useState(0);
  const [delivery, setDelivery] = useState(0);

  useEffect(() => {
    // admin
    if (user.role === "admin") {
      axios
        .get("https://boiling-headland-36176.herokuapp.com/allOrderAdmin", {
          headers: {
            authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setAllOrder(res.data);

          const resultPending = res.data.filter(
            (order) => order.deliveredStatus === "Pending"
          );
          setPending(resultPending.length);

          const resultDelivery = res.data.filter(
            (order) => order.deliveredStatus === "Delivered"
          );
          setDelivery(resultDelivery.length);
        });
    }

    // user
    else {
      axios
        .get(
          "https://boiling-headland-36176.herokuapp.com/allOrder?email=" +
            user.email,
          {
            headers: {
              authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          setAllOrder(res.data);
        });
    }
  }, [user.email, statusChange, user.role]);

  const handleOption = (e, id) => {
    console.log(e.target.value, id);
    const status = e.target.value;
    const orderStatus = { id, status };

    fetch(
      `https://boiling-headland-36176.herokuapp.com/updateOrderStatus/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderStatus),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setStatusChange(true);
        }
      });
  };

  return (
    <>
      {allOrder.length !== 0 ? (
        <>
          {user.role === "admin" && (
            <div className="d-flex orderStatusCard">
              <div className="col-md-4" style={{ backgroundColor: "blue" }}>
                <h4>Total Orders: {allOrder.length}</h4>
              </div>
              <div className="col-md-4" style={{ backgroundColor: "green" }}>
                <h4>Total Delivery: {delivery}</h4>
              </div>
              <div className="col-md-4" style={{ backgroundColor: "red" }}>
                <h4>Total Pending: {pending}</h4>
              </div>
            </div>
          )}

          <div className="userAccountDetailArea smTable">
            <p style={{ fontWeight: "700" }}>My Orders:</p>
            <Table bordered size="lg">
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>Date</td>
                  <td>Total Amount</td>
                  <td>Delivery Status</td>
                  <td>Action</td>
                </tr>

                {allOrder.map((data) => (
                  <tr>
                    <td>{data.email}</td>
                    <td>{data.eventPaymentInfo.date}</td>
                    <td>${data.totalAmount}</td>

                    <td id="status">
                      {user.role === "admin" ? (
                        <div>
                          {/* {data.shippingInfo.deliveredStatus} */}
                          <select
                            value={data.deliveredStatus}
                            onChange={(e) => handleOption(e, data._id)}
                            style={{
                              backgroundColor:
                                data.deliveredStatus !== "Pending"
                                  ? "lightgreen"
                                  : "rgb(243, 142, 153)",
                              color:
                                data.deliveredStatus !== "Pending"
                                  ? "green"
                                  : "red",
                              border: "0px",
                            }}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </div>
                      ) : (
                        <div
                          style={{
                            backgroundColor:
                              data.deliveredStatus !== "Pending"
                                ? "lightgreen"
                                : "rgb(243, 142, 153)",
                            color:
                              data.deliveredStatus !== "Pending"
                                ? "green"
                                : "red",
                            border: "0px",
                          }}
                        >
                          {data.deliveredStatus}
                        </div>
                      )}
                    </td>

                    <td>
                      {/* ai order er id dore specific order details e niye jabe */}
                      <Link to={`/orderDetail/${data._id}`}>
                        <button
                          onClick={() => {
                            console.log(
                              "Details button for specific order: ",
                              data._id
                            );
                          }}
                          className="blackBtn smTableBtn"
                        >
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default OrderHistory;
