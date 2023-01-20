import React from "react";
import { Link } from "react-router-dom";
import "../style/blog.css";

const Blogs = () => {
  return (
    <section id="blog">
      <div className="blog-box">
        <div className="blog-image">
          <img
            src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Blog"
          />
        </div>
        <div className="blog-details">
          <h4>Good as Gold Blog</h4>
          <p>
            A lot of the time when lists like this are put together, the
            emphasis is usually placed on small business blogs that talk about
            how to run and manage a business. And while such lists are certainly
            useful, I thought it would be a good idea to put together a list of
            blogs actually created and managed by retail store owners.
          </p>
          <Link to="#">Continue reading</Link>
        </div>
        <h1>01/22</h1>
      </div>
      <div className="blog-box">
        <div className="blog-image">
          <img
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Blog"
          />
        </div>
        <div className="blog-details">
          <h4>10 Menswear Blogs Every Guy Should Know</h4>
          <p>
            A decade ago, you could count the number of men’s style bloggers on
            one hand. Clearly those days are long gone. Today, sifting through
            all of them would take an eternity. So we’ve gathered 10 that
            inspire us so you can bookmark them and get inspired too.
          </p>
          <Link to="#">Continue reading</Link>
        </div>
        <h1>01/19</h1>
      </div>
      <div className="blog-box">
        <div className="blog-image">
          <img
            src="https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Blog"
          />
        </div>
        <div className="blog-details">
          <h4>8 Beauty bloggers you should be following</h4>
          <p>
            {" "}
            On the weekend (or whenever—who are we kidding?), we love nothing
            more than checking out what our favorite influencers are posting,
            from the products they're raving about or the makeup tutorials
            they're loving. While makeup and skincare blogs launch all the time,
            we continue to go back to certain experts over and over again...
          </p>
          <Link to="#">Continue reading</Link>
        </div>
        <h1>10/22</h1>
      </div>
      <div className="blog-box">
        <div className="blog-image">
          <img
            src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Blog"
          />
        </div>
        <div className="blog-details">
          <h4>Good, Better, Best</h4>
          <p>
            Learning how to choose what kind of t-shirt to use for your craft or
            screen-printing project depends on your crafting or screen-printing
            business needs. Some fabric and screen-printing choices make more
            sense for your bottom line than others. Or perhaps you’re looking
            for a different kind of t-shirt for your business due to changing
            needs.
          </p>
          <Link to="#">Continue reading</Link>
        </div>
        <h1>09/15</h1>
      </div>
      <div className="blog-box">
        <div className="blog-image">
          <img
            src="https://images.pexels.com/photos/1266139/pexels-photo-1266139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Blog"
          />
        </div>
        <div className="blog-details">
          <h4>3 keys to healthy grocery shopping</h4>
          <p>
            With the New Year a few months behind us now, hectic schedules and
            daily distractions have gotten in the way of our most well intended
            resolutions. If you are still looking to work on being healthier
            this year, eating healthier is a good option that may be easier than
            it seems.
          </p>
          <Link to="#">Continue reading</Link>
        </div>
        <h1>08/21</h1>
      </div>
    </section>
  );
};

export default Blogs;
