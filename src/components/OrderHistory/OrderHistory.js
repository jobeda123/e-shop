import React, { useContext, useEffect, useState } from "react";
import "./OrderHistory.css";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


const OrderHistory = () => {
  const [user, setUser] = useContext(UserContext);
  const [allOrder, setAllOrder] = useState([]);
  const [statusChange, setStatusChange] = useState(false);
  let history = useHistory();


  useEffect(() => {
    console.log("user email: " + user.email);
    // admin
    if (user.role === "admin") {
      axios
        .get("http://localhost:4000/allOrderAdmin", {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log("Data in order status for admin: ", res.data);
          setAllOrder(res.data);
        });
    }

    // user
    else {
      axios
        .get("http://localhost:4000/allOrder?email=" + user.email, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log("Data in order status for user: ", res.data);
          setAllOrder(res.data);
        });
    }
  }, [user.email, statusChange, user.role]);

  const handleOption = (e, id) => {
    console.log(e.target.value, id);
    const status = e.target.value;
    const orderStatus = { id, status };

    fetch(`http://localhost:4000/updateOrderStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderStatus),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          setStatusChange(true);
        }
      });
  };

  return (
    <div className="userAccountDetailArea smTable">
      <p style={{ fontWeight: "700" }}>My Orders : {allOrder.length}</p>
      <Table bordered size="lg">
        <tbody>
          <tr>
            <td>ID </td>
            <td>Date</td>
            <td>Total Amount</td>
            <td>Delivery Status</td>
            <td>Action</td>
          </tr>

          {allOrder.map((data) => (
            <tr>
              <td>{data._id}</td>
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
                          data.deliveredStatus !== "Pending" ? "green" : "red",
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
                        data.deliveredStatus !== "Pending" ? "green" : "red",
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
  );
};

export default OrderHistory;
