import React from "react";
import { Link } from "react-router-dom";
import "../style/shop.css";

const Shop = () => {
  return (
    <>
      <div className="container">
        <div
          className="bg-white rounded d-flex align-items-center justify-content-between"
          id="header"
        >
          <button
            className="btn btn-hide text-uppercase custom-font"
            type="button"
            id="filter-btn"
          >
            <span className="fas fa-angle-left" id="filter-angle"></span>
            <span id="btn-txt">Hide filters</span>
          </button>
          <nav className="navbar navbar-expand-lg navbar-light pl-lg-0 pl-auto">
            <button className="navbar-toggler" type="button" id="icon">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="mynav">
              <ul className="navbar-nav d-lg-flex align-items-lg-center">
                <li className="nav-item active">
                  <select name="sort" id="sort">
                    <option value="">Sort by</option>
                    <option value="price">Price</option>
                    <option value="popularity">Popularity</option>
                    <option value="rating">Rating</option>
                  </select>
                </li>
                <li className="nav-item d-inline-flex align-items-center justify-content-between mb-lg-0 mb-3">
                  <div
                    className="d-inline-flex align-items-center mx-lg-2"
                    id="select2"
                  >
                    <div className="pl-2">Products:</div>
                    <select name="pro" id="pro">
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                  <div className="font-weight-bold mx-2 result">
                    18 from 200
                  </div>
                </li>
                <li className="nav-item d-lg-none d-inline-flex"> </li>
              </ul>
            </div>
          </nav>
          <div className="ml-auto mt-3 mr-2">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  {" "}
                  <Link className="page-link" to="#" aria-label="Previous">
                    {" "}
                    <span aria-hidden="true" className="font-weight-bold">
                      &lt;
                    </span>{" "}
                    <span className="sr-only">Previous</span>{" "}
                  </Link>{" "}
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    ..
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    24
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Next">
                    <span aria-hidden="true" className="font-weight-bold">
                      &gt;
                    </span>
                    <span className="sr-only">Next</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="content" className="my-5">
          <div id="filterbar">
            <div className="box border-bottom">
              <div className="form-group text-center">
                <div className="btn-group" data-toggle="buttons">
                  <button type="button" className="btn btn-danger custom-font">
                    Reset
                  </button>
                </div>
              </div>
              <div>
                <label className="tick">
                  New
                  <input type="checkbox" /> <span className="check"></span>{" "}
                </label>{" "}
              </div>
              <div>
                {" "}
                <label className="tick">
                  Sale <input type="checkbox" /> <span className="check"></span>{" "}
                </label>{" "}
              </div>
            </div>
            <div className="box border-bottom">
              <div className="box-label text-uppercase d-flex align-items-center">
                Outerwear{" "}
                <button className="btn ml-auto" type="button" id="out">
                  {" "}
                  <span className="fas fa-plus"></span>{" "}
                </button>{" "}
              </div>
              <div id="inner-box" className="mt-2 mr-1">
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Windbreaker <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Jumpsuit <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Jacket <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Coat <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Raincoat <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Handbag <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Warm vest <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Wallets <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
              </div>
            </div>
            <div className="box border-bottom">
              <div className="box-label text-uppercase d-flex align-items-center">
                season{" "}
                <button className="btn ml-auto" type="button">
                  <span className="fas fa-plus"></span>
                </button>{" "}
              </div>
              <div id="inner-box2" className="mt-2 mr-1">
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Spring <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Summer <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Autumn <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Winter <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Rainy <input type="checkbox" />{" "}
                    <span className="check"></span>{" "}
                  </label>{" "}
                </div>
              </div>
            </div>
            <div className="box border-bottom">
              <div className="box-label text-uppercase d-flex align-items-center">
                price{" "}
                <button className="btn ml-auto" type="button">
                  <span className="fas fa-plus"></span>
                </button>{" "}
              </div>
              <div id="price">
                <div className="middle">
                  <div className="multi-range-slider">
                    <input
                      type="range"
                      id="input-left"
                      min="0"
                      max="100"
                      value="10"
                    />
                    <input
                      type="range"
                      id="input-right"
                      min="0"
                      max="100"
                      value="50"
                    />
                    <div className="slider">
                      <div className="track"></div>
                      <div className="range"></div>
                      <div className="thumb left"></div>
                      <div className="thumb right"></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div>
                    {" "}
                    <span
                      id="amount-left"
                      className="font-weight-bold"
                    ></span>{" "}
                    uah{" "}
                  </div>
                  <div>
                    {" "}
                    <span
                      id="amount-right"
                      className="font-weight-bold"
                    ></span>{" "}
                    uah{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-label text-uppercase d-flex align-items-center">
                size{" "}
                <button className="btn ml-auto" type="button">
                  <span className="fas fa-plus"></span>
                </button>{" "}
              </div>
              <div id="size">
                <div
                  className="btn-group d-flex align-items-center flex-wrap"
                  data-toggle="buttons"
                >
                  {" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                    /> 80{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    <input className="form-check-input" type="checkbox" /> 92{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                    /> 102{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                    /> 104{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                    /> 106{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                    /> 108{" "}
                  </label>{" "}
                </div>
              </div>
            </div>
          </div>
          <div id="products">
            <div className="row mx-0">
              <div className="col-lg-4 col-md-6">
                <div className="card custom-card d-flex flex-column align-items-center">
                  <div className="product-name">Torn Jeans for Men</div>
                  <div className="card-img">
                    <img
                      src="https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png"
                      alt=""
                    />{" "}
                  </div>
                  <div className="card-body pt-5">
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      <div
                        className="btn-group"
                        data-toggle="buttons"
                        data-tooltip="tooltip"
                        data-placement="right"
                        title="choose color"
                      >
                        {" "}
                        <label className="btn btn-red form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-blue form-check-label active">
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-green form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-orange form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-pink form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                      </div>
                    </div>
                    <div className="d-flex align-items-center price">
                      <div className="del mr-2">
                        <span className="text-dark">5500 uah</span>
                      </div>
                      <div className="font-weight-bold">4500 uah</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pt-md-0 pt-3">
                <div className="card d-flex flex-column align-items-center">
                  <div className="product-name">Nike Tshirts for Men</div>
                  <div className="card-img">
                    {" "}
                    <img
                      src="https://www.freepnglogos.com/uploads/t-shirt-png/t-shirt-png-printed-shirts-south-africa-20.png"
                      alt=""
                      height="100"
                      id="shirt"
                    />{" "}
                  </div>
                  <div className="text-muted text-center mt-auto">
                    Available Sizes
                  </div>
                  <div id="avail-size">
                    <div
                      className="btn-group d-flex align-items-center flex-wrap"
                      data-toggle="buttons"
                    >
                      {" "}
                      <label className="btn btn-success form-check-label">
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />{" "}
                        80{" "}
                      </label>{" "}
                      <label className="btn btn-success form-check-label">
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />{" "}
                        92{" "}
                      </label>{" "}
                      <label className="btn btn-success form-check-label">
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />{" "}
                        102{" "}
                      </label>{" "}
                      <label className="btn btn-success form-check-label">
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />{" "}
                        104{" "}
                      </label>{" "}
                      <label className="btn btn-success form-check-label">
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />{" "}
                        106{" "}
                      </label>{" "}
                      <label className="btn btn-success form-check-label">
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />{" "}
                        108{" "}
                      </label>{" "}
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      <div
                        className="btn-group"
                        data-toggle="buttons"
                        data-tooltip="tooltip"
                        data-placement="right"
                        title="choose color"
                      >
                        {" "}
                        <label className="btn btn-light border form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-blue form-check-label active">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-green form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-orange form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-pink form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                      </div>
                    </div>
                    <div className="d-flex align-items-center price">
                      <div className="del mr-2">
                        <span className="text-dark">5500 uah</span>
                      </div>
                      <div className="font-weight-bold">4500 uah</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pt-lg-0 pt-md-4 pt-3">
                <div className="card d-flex flex-column align-items-center">
                  <div className="product-name text-center">
                    Casual Dress Belts For Men
                  </div>
                  <div className="card-img">
                    {" "}
                    <img
                      src="https://www.freepnglogos.com/uploads/belts-png/casual-dress-belts-for-men-28.png"
                      alt=""
                    />{" "}
                  </div>
                  <div className="card-body pt-5">
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      <div
                        className="btn-group"
                        data-toggle="buttons"
                        data-tooltip="tooltip"
                        data-placement="right"
                        title="choose color"
                      >
                        {" "}
                        <label className="btn btn-dark border form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-brown form-check-label active">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center price">
                      <div className="font-weight-bold">500 uah</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pt-md-4 pt-3">
                <div className="custom-card d-flex flex-column align-items-center">
                  <div className="product-name text-center">
                    Footwear For Women
                  </div>
                  <div className="card-img">
                    {" "}
                    <img
                      src="https://www.freepnglogos.com/uploads/women-shoes-png/download-women-shoes-png-image-png-image-pngimg-2.png"
                      alt=""
                    />{" "}
                  </div>
                  <div className="card-body pt-5">
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      <div
                        className="btn-group"
                        data-toggle="buttons"
                        data-tooltip="tooltip"
                        data-placement="right"
                        title="choose color"
                      >
                        {" "}
                        <label className="btn btn-dark border form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-brown form-check-label active">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-pink form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-red form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center price">
                      <div className="font-weight-bold">1500 uah</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pt-md-4 pt-3">
                <div className="custom-card d-flex flex-column align-items-center">
                  <div className="product-name text-center">
                    Nike Jogging shoes For Men
                  </div>
                  <div className="card-img">
                    {" "}
                    <img
                      src="https://www.freepnglogos.com/uploads/shoes-png/find-your-perfect-running-shoes-26.png"
                      alt=""
                    />{" "}
                  </div>
                  <div className="card-body pt-5">
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      <div
                        className="btn-group"
                        data-toggle="buttons"
                        data-tooltip="tooltip"
                        data-placement="right"
                        title="choose color"
                      >
                        {" "}
                        <label className="btn btn-dark border form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-pink form-check-label active">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-blue form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-orange form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center price">
                      <div className="font-weight-bold">1200 uah</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pt-md-4 pt-3">
                <div className="card custom-card d-flex flex-column align-items-center">
                  <div className="product-name text-center">
                    Leather Wallets For Men
                  </div>
                  <div className="card-img">
                    {" "}
                    <img
                      src="https://www.freepnglogos.com/uploads/money-png/money-wallet-dollar-image-money-pictures-download-27.png"
                      alt=""
                    />{" "}
                  </div>
                  <div className="card-body pt-5">
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      <div
                        className="btn-group"
                        data-toggle="buttons"
                        data-tooltip="tooltip"
                        data-placement="right"
                        title="choose color"
                      >
                        {" "}
                        <label className="btn btn-dark border form-check-label">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                        <label className="btn btn-brown form-check-label active">
                          {" "}
                          <input
                            className="form-check-input"
                            type="radio"
                            autoComplete="off"
                          />{" "}
                        </label>{" "}
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center price">
                      <div className="font-weight-bold">900 uah</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
