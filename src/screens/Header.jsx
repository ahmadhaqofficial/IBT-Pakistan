import React, { useLayoutEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function checkNavOpenClose(){
    if(window.innerWidth< 1000){
        setIsOpen(false)
    } else{
        setIsOpen(true);
    }
  }
useLayoutEffect(() => {
    checkNavOpenClose();
  window.addEventListener("resize", checkNavOpenClose);
  window.addEventListener("scroll", ()=> {
    checkNavOpenClose();
    if(window.scrollY>0){
        setIsScrolling(true);
    } else {
        setIsScrolling(false);
    }
})
 },[]);
  return (

    <div>
      <div className="header__content__content__nav__main">
        <div className="header__content__nav__heading">
          IBT <span>Pakistan</span>
        </div>

        {isOpen ? (
            <OutsideClickHandler 
            onOutsideClick={() =>{
                if (Window.innerWidth < 1000) {
                    setIsOpen(false);
                }
            }}
            >
                <div className="header__content__content__nav__components">
            <a href="#Home">Home</a>
            <a href="#components">Components</a>
            <a href="#Specifications">Specifications</a>
            <a href="#Features">Features</a>
            <a href="#Location">Location</a>
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
  );
}
function Menu({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
function Close({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
