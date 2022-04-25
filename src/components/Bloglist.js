import React from "react";
import { Link } from "react-router-dom";
import { Blog_List_Data } from "../data/logo-data";

const Bloglist = (props) => {
  return (
    <>
      <div className="bloglist-wrap section">
        <div className="container">
          <h2 className="h2 title">{props.title}</h2>

          <div className="row">
            {Blog_List_Data.map((item, index) => {
              return (
                <>
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="img-box">
                        <img
                          src={item.image}
                          alt="blogimg"
                          width={416}
                          height={256}
                        />
                      </div>
                      <div className="content">
                        <h3 className="h3 title">{item.title}</h3>
                        <p className="info">{item.info}</p>
                        <div className="btn-wrap">
                          <Link to="/" className="cta-link fw-bold">
                            {item.btntxt}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloglist;
