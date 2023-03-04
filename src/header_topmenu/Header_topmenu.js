import React from "react";
import "./Header_topmenu.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Header_topmenu() {
  return (
    <div className="header">
      <div className="category">
        <button className="Categories">Show Categories</button>
        <AiOutlineUnorderedList className="icon" />
      </div>
      <div className="menu">
        <a href to="/" className="navhref">
          Today Deal
        </a>
        <a href to="/policy" className="navhref">
          Policy
        </a>
        <a href to="/about" className="navhref">
          About
        </a>
        <a href to="/contact" className="navhref">
          Contact
        </a>
      </div>
      <div className="cart">
        <ShoppingCartOutlined className="cart-icon" />
        <h4>My Cart</h4>
        <div className="amount">Rs. 00</div>
      </div>
    </div>
  );
}

export default Header_topmenu;
