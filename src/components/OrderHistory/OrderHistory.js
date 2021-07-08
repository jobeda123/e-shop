import React from "react";
import "./OrderHistory.css";
import { Table } from "react-bootstrap";

const OrderHistory = () => {
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
  
  return (
    <div className="userAccountDetailArea">
      <p style={{ fontWeight: "700" }}>My Orders :</p>
      <Table bordered size="lg">
        <tbody>
          <tr>
            <td>ID </td>
            <td>Date</td>
            <td>Total Amount</td>
            <td>Delivered</td>
            <td>Action</td>
          </tr>

          {entry.map(data =><tr>
            <td>{data.id}</td>
            <td>{data.date}</td>
            <td>${data.total}</td>
            <td id="status">
              <div
                style={{
                  backgroundColor:
                    data.deliveredStatus !== "Pending" && "lightgreen",
                  color:
                    data.deliveredStatus !== "Pending" && "green",
                }}
              >
                {data.deliveredStatus}
              </div>
            </td>
            <td>
                {/* ai order er id dore specific order details e niye jabe */}
              <button
                onClick={() => {
                  console.log("Details button for specific order: ", data.id);
                }}
                className="blackBtn"
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
