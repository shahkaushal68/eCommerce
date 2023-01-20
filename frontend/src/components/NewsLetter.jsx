import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-img text-center newsLetter">
      <div className="newsLetter-title">
        <h2>
          <strong>Subscribe</strong>
        </h2>
      </div>
      <div className="newLetterForm">
        <form className="form-subscribe" action="#">
          <div className="input-group">
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Your eamil address"
            />
            <span className="input-group-btn">
              <button className="btn btn-success btn-lg" type="submit">
                Subscribe
              </button>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
