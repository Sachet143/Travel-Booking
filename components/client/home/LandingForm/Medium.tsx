import React from "react";
import FlightFilter from "../FlightFilter";
import BusFilter from "../BusFilter";
import HotelFilter from "../HotelFilter";

function MediumLandingForm() {
  return (
    <section id="theme_search_form" className="hidden md:block">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="theme_search_form_area">
              <div className="theme_search_form_tabbtn">
                <ul className="nav nav-tabs z-10" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="flights-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#flights"
                      type="button"
                      role="tab"
                      aria-controls="flights"
                      aria-selected="true"
                    >
                      <i className="fas fa-plane-departure" />
                      Flights
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="bus-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#bus"
                      type="button"
                      role="tab"
                      aria-controls="bus"
                      aria-selected="false"
                    >
                      <i className="fas fa-bus" />
                      Buses
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="hotels-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#hotels"
                      type="button"
                      role="tab"
                      aria-controls="hotels"
                      aria-selected="false"
                    >
                      <i className="fas fa-hotel" />
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

export default MediumLandingForm;
