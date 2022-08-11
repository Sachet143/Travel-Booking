import React, { useEffect } from 'react'
import "@/public/client/assets/js/testing"
function Index() {
  useEffect(() => {
    $('.promotional_tour_slider').owlCarousel({
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
          items: 4
        }
      }
    });
    $('.partner_slider_area').owlCarousel({
      loop: true,
      dots: false,
      autoplayHoverPause: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 4,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 8
        }
      }
    });
  }, [])

  return (
    <div>
      <header className="main_header_arae">
        {/* Top Bar */}
        <div className="topbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-list">
                  <li>
                    <a href="#!"><i className="fab fa-facebook" /></a>
                    <a href="#!"><i className="fab fa-twitter-square" /></a>
                    <a href="#!"><i className="fab fa-instagram" /></a>
                    <a href="#!"><i className="fab fa-linkedin" /></a>
                  </li>
                  <li><a href="#!"><span>+011 234 567 89</span></a></li>
                  <li><a href="#!"><span>contact@domain.com</span></a></li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-others-options">
                  <li><a href="login.html">Login</a></li>
                  <li><a href="register.html">Sign up</a></li>
                  <li>
                    <div className="dropdown language-option">
                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="lang-name" />
                      </button>
                      <div className="dropdown-menu language-dropdown-menu">
                        <a className="dropdown-item" href="#">English</a>
                        <a className="dropdown-item" href="#">Arabic</a>
                        <a className="dropdown-item" href="#">French</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown language-option">
                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="lang-name" />
                      </button>
                      <div className="dropdown-menu language-dropdown-menu">
                        <a className="dropdown-item" href="#">USD</a>
                        <a className="dropdown-item" href="#">BD</a>
                        <a className="dropdown-item" href="#">URO</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar Bar */}
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <a href="index.html">
                    <img src="client/assets/img/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img src="client/assets/img/logo.png" alt="logo" />
                </a>
                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">Home</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Tours
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="tour-search.html" className="nav-link">Tour</a>
                        </li>
                        <li className="nav-item">
                          <a href="tour-details.html" className="nav-link">Tour Details</a>
                        </li>
                        <li className="nav-item">
                          <a href="tour-booking-submission.html" className="nav-link">Tour Booking</a>
                        </li>
                        <li className="nav-item">
                          <a href="top-destinations.html" className="nav-link">Top Destination</a>
                        </li>
                        <li className="nav-item">
                          <a href="top-destinations-details.html" className="nav-link">Destination
                            Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Flights
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="flight-search-result.html" className="nav-link">Flight</a>
                        </li>
                        <li className="nav-item">
                          <a href="flight-booking-submission.html" className="nav-link">Flight Booking</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Hotel
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="hotel-search.html" className="nav-link">Hotel</a>
                        </li>
                        <li className="nav-item">
                          <a href="hotel-details.html" className="nav-link">Hotel Booking</a>
                        </li>
                        <li className="nav-item">
                          <a href="room-details.html" className="nav-link">Room Details</a>
                        </li>
                        <li className="nav-item">
                          <a href="room-booking.html" className="nav-link">Room Booking</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        News
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="news.html" className="nav-link">News</a>
                        </li>
                        <li className="nav-item">
                          <a href="news-details.html" className="nav-link">New Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Pages
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="about.html" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                          <a href="tour-guides.html" className="nav-link">Team</a>
                        </li>
                        <li className="nav-item">
                          <a href="testimonials.html" className="nav-link">Testimonials</a>
                        </li>
                        <li className="nav-item">
                          <a href="faqs.html" className="nav-link">FAQ</a>
                        </li>
                        <li className="nav-item">
                          <a href="booking-confirmation.html" className="nav-link">Booking
                            Confirmation</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">User Pages</a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="login.html" className="nav-link">Login</a>
                            </li>
                            <li className="nav-item">
                              <a href="register.html" className="nav-link">Register</a>
                            </li>
                            <li className="nav-item">
                              <a href="forgot-password.html" className="nav-link">Forget Password</a>
                            </li>
                            <li className="nav-item">
                              <a href="verify-otp.html" className="nav-link">Verify OTP</a>
                            </li>
                            <li className="nav-item">
                              <a href="reset-password.html" className="nav-link">Reset Password</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">Customer Dashboard</a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="dashboard.html" className="nav-link">Dashboard</a>
                            </li>
                            <li className="nav-item">
                              <a href="hotel-booking.html" className="nav-link">Hotel booking</a>
                            </li>
                            <li className="nav-item">
                              <a href="flight-booking.html" className="nav-link">Flight booking</a>
                            </li>
                            <li className="nav-item">
                              <a href="tour-booking.html" className="nav-link">Tour booking</a>
                            </li>
                            <li className="nav-item">
                              <a href="booking-history.html" className="nav-link">Booking history</a>
                            </li>
                            <li className="nav-item">
                              <a href="my-profile.html" className="nav-link">My profile</a>
                            </li>
                            <li className="nav-item">
                              <a href="wallet.html" className="nav-link">Wallet</a>
                            </li>
                            <li className="nav-item">
                              <a href="notification.html" className="nav-link">Notifications</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                        </li>
                        <li className="nav-item">
                          <a href="error.html" className="nav-link">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">Contact</a>
                    </li>
                  </ul>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="#" className="search-box">
                        <i className="bi bi-search" /></a>
                    </div>
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn  btn_navber">Become a partner</a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="inner">
                  <div className="circle circle-one" />
                  <div className="circle circle-two" />
                  <div className="circle circle-three" />
                </div>
              </div>
              <div className="container">
                <div className="option-inner">
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="#" className="search-box"><i className="fas fa-search" /></a>
                    </div>
                    <div className="option-item">
                      <a href="contact.html" className="btn  btn_navber">Get free quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* search */}
      <div className="search-overlay">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer" />
            <div className="search-overlay-layer" />
            <div className="search-overlay-layer" />
            <div className="search-overlay-close">
              <span className="search-overlay-close-line" />
              <span className="search-overlay-close-line" />
            </div>
            <div className="search-overlay-form">
              <form>
                <input type="text" className="input-search" placeholder="Search here..." />
                <button type="button"><i className="fas fa-search" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Area */}
      <section id="home_one_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner_one_text">
                <h1>Explore the world together</h1>
                <h3>Find awesome flights, hotel, tour, car and packages</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Form Area */}
      <section id="theme_search_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="theme_search_form_area">
                <div className="theme_search_form_tabbtn">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="flights-tab" data-bs-toggle="tab" data-bs-target="#flights" type="button" role="tab" aria-controls="flights" aria-selected="true"><i className="fas fa-plane-departure" />Flights</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tours-tab" data-bs-toggle="tab" data-bs-target="#tours" type="button" role="tab" aria-controls="tours" aria-selected="false"><i className="fas fa-globe" />Tours</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="hotels-tab" data-bs-toggle="tab" data-bs-target="#hotels" type="button" role="tab" aria-controls="hotels" aria-selected="false"><i className="fas fa-hotel" />Hotels</button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="flights" role="tabpanel" aria-labelledby="flights-tab">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="flight_categories_search">
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="oneway-tab" data-bs-toggle="tab" data-bs-target="#oneway_flight" type="button" role="tab" aria-controls="oneway_flight" aria-selected="true">One
                                Way</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="roundtrip-tab" data-bs-toggle="tab" data-bs-target="#roundtrip" type="button" role="tab" aria-controls="roundtrip" aria-selected="false">Roundtrip</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="multi_city-tab" data-bs-toggle="tab" data-bs-target="#multi_city" type="button" role="tab" aria-controls="multi_city" aria-selected="false">Multi
                                city</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content" id="myTabContent1">
                      <div className="tab-pane fade show active" id="oneway_flight" role="tabpanel" aria-labelledby="oneway-tab">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="oneway_search_form">
                              <form action="#!">
                                <div className="row">
                                  <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="flight_Search_boxed">
                                      <p>From</p>
                                      <input type="text" defaultValue="New York" />
                                      <span>JFK - John F. Kennedy International...</span>
                                      <div className="plan_icon_posation">
                                        <i className="fas fa-plane-departure" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="flight_Search_boxed">
                                      <p>To</p>
                                      <input type="text" defaultValue="London " />
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
                                          <input type="date" defaultValue="2022-05-05" />
                                          <span>Thursday</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                    <div className="flight_Search_boxed dropdown_passenger_area">
                                      <p>Passenger, Class </p>
                                      <div className="dropdown">
                                        <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                          0 Passenger
                                        </button>
                                        <div className="dropdown-menu dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                          <div className="traveller-calulate-persons">
                                            <div className="passengers">
                                              <h6>Passengers</h6>
                                              <div className="passengers-types">
                                                <div className="passengers-type">
                                                  <div className="text"><span className="count pcount">2</span>
                                                    <div className="type-label">
                                                      <p>Adult</p>
                                                      <span>12+
                                                        yrs</span>
                                                    </div>
                                                  </div>
                                                  <div className="button-set">
                                                    <button type="button" className="btn-add">
                                                      <i className="fas fa-plus" />
                                                    </button>
                                                    <button type="button" className="btn-subtract">
                                                      <i className="fas fa-minus" />
                                                    </button>
                                                  </div>
                                                </div>
                                                <div className="passengers-type">
                                                  <div className="text"><span className="count ccount">0</span>
                                                    <div className="type-label">
                                                      <p className="fz14 mb-xs-0">
                                                        Children
                                                      </p><span>2
                                                        - Less than 12
                                                        yrs</span>
                                                    </div>
                                                  </div>
                                                  <div className="button-set">
                                                    <button type="button" className="btn-add-c">
                                                      <i className="fas fa-plus" />
                                                    </button>
                                                    <button type="button" className="btn-subtract-c">
                                                      <i className="fas fa-minus" />
                                                    </button>
                                                  </div>
                                                </div>
                                                <div className="passengers-type">
                                                  <div className="text"><span className="count incount">0</span>
                                                    <div className="type-label">
                                                      <p className="fz14 mb-xs-0">
                                                        Infant
                                                      </p><span>Less
                                                        than 2
                                                        yrs</span>
                                                    </div>
                                                  </div>
                                                  <div className="button-set">
                                                    <button type="button" className="btn-add-in">
                                                      <i className="fas fa-plus" />
                                                    </button>
                                                    <button type="button" className="btn-subtract-in">
                                                      <i className="fas fa-minus" />
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="cabin-selection">
                                              <h6>Cabin Class</h6>
                                              <div className="cabin-list">
                                                <button type="button" className="label-select-btn">
                                                  <span className="muiButton-label">Economy
                                                  </span>
                                                </button>
                                                <button type="button" className="label-select-btn active">
                                                  <span className="muiButton-label">
                                                    Business
                                                  </span>
                                                </button>
                                                <button type="button" className="label-select-btn">
                                                  <span className="MuiButton-label">First
                                                    Class </span>
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
                                    <button className="btn btn_theme btn_md">Search</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="roundtrip" role="tabpanel" aria-labelledby="roundtrip-tab">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="oneway_search_form">
                              <form action="#!">
                                <div className="row">
                                  <div className="col-lg-3  col-md-6 col-sm-12 col-12">
                                    <div className="flight_Search_boxed">
                                      <p>From</p>
                                      <input type="text" defaultValue="New York" />
                                      <span>JFK - John F. Kennedy International...</span>
                                      <div className="plan_icon_posation">
                                        <i className="fas fa-plane-departure" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3  col-md-6 col-sm-12 col-12">
                                    <div className="flight_Search_boxed">
                                      <p>To</p>
                                      <input type="text" defaultValue="London " />
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
                                          <input type="date" defaultValue="2022-05-05" />
                                          <span>Thursday</span>
                                        </div>
                                        <div className="Journey_date">
                                          <p>Return date</p>
                                          <input type="date" defaultValue="2022-05-08" />
                                          <span>Saturday</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                    <div className="flight_Search_boxed dropdown_passenger_area">
                                      <p>Passenger, Class </p>
                                      <div className="dropdown">
                                        <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                          0 Passenger
                                        </button>
                                        <div className="dropdown-menu dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                          <div className="traveller-calulate-persons">
                                            <div className="passengers">
                                              <h6>Passengers</h6>
                                              <div className="passengers-types">
                                                <div className="passengers-type">
                                                  <div className="text"><span className="count pcount">2</span>
                                                    <div className="type-label">
                                                      <p>Adult</p>
                                                      <span>12+
                                                        yrs</span>
                                                    </div>
                                                  </div>
                                                  <div className="button-set">
                                                    <button type="button" className="btn-add">
                                                      <i className="fas fa-plus" />
                                                    </button>
                                                    <button type="button" className="btn-subtract">
                                                      <i className="fas fa-minus" />
                                                    </button>
                                                  </div>
                                                </div>
                                                <div className="passengers-type">
                                                  <div className="text"><span className="count ccount">0</span>
                                                    <div className="type-label">
                                                      <p className="fz14 mb-xs-0">
                                                        Children
                                                      </p><span>2
                                                        - Less than 12
                                                        yrs</span>
                                                    </div>
                                                  </div>
                                                  <div className="button-set">
                                                    <button type="button" className="btn-add-c">
                                                      <i className="fas fa-plus" />
                                                    </button>
                                                    <button type="button" className="btn-subtract-c">
                                                      <i className="fas fa-minus" />
                                                    </button>
                                                  </div>
                                                </div>
                                                <div className="passengers-type">
                                                  <div className="text"><span className="count incount">0</span>
                                                    <div className="type-label">
                                                      <p className="fz14 mb-xs-0">
                                                        Infant
                                                      </p><span>Less
                                                        than 2
                                                        yrs</span>
                                                    </div>
                                                  </div>
                                                  <div className="button-set">
                                                    <button type="button" className="btn-add-in">
                                                      <i className="fas fa-plus" />
                                                    </button>
                                                    <button type="button" className="btn-subtract-in">
                                                      <i className="fas fa-minus" />
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="cabin-selection">
                                              <h6>Cabin Class</h6>
                                              <div className="cabin-list">
                                                <button type="button" className="label-select-btn">
                                                  <span className="muiButton-label">Economy
                                                  </span>
                                                </button>
                                                <button type="button" className="label-select-btn active">
                                                  <span className="muiButton-label">
                                                    Business
                                                  </span>
                                                </button>
                                                <button type="button" className="label-select-btn">
                                                  <span className="MuiButton-label">First
                                                    Class </span>
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
                                  <button className="btn btn_theme btn_md">Search</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="multi_city" role="tabpanel" aria-labelledby="multi_city-tab">
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
                                          <input type="text" defaultValue="New York" />
                                          <span>DAC, Hazrat Shahajalal
                                            International...</span>
                                          <div className="plan_icon_posation">
                                            <i className="fas fa-plane-departure" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed">
                                          <p>To</p>
                                          <input type="text" defaultValue="London " />
                                          <span>LCY, London city airport </span>
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
                                              <input type="date" defaultValue="2022-05-05" />
                                              <span>Thursday</span>
                                            </div>
                                            <div className="Journey_date">
                                              <p>Return date</p>
                                              <input type="date" defaultValue="2022-05-10" />
                                              <span>Saturday</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                          <p>Passenger, Class </p>
                                          <div className="dropdown">
                                            <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                              0 Passenger
                                            </button>
                                            <div className="dropdown-menu dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                              <div className="traveller-calulate-persons">
                                                <div className="passengers">
                                                  <h6>Passengers</h6>
                                                  <div className="passengers-types">
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count pcount">2</span>
                                                        <div className="type-label">
                                                          <p>Adult</p>
                                                          <span>12+
                                                            yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add">
                                                          <i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count ccount">0</span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Children
                                                          </p><span>2
                                                            - Less
                                                            than 12
                                                            yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-c">
                                                          <i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract-c">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count incount">0</span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Infant
                                                          </p><span>Less
                                                            than 2
                                                            yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-in">
                                                          <i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract-in">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cabin-selection">
                                                  <h6>Cabin Class</h6>
                                                  <div className="cabin-list">
                                                    <button type="button" className="label-select-btn">
                                                      <span className="muiButton-label">Economy
                                                      </span>
                                                    </button>
                                                    <button type="button" className="label-select-btn active">
                                                      <span className="muiButton-label">
                                                        Business
                                                      </span>
                                                    </button>
                                                    <button type="button" className="label-select-btn">
                                                      <span className="MuiButton-label">First
                                                        Class </span>
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
                                          <input type="text" defaultValue="New York" />
                                          <span>DAC, Hazrat Shahajalal
                                            International...</span>
                                          <div className="plan_icon_posation">
                                            <i className="fas fa-plane-departure" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed">
                                          <p>To</p>
                                          <input type="text" defaultValue="London " />
                                          <span>LCY, London city airport </span>
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
                                              <input type="date" defaultValue="2022-05-05" />
                                              <span>Thursday</span>
                                            </div>
                                            <div className="Journey_date">
                                              <p>Return date</p>
                                              <input type="date" defaultValue="2022-05-12" />
                                              <span>Saturday</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                          <p>Passenger, Class </p>
                                          <div className="dropdown">
                                            <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                              0 Passenger
                                            </button>
                                            <div className="dropdown-menu dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                              <div className="traveller-calulate-persons">
                                                <div className="passengers">
                                                  <h6>Passengers</h6>
                                                  <div className="passengers-types">
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count pcount">2</span>
                                                        <div className="type-label">
                                                          <p>Adult</p>
                                                          <span>12+
                                                            yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add">
                                                          <i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count ccount">0</span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Children
                                                          </p><span>2
                                                            - Less
                                                            than 12
                                                            yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-c">
                                                          <i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract-c">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text">
                                                        <span className="count incount">0</span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Infant
                                                          </p><span>Less
                                                            than 2
                                                            yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-in">
                                                          <i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract-in">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cabin-selection">
                                                  <h6>Cabin Class</h6>
                                                  <div className="cabin-list">
                                                    <button type="button" className="label-select-btn">
                                                      <span className="muiButton-label">Economy
                                                      </span>
                                                    </button>
                                                    <button type="button" className="label-select-btn active">
                                                      <span className="muiButton-label">
                                                        Business
                                                      </span>
                                                    </button>
                                                    <button type="button" className="label-select-btn">
                                                      <span className="MuiButton-label">First
                                                        Class </span>
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
                                      <button type="button" id="addMulticityRow">+ Add
                                        another
                                        flight</button>
                                    </div>
                                  </div>
                                </div>
                                <div className="top_form_search_button">
                                  <button className="btn btn_theme btn_md">Search</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tours" role="tabpanel" aria-labelledby="tours-tab">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tour_search_form">
                          <form action="#!">
                            <div className="row">
                              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="flight_Search_boxed">
                                  <p>Destination</p>
                                  <input type="text" placeholder="Where are you going?" />
                                  <span>Where are you going?</span>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="form_search_date">
                                  <div className="flight_Search_boxed date_flex_area">
                                    <div className="Journey_date">
                                      <p>Journey date</p>
                                      <input type="date" defaultValue="2022-05-03" />
                                      <span>Thursday</span>
                                    </div>
                                    <div className="Journey_date">
                                      <p>Return date</p>
                                      <input type="date" defaultValue="2022-05-05" />
                                      <span>Thursday</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                <div className="flight_Search_boxed dropdown_passenger_area">
                                  <p>Passenger, Class </p>
                                  <div className="dropdown">
                                    <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      0 Passenger
                                    </button>
                                    <div className="dropdown-menu dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                      <div className="traveller-calulate-persons">
                                        <div className="passengers">
                                          <h6>Passengers</h6>
                                          <div className="passengers-types">
                                            <div className="passengers-type">
                                              <div className="text"><span className="count pcount">2</span>
                                                <div className="type-label">
                                                  <p>Adult</p>
                                                  <span>12+
                                                    yrs</span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button type="button" className="btn-add">
                                                  <i className="fas fa-plus" />
                                                </button>
                                                <button type="button" className="btn-subtract">
                                                  <i className="fas fa-minus" />
                                                </button>
                                              </div>
                                            </div>
                                            <div className="passengers-type">
                                              <div className="text"><span className="count ccount">0</span>
                                                <div className="type-label">
                                                  <p className="fz14 mb-xs-0">
                                                    Children
                                                  </p><span>2
                                                    - Less than 12
                                                    yrs</span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button type="button" className="btn-add-c">
                                                  <i className="fas fa-plus" />
                                                </button>
                                                <button type="button" className="btn-subtract-c">
                                                  <i className="fas fa-minus" />
                                                </button>
                                              </div>
                                            </div>
                                            <div className="passengers-type">
                                              <div className="text"><span className="count incount">0</span>
                                                <div className="type-label">
                                                  <p className="fz14 mb-xs-0">
                                                    Infant
                                                  </p><span>Less
                                                    than 2
                                                    yrs</span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button type="button" className="btn-add-in">
                                                  <i className="fas fa-plus" />
                                                </button>
                                                <button type="button" className="btn-subtract-in">
                                                  <i className="fas fa-minus" />
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="cabin-selection">
                                          <h6>Cabin Class</h6>
                                          <div className="cabin-list">
                                            <button type="button" className="label-select-btn">
                                              <span className="muiButton-label">Economy
                                              </span>
                                            </button>
                                            <button type="button" className="label-select-btn active">
                                              <span className="muiButton-label">
                                                Business
                                              </span>
                                            </button>
                                            <button type="button" className="label-select-btn">
                                              <span className="MuiButton-label">First
                                                Class </span>
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
                                <button className="btn btn_theme btn_md">Search</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="tour_search_form">
                          <form action="#!">
                            <div className="row">
                              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="flight_Search_boxed">
                                  <p>Destination</p>
                                  <input type="text" placeholder="Where are you going?" />
                                  <span>Where are you going?</span>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="form_search_date">
                                  <div className="flight_Search_boxed date_flex_area">
                                    <div className="Journey_date">
                                      <p>Journey date</p>
                                      <input type="date" defaultValue="2022-05-03" />
                                      <span>Thursday</span>
                                    </div>
                                    <div className="Journey_date">
                                      <p>Return date</p>
                                      <input type="date" defaultValue="2022-05-05" />
                                      <span>Thursday</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                <div className="flight_Search_boxed dropdown_passenger_area">
                                  <p>Passenger, Class </p>
                                  <div className="dropdown">
                                    <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      0 Passenger
                                    </button>
                                    <div className="dropdown-menu dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                      <div className="traveller-calulate-persons">
                                        <div className="passengers">
                                          <h6>Passengers</h6>
                                          <div className="passengers-types">
                                            <div className="passengers-type">
                                              <div className="text"><span className="count pcount">2</span>
                                                <div className="type-label">
                                                  <p>Adult</p>
                                                  <span>12+
                                                    yrs</span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button type="button" className="btn-add">
                                                  <i className="fas fa-plus" />
                                                </button>
                                                <button type="button" className="btn-subtract">
                                                  <i className="fas fa-minus" />
                                                </button>
                                              </div>
                                            </div>
                                            <div className="passengers-type">
                                              <div className="text"><span className="count ccount">0</span>
                                                <div className="type-label">
                                                  <p className="fz14 mb-xs-0">
                                                    Children
                                                  </p><span>2
                                                    - Less than 12
                                                    yrs</span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button type="button" className="btn-add-c">
                                                  <i className="fas fa-plus" />
                                                </button>
                                                <button type="button" className="btn-subtract-c">
                                                  <i className="fas fa-minus" />
                                                </button>
                                              </div>
                                            </div>
                                            <div className="passengers-type">
                                              <div className="text"><span className="count incount">0</span>
                                                <div className="type-label">
                                                  <p className="fz14 mb-xs-0">
                                                    Infant
                                                  </p><span>Less
                                                    than 2
                                                    yrs</span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button type="button" className="btn-add-in">
                                                  <i className="fas fa-plus" />
                                                </button>
                                                <button type="button" className="btn-subtract-in">
                                                  <i className="fas fa-minus" />
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="cabin-selection">
                                          <h6>Cabin Class</h6>
                                          <div className="cabin-list">
                                            <button type="button" className="label-select-btn">
                                              <span className="muiButton-label">Economy
                                              </span>
                                            </button>
                                            <button type="button" className="label-select-btn active">
                                              <span className="muiButton-label">
                                                Business
                                              </span>
                                            </button>
                                            <button type="button" className="label-select-btn">
                                              <span className="MuiButton-label">First
                                                Class </span>
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
                                <button className="btn btn_theme btn_md">Search</button>
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
          </div>
        </div>
      </section>
      {/* imagination Area */}
      <section id="go_beyond_area" className="section_padding_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="heading_left_area">
                <h2>Go beyond your <span>imagination</span></h2>
                <h5>Discover your ideal experience with us</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="imagination_boxed">
                <a href="top-destinations.html">
                  <img src="client/assets/img/imagination/imagination1.png" alt="img" />
                </a>
                <h3><a href="top-destinations.html">7% Discount for all <span>Airlines</span></a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="imagination_boxed">
                <a href="top-destinations.html">
                  <img src="client/assets/img/imagination/imagination2.png" alt="img" />
                </a>
                <h3><a href="#!">Travel around<span>the world</span></a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="imagination_boxed">
                <a href="top-destinations.html">
                  <img src="client/assets/img/imagination/imagination3.png" alt="img" />
                </a>
                <h3><a href="top-destinations.html">Luxury resorts<span>top deals</span></a></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top destinations */}
      <section id="top_destinations" className="section_padding_top">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Top destinations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="destinations_content_box img_animation">
                <img src="client/assets/img/destination/big-img.png" alt="img" />
                <div className="destinations_content_inner">
                  <h2>Up to</h2>
                  <div className="destinations_big_offer">
                    <h1>50</h1>
                    <h6><span>%</span> <span>Off</span></h6>
                  </div>
                  <h2>Holiday packages</h2>
                  <a href="top-destinations.html" className="btn btn_theme btn_md">Book now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="destinations_content_box img_animation">
                    <a href="top-destinations.html">
                      <img src="client/assets/img/destination/destination1.png" alt="img" />
                    </a>
                    <div className="destinations_content_inner">
                      <h3><a href="top-destinations.html">China</a></h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="top-destinations.html">
                      <img src="client/assets/img/destination/destination2.png" alt="img" />
                    </a>
                    <div className="destinations_content_inner">
                      <h3><a href="top-destinations.html">Darjeeling</a></h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="top-destinations.html">
                      <img src="client/assets/img/destination/destination3.png" alt="img" />
                    </a>
                    <div className="destinations_content_inner">
                      <h3><a href="top-destinations.html">Malaysia</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="destinations_content_box img_animation">
                    <a href="top-destinations.html">
                      <img src="client/assets/img/destination/destination4.png" alt="img" />
                    </a>
                    <div className="destinations_content_inner">
                      <h3><a href="top-destinations.html">Gangtok</a></h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="top-destinations.html">
                      <img src="client/assets/img/destination/destination5.png" alt="img" />
                    </a>
                    <div className="destinations_content_inner">
                      <h3><a href="top-destinations.html">Thailand</a></h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="top-destinations.html">
                      <img src="client/assets/img/destination/destination6.png" alt="img" />
                    </a>
                    <div className="destinations_content_inner">
                      <h3><a href="top-destinations.html">Australia</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="destinations_content_box img_animation">
                    <a href="top-destinations.html">
                      <img src="client/assets/img/destination/destination7.png" alt="img" />
                    </a>
                    <div className="destinations_content_inner">
                      <h3><a href="top-destinations.html">London</a></h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="top-destinations.html">
                      <img src="client/assets/img/destination/destination8.png" alt="img" />
                    </a>
                    <div className="destinations_content_inner">
                      <h3><a href="top-destinations.html">USA</a></h3>
                    </div>
                  </div>
                  <div className="destinations_content_box">
                    <a href="top-destinations.html" className="btn btn_theme btn_md w-100">View all</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore our hot deals */}
      <section id="explore_area" className="section_padding_top">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Explore our hot deals</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="theme_nav_tab">
                <nav className="theme_nav_tab_item">
                  <div className="nav nav-tabs" id="nav-tab1" role="tablist">
                    <button className="nav-link active" id="nav-hotels-tab" data-bs-toggle="tab" data-bs-target="#nav-hotels" type="button" role="tab" aria-controls="nav-hotels" aria-selected="true">Hotels</button>
                    <button className="nav-link" id="nav-tours-tab" data-bs-toggle="tab" data-bs-target="#nav-tours" type="button" role="tab" aria-controls="nav-tours" aria-selected="false">Tours</button>
                    <button className="nav-link" id="nav-space-tab" data-bs-toggle="tab" data-bs-target="#nav-space" type="button" role="tab" aria-controls="nav-space" aria-selected="false">Space</button>
                    <button className="nav-link" id="nav-events-tab" data-bs-toggle="tab" data-bs-target="#nav-events" type="button" role="tab" aria-controls="nav-events" aria-selected="false">Events</button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-hotels" role="tabpanel" aria-labelledby="nav-hotels-tab">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel1.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />New beach, Thailand</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Kantua hotel, Thailand</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel2.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Indonesia</p>
                          <div className="discount_tab">
                            <span>50%</span>
                          </div>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Hotel paradise international</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel3.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Kualalampur</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Hotel kualalampur</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel4.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Mariana island</p>
                          <div className="discount_tab">
                            <span>50%</span>
                          </div>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Hotel deluxe</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel5.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Kathmundu, Nepal</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Hotel rajavumi</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel6.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Beach view</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Thailand grand suit</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel7.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Long island</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Zefi resort and spa</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel8.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Philippine</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Manila international resort</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-tours" role="tabpanel" aria-labelledby="nav-tours-tab">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel1.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />New beach, Thailand</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Kantua hotel, Thailand</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel3.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Kualalampur</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Hotel kualalampur</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel8.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Philippine</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Manila international resort</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-space" role="tabpanel" aria-labelledby="nav-space-tab">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel1.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />New beach, Thailand</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Kantua hotel, Thailand</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel4.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Kualalampur</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Hotel kualalampur</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-events" role="tabpanel" aria-labelledby="nav-events-tab">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel1.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />New beach, Thailand</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Kantua hotel, Thailand</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                      <div className="theme_common_box_two img_hover">
                        <div className="theme_two_box_img">
                          <a href="hotel-details.html">
                            <img src="client/assets/img/tab-img/hotel8.png" alt="img" />
                          </a>
                          <p><i className="fas fa-map-marker-alt" />Philippine</p>
                        </div>
                        <div className="theme_two_box_content">
                          <h4><a href="hotel-details.html">Manila international resort</a></h4>
                          <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                            reviewes)</span></p>
                          <h3>$99.00 <span>Price starts from</span></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Area */}
      <section id="offer_area" className="section_padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="offer_area_box d-none-phone img_animation">
                <img src="client/assets/img/offer/offer1.png" alt="img" />
                <div className="offer_area_content">
                  <h2>Special Offers</h2>
                  <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum
                    dolor sit amet.</p>
                  <a href="#!" className="btn btn_theme btn_md">Holiday deals</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="offer_area_box img_animation">
                <img src="client/assets/img/offer/offer2.png" alt="img" />
                <div className="offer_area_content">
                  <h2>News letter</h2>
                  <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.</p>
                  <a href="#!" className="btn btn_theme btn_md">Subscribe now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="offer_area_box img_animation">
                <img src="client/assets/img/offer/offer3.png" alt="img" />
                <div className="offer_area_content">
                  <h2>Travel tips</h2>
                  <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.</p>
                  <a href="#!" className="btn btn_theme btn_md">Get tips</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Promotional Tours Area */}
      <section id="promotional_tours" className="section_padding_top">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Our best promotional tours</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="promotional_tour_slider owl-theme owl-carousel dot_style">
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html"><img src="client/assets/img/tab-img/hotel1.png" alt="img" /></a>
                    <p><i className="fas fa-map-marker-alt" />New beach, Thailand</p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4><a href="hotel-details.html">Kantua hotel, Thailand</a></h4>
                    <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                      reviewes)</span></p>
                    <h3>$99.00 <span>Price starts from</span></h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html"><img src="client/assets/img/tab-img/hotel2.png" alt="img" /></a>
                    <p><i className="fas fa-map-marker-alt" />Indonesia</p>
                    <div className="discount_tab">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="theme_two_box_content">
                    <h4><a href="hotel-details.html">Hotel paradise international</a></h4>
                    <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                      reviewes)</span></p>
                    <h3>$99.00 <span>Price starts from</span></h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html"><img src="client/assets/img/tab-img/hotel3.png" alt="img" /></a>
                    <p><i className="fas fa-map-marker-alt" />Kualalampur</p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4><a href="hotel-details.html">Hotel kualalampur</a></h4>
                    <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                      reviewes)</span></p>
                    <h3>$99.00 <span>Price starts from</span></h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html"><img src="client/assets/img/tab-img/hotel4.png" alt="img" /></a>
                    <p><i className="fas fa-map-marker-alt" />Mariana island</p>
                    <div className="discount_tab">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="theme_two_box_content">
                    <h4><a href="hotel-details.html">Hotel deluxe</a></h4>
                    <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                      reviewes)</span></p>
                    <h3>$99.00 <span>Price starts from</span></h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html"><img src="client/assets/img/tab-img/hotel6.png" alt="img" /></a>
                    <p><i className="fas fa-map-marker-alt" />Beach view</p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4><a href="hotel-details.html">Thailand grand suit</a></h4>
                    <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                      reviewes)</span></p>
                    <h3>$99.00 <span>Price starts from</span></h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html"><img src="client/assets/img/tab-img/hotel7.png" alt="img" /></a>
                    <p><i className="fas fa-map-marker-alt" />Long island</p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4><a href="hotel-details.html">Zefi resort and spa</a></h4>
                    <p><span className="review_rating">4.8/5 Excellent</span> <span className="review_count">(1214
                      reviewes)</span></p>
                    <h3>$99.00 <span>Price starts from</span></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Destinations Area */}
      <section id="destinations_area" className="section_padding_top">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Destinations for you</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="theme_nav_tab">
                <nav className="theme_nav_tab_item">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-nepal-tab" data-bs-toggle="tab" data-bs-target="#nav-nepal" type="button" role="tab" aria-controls="nav-nepal" aria-selected="true">Nepal</button>
                    <button className="nav-link" id="nav-malaysia-tab" data-bs-toggle="tab" data-bs-target="#nav-malaysia" type="button" role="tab" aria-controls="nav-malaysia" aria-selected="false">Malaysia</button>
                    <button className="nav-link" id="nav-indonesia-tab" data-bs-toggle="tab" data-bs-target="#nav-indonesia" type="button" role="tab" aria-controls="nav-indonesia" aria-selected="false">Indonesia</button>
                    <button className="nav-link" id="nav-turkey-tab" data-bs-toggle="tab" data-bs-target="#nav-turkey" type="button" role="tab" aria-controls="nav-turkey" aria-selected="false">Turkey</button>
                    <button className="nav-link" id="nav-china-tab" data-bs-toggle="tab" data-bs-target="#nav-china" type="button" role="tab" aria-controls="nav-china" aria-selected="false">China</button>
                    <button className="nav-link" id="nav-darjeeling-tab" data-bs-toggle="tab" data-bs-target="#nav-darjeeling" type="button" role="tab" aria-controls="nav-darjeeling" aria-selected="false">Darjeeling</button>
                    <button className="nav-link" id="nav-italy-tab" data-bs-toggle="tab" data-bs-target="#nav-italy" type="button" role="tab" aria-controls="nav-italy" aria-selected="false">Italy</button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="nav-tabContent1">
                <div className="tab-pane fade show active" id="nav-nepal" role="tabpanel" aria-labelledby="nav-nepal-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small1.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Everest trek to Base Camp</a></h3>
                          <p>Price starts at <span>$105.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small2.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Kathmundu tour</a></h3>
                          <p>Price starts at <span>$85.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small3.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Beautiful pokhara</a></h3>
                          <p>Price starts at <span>$100.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small4.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Annapurna region</a></h3>
                          <p>Price starts at <span>$75.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small5.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Chitwan national park</a></h3>
                          <p>Price starts at <span>$105.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small6.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Langtang region</a></h3>
                          <p>Price starts at <span>$105.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-malaysia" role="tabpanel" aria-labelledby="nav-malaysia-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small2.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Kathmundu tour</a></h3>
                          <p>Price starts at <span>$85.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small3.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Beautiful pokhara</a></h3>
                          <p>Price starts at <span>$100.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html">
                            <img src="client/assets/img/destination/destination-small4.png" alt="img" />
                          </a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Annapurna region</a></h3>
                          <p>Price starts at <span>$75.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small6.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Langtang region</a></h3>
                          <p>Price starts at <span>$105.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-indonesia" role="tabpanel" aria-labelledby="nav-indonesia-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small3.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Beautiful pokhara</a></h3>
                          <p>Price starts at <span>$100.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small4.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Annapurna region</a></h3>
                          <p>Price starts at <span>$75.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small6.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Langtang region</a></h3>
                          <p>Price starts at <span>$105.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-turkey" role="tabpanel" aria-labelledby="nav-turkey-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small2.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Kathmundu tour</a></h3>
                          <p>Price starts at <span>$85.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small3.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Beautiful pokhara</a></h3>
                          <p>Price starts at <span>$100.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small4.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Annapurna region</a></h3>
                          <p>Price starts at <span>$75.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-china" role="tabpanel" aria-labelledby="nav-china-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small4.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Annapurna region</a></h3>
                          <p>Price starts at <span>$75.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small6.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Langtang region</a></h3>
                          <p>Price starts at <span>$105.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-darjeeling" role="tabpanel" aria-labelledby="nav-darjeeling-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small4.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Annapurna region</a></h3>
                          <p>Price starts at <span>$75.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-italy" role="tabpanel" aria-labelledby="nav-italy-tab">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small4.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Annapurna region</a></h3>
                          <p>Price starts at <span>$75.00</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="tab_destinations_boxed">
                        <div className="tab_destinations_img">
                          <a href="top-destinations.html"><img src="client/assets/img/destination/destination-small6.png" alt="img" /></a>
                        </div>
                        <div className="tab_destinations_conntent">
                          <h3><a href="top-destinations.html">Langtang region</a></h3>
                          <p>Price starts at <span>$105.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Area */}
      <section id="home_news" className="section_padding_top">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Latest travel news</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="home_news_left_wrapper">
                <div className="home_news_item">
                  <div className="home_news_img">
                    <a href="news-details.html"><img src="client/assets/img/news/small1.png" alt="img" /></a>
                  </div>
                  <div className="home_news_content">
                    <h3><a href="news-details.html">Revolutionising the travel industry,
                      one partnership at a time</a></h3>
                    <p><a href="news.html">26 Oct 2021</a> <span> <i className="fas fa-circle" />5min
                      read</span> </p>
                  </div>
                </div>
                <div className="home_news_item">
                  <div className="home_news_img">
                    <a href="news-details.html"><img src="client/assets/img/news/small2.png" alt="img" /></a>
                  </div>
                  <div className="home_news_content">
                    <h3><a href="news-details.html">t is a long established fact that a reader will be
                      distracted.</a></h3>
                    <p><a href="news.html">26 Oct 2021</a> <span> <i className="fas fa-circle" />5min
                      read</span> </p>
                  </div>
                </div>
                <div className="home_news_item">
                  <div className="home_news_img">
                    <a href="news-details.html"><img src="client/assets/img/news/small3.png" alt="img" /></a>
                  </div>
                  <div className="home_news_content">
                    <h3><a href="#!">There are many variations of passages of sum available</a></h3>
                    <p><a href="news.html">26 Oct 2021</a> <span> <i className="fas fa-circle" />5min
                      read</span> </p>
                  </div>
                </div>
                <div className="home_news_item">
                  <div className="home_news_img">
                    <a href="news-details.html"><img src="client/assets/img/news/small4.png" alt="img" /></a>
                  </div>
                  <div className="home_news_content">
                    <h3><a href="news-details.html">Contrary to popular belief, Lorem Ipsum is not
                      simply.</a></h3>
                    <p><a href="news.html">26 Oct 2021</a> <span> <i className="fas fa-circle" />5min
                      read</span> </p>
                  </div>
                </div>
                <div className="home_news_item">
                  <div className="seeall_link">
                    <a href="news.html">See all article <i className="fas fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home_news_big">
                <div className="news_home_bigest img_hover">
                  <a href="news-details.html"><img src="client/assets/img/news/new-big.png" alt="img" /></a>
                </div>
                <h3><a href="news-details.html">There are many variations of passages available but</a> </h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of.
                  The point of using Lorem Ipsum is that it has a more</p>
                <p>It is a long established fact that a reader will be distracted by the readable long
                  established fact that a reader will be distracted content of a
                  page when looking at its layout.</p>
                <a href="news-details.html">Read full article <i className="fas fa-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our partners Area */}
      <section id="our_partners" className="section_padding">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Our partners</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="partner_slider_area owl-theme owl-carousel">
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/1.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/2.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/3.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/4.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/5.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/6.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/7.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/8.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/5.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/3.png" alt="logo" /></a>
                </div>
                <div className="partner_logo">
                  <a href="#!"><img src="client/assets/img/partner/2.png" alt="logo" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta Area */}
      <section id="cta_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta_left">
                <div className="cta_icon">
                  <img src="client/assets/img/common/email.png" alt="icon" />
                </div>
                <div className="cta_content">
                  <h4>Get the latest news and offers</h4>
                  <h2>Subscribe to our newsletter</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cat_form">
                <form id="cta_form_wrappper">
                  <div className="input-group"><input type="text" className="form-control" placeholder="Enter your mail address" /><button className="btn btn_theme btn_md" type="button">Subscribe</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer  */}
      <footer id="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="footer_heading_area">
                <h5>Need any help?</h5>
              </div>
              <div className="footer_first_area">
                <div className="footer_inquery_area">
                  <h5>Call 24/7 for any help</h5>
                  <h3> <a href="tel:+00-123-456-789">+00 123 456 789</a></h3>
                </div>
                <div className="footer_inquery_area">
                  <h5>Mail to our support team</h5>
                  <h3> <a href="mailto:support@domain.com">support@domain.com</a></h3>
                </div>
                <div className="footer_inquery_area">
                  <h5>Follow us on</h5>
                  <ul className="soical_icon_footer">
                    <li><a href="#!"><i className="fab fa-facebook" /></a></li>
                    <li><a href="#!"><i className="fab fa-twitter-square" /></a></li>
                    <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                    <li><a href="#!"><i className="fab fa-linkedin" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12">
              <div className="footer_heading_area">
                <h5>Company</h5>
              </div>
              <div className="footer_link_area">
                <ul>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="testimonials.html">Testimonials</a></li>
                  <li><a href="faqs.html">Rewards</a></li>
                  <li><a href="terms-service.html">Work with Us</a></li>
                  <li><a href="tour-guides.html">Meet the Team </a></li>
                  <li><a href="news.html">Blog</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="footer_heading_area">
                <h5>Support</h5>
              </div>
              <div className="footer_link_area">
                <ul>
                  <li><a href="dashboard.html">Account</a></li>
                  <li><a href="faq.html">Faq</a></li>
                  <li><a href="testimonials.html">Legal</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="top-destinations.html"> Affiliate Program</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="footer_heading_area">
                <h5>Other Services</h5>
              </div>
              <div className="footer_link_area">
                <ul>
                  <li><a href="top-destinations-details.html">Community program</a></li>
                  <li><a href="top-destinations-details.html">Investor Relations</a></li>
                  <li><a href="flight-search-result.html">Rewards Program</a></li>
                  <li><a href="room-booking.html">PointsPLUS</a></li>
                  <li><a href="testimonials.html">Partners</a></li>
                  <li><a href="hotel-search.html">List My Hotel</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="footer_heading_area">
                <h5>Top cities</h5>
              </div>
              <div className="footer_link_area">
                <ul>
                  <li><a href="room-details.html">Chicago</a></li>
                  <li><a href="hotel-details.html">New York</a></li>
                  <li><a href="hotel-booking.html">San Francisco</a></li>
                  <li><a href="tour-search.html">California</a></li>
                  <li><a href="tour-booking.html">Ohio </a></li>
                  <li><a href="tour-guides.html">Alaska</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="co-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright_left">
                <p>Copyright © 2022 All Rights Reserved</p>
              </div>
            </div>
            <div className="co-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright_right">
                <img src="client/assets/img/common/cards.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Index