import BusFilter from "@/components/client/home/BusFilter";
import FlightFilter from "@/components/client/home/FlightFilter";
import HotelFilter from "@/components/client/home/HotelFilter";
import MediumLandingForm from "@/components/client/home/LandingForm/Medium";
import MobileLandingForm from "@/components/client/home/LandingForm/Mobile";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // @ts-ignore
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
    // @ts-ignore
    $(".partner_slider_area").owlCarousel({
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
          items: 8,
        },
      },
    });
  }, []);

  return (
    <ClientLayout>
      <div>
        {/* Banner Area */}
        <section className="relative h-[85vh] md:h-[80vh]">
          <section id="home_one_banner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="banner_one_text"></div>
                </div>
              </div>
            </div>
          </section>
          <div className="blurry"></div>
          {/* Form Area */}
          <MobileLandingForm />
          <MediumLandingForm />
        </section>

        {/* imagination Area */}
        <section id="go_beyond_area" className="section_padding_top">
          <div className="container">
            <div className="row gap-4 align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="heading_left_area">
                  <h2>
                    Go beyond your <span>imagination</span>
                  </h2>
                  <h5>Discover your ideal experience with us</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="imagination_boxed">
                  <a href="top-destinations.html">
                    <img
                      src="client/assets/img/imagination/imagination1.png"
                      alt="img"
                    />
                  </a>
                  <h3>
                    <a href="top-destinations.html">
                      7% Discount for all <span>Airlines</span>
                    </a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="imagination_boxed">
                  <a href="top-destinations.html">
                    <img
                      src="client/assets/img/imagination/imagination2.png"
                      alt="img"
                    />
                  </a>
                  <h3>
                    <a href="#!">
                      Travel around<span>the world</span>
                    </a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="imagination_boxed">
                  <a href="top-destinations.html">
                    <img
                      src="client/assets/img/imagination/imagination3.png"
                      alt="img"
                    />
                  </a>
                  <h3>
                    <a href="top-destinations.html">
                      Luxury resorts<span>top deals</span>
                    </a>
                  </h3>
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
                  <img
                    src="client/assets/img/destination/big-img.png"
                    alt="img"
                  />
                  <div className="destinations_content_inner">
                    <h2>Up to</h2>
                    <div className="destinations_big_offer">
                      <h1>50</h1>
                      <h6>
                        <span>%</span> <span>Off</span>
                      </h6>
                    </div>
                    <h2>Holiday packages</h2>
                    <a
                      href="top-destinations.html"
                      className="btn btn_theme btn_md"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="destinations_content_box img_animation">
                      <a href="top-destinations.html">
                        <img
                          src="client/assets/img/destination/destination1.png"
                          alt="img"
                        />
                      </a>
                      <div className="destinations_content_inner">
                        <h3>
                          <a href="top-destinations.html">China</a>
                        </h3>
                      </div>
                    </div>
                    <div className="destinations_content_box img_animation">
                      <a href="top-destinations.html">
                        <img
                          src="client/assets/img/destination/destination2.png"
                          alt="img"
                        />
                      </a>
                      <div className="destinations_content_inner">
                        <h3>
                          <a href="top-destinations.html">Darjeeling</a>
                        </h3>
                      </div>
                    </div>
                    <div className="destinations_content_box img_animation">
                      <a href="top-destinations.html">
                        <img
                          src="client/assets/img/destination/destination3.png"
                          alt="img"
                        />
                      </a>
                      <div className="destinations_content_inner">
                        <h3>
                          <a href="top-destinations.html">Malaysia</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="destinations_content_box img_animation">
                      <a href="top-destinations.html">
                        <img
                          src="client/assets/img/destination/destination4.png"
                          alt="img"
                        />
                      </a>
                      <div className="destinations_content_inner">
                        <h3>
                          <a href="top-destinations.html">Gangtok</a>
                        </h3>
                      </div>
                    </div>
                    <div className="destinations_content_box img_animation">
                      <a href="top-destinations.html">
                        <img
                          src="client/assets/img/destination/destination5.png"
                          alt="img"
                        />
                      </a>
                      <div className="destinations_content_inner">
                        <h3>
                          <a href="top-destinations.html">Thailand</a>
                        </h3>
                      </div>
                    </div>
                    <div className="destinations_content_box img_animation">
                      <a href="top-destinations.html">
                        <img
                          src="client/assets/img/destination/destination6.png"
                          alt="img"
                        />
                      </a>
                      <div className="destinations_content_inner">
                        <h3>
                          <a href="top-destinations.html">Australia</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="destinations_content_box img_animation">
                      <a href="top-destinations.html">
                        <img
                          src="client/assets/img/destination/destination7.png"
                          alt="img"
                        />
                      </a>
                      <div className="destinations_content_inner">
                        <h3>
                          <a href="top-destinations.html">London</a>
                        </h3>
                      </div>
                    </div>
                    <div className="destinations_content_box img_animation">
                      <a href="top-destinations.html">
                        <img
                          src="client/assets/img/destination/destination8.png"
                          alt="img"
                        />
                      </a>
                      <div className="destinations_content_inner">
                        <h3>
                          <a href="top-destinations.html">USA</a>
                        </h3>
                      </div>
                    </div>
                    <div className="destinations_content_box">
                      <a
                        href="top-destinations.html"
                        className="btn btn_theme btn_md w-100"
                      >
                        View all
                      </a>
                    </div>
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
                      <a href="hotel-details.html">
                        <img
                          src="client/assets/img/tab-img/hotel1.png"
                          alt="img"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        New beach, Thailand
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>
                        <a href="hotel-details.html">Kantua hotel, Thailand</a>
                      </h4>
                      <p>
                        <span className="review_rating">4.8/5 Excellent</span>{" "}
                        <span className="review_count">(1214 reviewes)</span>
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
                          src="client/assets/img/tab-img/hotel2.png"
                          alt="img"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        Indonesia
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
                        <span className="review_rating">4.8/5 Excellent</span>{" "}
                        <span className="review_count">(1214 reviewes)</span>
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
                          src="client/assets/img/tab-img/hotel3.png"
                          alt="img"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        Kualalampur
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>
                        <a href="hotel-details.html">Hotel kualalampur</a>
                      </h4>
                      <p>
                        <span className="review_rating">4.8/5 Excellent</span>{" "}
                        <span className="review_count">(1214 reviewes)</span>
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
                          src="client/assets/img/tab-img/hotel4.png"
                          alt="img"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        Mariana island
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
                        <span className="review_rating">4.8/5 Excellent</span>{" "}
                        <span className="review_count">(1214 reviewes)</span>
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
                          src="client/assets/img/tab-img/hotel6.png"
                          alt="img"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        Beach view
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>
                        <a href="hotel-details.html">Thailand grand suit</a>
                      </h4>
                      <p>
                        <span className="review_rating">4.8/5 Excellent</span>{" "}
                        <span className="review_count">(1214 reviewes)</span>
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
                          src="client/assets/img/tab-img/hotel7.png"
                          alt="img"
                        />
                      </a>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        Long island
                      </p>
                    </div>
                    <div className="theme_two_box_content">
                      <h4>
                        <a href="hotel-details.html">Zefi resort and spa</a>
                      </h4>
                      <p>
                        <span className="review_rating">4.8/5 Excellent</span>{" "}
                        <span className="review_count">(1214 reviewes)</span>
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
                      <button
                        className="nav-link active"
                        id="nav-nepal-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-nepal"
                        type="button"
                        role="tab"
                        aria-controls="nav-nepal"
                        aria-selected="true"
                      >
                        Nepal
                      </button>
                      <button
                        className="nav-link"
                        id="nav-malaysia-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-malaysia"
                        type="button"
                        role="tab"
                        aria-controls="nav-malaysia"
                        aria-selected="false"
                      >
                        Malaysia
                      </button>
                      <button
                        className="nav-link"
                        id="nav-indonesia-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-indonesia"
                        type="button"
                        role="tab"
                        aria-controls="nav-indonesia"
                        aria-selected="false"
                      >
                        Indonesia
                      </button>
                      <button
                        className="nav-link"
                        id="nav-turkey-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-turkey"
                        type="button"
                        role="tab"
                        aria-controls="nav-turkey"
                        aria-selected="false"
                      >
                        Turkey
                      </button>
                      <button
                        className="nav-link"
                        id="nav-china-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-china"
                        type="button"
                        role="tab"
                        aria-controls="nav-china"
                        aria-selected="false"
                      >
                        China
                      </button>
                      <button
                        className="nav-link"
                        id="nav-darjeeling-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-darjeeling"
                        type="button"
                        role="tab"
                        aria-controls="nav-darjeeling"
                        aria-selected="false"
                      >
                        Darjeeling
                      </button>
                      <button
                        className="nav-link"
                        id="nav-italy-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-italy"
                        type="button"
                        role="tab"
                        aria-controls="nav-italy"
                        aria-selected="false"
                      >
                        Italy
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="tab-content" id="nav-tabContent1">
                  <div
                    className="tab-pane fade show active"
                    id="nav-nepal"
                    role="tabpanel"
                    aria-labelledby="nav-nepal-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small1.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Everest trek to Base Camp
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$105.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small2.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">Kathmundu tour</a>
                            </h3>
                            <p>
                              Price starts at <span>$85.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small3.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Beautiful pokhara
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$100.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small4.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Annapurna region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$75.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small5.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Chitwan national park
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$105.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small6.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Langtang region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$105.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-malaysia"
                    role="tabpanel"
                    aria-labelledby="nav-malaysia-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small2.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">Kathmundu tour</a>
                            </h3>
                            <p>
                              Price starts at <span>$85.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small3.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Beautiful pokhara
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$100.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small4.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Annapurna region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$75.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small6.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Langtang region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$105.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-indonesia"
                    role="tabpanel"
                    aria-labelledby="nav-indonesia-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small3.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Beautiful pokhara
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$100.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small4.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Annapurna region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$75.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small6.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Langtang region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$105.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-turkey"
                    role="tabpanel"
                    aria-labelledby="nav-turkey-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small2.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">Kathmundu tour</a>
                            </h3>
                            <p>
                              Price starts at <span>$85.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small3.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Beautiful pokhara
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$100.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small4.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Annapurna region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$75.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-china"
                    role="tabpanel"
                    aria-labelledby="nav-china-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small4.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Annapurna region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$75.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small6.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Langtang region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$105.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-darjeeling"
                    role="tabpanel"
                    aria-labelledby="nav-darjeeling-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small4.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Annapurna region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$75.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-italy"
                    role="tabpanel"
                    aria-labelledby="nav-italy-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small4.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Annapurna region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$75.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="tab_destinations_boxed">
                          <div className="tab_destinations_img">
                            <a href="top-destinations.html">
                              <img
                                src="client/assets/img/destination/destination-small6.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="tab_destinations_conntent">
                            <h3>
                              <a href="top-destinations.html">
                                Langtang region
                              </a>
                            </h3>
                            <p>
                              Price starts at <span>$105.00</span>
                            </p>
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
                      <a href="news-details.html">
                        <img
                          src="client/assets/img/news/small1.png"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="home_news_content">
                      <h3>
                        <a href="news-details.html">
                          Revolutionising the travel industry, one partnership
                          at a time
                        </a>
                      </h3>
                      <p>
                        <a href="news.html">26 Oct 2021</a>{" "}
                        <span>
                          {" "}
                          <i className="fas fa-circle" />
                          5min read
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="home_news_item">
                    <div className="home_news_img">
                      <a href="news-details.html">
                        <img
                          src="client/assets/img/news/small2.png"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="home_news_content">
                      <h3>
                        <a href="news-details.html">
                          t is a long established fact that a reader will be
                          distracted.
                        </a>
                      </h3>
                      <p>
                        <a href="news.html">26 Oct 2021</a>{" "}
                        <span>
                          {" "}
                          <i className="fas fa-circle" />
                          5min read
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="home_news_item">
                    <div className="home_news_img">
                      <a href="news-details.html">
                        <img
                          src="client/assets/img/news/small3.png"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="home_news_content">
                      <h3>
                        <a href="#!">
                          There are many variations of passages of sum available
                        </a>
                      </h3>
                      <p>
                        <a href="news.html">26 Oct 2021</a>{" "}
                        <span>
                          {" "}
                          <i className="fas fa-circle" />
                          5min read
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="home_news_item">
                    <div className="home_news_img">
                      <a href="news-details.html">
                        <img
                          src="client/assets/img/news/small4.png"
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="home_news_content">
                      <h3>
                        <a href="news-details.html">
                          Contrary to popular belief, Lorem Ipsum is not simply.
                        </a>
                      </h3>
                      <p>
                        <a href="news.html">26 Oct 2021</a>{" "}
                        <span>
                          {" "}
                          <i className="fas fa-circle" />
                          5min read
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="home_news_item">
                    <div className="seeall_link">
                      <a href="news.html">
                        See all article <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home_news_big">
                  <div className="news_home_bigest img_hover">
                    <a href="news-details.html">
                      <img src="client/assets/img/news/new-big.png" alt="img" />
                    </a>
                  </div>
                  <h3>
                    <a href="news-details.html">
                      There are many variations of passages available but
                    </a>{" "}
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of. The point of using
                    Lorem Ipsum is that it has a more
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable long established fact that a
                    reader will be distracted content of a page when looking at
                    its layout.
                  </p>
                  <a href="news-details.html">
                    Read full article <i className="fas fa-arrow-right" />
                  </a>
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
                    <a href="#!">
                      <img src="client/assets/img/partner/1.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/2.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/3.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/4.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/5.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/6.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/7.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/8.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/5.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/3.png" alt="logo" />
                    </a>
                  </div>
                  <div className="partner_logo">
                    <a href="#!">
                      <img src="client/assets/img/partner/2.png" alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cta Area */}
      </div>
    </ClientLayout>
  );
};

export default Home;
