import React from "react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";

const BlogDeatil = () => {
  return (
    <div className="container">
      <div className="cs-blog-detail">
        <div className="cs-main-post">
          <figure>
            <img
              alt="jobline-blog"
              src="http://jobcareer.chimpgroup.com/jobdoor/wp-content/uploads/jobline-blog-8.jpg"
            />
          </figure>
        </div>
        <div className="cs-post-title">
          <div className="cs-author">
            <figure>
              <Link to="http://jobcareer.chimpgroup.com/jobdoor/user/jobcareer-admin/">
                <img
                  width="32"
                  height="32"
                  className="avatar avatar-32 photo"
                  src="http://1.gravatar.com/avatar/7a20fad302fc2dd4b4649dc5bdb3c463?s=32&amp;d=mm&amp;r=g"
                  alt=""
                />
              </Link>
            </figure>
            <div className="cs-text">
              <Link to="http://jobcareer.chimpgroup.com/jobdoor/user/jobcareer-admin/">
                Julia Andrason
              </Link>
            </div>
          </div>
          <div className="post-option">
            <span className="post-date">
              <Link to="http://jobcareer.chimpgroup.com/jobdoor/2015/11/">
                <i className="cs-color icon-calendar6"></i>Nov 23, 2015
              </Link>
            </span>
            <span className="post-comment">
              <Link to="http://jobcareer.chimpgroup.com/jobdoor/experience-writing-for-producing-a-newscast/#comments">
                <i className="cs-color icon-chat6"></i>4 Comments
              </Link>
            </span>
          </div>
        </div>
        <div className="cs-post-option-panel">
          <div className="rich-editor-text">
            <p>
              Ravenously while stridently coughed far promiscuously below jeez
              much yikes bland that salamander cunningly some over abhorrent as
              house with between ouch that well scurrilously alas capybara
              massive outdid oh said hello majestically roadrunner lobster much
              bled alas lighted together waved upheld more far woolly ahead darn
              far far bore far far saw baneful upset rebound bowed possessive
              before or indisputably against.
            </p>
            <p>
              After hamster hello less far astride where accordingly much
              because some far innocently invoked far pre-set or objective this
              pangolin tendentiously eagle near spread and overlay as abysmal a
              and before walrus much therefore some close victorious jeepers
              deeply forward while jeez and overlaid save hey ritually
              notwithstanding mounted about nonchalantly and less hence far like
              hey kissed. Hello impotent ravenous hey accordingly well much
              lopsidedly one far blinked lorikeet sternly futile jeepers strewed
              well following subconscious far on egregiously and away far alas
              much forward in but far opposite less editorial some together.
            </p>
            <h4>Simple answer is, because other candidates won’t.</h4>
            <p>
              Ravenously while stridently coughed far promiscuously below jeez
              much yikes bland that salamander cunningly some over abhorrent as
              house with between ouch that well scurrilously alas capybara
              massive outdid oh said hello majestically roadrunner lobster much
              bled alas lighted together waved upheld.
            </p>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <blockquote className="text-left-align">
                <span>
                  {" "}
                  Ravenously while stridently coughed far promiscuously below
                  jeez much yikes bland that salamander cunningly some over
                  abhorrent as house with between ouch that well scurrilously
                  alas capybara massive outdid oh said hello majestically
                  roadrunner lobster much bled alas lighted together waved
                  upheld.
                </span>
                <span className="author-name">
                  <Link to="#">-- Robert Deneairo</Link>
                </span>
              </blockquote>
            </div>
            <p>
              Ravenously while stridently coughed far promiscuously below jeez
              much yikes bland that salamander cunningly some over abhorrent as
              house with between ouch that well scurrilously alas capybara
              massive outdid oh said hello majestically roadrunner lobster much
              bled alas lighted together waved upheld.
            </p>
          </div>
        </div>
        <div className="cs-tags">
          <div className="tags">
            <span>Tags</span>
            <ul>
              <li>
                <Link
                  rel="tag"
                  to="http://jobcareer.chimpgroup.com/jobdoor/tag/college/"
                >
                  College
                </Link>
              </li>
              <li>
                <Link
                  rel="tag"
                  to="http://jobcareer.chimpgroup.com/jobdoor/tag/job/"
                >
                  Job
                </Link>
              </li>
              <li>
                <Link
                  rel="tag"
                  to="http://jobcareer.chimpgroup.com/jobdoor/tag/search/"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  rel="tag"
                  to="http://jobcareer.chimpgroup.com/jobdoor/tag/teacher/"
                >
                  Teacher
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="commentSection">
        <CommentSection />
      </div>
    </div>
  );
};

export default BlogDeatil;
