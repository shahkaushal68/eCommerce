import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import TopNavigation from "./TopNavigation";

const Header = () => {
  return (
    <header className="section-header bg-dark">
      <nav className="navbar navbar-dark navbar-expand p-0 ">
        <div className="container-fluid">
          <ul className="navbar-nav d-none d-md-flex mr-auto">
            <li className="nav-item">Free Shipping over $100 & free returns</li>
          </ul>
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">HotLine:+1 123456789</li>
            <li className="nav-item">
              <div className="d-flex flex-row">
                <img
                  src="https://i.imgur.com/EYFtR83.jpg"
                  className="rounded-circle"
                  width="30"
                  alt="avatar"
                />
              </div>
            </li>
            <li className="nav-item">
              <Link
                to=""
                className="nav-link d-flex align-items-center"
                data-abc="true"
              >
                <span>Nantano M</span>
                <i className="bx bxs-chevron-down"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="header-main border-bottom">
        <div className="container-fluid">
          <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
            <div className="col-md-2">eCommerce</div>
            <div className="col-md-5">
              <div className="d-flex form-inputs">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search any product..."
                />
                <div className="header-search-icon">
                  <AiOutlineSearch />
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="d-flex align-items-center all-item">
                <div className="item-detail d-flex">
                  <span className="item-icon">
                    <IoIosGitCompare />
                  </span>
                  <span className="item-name">Compare Products</span>
                </div>
                <div className="item-detail d-flex">
                  <span className="item-icon">
                    <AiOutlineHeart />
                  </span>
                  <span className="item-name">Product wishlists</span>
                </div>
                <Link to="/login">
                  <div className="item-detail d-flex">
                    <span className="item-icon">
                      <AiOutlineUser />
                    </span>
                    <span className="item-name">Log in My Account</span>
                  </div>
                </Link>
                <div className="item-detail d-flex basket-icon">
                  <span className="item-icon">
                    <AiOutlineShoppingCart />
                  </span>
                  <span className="product-qty">3</span>
                  <span className="item-name">$500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TopNavigation />
    </header>
  );
};

export default Header;
