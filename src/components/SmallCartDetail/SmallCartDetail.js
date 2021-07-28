import React from "react";
import "./SmallCartDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { HandleRemoveCartContext } from "../../App";
import { useContext } from "react";


const SmallCartDetail = (props) => {
  const handleRemoveCart = useContext(HandleRemoveCartContext);

  const { itemTitle, itemPic, oldPrice, discount } = props.cartData;
  const newPrice = oldPrice - (oldPrice * discount) / 100;

  return (
    <div className="d-flex pb-3">
      <div className="col-md-4">
        <img src={itemPic} alt="" width="90%" height="100%"/>
      </div>

      <div className="col-md-8 text-left lh-1">
        <p className="SmallCartDetailTitle">{itemTitle}</p>
        {discount !== 0 ? (
          <div className="d-flex">
            <p className="smallOldPrice pr-3">${oldPrice}</p>
            <p className="smallUpdatedPrice">${newPrice}</p>
          </div>
        ) : (
          <p className="smallNormalPrice">${oldPrice}</p>
        )}
        <button
          className="smallRemoveBtn"
          onClick={() => handleRemoveCart(props.cartData)}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="1x" />
        </button>
      </div>
    </div>
  );
};

export default SmallCartDetail;
