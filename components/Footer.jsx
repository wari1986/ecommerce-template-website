import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {FaWhatsappSquare, FaFacebookSquare} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 TechShack All rights reserverd</p>
      <p className="icons">
        <Link href="https://facebook.com/" passHref={true}>
          <a target="_blank">
            <FaFacebookSquare />
          </a>
        </Link>
        <Link href="https://whatsapp.com/" passHref={true}>
          <a target="_blank">
            <FaWhatsappSquare />
          </a>
        </Link>
        <Link href="https://instagram.com/" passHref={true}>
          <a target="_blank">
            <AiFillInstagram />
          </a>
        </Link>
        <Link href="https://twitter.com/" passHref={true}>
          <a target="_blank">
            <AiOutlineTwitter />
          </a>
        </Link>
      </p>
    </div>
  );
}

export default Footer
