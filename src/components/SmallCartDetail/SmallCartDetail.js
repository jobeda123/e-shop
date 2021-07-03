import React from "react";
import "./SmallCartDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SmallCartDetail = (props) => {
  console.log(props);
  
  const { itemTitle, itemPic, oldPrice, discount } = props.cartData;
  const newPrice = oldPrice - (oldPrice * discount) / 100;

  return (
    <div className="d-flex pb-3">
      <div className="col-md-6">
        <img src={itemPic} alt="" width="100%" height="100%" />
      </div>

      <div className="col-md-6 text-left lh-1">
        <p className="SmallCartDetailTitle">{itemTitle}</p>
        {discount !== 0 ? (
          <div className="d-flex">
            <p className="smallOldPrice pr-3">${oldPrice}</p>
            <p className="smallUpdatedPrice">${newPrice}</p>
          </div>
        ) : (
          <p className="smallNormalPrice">${oldPrice}</p>
        )}
        <button className="smallRemoveBtn">
          <FontAwesomeIcon icon={faTrashAlt} size="1x" />
        </button>
      </div>
    </div>
  );
};

export default SmallCartDetail;
