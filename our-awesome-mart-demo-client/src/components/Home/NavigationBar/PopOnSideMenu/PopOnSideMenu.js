import React from "react";
import "./PopOnSideMenu.css";
import { Link } from "react-router-dom";
import spark from "../../../../imgs/Home/Header/Navbar/spark-yellow-spark.b43cc07989a08d84d33b0c87dd8afb1998431e48.svg";
import grocery from "../../../../imgs/Home/SideMenu/PartOne/grocery-black.ccdb0dde905375154680ce3000203812ee226e6d.svg";
import reorder from "../../../../imgs/Home/SideMenu/PartOne/easyreorder-black.a9c7e2d9a0d04013144b768123ff9559a18d1d06.svg";
import packageBlack from "../../../../imgs/Home/SideMenu/PartOne/package-black.8daf1339adc1c094701090f6199349e7371ed56b.svg";
import creditCard from "../../../../imgs/Home/SideMenu/PartOne/walmart-credit-card-black.cc1a6c7649409c02f95db87bd6281ccd56cc3d4f.svg";
import Departments from "./Departments/Departments";
import DepartmentsFlyOut from "./DepartmentsFlyOutMenu/DepartmentsFlyOut";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import '../../../../webComponents/templates/closeButton';

export default function PopOnSideMenu() {
  return (
    <div className="PopOnSideMenu">
      <div className="Wrapper">
        <div className="SideMenu">
          <div className="NavigationBar">
            <div className="HeaderLeftNavBar flexStandard FullSize">
              <Link to="/" title="Walmart Homepage">
                <span>
                  <img
                    className="SVGAsset"
                    src={spark}
                    alt="Walmart Homepage"
                    loading="lazy"
                  />
                </span>
              </Link>
              <button-close></button-close>
            </div>
          </div>
          <div className="MainMenu flexStandard">
            <div className="PartsWrapper ItemsSize mg-b1dot5">
              <div className="PartOne">
                {[
                  {
                    title: "Grocery Pickup & Delivery",
                    src: grocery
                  },
                  {
                    title: "Reorder Items",
                    src: reorder
                  },
                  {
                    title: "Track Orders",
                    src: packageBlack
                  },
                  {
                    title: "Walmart Credit Card",
                    src: creditCard
                  }
                ].map(({title, src}) => {
                  return (
                    <Link to="/" className="textDecorationNone" key={title + src}>
                      <div className="WrapItem mg-b1">
                        <img
                          srcSet={src}
                          alt={src}
                          className="SVGAsset1dot6"
                        />
                        <span className="mg-l1 v-al_05">{title}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="PartsWrapper ItemsSize mg-b1">
              <div className="PartTwo flexStandard flexColumn stretch">
                  <div className="flexStandard mg-b1">
                      <h2>Departments</h2>
                      <Link to="/" title="See All Departments" className="AnchorBlackColor">
                          See All
                      </Link>
                  </div>
                  <Departments />
              </div>
            </div>
            <div className="PartsWrapper ItemsSize mg-b1">
              <div className="PartThree">
                  <HeaderBottom />
              </div>
            </div>
          </div>
        </div>
        <DepartmentsFlyOut />
      </div>
    </div>
  );
}
