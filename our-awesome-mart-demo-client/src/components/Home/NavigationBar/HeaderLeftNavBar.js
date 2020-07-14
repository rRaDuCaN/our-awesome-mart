import React from "react";
import "./HeaderLeftNavBar.css";
import { Link } from "react-router-dom";
import spark from "../../../imgs/Home/Header/Navbar/spark-yellow-spark.b43cc07989a08d84d33b0c87dd8afb1998431e48.svg";
import '../../../webComponents/templates/openButton';

export default function HeaderLeftNavBar() {
  return (
    <div className="HeaderLeftNavBar flexStandard">
      <div className="IntermediateWrapper">
        <Link
          to="/"
          title="Walmart Homepage"
          aria-label="Walmart Homepage"
          role="link"
        >
          <span>
            <img className="SVGAsset" src={spark} alt="Walmart Homepage" />
          </span>
        </Link>
      </div>
      <button-open></button-open>
    </div>
  );
}
