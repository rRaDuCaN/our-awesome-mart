import React from "react";
import angleRight from "../../../../../imgs/Home/SideMenu/PartTwo/angle-right-black.3b9eec11493c7dd7150878bf2e0723367efda153.svg";

export default function Departments() {
  return (
    <div className="flexStandard stretch flexColumn fullHeight">
      {[
        {
          department: "Savings Spotlight",
          angleRight
        },
        {
          department: "DIY & Done",
          angleRight
        },
        {
          department: "Electronics & Office",
          angleRight
        },
        {
          department: "Clothing, Shoes & Accessories",
          angleRight
        },
        {
          department: "Home, Furniture & Appliances",
          angleRight
        },
        {
          department: "Patio & Garden",
          angleRight
        },
        {
          department: "Home Improvement",
          angleRight
        },
        {
          department: "Movies, Music & Books",
          angleRight
        },
        {
          department: "Baby",
          angleRight
        },
        {
          department: "Toys, Games & VideoGames",
          angleRight
        },
        {
          department: "Food, Household & Pets",
          angleRight
        },
        {
          department: "Pharmacy, Health & Personal Care",
          angleRight
        },
        {
          department: "Beauty",
          angleRight
        },
        {
          department: "Sports, Fitness & Outdoors",
          angleRight
        },
        {
          department: "Auto, Tyres & Industrial",
          angleRight
        },
        {
          department: "Photo & Personalized Shop",
          angleRight
        },
        {
          department: "Art, Craft & Party Supplies",
          angleRight
        }
      ].map(({department, angleRight}) => {
        return (
          <button type="button" key={department + angleRight} className="flexStandard btnItemFlexTransparent fullFlexWidth">
            <span>{department}</span>
            <span>
              <img srcSet={angleRight} alt={angleRight} className="SVGAsset1dot2" loading="lazy"/>
            </span>
          </button>
        );
      })}
    </div>
  );
}
