import React from 'react'

function FlightFilter() {
  return (
    <div
      className="tab-pane fade show active"
      id="flights"
      role="tabpanel"
      aria-labelledby="flights-tab"
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="flight_categories_search">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="oneway-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#oneway_flight"
                  type="button"
                  role="tab"
                  aria-controls="oneway_flight"
                  aria-selected="true"
                >
                  One Way
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="roundtrip-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#roundtrip"
                  type="button"
                  role="tab"
                  aria-controls="roundtrip"
                  aria-selected="false"
                >
                  Roundtrip
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="multi_city-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#multi_city"
                  type="button"
                  role="tab"
                  aria-controls="multi_city"
                  aria-selected="false"
                >
                  Multi city
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content" id="myTabContent1">
        <div
          className="tab-pane fade show active"
          id="oneway_flight"
          role="tabpanel"
          aria-labelledby="oneway-tab"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="oneway_search_form">
                <form action="#!">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="flight_Search_boxed">
                        <p>From</p>
                        <input
                          type="text"
                          defaultValue="New York"
                        />
                        <span>
                          JFK - John F. Kennedy
                          International...
                        </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-departure" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="flight_Search_boxed">
                        <p>To</p>
                        <input
                          type="text"
                          defaultValue="London "
                        />
                        <span>LCY, London city airport </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-arrival" />
                        </div>
                        <div className="range_plan">
                          <i className="fas fa-exchange-alt" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-12 col-12">
                      <div className="form_search_date">
                        <div className="flight_Search_boxed date_flex_area">
                          <div className="Journey_date">
                            <p>Journey date</p>
                            <input
                              type="date"
                              defaultValue="2022-05-05"
                            />
                            <span>Thursday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                      <div className="flight_Search_boxed dropdown_passenger_area">
                        <p>Passenger, Class </p>
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle final-count"
                            data-toggle="dropdown"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            0 Passenger
                          </button>
                          <div
                            className="dropdown-menu dropdown_passenger_info"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <div className="traveller-calulate-persons">
                              <div className="passengers">
                                <h6>Passengers</h6>
                                <div className="passengers-types">
                                  <div className="passengers-type">
                                    <div className="text">
                                      <span className="count pcount">
                                        2
                                      </span>
                                      <div className="type-label">
                                        <p>Adult</p>
                                        <span>12+ yrs</span>
                                      </div>
                                    </div>
                                    <div className="button-set">
                                      <button
                                        type="button"
                                        className="btn-add"
                                      >
                                        <i className="fas fa-plus" />
                                      </button>
                                      <button
                                        type="button"
                                        className="btn-subtract"
                                      >
                                        <i className="fas fa-minus" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="passengers-type">
                                    <div className="text">
                                      <span className="count ccount">
                                        0
                                      </span>
                                      <div className="type-label">
                                        <p className="fz14 mb-xs-0">
                                          Children
                                        </p>
                                        <span>
                                          2 - Less than 12 yrs
                                        </span>
                                      </div>
                                    </div>
                                    <div className="button-set">
                                      <button
                                        type="button"
                                        className="btn-add-c"
                                      >
                                        <i className="fas fa-plus" />
                                      </button>
                                      <button
                                        type="button"
                                        className="btn-subtract-c"
                                      >
                                        <i className="fas fa-minus" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="passengers-type">
                                    <div className="text">
                                      <span className="count incount">
                                        0
                                      </span>
                                      <div className="type-label">
                                        <p className="fz14 mb-xs-0">
                                          Infant
                                        </p>
                                        <span>
                                          Less than 2 yrs
                                        </span>
                                      </div>
                                    </div>
                                    <div className="button-set">
                                      <button
                                        type="button"
                                        className="btn-add-in"
                                      >
                                        <i className="fas fa-plus" />
                                      </button>
                                      <button
                                        type="button"
                                        className="btn-subtract-in"
                                      >
                                        <i className="fas fa-minus" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cabin-selection">
                                <h6>Cabin Class</h6>
                                <div className="cabin-list">
                                  <button
                                    type="button"
                                    className="label-select-btn"
                                  >
                                    <span className="muiButton-label">
                                      Economy
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="label-select-btn active"
                                  >
                                    <span className="muiButton-label">
                                      Business
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="label-select-btn"
                                  >
                                    <span className="MuiButton-label">
                                      First Class{" "}
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span>Business</span>
                      </div>
                    </div>
                    <div className="top_form_search_button">
                      <button className="btn btn_theme btn_md">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="roundtrip"
          role="tabpanel"
          aria-labelledby="roundtrip-tab"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="oneway_search_form">
                <form action="#!">
                  <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-12 col-12">
                      <div className="flight_Search_boxed">
                        <p>From</p>
                        <input
                          type="text"
                          defaultValue="New York"
                        />
                        <span>
                          JFK - John F. Kennedy
                          International...
                        </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-departure" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-12 col-12">
                      <div className="flight_Search_boxed">
                        <p>To</p>
                        <input
                          type="text"
                          defaultValue="London "
                        />
                        <span>LCY, London city airport </span>
                        <div className="plan_icon_posation">
                          <i className="fas fa-plane-arrival" />
                        </div>
                        <div className="range_plan">
                          <i className="fas fa-exchange-alt" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-12 col-12">
                      <div className="form_search_date">
                        <div className="flight_Search_boxed date_flex_area">
                          <div className="Journey_date">
                            <p>Journey date</p>
                            <input
                              type="date"
                              defaultValue="2022-05-05"
                            />
                            <span>Thursday</span>
                          </div>
                          <div className="Journey_date">
                            <p>Return date</p>
                            <input
                              type="date"
                              defaultValue="2022-05-08"
                            />
                            <span>Saturday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                      <div className="flight_Search_boxed dropdown_passenger_area">
                        <p>Passenger, Class </p>
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle final-count"
                            data-toggle="dropdown"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            0 Passenger
                          </button>
                          <div
                            className="dropdown-menu dropdown_passenger_info"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <div className="traveller-calulate-persons">
                              <div className="passengers">
                                <h6>Passengers</h6>
                                <div className="passengers-types">
                                  <div className="passengers-type">
                                    <div className="text">
                                      <span className="count pcount">
                                        2
                                      </span>
                                      <div className="type-label">
                                        <p>Adult</p>
                                        <span>12+ yrs</span>
                                      </div>
                                    </div>
                                    <div className="button-set">
                                      <button
                                        type="button"
                                        className="btn-add"
                                      >
                                        <i className="fas fa-plus" />
                                      </button>
                                      <button
                                        type="button"
                                        className="btn-subtract"
                                      >
                                        <i className="fas fa-minus" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="passengers-type">
                                    <div className="text">
                                      <span className="count ccount">
                                        0
                                      </span>
                                      <div className="type-label">
                                        <p className="fz14 mb-xs-0">
                                          Children
                                        </p>
                                        <span>
                                          2 - Less than 12 yrs
                                        </span>
                                      </div>
                                    </div>
                                    <div className="button-set">
                                      <button
                                        type="button"
                                        className="btn-add-c"
                                      >
                                        <i className="fas fa-plus" />
                                      </button>
                                      <button
                                        type="button"
                                        className="btn-subtract-c"
                                      >
                                        <i className="fas fa-minus" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="passengers-type">
                                    <div className="text">
                                      <span className="count incount">
                                        0
                                      </span>
                                      <div className="type-label">
                                        <p className="fz14 mb-xs-0">
                                          Infant
                                        </p>
                                        <span>
                                          Less than 2 yrs
                                        </span>
                                      </div>
                                    </div>
                                    <div className="button-set">
                                      <button
                                        type="button"
                                        className="btn-add-in"
                                      >
                                        <i className="fas fa-plus" />
                                      </button>
                                      <button
                                        type="button"
                                        className="btn-subtract-in"
                                      >
                                        <i className="fas fa-minus" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cabin-selection">
                                <h6>Cabin Class</h6>
                                <div className="cabin-list">
                                  <button
                                    type="button"
                                    className="label-select-btn"
                                  >
                                    <span className="muiButton-label">
                                      Economy
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="label-select-btn active"
                                  >
                                    <span className="muiButton-label">
                                      Business
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="label-select-btn"
                                  >
                                    <span className="MuiButton-label">
                                      First Class{" "}
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span>Business</span>
                      </div>
                    </div>
                  </div>
                  <div className="top_form_search_button">
                    <button className="btn btn_theme btn_md">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="multi_city"
          role="tabpanel"
          aria-labelledby="multi_city-tab"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="oneway_search_form">
                <form action="#!">
                  <div className="multi_city_form_wrapper">
                    <div className="multi_city_form">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>From</p>
                            <input
                              type="text"
                              defaultValue="New York"
                            />
                            <span>
                              DAC, Hazrat Shahajalal
                              International...
                            </span>
                            <div className="plan_icon_posation">
                              <i className="fas fa-plane-departure" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>To</p>
                            <input
                              type="text"
                              defaultValue="London "
                            />
                            <span>
                              LCY, London city airport{" "}
                            </span>
                            <div className="plan_icon_posation">
                              <i className="fas fa-plane-arrival" />
                            </div>
                            <div className="range_plan">
                              <i className="fas fa-exchange-alt" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="form_search_date">
                            <div className="flight_Search_boxed date_flex_area">
                              <div className="Journey_date">
                                <p>Journey date</p>
                                <input
                                  type="date"
                                  defaultValue="2022-05-05"
                                />
                                <span>Thursday</span>
                              </div>
                              <div className="Journey_date">
                                <p>Return date</p>
                                <input
                                  type="date"
                                  defaultValue="2022-05-10"
                                />
                                <span>Saturday</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                          <div className="flight_Search_boxed dropdown_passenger_area">
                            <p>Passenger, Class </p>
                            <div className="dropdown">
                              <button
                                className="dropdown-toggle final-count"
                                data-toggle="dropdown"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                0 Passenger
                              </button>
                              <div
                                className="dropdown-menu dropdown_passenger_info"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <div className="traveller-calulate-persons">
                                  <div className="passengers">
                                    <h6>Passengers</h6>
                                    <div className="passengers-types">
                                      <div className="passengers-type">
                                        <div className="text">
                                          <span className="count pcount">
                                            2
                                          </span>
                                          <div className="type-label">
                                            <p>Adult</p>
                                            <span>
                                              12+ yrs
                                            </span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add"
                                          >
                                            <i className="fas fa-plus" />
                                          </button>
                                          <button
                                            type="button"
                                            className="btn-subtract"
                                          >
                                            <i className="fas fa-minus" />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="passengers-type">
                                        <div className="text">
                                          <span className="count ccount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Children
                                            </p>
                                            <span>
                                              2 - Less than 12
                                              yrs
                                            </span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add-c"
                                          >
                                            <i className="fas fa-plus" />
                                          </button>
                                          <button
                                            type="button"
                                            className="btn-subtract-c"
                                          >
                                            <i className="fas fa-minus" />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="passengers-type">
                                        <div className="text">
                                          <span className="count incount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Infant
                                            </p>
                                            <span>
                                              Less than 2 yrs
                                            </span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add-in"
                                          >
                                            <i className="fas fa-plus" />
                                          </button>
                                          <button
                                            type="button"
                                            className="btn-subtract-in"
                                          >
                                            <i className="fas fa-minus" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cabin-selection">
                                    <h6>Cabin Class</h6>
                                    <div className="cabin-list">
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="muiButton-label">
                                          Economy
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn active"
                                      >
                                        <span className="muiButton-label">
                                          Business
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="MuiButton-label">
                                          First Class{" "}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span>Business</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="multi_city_form">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>From</p>
                            <input
                              type="text"
                              defaultValue="New York"
                            />
                            <span>
                              DAC, Hazrat Shahajalal
                              International...
                            </span>
                            <div className="plan_icon_posation">
                              <i className="fas fa-plane-departure" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>To</p>
                            <input
                              type="text"
                              defaultValue="London "
                            />
                            <span>
                              LCY, London city airport{" "}
                            </span>
                            <div className="plan_icon_posation">
                              <i className="fas fa-plane-arrival" />
                            </div>
                            <div className="range_plan">
                              <i className="fas fa-exchange-alt" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="form_search_date">
                            <div className="flight_Search_boxed date_flex_area">
                              <div className="Journey_date">
                                <p>Journey date</p>
                                <input
                                  type="date"
                                  defaultValue="2022-05-05"
                                />
                                <span>Thursday</span>
                              </div>
                              <div className="Journey_date">
                                <p>Return date</p>
                                <input
                                  type="date"
                                  defaultValue="2022-05-12"
                                />
                                <span>Saturday</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                          <div className="flight_Search_boxed dropdown_passenger_area">
                            <p>Passenger, Class </p>
                            <div className="dropdown">
                              <button
                                className="dropdown-toggle final-count"
                                data-toggle="dropdown"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                0 Passenger
                              </button>
                              <div
                                className="dropdown-menu dropdown_passenger_info"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <div className="traveller-calulate-persons">
                                  <div className="passengers">
                                    <h6>Passengers</h6>
                                    <div className="passengers-types">
                                      <div className="passengers-type">
                                        <div className="text">
                                          <span className="count pcount">
                                            2
                                          </span>
                                          <div className="type-label">
                                            <p>Adult</p>
                                            <span>
                                              12+ yrs
                                            </span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add"
                                          >
                                            <i className="fas fa-plus" />
                                          </button>
                                          <button
                                            type="button"
                                            className="btn-subtract"
                                          >
                                            <i className="fas fa-minus" />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="passengers-type">
                                        <div className="text">
                                          <span className="count ccount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Children
                                            </p>
                                            <span>
                                              2 - Less than 12
                                              yrs
                                            </span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add-c"
                                          >
                                            <i className="fas fa-plus" />
                                          </button>
                                          <button
                                            type="button"
                                            className="btn-subtract-c"
                                          >
                                            <i className="fas fa-minus" />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="passengers-type">
                                        <div className="text">
                                          <span className="count incount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Infant
                                            </p>
                                            <span>
                                              Less than 2 yrs
                                            </span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add-in"
                                          >
                                            <i className="fas fa-plus" />
                                          </button>
                                          <button
                                            type="button"
                                            className="btn-subtract-in"
                                          >
                                            <i className="fas fa-minus" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cabin-selection">
                                    <h6>Cabin Class</h6>
                                    <div className="cabin-list">
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="muiButton-label">
                                          Economy
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn active"
                                      >
                                        <span className="muiButton-label">
                                          Business
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="MuiButton-label">
                                          First Class{" "}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span>Business</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="add_multy_form">
                        <button
                          type="button"
                          id="addMulticityRow"
                        >
                          + Add another flight
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="top_form_search_button">
                    <button className="btn btn_theme btn_md">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightFilter