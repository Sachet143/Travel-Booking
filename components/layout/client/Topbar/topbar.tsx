import React, { useEffect, useState } from "react";
import LogoWhite from "@/public/client/assets/img/YS-White.svg";
import LogoPurple from "@/public/client/assets/img/YS-purple.svg";
import Plane from "@/public/client/assets/img/airplane.png";
import Tour from "@/public/client/assets/img/travel-and-tourism.png";
import Hotel from "@/public/client/assets/img/resort.png";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import SearchBar from "./SearchBar";

const TopBar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [path, setPath] = useState<any>();
  useEffect(() => {
    setPath(router.asPath);
  }, [router]);

  useEffect(() => {
    if (router.asPath == "/") {
      //   $(window).on("scroll", function () {
      //     if ($(this).scrollTop() > 10) {
      //       $(".navbar-area").addClass("is-sticky");
      //     } else {
      //       $(".navbar-area").removeClass("is-sticky");
      //     }
      //   });
    }
  }, []);

  return (
    <>
      <SearchBar path={path} />

      <header className="main_header_arae">
        {/* Top Bar */}
        {/* <div className="topbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-list">
                  <li>
                    <img src={LogoPurple.src} alt="logo" />
                  </li>
                  <li>
                    <a href="#!">
                      <span>+977-9868108816</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span>contact@xyz.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-others-options">
                  {session && session.user?.name && (
                    <li className="text-white">
                      <div className="info-wrapper">
                        <img
                          src={session.user?.image || ""}
                          alt="logo"
                          style={{ height: "30px !important" }}
                        />
                        <p>{session.user?.name}</p>
                      </div>
                    </li>
                  )}
                  <li>
                    {!session ? (
                      <>
                        <a onClick={() => signIn()}>Sign In</a>
                      </>
                    ) : (
                      <>
                        <a onClick={() => signOut()}>Sign Out</a>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        {/* Navbar Bar */}
        {/* navbar type1 */}
        {/* <div className="navbar-area is-sticky">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <a href="index.html">
                    <img
                      src={LogoWhite.src}
                      alt="logo"
                      style={{ height: "80px !important" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img src={LogoWhite.src} alt="logo" />
                </a>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/");
                        }}
                        href="_target"
                        className="nav-link active"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Tours
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="tour-search.html" className="nav-link">
                            Tour
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="tour-details.html" className="nav-link">
                            Tour Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="tour-booking-submission.html"
                            className="nav-link"
                          >
                            Tour Booking
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="top-destinations.html" className="nav-link">
                            Top Destination
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="top-destinations-details.html"
                            className="nav-link"
                          >
                            Destination Details
                          </a>
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
                          <a
                            href="flight-search-result.html"
                            className="nav-link"
                          >
                            Flight
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="flight-booking-submission.html"
                            className="nav-link"
                          >
                            Flight Booking
                          </a>
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
                          <a
                            href="_target"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/hotel");
                            }}
                            className="nav-link"
                          >
                            Hotel Listing
                          </a>
                        </li>

                        <li className="nav-item">
                          <a href="room-details.html" className="nav-link">
                            Room Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="room-booking.html" className="nav-link">
                            Room Booking
                          </a>
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
                          <a href="news.html" className="nav-link">
                            News
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="news-details.html" className="nav-link">
                            New Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="#" className="search-box">
                        <i className="bi bi-search" />
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn  btn_navber">
                        Become a partner
                      </a>
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
                      <a href="#" className="search-box">
                        <i className="fas fa-search" />
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="contact.html" className="btn  btn_navber">
                        Get free quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* navbar type2 */}
        {/* <div className="navbar-type2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="nav-wrapper">
                  <div className="logo-wrapper">
                    <div className="logo">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/");
                        }}
                        href="_target"
                      >
                        <img src={LogoWhite.src} alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="text-nav-wrapper">
                    <div
                      className=" navbar-collapse mean-menu"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <img src={Plane.src} alt="logo" />
                            Flights
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <img src={Tour.src} alt="logo" />
                            Tours
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/hotel");
                            }}
                            href="_target"
                          >
                            <img src={Hotel.src} alt="logo" />
                            Hotel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn">
                        Become a partner
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* {navbar type3} */}
        <div
          className={`navbar-type2 navbar-area is-sticky ${
            router.asPath != "/" ? "is-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="nav-wrapper">
                  <div className="logo-wrapper">
                    <div className="logo">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/");
                        }}
                        href="_target"
                      >
                        <img src={LogoPurple.src} alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="text-nav-wrapper">
                    <div
                      className=" navbar-collapse mean-menu"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <img src={Plane.src} alt="logo" />
                            Flights
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <img src={Tour.src} alt="logo" />
                            Tours
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/hotels");
                            }}
                            href="_target"
                          >
                            <img src={Hotel.src} alt="logo" />
                            Hotel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn ">
                        Become a partner
                      </a>
                    </div>
                    <div className="option-item">
                      <a
                        href="_target"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/login");
                        }}
                        className="btn "
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* search */}
      {/* <div className="search-overlay">
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
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="button">
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TopBar;
