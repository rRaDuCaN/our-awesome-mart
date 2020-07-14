import React from "react";
import {Link} from "react-router-dom";
import gift from "../../../../../imgs/Home/SideMenu/PartThree/gift-black.82e7713e0e6a0a417736c7cf64c24973872f397a.svg";
import giftCard from "../../../../../imgs/Home/SideMenu/PartThree/gift-card-black.6d0fbd93e1b2b84a6327794b945b5c58e63e2b9b.svg";
import help from "../../../../../imgs/Home/SideMenu/PartThree/help-black.9949c3361fb603fe2961330b2bccfd7d0260eac0.svg";
import idea from "../../../../../imgs/Home/SideMenu/PartThree/idea-black.d1b18477ea1d7d743ea4310661270c90b54b34bc.svg";
import services from "../../../../../imgs/Home/SideMenu/PartThree/services-black.e1f2f36d1a3d4306c8927b58f61a58a28c449863.svg";
import vudu from "../../../../../imgs/Home/SideMenu/PartThree/vudu-black.2cefd144945e291664e4151ae35bf23dc2d786d5.svg";
import walmartCreditCard from "../../../../../imgs/Home/SideMenu/PartThree/walmart-credit-card-black.cc1a6c7649409c02f95db87bd6281ccd56cc3d4f.svg";
import weeklyAdd from "../../../../../imgs/Home/SideMenu/PartThree/weekly-ad-black.4a26ae0b982b0f2a6be4cd84fae7622cf17abea8.svg";

export default function HeaderBottom() {
  return (
    <div className="flexStandard stretch flexColumn fullHeight">
      {[
        {
          title: "Gift Finder",
          src: gift
        },
        {
          title: "Walmart Services",
          src: services
        },
        {
          title: "Digital Video by Vudu",
          src: vudu
        },
        {
          title: "Walmart Credit Card",
          src: walmartCreditCard
        },
        {
          title: "Gift Cards",
          src: giftCard
        },
        {
          title: "Weekly Ad",
          src: weeklyAdd
        },
        {
          title: "Ideas",
          src: idea
        },
        {
          title: "Help",
          src: help
        }
      ].map(({ title, src }) => {
        return (
          <Link to="/" key={title + src} title={title} className="textDecorationNone">
            <div className="fullWidth">
              <span>
                <img srcSet={src} alt={src} className="SVGAsset1dot6" loading="lazy"/>
                <span className="mg-l1">{title}</span>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
