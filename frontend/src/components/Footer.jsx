import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer_1 footer">
        <img src={assets.logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          voluptate in dignissimos cum doloremque laborum. Asperiores, atque
          dolorum dolor nesciunt nulla exercitationem magni aspernatur
          reprehenderit voluptatem? Nostrum incidunt quasi nisi?
        </p>
      </div>
      <div className="footer_2 footer">
        <h2>company</h2>
        <h6>home</h6>
        <h6>about us</h6>
        <h6>delivery</h6>
        <h6>privacy policy</h6>
      </div>
      <div className="footer_3 footer">
        <h2>Get in touch</h2>
        <h6>tomato@gamil.com</h6>
        <h6>+91 22222 4444 34</h6>
      </div>
    </footer>
  );
}
