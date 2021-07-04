import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faCcVisa,
  faCcPaypal,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  const contact = [
    {
      name: "House # 35, Road # 10, Gulshan, Dhaka 1212",
      icon: faMapMarkerAlt,
    },
    { name: "eShop@gmail.com", icon: faEnvelope },
    { name: "+8801980011010", icon: faPhoneVolume },
  ];

  const category = [
    { name: "Women" },
    { name: "Men" },
    { name: "Jewellery" },
    { name: "Electronics" },
  ];

  const information = [
    { name: "About Us" },
    { name: "Contact Us" },
    { name: "Term & Conditions" },
    { name: "Returns & Exchanges" },
    { name: "Shipping & Delivery" },
    { name: "Privacy Policy" },
  ];

  const paymentMethod = [
    { name: "Various Way To Pay Amount" },
  ];

  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5 footer-div">
        <div align="left" className="row py-5">
          <FooterCol key={1} menuTitle="eShop" menuItems={contact}>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="socialIcon"
                    size="1x"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="socialIcon" size="1x" icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="socialIcon" size="1x" icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="socialIcon" size="1x" icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </FooterCol>

          <FooterCol
            key={4}
            menuTitle="Payment Method"
            menuItems={paymentMethod}
          >
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon className="paymentIcon" icon={faCcVisa} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="paymentIcon" icon={faCcPaypal} />
                </a>
              </li>
            </ul>
          </FooterCol>

          <FooterCol key={2} menuTitle="Category" menuItems={category} />

          <FooterCol
            key={3}
            menuTitle="Information"
            menuItems={information}
          ></FooterCol>

          
        </div>
        <div className="copyRight text-center">
          <p className="text-white pb-3">
            Copyright {new Date().getFullYear()} eShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;