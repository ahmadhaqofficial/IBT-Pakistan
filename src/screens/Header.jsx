import React, { useEffect, useLayoutEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Close } from "./Close";
import { Menu } from "./Menu";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function checkNavOpenClose() {
    if (window.innerWidth < 1200) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useLayoutEffect(() => {
    checkNavOpenClose();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkNavOpenClose);
    window.addEventListener("scroll", setFixed);
  }, []);

  function setFixed() {
    checkNavOpenClose();
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }

  return (
    <>
      <div className="nav__main">
        <div
          className="header__content__content__nav__main"
          data-aos="fade-left"
          style={
            isScrolling
              ? {
                  backgroundColor: "black",
                  height: "80px",
                  paddingTop: "1.5em",
                }
              : null
          }
        >
          <div className="header__content__nav__heading">
            <div className="nav__background"></div>
            IBT <span>Pakistan</span>
          </div>

          {isOpen ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                if (window.innerWidth < 1200) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="header__content__content__nav__components">
                <a className="header__buttons" href="#Home">
                  Home
                </a>
                <a className="header__buttons" href="#components">
                  Components
                </a>
                <a className="header__buttons" href="#Specifications">
                  Specifications
                </a>
                <a className="header__buttons" href="#Features">
                  Features
                </a>
                <a className="header__buttons" href="#Location">
                  Location
                </a>
              </div>
            </OutsideClickHandler>
          ) : null}

          <button
            className="ibt__contant__nav"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            title="Menu"
          >
            {isOpen ? (
              <Close size={24} color="white" />
            ) : (
              <Menu size={24} color="white" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
