import React from "react";
import "./NoNameCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoNameCard = (props) => {
  const { icon, title, description } = props.details;
  return (
    <section className="d-flex col-md-3 col-sm-6 noNameArea">
      <div className="d-flex">
        <div className="noNameIcon">
          <span>
            <FontAwesomeIcon className="mt-3" icon={icon} size="3x" />
          </span>
        </div>

        <div className="text-left w-100 px-3">
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default NoNameCard;
