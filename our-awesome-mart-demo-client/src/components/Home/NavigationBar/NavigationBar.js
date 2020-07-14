import React from "react";
import "./NavigationBar.css";
import HeaderLeftNavBar from "./HeaderLeftNavBar";
import SearchForm from "./SearchForm";
import HeaderRightNavBar from "./HeaderRightNavBar";

export default function NavigationBar() {
  return (
    <div>
      <div>
        <div className="NavigationBar flexStandard">
          <div className="ForLeftNavBar">
            <HeaderLeftNavBar />
          </div>
          <SearchForm />
          <div className="ForRightNavBar">
              <HeaderRightNavBar />
          </div>
        </div>
      </div>
    </div>
  );
}
