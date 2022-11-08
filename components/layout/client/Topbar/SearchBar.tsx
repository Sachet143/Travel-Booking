import { Button } from "antd";
import { useRouter } from "next/router";
import React from "react";

const SearchBar = ({ path }: any) => {
  return (
    <>
      {path == "/hotels" && (
        <div className="custom-filter-nav-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="all-input-wrapper">
                  <div className="input-wrap">
                    <input
                      placeholder="Enter Location"
                      className="mb-0 form-control"
                      type="text"
                    />
                  </div>
                  <div className="input-wrap">
                    <input
                      type="date"
                      placeholder="Checkin Date"
                      className="mb-0 form-control"
                    />
                  </div>
                  <div className="input-wrap">
                    <input
                      type="date"
                      placeholder="Checkout Date"
                      className="mb-0 form-control"
                    />
                  </div>
                  <div className="input-wrap">
                    <input
                      placeholder="No.of Guest"
                      className="mb-0 form-control"
                    />
                  </div>
                  <div className="input-wrap">
                    <Button className="btn btn-admin-primary">Search</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
