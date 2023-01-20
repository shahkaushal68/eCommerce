import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-sm-12 mb-4 col-md-5">
          <div className="border-primary rounded-0">
            <div className="card-header p-0">
              <div className="bg-primary text-white text-center py-2">
                <h3>
                  <i className="fa fa-envelope"></i> Write to us:
                </h3>
                <p className="m-0">
                  We’ll write rarely, but only the best content.
                </p>
              </div>
            </div>
            <div className="card-body p-3">
              <div className="form-group">
                <label> Your name </label>
                <div className="input-group">
                  <input
                    value=""
                    type="text"
                    name="data[name]"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Your email</label>
                <div className="input-group mb-2 mb-sm-0">
                  <input
                    type="email"
                    value=""
                    name="data[email]"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <div className="input-group mb-2 mb-sm-0">
                  <input
                    type="text"
                    name="data[subject]"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <div className="input-group mb-2 mb-sm-0">
                  <input type="text" className="form-control" name="mesg" />
                </div>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  name="submit"
                  value="submit"
                  className="btn btn-primary btn-block rounded-0 py-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-7">
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117223.77996815204!2d85.3213263!3d23.3432048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11b5a9b0042eef56!2sourcita.com!5e0!3m2!1sen!2sin!4v1589706571407!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex="0"
              title="uni"
            ></iframe>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <Link className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                <i className="fa fa-map-marker"></i>
              </Link>
              <p> Your Address ….. </p>
            </div>
            <div className="col-md-4">
              <Link className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                <i className="fa fa-phone"></i>
              </Link>
              <p>+91- 90000000</p>
            </div>
            <div className="col-md-4">
              <Link className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                <i className="fa fa-envelope"></i>
              </Link>
              <p> your@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
