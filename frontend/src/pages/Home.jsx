import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";
import { BsTruck } from "react-icons/bs";
import { AiFillGift, AiFillCreditCard } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GiPriceTag } from "react-icons/gi";
import Marquee from "react-fast-marquee";

import "../style/home.css";
import ServiceWidget from "../components/ServiceWidget";
//import About from "./About";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectDot = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideImage = [
    {
      src: "https://templatemo.com/templates/templatemo_571_hexashop/assets/images/left-banner-image.jpg",
      title: "banner1",
    },
    {
      src: "https://templatemo.com/templates/templatemo_571_hexashop/assets/images/baner-right-image-01.jpg",
      title: "banner2",
    },
  ];
  const brands = [
    {
      brandUrl:
        "https://www.react-fast-marquee.com/static/media/pennsylvania.8c9f4108.png",
      title: "pennsylvania",
    },
    {
      brandUrl:
        "https://www.react-fast-marquee.com/static/media/pennsylvania.8c9f4108.png",
      title: "pennsylvania",
    },
    {
      brandUrl:
        "https://www.react-fast-marquee.com/static/media/nasa.3bf5af29.png",
      title: "nasa",
    },
    {
      brandUrl:
        "https://www.react-fast-marquee.com/static/media/mit.1af911d7.png",
      title: "mit",
    },
    {
      brandUrl:
        "https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png",
      title: "ibm",
    },
    {
      brandUrl:
        "https://www.react-fast-marquee.com/static/media/princeton.5d0a5006.png",
      title: "princeton",
    },
  ];
  return (
    <div className="homepage">
      <div className="container-fluid">
        <div className="main-banner" id="top">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <div className="thumb">
                  <div className="inner-content">
                    <h4>We Are Hexashop</h4>
                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                    <div className="main-border-button">
                      <Link to="#">Purchase Now!</Link>
                    </div>
                    <div className="dot-section">
                      {slideImage.map((_, slideIndex) => (
                        <div key={slideIndex}>
                          <RxDot onClick={() => selectDot(slideIndex)} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <img
                    src={slideImage[currentIndex].src}
                    alt={slideImage[currentIndex].title}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Women</h4>
                          <span>Best Clothes For Women</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Women</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/baner-right-image-01.jpg"
                          alt="new4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Men</h4>
                          <span>Best Clothes For Men</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Men</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/baner-right-image-02.jpg"
                          alt="new"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Kids</h4>
                          <span>Best Clothes For Kids</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Kids</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/baner-right-image-03.jpg"
                          alt="new2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Accessories</h4>
                          <span>Best Trend Accessories</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Accessories</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src="https://templatemo.com/templates/templatemo_571_hexashop/assets/images/baner-right-image-04.jpg"
                          alt="new3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row warper2">
          <div className="Services-section mB-4 mT-4">
            <ServiceWidget
              icon={<BsTruck />}
              title="Free shipping"
              text="From all orders over $5"
            />
            <ServiceWidget
              icon={<AiFillGift />}
              title="Daily Serprise offer"
              text="Save up to 25%"
            />
            <ServiceWidget
              icon={<BiSupport />}
              title="support 24*7"
              text="support with an expert"
            />
            <ServiceWidget
              icon={<GiPriceTag />}
              title="Afforadble Price"
              text="Get Factory default price"
            />
            <ServiceWidget
              icon={<AiFillCreditCard />}
              title="Secure Payment"
              text="100% Secure Payment"
            />
          </div>

          <div className="category-lisitng-section">
            <section className="section-products">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-lg-6">
                    <div className="header">
                      <h3>Categories</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-1" className="single-product">
                      <div className="part-1">
                        <h3 className="product-title">Here Product Title</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="different-brands-section mB-4 mT-4">
            <Marquee>
              {brands.map((brand, i) => (
                <div className="different-brand" key={i}>
                  <img
                    src={brand.brandUrl}
                    alt={brand.title}
                    height={50}
                    style={{ margin: "0 40px" }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="latest-products-section">
          <div className="container">
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
        <div className="latest-news-section row">
          <h3>Latest News</h3>
          <section className="posts-listing">
            <article className="post-item">
              <Link className="post-item__inner" to="">
                <div className="post-item__thumbnail-wrapper">
                  <div
                    className="post-item__thumbnail"
                    style={{
                      backgroundImage: `url(
                  'https://static.invenglobal.com/upload/image/2022/06/19/i1655647045440109.jpeg'
                )`,
                    }}
                  ></div>
                </div>

                <div className="post-item__content-wrapper">
                  <h2 className="post-item__title heading-size-4">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </h2>

                  <div className="post-item__metas">
                    <time
                      className="post-item__meta post-item__meta--date"
                      dateTime="2022-02-14T20:24:54+00:00"
                    >
                      February 14, 2022
                    </time>
                    <p className="post-item__meta post-item__meta--category">
                      Category
                    </p>
                  </div>

                  <div className="post-item__excerpt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </div>

                  <div className="post-item__read-more-wrapper">
                    <p className="post-item__read-more">Read more</p>
                  </div>
                </div>
              </Link>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
