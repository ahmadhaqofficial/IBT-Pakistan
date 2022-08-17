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
      <div className="features__main__container" id="project-features">
        <div
          className="features__sub__boxes features__left__box__border"
          style={{ width: "50%", zIndex: "999" }}
        >
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
          style={{ marginTop: "2em", border: "none", width: "50%" }}
        >
          <img src={right} alt="" className="features__theme__bg" />
        </div>
        <div
          className="project__location__main__container"
          id="project-locations"
        ></div>
      </div>
      <div className="introduction__section__left__weaper_heading">
        LONG DISTANCES
      </div>
      <div className="long__distance__first__mian">
        <div className="svg__container">
      <div className="long__distances__first__svg__content__main">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 94.111 113.226"
          
          
        >
          <g
            id="Group_322"
            data-name="Group 322"
            transform="translate(-641.947 -3634)"
          >
            <path
              id="Path_52"
              data-name="Path 52"
              d="M67.4,0c1.5.646,1.964,1.913,2.21,3.412.638,3.887,1.359,7.759,2.05,11.638.033.179.1.352.2.669,1.436,0,2.895,0,4.354,0,2.883.008,4.421,1.551,4.431,4.448,0,1.691,0,3.384,0,5.237h1.244c2.728,0,5.456-.018,8.184.008A3.856,3.856,0,0,1,94.1,29.344c.013.257.005.516.005.775q0,27.2,0,54.4a5.746,5.746,0,0,1-.113,1.423,1.617,1.617,0,0,1-3.169-.248,12.244,12.244,0,0,1-.03-1.325q0-26.979,0-53.958c0-1.689,0-1.689-1.707-1.689-2.76,0-5.519,0-8.441,0,0,.973,0,1.878,0,2.784,0,3.06-1.358,4.471-4.386,4.584-.214.008-.428.051-.778.095.247,1.379.491,2.708.719,4.041.205,1.2-.262,2.051-1.218,2.249a1.657,1.657,0,0,1-2.032-1.516q-.383-2.006-.7-4.025c-.095-.592-.306-.891-.991-.863-1.392.056-2.786.016-4.337.016,3.01,24.661,6.006,49.2,9.011,73.818,2.894,0,5.689,0,8.484,0,.884,0,.775-.617.677-1.171-.462-2.647-.94-5.291-1.414-7.937q-3.6-20.055-7.2-40.109c-.676-3.768-1.354-7.536-2.009-11.307C74.23,48,74.706,47.171,75.754,47c1.032-.166,1.744.484,1.992,1.87q1.918,10.707,3.824,21.416,3.368,18.805,6.754,37.608c.612,3.385-.97,5.329-4.434,5.329q-36.827,0-73.653,0c-3.523,0-5.075-1.929-4.427-5.421.727-3.909,1.381-7.83,2.131-11.734a2.766,2.766,0,0,1,.924-1.627,1.682,1.682,0,0,1,1.6.024,2.182,2.182,0,0,1,.744,1.653c-.226,1.972-.637,3.922-.986,5.878-.389,2.175-.794,4.346-1.176,6.521-.221,1.257-.1,1.386,1.211,1.388,2.61,0,5.221,0,7.925,0,3-24.6,6-49.115,9.01-73.811-1.654,0-3.22-.028-4.781.038-.19.008-.467.5-.523.807q-1.81,9.941-3.575,19.89-2.788,15.6-5.574,31.2c-.229,1.279-.953,1.906-1.977,1.753-1.068-.159-1.539-1.033-1.279-2.5q1.791-10.057,3.605-20.11,2.7-15,5.391-30c.056-.317.053-.644.088-1.095-.444,0-.8.009-1.163,0a3.854,3.854,0,0,1-3.93-3.918c-.034-1.1-.005-2.2-.005-3.384-.439-.023-.794-.056-1.149-.056-2.618,0-5.236.024-7.852-.017-.87-.014-1.229.3-1.154,1.156.029.329,0,.663,0,.994q0,26.87,0,53.738c0,1.8-.514,2.576-1.684,2.55C.5,87.119,0,86.352,0,84.626Q0,57.316,0,30c0-3.148,1.448-4.593,4.591-4.6q4.258-.01,8.514-.021a1.777,1.777,0,0,0,.358-.124V20.5c0-3.369,1.406-4.778,4.762-4.779,1.324,0,2.647,0,4.077,0,.44-2.431.873-4.811,1.3-7.192.325-1.812.692-3.618.948-5.439A3.66,3.66,0,0,1,26.707,0ZM30.527,36.155q-4.5,36.856-8.993,73.68H72.577c-3-24.6-6-49.109-8.995-73.68Zm16.531-3.386c9.653,0,19.307-.013,28.96.02,1.018,0,1.342-.307,1.329-1.326-.051-3.721-.043-7.441,0-11.162.01-.958-.307-1.282-1.276-1.281q-29.016.031-58.03,0c-.979,0-1.277.341-1.268,1.289.039,3.647.015,7.293.016,10.941,0,1.516,0,1.52,1.536,1.52q14.368,0,28.738,0M33.038,15.657H61.074L59.58,3.4H34.525c-.5,4.109-.989,8.148-1.487,12.261m-7.344.061c1.137,0,2.16-.037,3.177.014.676.033.874-.238.936-.874.164-1.681.406-3.353.606-5.03.255-2.135.5-4.271.753-6.429H27.893c-.734,4.116-1.456,8.154-2.2,12.319M66.212,3.383H62.934c.478,3.981.941,7.889,1.438,11.793a.768.768,0,0,0,.533.514c1.131.049,2.265.024,3.511.024l-2.2-12.331"
              transform="translate(641.947 3634)"
              fill="#bc993d"
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M45.134,52.908a16.174,16.174,0,0,1-.106,1.87,1.464,1.464,0,0,1-1.54,1.3,1.429,1.429,0,0,1-1.616-1.33,24.3,24.3,0,0,1,.005-3.741,1.42,1.42,0,0,1,1.53-1.308,1.492,1.492,0,0,1,1.627,1.337,16.453,16.453,0,0,1,.1,1.871"
              transform="translate(645.554 3638.289)"
              fill="#bc993d"
            />
            <path
              id="Path_54"
              data-name="Path 54"
              d="M45.056,38.057a14.9,14.9,0,0,1-.015,1.87,1.467,1.467,0,0,1-1.595,1.364,1.433,1.433,0,0,1-1.587-1.364,25.791,25.791,0,0,1,0-3.63,1.435,1.435,0,0,1,1.588-1.364A1.473,1.473,0,0,1,45.042,36.3a13.772,13.772,0,0,1,.014,1.76"
              transform="translate(645.553 3637.015)"
              fill="#bc993d"
            />
            <path
              id="Path_55"
              data-name="Path 55"
              d="M45.056,67.63A14.912,14.912,0,0,1,45.04,69.5a1.486,1.486,0,0,1-1.6,1.367,1.458,1.458,0,0,1-1.581-1.388,25.482,25.482,0,0,1,.008-3.631A1.422,1.422,0,0,1,43.458,64.5a1.464,1.464,0,0,1,1.585,1.37,13.405,13.405,0,0,1,.013,1.761"
              transform="translate(645.553 3639.566)"
              fill="#bc993d"
            />
            <path
              id="Path_56"
              data-name="Path 56"
              d="M41.816,82.429c0-.55-.04-1.1.009-1.652a1.525,1.525,0,0,1,1.589-1.516,1.479,1.479,0,0,1,1.636,1.452,26.659,26.659,0,0,1-.009,3.523,1.433,1.433,0,0,1-1.562,1.392,1.488,1.488,0,0,1-1.641-1.436,15.119,15.119,0,0,1-.013-1.762h-.009"
              transform="translate(645.554 3640.84)"
              fill="#bc993d"
            />
            <path
              id="Path_57"
              data-name="Path 57"
              d="M45.069,97.206a15.141,15.141,0,0,1-.013,1.763,1.516,1.516,0,0,1-1.637,1.459,1.457,1.457,0,0,1-1.566-1.4,24.889,24.889,0,0,1,.014-3.634,1.428,1.428,0,0,1,1.608-1.339,1.479,1.479,0,0,1,1.572,1.394,13.792,13.792,0,0,1,.014,1.761h.009"
              transform="translate(645.553 3642.116)"
              fill="#bc993d"
            />
            <path
              id="Path_58"
              data-name="Path 58"
              d="M45.068,8.533a14.657,14.657,0,0,1-.013,1.762,1.488,1.488,0,0,1-1.645,1.432,1.433,1.433,0,0,1-1.558-1.4,26.309,26.309,0,0,1-.007-3.524,1.479,1.479,0,0,1,1.638-1.448,1.5,1.5,0,0,1,1.566,1.412,15.366,15.366,0,0,1,.012,1.762h.005"
              transform="translate(645.553 3634.462)"
              fill="#bc993d"
            />
          </g>
        </svg>
        </div>
        
      </div>
      <div className="content__container">On Main G.T Road</div>
      </div>
      <div className="long__distances__first__svg__content__main">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 94.111 113.226"
        >
          <g
            id="Group_322"
            data-name="Group 322"
            transform="translate(-641.947 -3634)"
          >
            <path
              id="Path_52"
              data-name="Path 52"
              d="M67.4,0c1.5.646,1.964,1.913,2.21,3.412.638,3.887,1.359,7.759,2.05,11.638.033.179.1.352.2.669,1.436,0,2.895,0,4.354,0,2.883.008,4.421,1.551,4.431,4.448,0,1.691,0,3.384,0,5.237h1.244c2.728,0,5.456-.018,8.184.008A3.856,3.856,0,0,1,94.1,29.344c.013.257.005.516.005.775q0,27.2,0,54.4a5.746,5.746,0,0,1-.113,1.423,1.617,1.617,0,0,1-3.169-.248,12.244,12.244,0,0,1-.03-1.325q0-26.979,0-53.958c0-1.689,0-1.689-1.707-1.689-2.76,0-5.519,0-8.441,0,0,.973,0,1.878,0,2.784,0,3.06-1.358,4.471-4.386,4.584-.214.008-.428.051-.778.095.247,1.379.491,2.708.719,4.041.205,1.2-.262,2.051-1.218,2.249a1.657,1.657,0,0,1-2.032-1.516q-.383-2.006-.7-4.025c-.095-.592-.306-.891-.991-.863-1.392.056-2.786.016-4.337.016,3.01,24.661,6.006,49.2,9.011,73.818,2.894,0,5.689,0,8.484,0,.884,0,.775-.617.677-1.171-.462-2.647-.94-5.291-1.414-7.937q-3.6-20.055-7.2-40.109c-.676-3.768-1.354-7.536-2.009-11.307C74.23,48,74.706,47.171,75.754,47c1.032-.166,1.744.484,1.992,1.87q1.918,10.707,3.824,21.416,3.368,18.805,6.754,37.608c.612,3.385-.97,5.329-4.434,5.329q-36.827,0-73.653,0c-3.523,0-5.075-1.929-4.427-5.421.727-3.909,1.381-7.83,2.131-11.734a2.766,2.766,0,0,1,.924-1.627,1.682,1.682,0,0,1,1.6.024,2.182,2.182,0,0,1,.744,1.653c-.226,1.972-.637,3.922-.986,5.878-.389,2.175-.794,4.346-1.176,6.521-.221,1.257-.1,1.386,1.211,1.388,2.61,0,5.221,0,7.925,0,3-24.6,6-49.115,9.01-73.811-1.654,0-3.22-.028-4.781.038-.19.008-.467.5-.523.807q-1.81,9.941-3.575,19.89-2.788,15.6-5.574,31.2c-.229,1.279-.953,1.906-1.977,1.753-1.068-.159-1.539-1.033-1.279-2.5q1.791-10.057,3.605-20.11,2.7-15,5.391-30c.056-.317.053-.644.088-1.095-.444,0-.8.009-1.163,0a3.854,3.854,0,0,1-3.93-3.918c-.034-1.1-.005-2.2-.005-3.384-.439-.023-.794-.056-1.149-.056-2.618,0-5.236.024-7.852-.017-.87-.014-1.229.3-1.154,1.156.029.329,0,.663,0,.994q0,26.87,0,53.738c0,1.8-.514,2.576-1.684,2.55C.5,87.119,0,86.352,0,84.626Q0,57.316,0,30c0-3.148,1.448-4.593,4.591-4.6q4.258-.01,8.514-.021a1.777,1.777,0,0,0,.358-.124V20.5c0-3.369,1.406-4.778,4.762-4.779,1.324,0,2.647,0,4.077,0,.44-2.431.873-4.811,1.3-7.192.325-1.812.692-3.618.948-5.439A3.66,3.66,0,0,1,26.707,0ZM30.527,36.155q-4.5,36.856-8.993,73.68H72.577c-3-24.6-6-49.109-8.995-73.68Zm16.531-3.386c9.653,0,19.307-.013,28.96.02,1.018,0,1.342-.307,1.329-1.326-.051-3.721-.043-7.441,0-11.162.01-.958-.307-1.282-1.276-1.281q-29.016.031-58.03,0c-.979,0-1.277.341-1.268,1.289.039,3.647.015,7.293.016,10.941,0,1.516,0,1.52,1.536,1.52q14.368,0,28.738,0M33.038,15.657H61.074L59.58,3.4H34.525c-.5,4.109-.989,8.148-1.487,12.261m-7.344.061c1.137,0,2.16-.037,3.177.014.676.033.874-.238.936-.874.164-1.681.406-3.353.606-5.03.255-2.135.5-4.271.753-6.429H27.893c-.734,4.116-1.456,8.154-2.2,12.319M66.212,3.383H62.934c.478,3.981.941,7.889,1.438,11.793a.768.768,0,0,0,.533.514c1.131.049,2.265.024,3.511.024l-2.2-12.331"
              transform="translate(641.947 3634)"
              fill="#bc993d"
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M45.134,52.908a16.174,16.174,0,0,1-.106,1.87,1.464,1.464,0,0,1-1.54,1.3,1.429,1.429,0,0,1-1.616-1.33,24.3,24.3,0,0,1,.005-3.741,1.42,1.42,0,0,1,1.53-1.308,1.492,1.492,0,0,1,1.627,1.337,16.453,16.453,0,0,1,.1,1.871"
              transform="translate(645.554 3638.289)"
              fill="#bc993d"
            />
            <path
              id="Path_54"
              data-name="Path 54"
              d="M45.056,38.057a14.9,14.9,0,0,1-.015,1.87,1.467,1.467,0,0,1-1.595,1.364,1.433,1.433,0,0,1-1.587-1.364,25.791,25.791,0,0,1,0-3.63,1.435,1.435,0,0,1,1.588-1.364A1.473,1.473,0,0,1,45.042,36.3a13.772,13.772,0,0,1,.014,1.76"
              transform="translate(645.553 3637.015)"
              fill="#bc993d"
            />
            <path
              id="Path_55"
              data-name="Path 55"
              d="M45.056,67.63A14.912,14.912,0,0,1,45.04,69.5a1.486,1.486,0,0,1-1.6,1.367,1.458,1.458,0,0,1-1.581-1.388,25.482,25.482,0,0,1,.008-3.631A1.422,1.422,0,0,1,43.458,64.5a1.464,1.464,0,0,1,1.585,1.37,13.405,13.405,0,0,1,.013,1.761"
              transform="translate(645.553 3639.566)"
              fill="#bc993d"
            />
            <path
              id="Path_56"
              data-name="Path 56"
              d="M41.816,82.429c0-.55-.04-1.1.009-1.652a1.525,1.525,0,0,1,1.589-1.516,1.479,1.479,0,0,1,1.636,1.452,26.659,26.659,0,0,1-.009,3.523,1.433,1.433,0,0,1-1.562,1.392,1.488,1.488,0,0,1-1.641-1.436,15.119,15.119,0,0,1-.013-1.762h-.009"
              transform="translate(645.554 3640.84)"
              fill="#bc993d"
            />
            <path
              id="Path_57"
              data-name="Path 57"
              d="M45.069,97.206a15.141,15.141,0,0,1-.013,1.763,1.516,1.516,0,0,1-1.637,1.459,1.457,1.457,0,0,1-1.566-1.4,24.889,24.889,0,0,1,.014-3.634,1.428,1.428,0,0,1,1.608-1.339,1.479,1.479,0,0,1,1.572,1.394,13.792,13.792,0,0,1,.014,1.761h.009"
              transform="translate(645.553 3642.116)"
              fill="#bc993d"
            />
            <path
              id="Path_58"
              data-name="Path 58"
              d="M45.068,8.533a14.657,14.657,0,0,1-.013,1.762,1.488,1.488,0,0,1-1.645,1.432,1.433,1.433,0,0,1-1.558-1.4,26.309,26.309,0,0,1-.007-3.524,1.479,1.479,0,0,1,1.638-1.448,1.5,1.5,0,0,1,1.566,1.412,15.366,15.366,0,0,1,.012,1.762h.005"
              transform="translate(645.553 3634.462)"
              fill="#bc993d"
            />
          </g>
        </svg>
        On Main G.T Road
      </div>
     
    </>
  );
}
