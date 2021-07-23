import React from "react";
import { Table } from "react-bootstrap";
import "./CartTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { CartContext, HandleRemoveCartContext} from "../../App";
import { useContext } from "react";


const CartTable = (props) => {
  const [addCart] = useContext(CartContext);
  const handleRemoveCart = useContext(HandleRemoveCartContext);

  const buttonDisplay = props.deleteButton;

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
          {addCart?.map((data) => (
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
                      ${data.updatedPrice}
                    </p>
                  </div>
                )}
              </td>
              <td>
                <div className="d-flex justify-content-evenly">
                  <button
                    style={{ backgroundColor: "white", display: buttonDisplay}}
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
