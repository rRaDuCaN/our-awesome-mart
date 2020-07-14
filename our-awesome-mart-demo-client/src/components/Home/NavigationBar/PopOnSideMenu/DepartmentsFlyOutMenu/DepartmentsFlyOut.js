import React from "react";
import "./DepartmentsFlyOutMenu.css";
import DepartmentsList from './DepartmentsList';
import DepartmentElementsWrapper from './DepartmentElementSWrapper';
import ElementsWrapper from './ElementsWrapper';
import {Link} from 'react-router-dom';

export default function DepartmentsFlyOut() {
  return (
    <div className="p-abs fullHeight DepartmentsFlyOutMenu" hidden >
      {[
        {
          departmentName: "Savings Spotlight",
          hidden: true
        },
        {
          departmentName: "DIY & Done",
          hidden: true
        },
        {
          departmentName: "Electronics & Office",
          hidden: true
        },
        {
          departmentName: "Clothing, Shoes & Accessories",
          hidden: true
        },
        {
          departmentName: "Home, Furniture & Appliances",
          hidden: true
        },
        {
          departmentName: "Patio & Garden",
          hidden: true
        },
        {
          departmentName: "Home Improvement",
          hidden: true
        },
        {
          departmentName: "Movies, Music & Books",
          hidden: true
        },
        {
          departmentName: "Baby",
          hidden: true
        },
        {
          departmentName: "Toys, Games & VideoGames",
          hidden: true
        },
        {
          departmentName: "Food, Household & Pets",
          hidden: true
        },
        {
          departmentName: "Pharmacy, Health & Personal Care",
          hidden: true
        },
        {
          departmentName: "Beauty",
          hidden: true
        },
        {
          departmentName: "Sports, Fitness & Outdoors",
          hidden: true
        },
        {
          departmentName: "Auto, Tyres & Industrial",
          hidden: true
        },
        {
          departmentName: "Photo & Personalized Shop",
          hidden: true
        },
        {
          departmentName: "Art, Craft & Party Supplies",
          hidden: true
        }
      ].map(({departmentName, hidden}) => {
          return (
              <>
              <div className="" hidden = {hidden} key={departmentName}>
                  <div className="f-s18px f-w700">
                      {
                          departmentName
                      }
                  </div>
                  <div className="flexStandard mg-pad0 PaddTop1">

                  </div>
                  {/* department list wrapper */}
                  {/* SavingsSpotlight */}
                  
              </div>
              </>
          )
      }) 
      }
    </div>
  );
}
