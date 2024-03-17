import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Button_ScheduleVisit from "../Button_ScheduleVisit/Button_ScheduleVisit";
import TopBar from "../TopBar/TopBar";
import {FaBars} from 'react-icons/fa'
import { useState } from "react";

const NavBar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const toggle = ()=> setIsOpen (!isOpen);

  return (
    <>
     <TopBar/>
      <div className="HJ_nav">
        <div className="container_custom">
          <div className="HJ_ContentNavBar">
            <h1 className="HJ_logo">VILLA</h1>
            <div className="HJ_MenuIcon">
             < FaBars onClick={toggle} className="HJ_IconBars"/>
            </div>
            <ul className={isOpen ? 'HJ_navbar-menu active' : 'HJ_navbar-menu'}>
              <li className="HJ_link">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="HJ_link">
                <NavLink
                  to="/Properties"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Properties
                </NavLink>
              </li>
              <li className="HJ_link">
                <NavLink
                  to="/Property Details"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Property Details
                </NavLink>
              </li>
              <li className="HJ_link">
                <NavLink
                  to="/Contact Us"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="HJ_DisplayButton">
                <Button_ScheduleVisit />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
