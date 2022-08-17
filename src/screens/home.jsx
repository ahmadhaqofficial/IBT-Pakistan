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

export default function home() {
  return (
    <>
      <div className="header__content">
        <img src={back} alt="" />
        <div className="header__content__img">
          <img src={overlay} alt="" />
        </div>

        <div className="header__content__content__nav__main">
          <div className="header__content__nav__heading">
            IBT <span>Pakistan</span>
          </div>
          <div className="header__content__content__nav__components">
            <a href="Home">Home</a>
            <a href="Home">Components</a>
            <a href="Home">Specifications</a>
            <a href="Home">Features</a>
            <a href="Home">Location</a>
          </div>
        </div>
        <div className="header__content__header__heading">
          IBT <span>Pakistan</span>
        </div>
        <div className="header__content__header__sub__heading">
          Pakistan's Largest Business Tower
        </div>

        {/* /* 
//second section// */}

        <div class="introduction__section">
          <div className="introduction__section__left__weaper">
            <div className="introduction__section__left__weaper_heading">
              INTRODUCTION
            </div>
            <div className="introduction__section__left__weaper_para">
              IBT is an industrial Mall , It will cater needs of all
              construction industry, Home furnitures and accessories and auto
              mobile industry Pakistan needs industrial mall for its economic
              growth It will be like mini china It will be like a trade centre
              IBT will create opportunities for Pakistani traders to buy
              Chinese, Korean, German and other International Products under one
              roof in international pavilion, While our national products will
              be displayed at national pavilion
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
      </div>

      <div className="project__specifiactions">
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
      <div className="features__main__container" id="project-features" >
        <div className="features__sub__boxes features__left__box__border" style={{width:"50%",zIndex: "999",}}>
          <div className="features__content__container">
            <div className="features__heading">project features</div>
            <div className="feature__text__background__light">
              <span className="feature__text"> Largest </span> and{" "}
              <span className="feature__text">Tallest </span> Building of
              Pakistan
            </div>
            <div className="feature__text__background__light">
              <span className="feature__text"> Pakistan's 1st </span> theme
              basesd Industrial mall
            </div>
            <div className="feature__text__background__light">
              <span className="feature__text"> World's </span> one of the best{" "}
              <span className="feature__text">International trade center </span>
            </div>
          </div>
        </div>
        <div
          className="features__sub__boxes feature__background"
          style={{ marginTop: "2em", border:"none", width:"50%", }}
        >
          <img src={right} alt="" className="features__theme__bg" />
        </div>
        <div
          className="project__location__main__container"
          id="project-locations"
        ></div>
      </div>
    </>
  );
}
