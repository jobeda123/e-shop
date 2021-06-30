import React from "react";
import "./NoName.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faShieldAlt,
  faTruck,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import NoNameCard from "../NoNameCard/NoNameCard";

const iconData = [
  {
    icon: faTruck,
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
    <section className="container d-flex">
      {iconData.map((data) => (
        <NoNameCard details={data}></NoNameCard>
      ))}
    </section>
  );
};

export default NoName;
