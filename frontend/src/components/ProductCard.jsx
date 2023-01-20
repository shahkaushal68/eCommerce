import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const ProductCard = () => {
  const [rating, setRating] = useState(0);
  const selectedRating = (rating) => {
    setRating(rating);
  };
  return (
    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
          <li className="icon">
            <span className="fas fa-expand-arrows-alt"></span>
          </li>
          <li className="icon mx-3">
            <span className="far fa-heart"></span>
          </li>
          <li className="icon">
            <span className="fas fa-shopping-bag"></span>
          </li>
        </ul>
      </div>
      <div className="tag bg-red">sale</div>
      <div className="title pt-4 pb-1">Winter Sweater</div>
      <div className="d-flex align-content-center justify-content-center">
        <StarRatings
          style={{ cursor: "pointer" }}
          changeRating={(rating) => selectedRating(rating)}
          rating={rating}
          starHoverColor="rgb(255,192,23)"
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="rgb(255,192,23)"
        />
      </div>
      <div className="price">$60.0</div>
    </div>
  );
};

export default ProductCard;
