/* eslint-disable @next/next/no-img-element */
import Dropdown from "@/components/common/Dropdown";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { renderLocation } from "@/services/helper";
import { Skeleton, Slider } from "antd";
import moment from "moment";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import useSWR from "swr";

const HotelListing = () => {
  const { data: hotels, error, mutate } = useSWR(`/hotels`);
  const hotelLoading = !hotels && !error;

  const [dropDown, setDropDown] = useState(false);
  const [checkInDate, setCheckInDate] = useState(
    moment(Date.now()).format("YYYY-MM-DD")
  );

  const [checkOutDate, setCheckOutDate] = useState(
    moment(Date.now()).format("YYYY-MM-DD")
  );

  const [sumGuests, setSumGuests] = useState(1);

  const [finalTotal, setFinalTotal] = useState({
    adult: 1,
    children: 0,
    infant: 0,
  });

  return (
    <ClientLayout>
      <>
        <section id="common_banner" className="search-bar-items">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="common_bannner_text">
                  <h2>Hotel search result</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-circle"></i>
                      </span>{" "}
                      Hotel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* book */}
        {/* <section id="theme_search_form_tour">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="theme_search_form_area">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tour_search_form">
                        <form>
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                              <div className="flight_Search_boxed">
                                <p>Destination</p>
                                <input
                                  type="text"
                                  placeholder="Where are you going?"
                                />
                                <span>Where are you going?</span>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                              <div className="form_search_date">
                                <div className="flight_Search_boxed date_flex_area">
                                  <div className="Journey_date">
                                    <p>Check In date</p>
                                    <input
                                      type="date"
                                      value={checkInDate}
                                      onChange={(e) =>
                                        setCheckInDate(e.target.value)
                                      }
                                    />
                                    <span>
                                      {moment(checkInDate).format("dddd")}
                                    </span>
                                  </div>
                                  <div className="Journey_date">
                                    <p>Check Out date</p>
                                    <input
                                      type="date"
                                      value={checkOutDate}
                                      onChange={(e) =>
                                        setCheckOutDate(e.target.value)
                                      }
                                    />
                                    <span>
                                      {moment(checkOutDate).format("dddd")}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                              <div className="flight_Search_boxed dropdown_passenger_area">
                                <p>Customer </p>
                                <div className="dropdown">
                                  <button
                                    className="dropdown-toggle"
                                    type="button"
                                    onClick={() => setDropDown(!dropDown)}
                                  >
                                    {sumGuests} Guests
                                  </button>
                                  {dropDown && (
                                    <Dropdown
                                      setSumGuests={setSumGuests}
                                      setDropDown={setDropDown}
                                      setFinalTotal={setFinalTotal}
                                    />
                                  )}
                                </div>
                                <div className="d-flex">
                                  <span>
                                    {finalTotal.adult
                                      ? `Adult ${finalTotal.adult}`
                                      : null}
                                  </span>
                                  <span className="mx-3">
                                    {finalTotal.children
                                      ? `Children ${finalTotal.children}`
                                      : null}
                                  </span>
                                  <span>
                                    {finalTotal.infant
                                      ? `Infant ${finalTotal.infant}`
                                      : null}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="top_form_search_button">
                              <button
                                className="btn btn_theme btn_md"
                                type="button"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="explore_area" className="section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section_heading_center">
                  {hotelLoading ? (
                    <div className="w-25 mx-auto">
                      <Skeleton active paragraph={false} />
                    </div>
                  ) : (
                    <h2>{hotels.data.length} hotel found</h2>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              {/* filters */}
              <div className="col-lg-3">
                <div className="left_side_search_area">
                  <div className="left_side_search_boxed">
                    <div className="left_side_search_heading">
                      <h5>Filter by price</h5>
                    </div>
                    <div className="filter-price">
                      <Slider range defaultValue={[20, 50]} disabled={false} />
                    </div>
                    <button className="apply" type="button">
                      Apply
                    </button>
                  </div>
                  <div className="left_side_search_boxed">
                    <div className="left_side_search_heading">
                      <h5>Filter by Review</h5>
                    </div>
                    <div className="filter_review">
                      <form className="review_star">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault1"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_asse"></i>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault2"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault5"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="left_side_search_boxed">
                    <div className="left_side_search_heading">
                      <h5>Filter by hotel star</h5>
                    </div>
                    <div className="filter_review">
                      <form className="review_star">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaulta"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaulf21"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_asse"></i>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultf3"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultf4"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultf5"
                          />
                          <label className="form-check-label">
                            <i className="fas fa-star color_theme"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                            <i className="fas fa-star color_asse"></i>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="left_side_search_boxed">
                    <div className="left_side_search_heading">
                      <h5>Facilities</h5>
                    </div>
                    <div className="tour_search_type">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultf1"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Wake-up call</span>
                            <span>20</span>
                          </span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultf2"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Flat TV</span>
                            <span>14</span>
                          </span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultaf3"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Vehicle service</span>
                            <span>30</span>
                          </span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultaf4"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Guide service</span>
                            <span>22</span>
                          </span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultaf5"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Internet, Wi-fi</span>
                            <span>41</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="left_side_search_boxed">
                    <div className="left_side_search_heading">
                      <h5>Hotel service</h5>
                    </div>
                    <div className="tour_search_type">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultt1"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Gymnasium</span>
                            <span>20</span>
                          </span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultt2"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Mountain Bike</span>
                            <span>14</span>
                          </span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultt3"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Wifi</span>
                            <span>62</span>
                          </span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultt4"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Aerobics Room</span>
                            <span>08</span>
                          </span>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefaultt5"
                        />
                        <label className="form-check-label">
                          <span className="area_flex_one">
                            <span>Golf Cages</span>
                            <span>12</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hotels */}
              <div className="col-lg-9">
                <div className="row">
                  {hotelLoading ? (
                    <Skeleton active />
                  ) : (
                    hotels?.data?.map((hotel: any) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        key={hotel.id}
                      >
                        <div
                          className="theme_common_box_two cursor-pointer"
                          onClick={() => Router.push(`/hotel/${hotel.uuid}`)}
                        >
                          <div className="theme_two_box_img">
                            <img
                              style={{ height: "200px", objectFit: "cover" }}
                              src={
                                hotel.cover_full_path ?? "/imageplaceholder.jpg"
                              }
                              // src={'/imageplaceholder.jpg'}
                              alt="img"
                            />
                            <p>
                              <i className="fas fa-map-marker-alt"></i>
                              {renderLocation(hotel.location)}
                            </p>
                          </div>
                          <div className="theme_two_box_content">
                            <h4>{hotel.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))
                  )}

                  {/* <div className="col-lg-12">
                    <div className="pagination_area">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </ClientLayout>
  );
};

export default HotelListing;
