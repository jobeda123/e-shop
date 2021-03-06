import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FooterCol.css";

const FooterCol = (props) => {
  return (
    <div id="footerAlign" className="col-md-3 area">
      {props.menuTitle === "eShop" ? (
        <h2 className="text-white">{props.menuTitle}</h2>
      ) : (
        <p style={{ color: "white", fontSize: "20px" }}>{props.menuTitle}</p>
      )}
      <div className="left textArea pt-3">
        {props.menuItems.map((item, index) => (
          <div>
            {props.menuTitle === "eShop" ? (
              <div className="d-flex">
                <div className="mr-2">
                  <FontAwesomeIcon className="addressIcon" icon={item.icon} />
                </div>
                <div>
                  <p style={{ color: "#808080" }}>{item.name}</p>
                </div>
              </div>
            ) : props.menuTitle !== "Payment Method" ? (
              <p className="normalText">{item.name}</p>
            ) : (
              <p style={{ color: "#808080" }}>{item.name}</p>
            )}
          </div>
        ))}
      </div>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
