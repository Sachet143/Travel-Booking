// @ts-nocheck
import Dropdown from "@/components/common/Dropdown";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { renderLocation } from "@/services/helper";
import { Skeleton } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
  { ssr: false }
);

function HotelPage() {
  const router = useRouter();
  const { uuid } = router.query;

  const { data: hotel, error } = useSWR(uuid ? `/hotels/${uuid}` : null);
  const hotelLoading = !hotel && !error;

  useEffect(() => {
    if ($(".slider-for") && $(".slider-nav")) {
      $(".slider-for").not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav",
      });
      $(".slider-nav").not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: ".slider-for",
        dots: false,
        focusOnSelect: true,
      });

      $(".promotional_tour_slider").owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: false,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 4,
          },
        },
      });
    }
  }, [hotel]);

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
        <section
          id="common_banner"
          //   style={{
          //     backgroundImage: `url(${
          //       hotel?.cover_full_path ?? "/img/banner/common-banner.png"
          //     })`,
          //   }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="common_bannner_text">
                  <h2>Hotel details</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-circle"></i>
                      </span>
                      <a href="hotel-search.html">Hotel</a>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-circle"></i>
                      </span>{" "}
                      {hotel?.name}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {hotelLoading ? (
          <section id="tour_details_main" className="section_padding">
            <div className="container">
              <Skeleton active />
            </div>
          </section>
        ) : (
          <>
            <section id="tour_details_main" className="section_padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour_details_leftside_wrapper">
                      <div className="tour_details_heading_wrapper">
                        <div className="tour_details_top_heading">
                          <h2 className="text-capitalize">{hotel.name}</h2>
                          <h5>
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            {renderLocation(hotel.location)}
                          </h5>
                        </div>
                      </div>
                      {/* hotel features */}
                      <div className="tour_details_top_bottom">
                        {hotel.features.map((f) => (
                          <div
                            className="toru_details_top_bottom_item"
                            key={f.id}
                          >
                            <div className="tour_details_top_bottom_icon">
                              <i className={f.feature.icon_link} />
                              {/* <img src="/client/assets/img/icon/ac.png" alt="icon" /> */}
                            </div>
                            <div className="tour_details_top_bottom_text">
                              <p>{f.feature.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* images */}
                      <div className="tour_details_img_wrapper">
                        <div className="slider slider-for">
                          <div>
                            <img
                              src="/client/assets/img/hotel/hotel-big-1.png"
                              alt="img"
                            />
                          </div>
                          <div>
                            <img
                              src="/client/assets/img/hotel/hotel-big-1.png"
                              alt="img"
                            />
                          </div>
                          <div>
                            <img
                              src="/client/assets/img/hotel/hotel-big-1.png"
                              alt="img"
                            />
                          </div>
                          <div>
                            <img
                              src="/client/assets/img/hotel/hotel-big-1.png"
                              alt="img"
                            />
                          </div>
                          <div>
                            <img
                              src="/client/assets/img/hotel/hotel-big-1.png"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="slider slider-nav">
                          <div>
                            <img
                              src="/client/assets/img/hotel/small-1.png"
                              alt="img"
                            />
                          </div>
                          <div>
                            <img
                              src="/client/assets/img/hotel/small-2.png"
                              alt="img"
                            />
                          </div>
                          <div>
                            <img
                              src="/client/assets/img/hotel/small-3.png"
                              alt="img"
                            />
                          </div>
                          <div>
                            <img
                              src="/client/assets/img/hotel/small-4.png"
                              alt="img"
                            />
                          </div>
                          <div>
                            <img
                              src="/client/assets/img/hotel/small-5.png"
                              alt="img"
                            />
                          </div>
                          <div>
                            <img
                              src="/client/assets/img/hotel/small-6.png"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="tour_details_boxed">
                        <h3 className="heading_theme">Overview</h3>
                        <div className="tour_details_boxed_inner">
                          <p>{hotel.description}</p>
                        </div>
                      </div>
                      <div className="tour_details_boxed">
                        <h3 className="heading_theme">Select your room</h3>
                        <div className="room_select_area">
                          <ul
                            className="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                              >
                                Book
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Enquiry
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="myTabContent">
                            <div
                              className="tab-pane fade show active"
                              id="home"
                              role="tabpanel"
                              aria-labelledby="home-tab"
                            >
                              <div className="room_booking_area">
                                <div className="tour_search_form">
                                  <form action="https://andit.co/projects/html/and-tour/!#">
                                    <div className="row">
                                      <div className="col-lg-8 col-md-6 col-sm-12 col-12">
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
                                                {moment(checkInDate).format(
                                                  "dddd"
                                                )}
                                              </span>
                                            </div>
                                            <div className="Journey_date">
                                              <p>Check Out date</p>
                                              <input
                                                type="date"
                                                value={checkOutDate}
                                                onChange={(e) =>
                                                  setCheckOutDate(
                                                    e.target.value
                                                  )
                                                }
                                              />
                                              <span>
                                                {moment(checkOutDate).format(
                                                  "dddd"
                                                )}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                          <p>Guests</p>
                                          <div className="dropdown">
                                            <button
                                              className="dropdown-toggle"
                                              type="button"
                                              onClick={() =>
                                                setDropDown(!dropDown)
                                              }
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
                                      <div className="top_form_search_button text-right">
                                        <button
                                          className="btn btn_theme btn_md"
                                          type="button"
                                        >
                                          Check availability
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>

                                <div className="room_book_item">
                                  <div className="room_book_img">
                                    <img
                                      src="/client/assets/img/hotel/room-1.png"
                                      alt="img"
                                    />
                                  </div>
                                  <div className="room_booking_right_side">
                                    <div className="room_booking_heading">
                                      <h3>
                                        <a href="room-booking.html">
                                          Culpa cupidatat laborum eiusmod amet
                                        </a>
                                      </h3>
                                      <div className="room_fasa_area">
                                        <ul>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/ac.png"
                                              alt="icon"
                                            />
                                            Air condition
                                          </li>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/gym.png"
                                              alt="icon"
                                            />
                                            Fitness center
                                          </li>
                                        </ul>
                                        <ul>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/tv.png"
                                              alt="icon"
                                            />
                                            Flat television
                                          </li>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/wifi.png"
                                              alt="icon"
                                            />
                                            Free Wi-fi
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="room_person_select">
                                      <h3>
                                        $1200.00/ <sub>Per night</sub>
                                      </h3>
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="room_book_item">
                                  <div className="room_book_img">
                                    <img
                                      src="/client/assets/img/hotel/room-2.png"
                                      alt="img"
                                    />
                                  </div>
                                  <div className="room_booking_right_side">
                                    <div className="room_booking_heading">
                                      <h3>
                                        <a href="room-booking.html">
                                          Aliquip sit nisi est laboris eiusmod
                                        </a>
                                      </h3>
                                      <div className="room_fasa_area">
                                        <ul>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/ac.png"
                                              alt="icon"
                                            />
                                            Air condition
                                          </li>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/gym.png"
                                              alt="icon"
                                            />
                                            Fitness center
                                          </li>
                                        </ul>
                                        <ul>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/tv.png"
                                              alt="icon"
                                            />
                                            Flat television
                                          </li>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/wifi.png"
                                              alt="icon"
                                            />
                                            Free Wi-fi
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="room_person_select">
                                      <h3>
                                        $1200.00/ <sub>Per night</sub>
                                      </h3>
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="room_book_item">
                                  <div className="room_book_img">
                                    <img
                                      src="/client/assets/img/hotel/room-3.png"
                                      alt="img"
                                    />
                                  </div>
                                  <div className="room_booking_right_side">
                                    <div className="room_booking_heading">
                                      <h3>
                                        <a href="room-booking.html">
                                          Ea sint elit duis nostrud consequat
                                        </a>
                                      </h3>
                                      <div className="room_fasa_area">
                                        <ul>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/ac.png"
                                              alt="icon"
                                            />
                                            Air condition
                                          </li>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/gym.png"
                                              alt="icon"
                                            />
                                            Fitness center
                                          </li>
                                        </ul>
                                        <ul>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/tv.png"
                                              alt="icon"
                                            />
                                            Flat television
                                          </li>
                                          <li>
                                            <img
                                              src="/client/assets/img/icon/wifi.png"
                                              alt="icon"
                                            />
                                            Free Wi-fi
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="room_person_select">
                                      <h3>
                                        $1200.00/ <sub>Per night</sub>
                                      </h3>
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="profile"
                              role="tabpanel"
                              aria-labelledby="profile-tab"
                            >
                              <div className="write_review_inner_boxed">
                                <form
                                  action="https://andit.co/projects/html/and-tour/!#"
                                  id="news_comment_form"
                                >
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="form-froup">
                                        <input
                                          type="text"
                                          className="form-control bg_input"
                                          placeholder="Enter full name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="form-froup">
                                        <input
                                          type="text"
                                          className="form-control bg_input"
                                          placeholder="Enter email address"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-froup">
                                        <textarea
                                          placeholder="Write your comments"
                                          className="form-control bg_input"
                                        ></textarea>
                                      </div>
                                      <div className="comment_form_submit">
                                        <button className="btn btn_theme btn_md">
                                          Enquiry
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {hotel.why_choose_us && (
                        <div className="tour_details_boxed">
                          <h3 className="heading_theme">Why Choose Us</h3>
                          <div className="tour_details_boxed_inner">
                            <Editor
                              //@ts-ignore
                              toolbarHidden
                              contentState={JSON.parse(hotel.why_choose_us)}
                              readOnly
                            />
                          </div>
                        </div>
                      )}

                      {hotel?.location?.lat && hotel.location.long ? (
                        <div className="tour_details_boxed">
                          <h3 className="heading_theme">Hotel location</h3>
                          <div className="google-map-code">
                            <iframe
                              src={`https://maps.google.com/maps?q=${hotel.location.lat},${hotel.location.long}&hl=es;z=14&output=embed`}
                              width="100%"
                              height="450"
                              frameBorder="0"
                              style={{ border: 0 }}
                              allowFullScreen={true}
                              aria-hidden="false"
                              tabIndex={0}
                            ></iframe>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="tour_details_right_sidebar_wrapper">
                      <div className="tour_detail_right_sidebar">
                        <div className="tour_details_right_boxed">
                          <div className="tour_details_right_box_heading">
                            <h3>Price</h3>
                          </div>
                          <div className="tour_package_bar_price">
                            <h6>
                              <del>$ 35,500</del>
                            </h6>
                            <h3>
                              $ 30,500 <sub>/Per serson</sub>{" "}
                            </h3>
                          </div>

                          <div className="tour_package_details_bar_list">
                            <h5>Hotel facilities</h5>
                            <ul>
                              <li>
                                <i className="fas fa-circle"></i>Buffet
                                breakfast as per the Itinerary
                              </li>
                              <li>
                                <i className="fas fa-circle"></i>Visit eight
                                villages showcasing Polynesian culture
                              </li>
                              <li>
                                <i className="fas fa-circle"></i>Complimentary
                                Camel safari, Bonfire,
                              </li>
                              <li>
                                <i className="fas fa-circle"></i>All toll tax,
                                parking, fuel, and driver allowances
                              </li>
                              <li>
                                <i className="fas fa-circle"></i>Comfortable and
                                hygienic vehicle
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tour_detail_right_sidebar">
                        <div className="tour_details_right_boxed">
                          <div className="tour_details_right_box_heading">
                            <h3>Why choose us</h3>
                          </div>

                          <div className="tour_package_details_bar_list first_child_padding_none">
                            <ul>
                              <li>
                                <i className="fas fa-circle"></i>Buffet
                                breakfast as per the Itinerary
                              </li>
                              <li>
                                <i className="fas fa-circle"></i>Visit eight
                                villages showcasing Polynesian culture
                              </li>
                              <li>
                                <i className="fas fa-circle"></i>Complimentary
                                Camel safari, Bonfire,
                              </li>
                              <li>
                                <i className="fas fa-circle"></i>All toll tax,
                                parking, fuel, and driver allowances
                              </li>
                              <li>
                                <i className="fas fa-circle"></i>Comfortable and
                                hygienic vehicle
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="write_your_review_wrapper">
                      <h3 className="heading_theme">Write your review</h3>
                      <div className="write_review_inner_boxed">
                        <form
                          action="https://andit.co/projects/html/and-tour/!#"
                          id="news_comment_form"
                        >
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-froup">
                                <input
                                  type="text"
                                  className="form-control bg_input"
                                  placeholder="Enter full name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-froup">
                                <input
                                  type="text"
                                  className="form-control bg_input"
                                  placeholder="Enter email address"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-froup">
                                <textarea
                                  placeholder="Write your comments"
                                  className="form-control bg_input"
                                ></textarea>
                              </div>
                              <div className="comment_form_submit">
                                <button className="btn btn_theme btn_md">
                                  Post comment
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="all_review_wrapper">
                      <h3 className="heading_theme">All review</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="all_review_box">
                      <div className="all_review_date_area">
                        <div className="all_review_date">
                          <h5>08 Dec, 2021</h5>
                        </div>
                        <div className="all_review_star">
                          <h5>Excellent</h5>
                          <div className="review_star_all">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="all_review_text">
                        <img
                          src="/client/assets/img/review/review1.png"
                          alt="img"
                        />
                        <h4>Manresh Chandra</h4>
                        <p>
                          Loved the overall tour for all 6 days covering jaipur
                          jodhpur and jaisalmer. worth ur money for sure.
                          thanks. Driver was very good and polite and safe
                          driving for all 6 days. on time pickup and drop
                          overall. Thanks for it.
                        </p>
                      </div>
                      <div className="all_review_small_img">
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small1.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small2.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small3.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small4.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small5.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <h5>+5</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="all_review_box">
                      <div className="all_review_date_area">
                        <div className="all_review_date">
                          <h5>08 Dec, 2021</h5>
                        </div>
                        <div className="all_review_star">
                          <h5>Excellent</h5>
                          <div className="review_star_all">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="all_review_text">
                        <img
                          src="/client/assets/img/review/review2.png"
                          alt="img"
                        />
                        <h4>Michel falak</h4>
                        <p>
                          Loved the overall tour for all 6 days covering jaipur
                          jodhpur and jaisalmer. worth ur money for sure.
                          thanks. Driver was very good and polite and safe
                          driving for all 6 days. on time pickup and drop
                          overall. Thanks for it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="all_review_box">
                      <div className="all_review_date_area">
                        <div className="all_review_date">
                          <h5>08 Dec, 2021</h5>
                        </div>
                        <div className="all_review_star">
                          <h5>Excellent</h5>
                          <div className="review_star_all">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="all_review_text">
                        <img
                          src="/client/assets/img/review/review3.png"
                          alt="img"
                        />
                        <h4>Chester dals</h4>
                        <p>
                          Loved the overall tour for all 6 days covering jaipur
                          jodhpur and jaisalmer. worth ur money for sure.
                          thanks. Driver was very good and polite and safe
                          driving for all 6 days. on time pickup and drop
                          overall. Thanks for it.
                        </p>
                      </div>
                      <div className="all_review_small_img">
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small1.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small2.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small5.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <h5>+15</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="all_review_box">
                      <div className="all_review_date_area">
                        <div className="all_review_date">
                          <h5>08 Dec, 2021</h5>
                        </div>
                        <div className="all_review_star">
                          <h5>Excellent</h5>
                          <div className="review_star_all">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="all_review_text">
                        <img
                          src="/client/assets/img/review/review4.png"
                          alt="img"
                        />
                        <h4>Casper mike</h4>
                        <p>
                          Loved the overall tour for all 6 days covering jaipur
                          jodhpur and jaisalmer. worth ur money for sure.
                          thanks. Driver was very good and polite and safe
                          driving for all 6 days. on time pickup and drop
                          overall. Thanks for it.
                        </p>
                      </div>
                      <div className="all_review_small_img">
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small4.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <img
                            src="/client/assets/img/review/review-small5.png"
                            alt="img"
                          />
                        </div>
                        <div className="all_review_small_img_item">
                          <h5>+19</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="all_review_box">
                      <div className="all_review_date_area">
                        <div className="all_review_date">
                          <h5>08 Dec, 2021</h5>
                        </div>
                        <div className="all_review_star">
                          <h5>Excellent</h5>
                          <div className="review_star_all">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="all_review_text">
                        <img
                          src="/client/assets/img/review/review5.png"
                          alt="img"
                        />
                        <h4>Jason bruno</h4>
                        <p>
                          Loved the overall tour for all 6 days covering jaipur
                          jodhpur and jaisalmer. worth ur money for sure.
                          thanks. Driver was very good and polite and safe
                          driving for all 6 days. on time pickup and drop
                          overall. Thanks for it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="related_tour_packages"
              className="section_padding_bottom"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="promotional_tour_slider owl-theme owl-carousel dot_style">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img
                              src="/client/assets/img/tab-img/hotel1.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>New beach,
                            Thailand
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="hotel-details.html">
                              Kantua hotel, Thailand
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">
                              4.8/5 Excellent
                            </span>{" "}
                            <span className="review_count">
                              (1214 reviewes)
                            </span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img
                              src="/client/assets/img/tab-img/hotel2.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Indonesia
                          </p>
                          <div className="discount_tab">
                            <span>50%</span>
                          </div>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="hotel-details.html">
                              Hotel paradise international
                            </a>
                          </h4>
                          <p>
                            <span className="review_rating">
                              4.8/5 Excellent
                            </span>{" "}
                            <span className="review_count">
                              (1214 reviewes)
                            </span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img
                              src="/client/assets/img/tab-img/hotel3.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Kualalampur
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="hotel-details.html">Hotel kualalampur</a>
                          </h4>
                          <p>
                            <span className="review_rating">
                              4.8/5 Excellent
                            </span>{" "}
                            <span className="review_count">
                              (1214 reviewes)
                            </span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img
                              src="/client/assets/img/tab-img/hotel4.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Mariana
                            island
                          </p>
                          <div className="discount_tab">
                            <span>50%</span>
                          </div>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="hotel-details.html">Hotel deluxe</a>
                          </h4>
                          <p>
                            <span className="review_rating">
                              4.8/5 Excellent
                            </span>{" "}
                            <span className="review_count">
                              (1214 reviewes)
                            </span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img
                              src="/client/assets/img/tab-img/hotel6.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Beach view
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="#!">Thailand grand suit</a>
                          </h4>
                          <p>
                            <span className="review_rating">
                              4.8/5 Excellent
                            </span>{" "}
                            <span className="review_count">
                              (1214 reviewes)
                            </span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img
                              src="/client/assets/img/tab-img/hotel7.png"
                              alt="img"
                            />
                          </a>
                          <p>
                            <i className="fas fa-map-marker-alt"></i>Long island
                          </p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4>
                            <a href="hotel-details.html">Zefi resort and spa</a>
                          </h4>
                          <p>
                            <span className="review_rating">
                              4.8/5 Excellent
                            </span>{" "}
                            <span className="review_count">
                              (1214 reviewes)
                            </span>
                          </p>
                          <h3>
                            $99.00 <span>Price starts from</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </>
    </ClientLayout>
  );
}

export default HotelPage;
