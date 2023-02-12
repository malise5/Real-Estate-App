import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-social-media">
        <a href="https://facebook.com/your-page">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://twitter.com/your-handle">
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href="https://instagram.com/your-handle">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <SocialIcon url="https://github.com/malise5" />
        <SocialIcon url="https://www.linkedin.com/in/halkano-malise" />
        <SocialIcon url="https://www.instagram.com/kude_astro/" />
      </div>
      <p>Copyright © 2023 Halkano Malise</p>
    </footer>
  );
};

export default Footer;
