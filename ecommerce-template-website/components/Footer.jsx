import React from 'react';
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p> 2022 Ecommerce Store All rights reserved</p>
      <p className="icons">
        <AiOutlineWhatsApp />
        <AiFillInstagram />
        <AiFillFacebook />
      </p>
    </div>
  );
}

export default Footer
