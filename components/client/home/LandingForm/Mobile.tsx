import React from "react";
import FlightFilter from "../FlightFilter";
import BusFilter from "../BusFilter";
import HotelFilter from "../HotelFilter";

function MobileLandingForm() {
  return (
    <section
      // id="theme_search_form"
      className="md:hidden"
      style={{
        position: "absolute",
        top: "calc(33% - 120.5px)",
        width: "100%",
        margin: "0px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="theme_search_form_area">
              <div className="theme_search_form_tabbtn">
                <ul
                  className="nav z-10"
                  role="tablist"
                  style={{
                    position: "absolute",
                    background: "white",
                    top: "-28px",
                    left: "0px",
                    right: "0px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 1px 7px 0 rgb(0 0 0 / 40%)",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="px-2 py-3 active"
                      id="flights-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#flights"
                      type="button"
                      role="tab"
                      aria-controls="flights"
                      aria-selected="true"
                    >
                      <i className="fas fa-plane-departure mr-1" />
                      Flights
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="px-2 py-3"
                      id="bus-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#bus"
                      type="button"
                      role="tab"
                      aria-controls="bus"
                      aria-selected="false"
                    >
                      <i className="fas fa-bus mr-1" />
                      Buses
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="px-2 py-3"
                      id="hotels-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#hotels"
                      type="button"
                      role="tab"
                      aria-controls="hotels"
                      aria-selected="false"
                    >
                      <i className="fas fa-hotel mr-1" />
                      Stays
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <FlightFilter />
                <BusFilter />
                <HotelFilter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileLandingForm;
