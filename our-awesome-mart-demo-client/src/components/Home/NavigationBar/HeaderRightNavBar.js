import React from "react";
import "./HeaderRightNavBar.css";
import { Link } from "react-router-dom";
import grocery from "../../../imgs/Home/Header/Navbar/grocery-white.938c48473cd061b2a0886c7be30a39d8e145d2a2.svg";
import user from "../../../imgs/Home/Header/Navbar/user-nav-white.487755544c4763ca6d9aa9c165e93fe6aba79542.svg";
import pinNav from "../../../imgs/Home/Header/Navbar/pin-nav-white.31744186ba08818c19630c3c23368d6a2eac2f9f.svg";
import cartNav from "../../../imgs/Home/Header/Navbar/cart-nav-white.00018279d92b8685ff0d50c146eefe5491200c0b.svg";

export default function HeaderRightNavBar() {
  return (
    <div className="HeaderRightNavBar flexStandard">
      <div className="Item flexStandard device-based">
        <div className="GroceryNav">
          {/* Has to be a link to other site (grocery.walmart.com) */}
            <Link
              to="/"
              aria-label="Visit Walmart Grocery Website"
            >
              <span>
                <img srcSet={grocery} alt={grocery} />
              </span>
            </Link>
        </div>
      </div>
      <div className="Item flexStandard">
        <div className="UserAccount">
          <button
            className="ToUserAccountWidget btn btnItemFlexTransparent"
            type="button"
            aria-label="Your Account"
          >
            <span>
              <img srcSet={user} alt={user} />
            </span>
          </button>
        </div>
      </div>
      <div className="Item flexStandard">
        <div className="PinNav">
          <button
            className="ToPinNavWidget btn btnItemFlexTransparent"
            type="button"
            aria-label="Your Store"
          >
            <span>
              <img srcSet={pinNav} alt={pinNav} />
            </span>
          </button>
        </div>
      </div>
      <div className="Item flexStandard">
        <div className="CartNav">
          <button
            className="ToCartNavWidget btn btnItemFlexTransparent"
            type="button"
            aria-label="Your Cart"
          >
            <span>
              <img srcSet={cartNav} alt={cartNav} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
