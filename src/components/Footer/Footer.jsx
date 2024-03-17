import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="HJ_Footer">
        <div className="container_custom">
          <div className="HJ_paragraphFooter">
            Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design:
            <Link
              to="https://templatemo.com/"
              target="_blank"
              className="HJ_LinkFooter"
            >
              TemplateMo
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
