import React from "react";
import { social } from "../data/dummydata";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="list-icon">
        {social.map((item) => (
          <>
            <i data-aos="zoom-in-left">{item.icon}</i>
          </>
        ))}
        </div>
        <div className="footer-text">  
        <p data-aos="zoom-in-right">All Right Rescved 2023</p>
        </div>
      </footer>
    </>
  );
};
