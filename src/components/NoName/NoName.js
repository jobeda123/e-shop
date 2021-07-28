import React from "react";
import {
  faHeadphones,
  faShieldAlt,
  faShippingFast,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import NoNameCard from "../NoNameCard/NoNameCard";


const iconData = [
  {
    icon: faShippingFast,
    title: "FREE DELIVERY",
    description: "Free delivery on order above $200",
  },
  {
    icon: faUndoAlt,
    title: "30 DAYS RETURN",
    description: "Return it within 30 days for an exchange",
  },
  {
    icon: faHeadphones,
    title: "SUPPORT 24/7",
    description: "Contact us 24 hours a day, 7 days a week",
  },
  {
    icon: faShieldAlt,
    title: "PAYMENT SECURITY",
    description: "We ensure 100% payment security",
  },
];

const NoName = () => {
  return (
    <section
      className="container"
      style={{ marginTop: "70px"}}
    >
      <div className="row">
        {iconData.map((data,index) => (
          <NoNameCard details={data} key={index}></NoNameCard>
        ))}
      </div>
    </section>
  );
};

export default NoName;
