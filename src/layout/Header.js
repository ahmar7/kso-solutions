import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/img/logo-web.jpg";
const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [actives1, setactives1] = useState(true);
  const [actives2, setactives2] = useState(false);
  const [actives3, setactives3] = useState(false);
  const [actives4, setactives4] = useState(false);
  const [actives5, setactives5] = useState(false);
  const [nav, setnav] = useState(false);
  window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
      setSticky(true);
    } else if (window.scrollY === 0) {
      setSticky(false);
    }
  });
  let toggleNav = () => {
    if (nav === true) {
      setnav(false);
    } else {
      setnav(true);
    }
  };
  let active1 = () => {
    setactives1(true);

    setactives2(false);
    setactives3(false);
    setactives4(false);
    setactives5(false);
  };
  let active2 = () => {
    setactives2(true);
    setactives1(false);
    setactives3(false);
    setactives4(false);
    setactives5(false);
  };
  let active3 = () => {
    setactives3(true);
    setactives2(false);
    setactives1(false);
    setactives4(false);
    setactives5(false);
  };
  let active4 = () => {
    setactives4(true);
    setactives2(false);
    setactives3(false);
    setactives1(false);
    setactives5(false);
  };
  let active5 = () => {
    setactives5(true);
    setactives2(false);
    setactives3(false);
    setactives4(false);
    setactives1(false);
  };
  return (
    <div className="main-header">
      <div className="info-nav">
        <div className="flex-info main-width">
          <div className="right-info">
            <div className="flex-row">
              <i class="fa-sharp fa-solid fa-phone"></i>
              <p className="info-line">802.867.5309</p>
            </div>
            <div className="flex-row">
              <i class="fa-solid fa-envelope"></i>
              <p className="info-line">info@kso-solutions.com</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={sticky ? "navigation-header sticky" : "navigation-header"}
      >
        <div className="main-width ">
          <div className=" main-nav">
            <div className="nav-logo">
              <a onClick={active1} href="#">
                <img src={Logo} alt="" />
              </a>
            </div>
            <div
              className={
                nav ? "header-navigation full-height" : "header-navigation "
              }
            >
              <a
                onClick={active1}
                href="#"
                className={actives1 ? "active" : ""}
              >
                Home
              </a>
              <a
                onClick={active2}
                href="#aboutus"
                className={actives2 ? "active" : ""}
              >
                About
              </a>
              <a
                onClick={active3}
                href="#ourservices"
                className={actives3 ? "active" : ""}
              >
                Service
              </a>
              <a
                onClick={active4}
                href="#ourteam"
                className={actives4 ? "active" : ""}
              >
                Team
              </a>
              <a
                onClick={active5}
                href="#contactus"
                className={actives5 ? "active" : ""}
              >
                Contact
              </a>
            </div>
            <div onClick={toggleNav} className="mbl-ico">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
