import React, { useContext, useEffect, useState } from 'react';
import "./OrderHistory.css";
import { Table } from "react-bootstrap";
import { UserContext } from '../../App';
import axios from 'axios';


const OrderHistory = () => {
  const [user, setUser] = useContext(UserContext);
  const [allOrder, setAllOrder] = useState([]);
  const entry = [{
    id: "01254ahhd",
    date: "09-07-2021",
    total: 750.98,
    deliveredStatus: "Pending",
  }, {
    id: "01246akud",
    date: "09-07-2021",
    total: 1500.98,
    deliveredStatus: "Received",
  }];


  useEffect(() => {
    console.log("user email: " + user.email);
    axios.get("http://localhost:4000/allOrder?email=" + user.email)
        .then(res => {
            console.log("Data in order status: ", res.data);
            setAllOrder(res.data);
        })
}, [user.email]);

  return (
    <div className="userAccountDetailArea smTable">
      <p style={{ fontWeight: "700" }}>My Orders :{allOrder.length}</p>
      <Table bordered size="lg">
        <tbody>
          <tr>
            <td>ID </td>
            <td>Date</td>
            <td>Total Amount</td>
            <td>Delivered</td>
            <td>Action</td>
          </tr>

          {allOrder.map(data =><tr>
            <td>{data._id}</td>
            <td>{data.eventPaymentInfo.date}</td>
            <td>${data.totalAmount}</td>
            <td id="status">
              <div
                style={{
                  backgroundColor:
                    data.shippingInfo.deliveredStatus !== "Pending" && "lightgreen",
                  color:
                    data.shippingInfo.deliveredStatus !== "Pending" && "green",
                }}
              >
                {data.shippingInfo.deliveredStatus}
              </div>
            </td>
            <td>
                {/* ai order er id dore specific order details e niye jabe */}
              <button
                onClick={() => {
                  console.log("Details button for specific order: ", data._id);
                }}
                className="blackBtn smTableBtn"
              >
                Details
              </button>
            </td>
          </tr>)}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderHistory;
