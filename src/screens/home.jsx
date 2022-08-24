import React from "react";
import back from "../assets/baack.png";
import overlay from "../assets/overlay.png";
import "./App.scss";

import introduction from "../assets/introduction.svg";
import landarea from "../assets/landarea.svg";
import ofbuid from "../assets/ofbuid.svg";
import maximum from "../assets/maximum.svg";
import covered from "../assets/covered.svg";
import right from "../assets/right.png";
import onesec from "../assets/oneseec.png";
import secend from "../assets/secend.png";
import thirdsec from "../assets/thirdsec.png";
import fourthsec from "../assets/fourthsec.png";
import newcon from "../assets/newcon.png";
import newone from "../assets/newtwo.png";
import newtwo from "../assets/newthree.png";
import newthree from "../assets/newfour.png";
import location from "../assets/location.png";
import foterone from "../assets/foterone.png";
import fotertwo from "../assets/fotertwo.png";
import facebook from "../assets/facebook.png";
import linkdin from "../assets/linkdin.png";
import snapchat from "../assets/snapchat.png";
import twitter from "../assets/twitter.png";
import whatssapp from "../assets/whatssapp.png";
import Header from "./Header";

export default function home() {
  return (
    <>
      <div className="header__content" id="Home">
        <img src={back} alt="" />
        <div className="header__content__img">
          <img src={overlay} alt="" />
        </div>

        <Header />
        <div className="header__content__header__heading">
          IBT <span>Pakistan</span>
        </div>
        <div className="header__content__header__sub__heading">
          Pakistan's Largest Business Tower
        </div>
      </div>
      {/* /* 
//second section// */}

      <div class="introduction__section" data-aos="fade-right">
        <div className="introduction__section__left__weaper">
          <div className="introduction__section__left__weaper_heading">
            INTRODUCTION
          </div>
          <div className="introduction__section__left__weaper_para">
            IBT is an industrial Mall , It will cater needs of all construction
            industry, Home furnitures and accessories and auto mobile industry
            Pakistan needs industrial mall for its economic growth It will be
            like mini china It will be like a trade centre IBT will create
            opportunities for Pakistani traders to buy Chinese, Korean, German
            and other International Products under one roof in international
            pavilion, While our national products will be displayed at national
            pavilion
          </div>
        </div>
        <div className="introduction__section__right__weaper">
          <div className="introduction__section__right__weaper__svg">
            <img
              className="introduction__section__right__weaper__svg_pic"
              src={introduction}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* //third section// */}
      <div data-aos="fade-right" id="components">
        <div className="components__main__container">
          <div className="components__main__container__bg__dark">
            <div className="components__main__container__bg__boarder"></div>
            <div className="max__class">
              <div
                className="intro__container__content__heading"
                style={{ width: "88%", margin: "0 auto", paddingLeft: "1em" }}
              >
                PROJECT COMPONENTS
                <div className="intro__container__content__heading__underline"></div>
              </div>
              <div className="components__cards__container">
                <div className="card__container">
                  <img className="card__image" src={onesec} alt="" />
                  <div className="card__content__container">
                    <div className="card__text">One Five Star Hotel</div>
                    <div className="card1__container__content__heading__underline"></div>
                  </div>
                </div>
                <div className="card__container">
                  <div className="img__container"></div>
                  <img className="card__image" src={secend} alt="" />
                  <div className="card__content__container">
                    <div className="card__text">Industrial Mall</div>
                    <div className="card1__container__content__heading__underline"></div>
                  </div>
                </div>
                <div className="card__container">
                  <img className="card__image" src={thirdsec} alt="" />
                  <div className="card__content__container">
                    <div className="card__text">
                      One dedicated tower for most Luxurious Apartments
                    </div>
                    <div className="card1__container__content__heading__underline"></div>
                  </div>
                </div>
                <div className="card__container">
                  <img className="card__image" src={fourthsec} alt="" />
                  <div className="card__content__container">
                    <div className="card__text">
                      Dedicated Corporate And IT Centre
                    </div>
                    <div className="card1__container__content__heading__underline"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //fourth secton// */}

      <div
        className="project__specifiactions"
        id="Specifications"
        data-aos="fade-down"
      >
        <div className="project__specifiactions__left__wrapper">
          <div className="project__specifiactions__left__wrapper_content">
            <div className="project__specifiactions__left__wrapper_content_svg">
              <img
                className="project__specifiactions__left__wrapper_content_svg__img"
                src={landarea}
                alt="landarea"
              />
            </div>
            <div className="project__specifiactions__left__wrapper_content_right_content">
              <div className="project__specifiactions__left__wrapper_content_right_content_heading">
                Land Area
              </div>
              <div className="project__specifiactions__left__wrapper_content_right_content_para">
                136 Kanals – 81600 Sq Yards
              </div>
            </div>
          </div>
          <div className="project__specifiactions__left__wrapper_content">
            <div className="project__specifiactions__left__wrapper_content_svg">
              <img
                className="project__specifiactions__left__wrapper_content_svg__img"
                src={ofbuid}
                alt="landarea"
              />
            </div>
            <div className="project__specifiactions__left__wrapper_content_right_content">
              <div className="project__specifiactions__left__wrapper_content_right_content_heading">
                Height of Building
              </div>
              <div className="project__specifiactions__left__wrapper_content_right_content_para">
                1000 Ft – 304.8m
              </div>
            </div>
          </div>
          <div className="project__specifiactions__left__wrapper_content">
            <div className="project__specifiactions__left__wrapper_content_svg">
              <img
                className="project__specifiactions__left__wrapper_content_svg__img"
                src={maximum}
                alt="landarea"
              />
            </div>
            <div className="project__specifiactions__left__wrapper_content_right_content">
              <div className="project__specifiactions__left__wrapper_content_right_content_heading">
                Maximum No of stories of Building
              </div>
              <div className="project__specifiactions__left__wrapper_content_right_content_para">
                70
              </div>
            </div>
          </div>
          <div className="project__specifiactions__left__wrapper_content">
            <div className="project__specifiactions__left__wrapper_content_svg">
              <img
                className="project__specifiactions__left__wrapper_content_svg__img"
                src={covered}
                alt="landarea"
              />
            </div>
            <div className="project__specifiactions__left__wrapper_content_right_content">
              <div className="project__specifiactions__left__wrapper_content_right_content_heading">
                Total Covered Area
              </div>
              <div className="project__specifiactions__left__wrapper_content_right_content_para">
                More than 4Million Sq.ft
              </div>
            </div>
          </div>
        </div>
        <div className="project__specs__boxes">
          <div className="project__specs__boxes__border">
            <div className="project__specs__boxes__dark">
              <div className="project__specs__heading">
                project Specifications
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features__main__container" id="Features">
        <div
          className="features__sub__boxes "
          style={{ zIndex: "999" }}
          data-aos="fade-right"
        >
          <div className="features__content__container">
            <div
              className="intro__container__content__heading"
              style={{ paddingLeft: "0", width: "100%", margin: "0" }}
            >
              PROJECT FEATURES
              <div className="intro__container__content__heading__underline"></div>
            </div>
            <div className="feature__text__background__light">
              <span className="feature__text"> Largest </span> and{" "}
              <span className="feature__text">Tallest </span> Building of
              Pakistan
            </div>
            <div
              className="feature__text__background__light"
              style={{ width: "110%" }}
            >
              <span className="feature__text"> Pakistan's 1st </span> theme
              basesd Industrial mall
            </div>
            <div
              className="feature__text__background__light"
              style={{ width: "115%" }}
            >
              <span className="feature__text"> World's </span> one of the best{" "}
              <span className="feature__text">International trade center </span>
            </div>
          </div>
        </div>
        <div
          className="features__sub__boxes "
          style={{ marginTop: "2em", border: "none" }}
          data-aos="fade-left"
        >
          <img src={right} alt="" className="features__theme__bg" />
        </div>
        <div
          className="project__location__main__container"
          id="project-locations"
        ></div>
      </div>

      <div className="project__location__main__container" data-aos="fade-up">
        <div
          className="intro__container__content__heading project__location__heading"
          style={{ paddingLeft: " 16px" }}
        >
          LOCATION DISTANCES
          <div className="intro__container__content__heading__underline "></div>
        </div>
        <div className="location__cards__main__ccontainer">
          <div className="project__locations__cards__container">
            <div className="location__card">
              <div className="location__logo__container">
                <img className="location__logo" src={newcon} alt="" />
              </div>
              <div className="location__text">
                On Main <span>G.T Road</span>{" "}
              </div>
            </div>
            <div className="location__card">
              <div className="location__logo__container">
                <img className="location__logo" src={newtwo} alt="" />
              </div>
              <div className="location__text">
                <span>5km </span> from CPEC{" "}
              </div>
            </div>
          </div>
          <div
            className="project__locations__cards__container"
            style={{ marginLeft: "0" }}
          >
            <div className="location__card">
              <div className="location__logo__container">
                <img className="location__logo" src={newone} alt="" />
              </div>
              <div className="location__text">
                {" "}
                <span>4KM </span>from Motorway{" "}
              </div>
            </div>
            <div className="location__card">
              <div className="location__logo__container">
                <img className="location__logo" src={newthree} alt="" />
              </div>
              <div className="location__text">
                <span>1KM </span> from Margalla Avenue{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features__container" id="Location" data-aos="fade-left">
        <img className="feature__bg__img" src={location} alt="" />
        <div className="location__finder__heading">
          LOCATIONS FEATURES
          <div className="location__finder__heading__color"></div>
        </div>
        <div className="location__finder__content">
          Most futuristic location of Islamabad. Very easy access from all over
          Pakistan. Ideal location for International trade. Most suitable
          location for nearest warehouses. Very near to airport for foreigner
          visitors approach. In next 10 years IBT location will b the centre of
          Capital Islamabad
        </div>
      </div>
      <div className="location__first" data-aos="fade-left">
        <div className="location__main">
          <div className="location__finder__footer__main">
            <div className="location__finder__footer">
              IBT is an industrial Mall , It will cater needs of all
              construction industry, Home furnitures and accessories and auto
              mobile industry Pakistan needs industrial mall for its economic
              growth It will be like mini china It will be like a trade centre
              IBT will create opportunities for Pakistani traders to buy
              Chinese, Korean, German and other International Products under one
              roof in international pavilion, While our national products will
              be displayed at national pavilion
              <div className="location__finder__footer__button">
                <button>Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__main__container" data-aos="fade-up-right">
        <div
          className="footrer__img__container"
          style={{ dispaly: "flex", alignItems: "flex-end" }}
        >
          <img className="footer__img" src={foterone} alt="" />
        </div>
        <div style={{ marginLeft: "1.5em" }}>
          <div className="footer__icons__list">
            <div className="footer__columms" style={{ width: "33%" }}>
              <div className="header__content__nav__heading">
                IBT <span> Pakistan</span>
              </div>
              <div
                style={{
                  fontSize: "16px",
                  paddingRight: "1.5em",
                  marginTop: "1em",
                  width: "100%",
                  fontWeight: "400",
                }}
              >
                IBT is an industrial Mall , It will cater needs of all
                construction industry, Home furnitures and accessories and auto
                mobile industry Pakistan needs industrial mall for its economic
                growth It will be like mini china It will be like a trade centre
                IBT will create opportunities for Pakistani traders to buy
                Chinese, Korean, German and other International Products under
                one roof in international pavilion, While our national products
                will be displayed at national pavilion
              </div>
            </div>
            <div className="footer__columms left__border ">
              <a
                className="footer__Link"
                href=" #Home"
                style={{ fontWeight: "600" }}
              >
                Home
              </a>
              <a className="footer__Link" href="#components">
                Components
              </a>
              <a className="footer__Link" href="#Specifications">
                Specifications
              </a>
              <a className="footer__Link" href="#Features">
                Features
              </a>
              <a className="footer__Link" href="#Location">
                Location
              </a>
            </div>
            <div className="footer__columms left__border">
              <div className="footer__Links__tilte">Quick links</div>
              <a className="footer__Link" href="">
                Terms and conditions
              </a>
              <a className="footer__Link" href="">
                Privacy policy
              </a>
            </div>
            <div className="footer__columms left__border">
              <div className="footer__Links__tilte">Mailing list</div>
              <div className="footer__Link__mail">
                Sign up for our mailing list to get latest
              </div>
              <div className="footer__mail__input__box">
                <input
                  type="email"
                  placeholder="Email"
                  className="footer__mail__input"
                />
                <button className="footer__input__button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="footer__icons__list__bottom">
            <a className="social__icon" href="">
              <img src={facebook} alt="" />
            </a>
            <a className="social__icon" href="">
              <img src={linkdin} alt="" />
            </a>
            <a className="social__icon" href="">
              <img src={snapchat} alt="" />
            </a>
            <a className="social__icon" href="">
              <img src={twitter} alt="" />
            </a>
            <a className="social__icon" href="">
              <img src={whatssapp} alt="" />
            </a>
          </div>
        </div>
        <div className="footrer__img__container">
          <img className="footer__right__img" src={fotertwo} alt="" />
        </div>
      </div>
    </>
  );
}
