import "./TopBar.css";
import { FaMap } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <>
      <div className=" HJ_TopBar">
        <div className="container_custom">
          <div className="HJ_ContentTopbar">
            <div className="HJ_info">
              <div className="HJ_SubContainer">
                <FaEnvelope className="HJ_iconColor" />
                <h3 className="HJ_SubTitle">Sunny Isles Beach, FL 33160</h3>
              </div>
              <div className="HJ_SubContainer">
                <FaMap className="HJ_iconColor" />
                <h3 className="HJ_SubTitle">info@company.com</h3>
              </div>
            </div>
            <div className="HJ_SocialLinks">
              <div className="HJ_CircleIcon">
                <FaFacebook />
              </div>
              <div className="HJ_CircleIcon">
                <FaTwitter />
              </div>
              <div className="HJ_CircleIcon">
                <FaLinkedin />
              </div>
              <div className="HJ_CircleIcon">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
