import React from "react";
import OneDepartmentWrapper from "./OneDepartmentWrapper";

export default function SavingsSpotlight() {
  return (
    <OneDepartmentWrapper>
      <DepartmentsList>
        <DepartmentElementsWrapper>
          <ElementsWrapper>
            <Link
              to="/"
              className="AnchorsDepartmentsFlyOutMenuStyle AnchorBlackColor mg-pad0"
            >
              Savings Spotlight
            </Link>
          </ElementsWrapper>
        </DepartmentElementsWrapper>
      </DepartmentsList>
      <DepartmentsList>
        {[
          "Toys",
          "Floor care",
          "Electronics",
          "Health",
          "Arts & crafts",
          "Personal care",
          "Backyard fun",
          "Pantry stock-up",
          "Sporting goods",
          "Home",
          "Home improvement",
          "Office",
          "Video games",
          "Clothing & more",
          "Patio & garden",
          "Baby",
          "Beauty",
          "Pets",
          "Party supplies",
        ].map((item) => (
          <DepartmentElementsWrapper key = {item + 'k'}>
            <ElementsWrapper>
              <Link
                to="/"
                className="AnchorsDepartmentsFlyOutMenuStyle AnchorBlackColor mg-pad0"
              >
                {item}
              </Link>
            </ElementsWrapper>
          </DepartmentElementsWrapper>
        ))}
      </DepartmentsList>
    </OneDepartmentWrapper>
  );
}
