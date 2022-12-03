import Dropdown from "@/components/common/Dropdown";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { Empty, Skeleton } from "antd";
import moment from "moment";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Slider from "react-slick";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
  { ssr: false }
);

const RoomDetail = () => {
  const router = useRouter();
  const { uuid } = router.query;

  const { data: roomData, error: roomError } = useSWR(
    uuid ? `rooms/${uuid}` : null
  );
  const roomLoading = !roomData && !roomError;

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
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
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
                      Room
                    </li>
                    <li className="text-capitalize">
                      <span>
                        <i className="fas fa-circle"></i>
                      </span>{" "}
                      {roomData?.title}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {roomLoading ? (
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
                          <h2 className="text-capitalize">{roomData.title}</h2>
                          <h5>
                            <i className="fas fa-map-marker-alt"></i> Los
                            angeles
                          </h5>
                        </div>
                      </div>
                      {/* hotel features */}
                      <div className="tour_details_top_bottom">
                        {roomData.features.map((f: any) => (
                          <div
                            className="toru_details_top_bottom_item "
                            key={f.id}
                          >
                            <div className="tour_details_top_bottom_icon">
                              <i className={f.feature.icon_link} />
                              {/* <img src="/client/assets/img/icon/ac.png" alt="icon" /> */}
                            </div>
                            <div className="tour_details_top_bottom_text">
                              <p className="text-capitalize mx-1">
                                {f.feature.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* images */}
                      <div className="tour_details_img_wrapper">
                        {roomData.files.length > 0 ? (
                          <>
                            <div className="slider slider-for">
                              <Slider
                                asNavFor={nav2}
                                ref={(slider1: any) => setNav1(slider1)}
                                adaptiveHeight={true}
                              >
                                {roomData.files.map((item: any) => {
                                  return (
                                    <div
                                      key={item.id}
                                      className={"single-slider-wrapper"}
                                    >
                                      <img src={item.full_path} alt="img" />
                                    </div>
                                  );
                                })}
                              </Slider>
                            </div>

                            <div className="slider slider-nav">
                              <Slider
                                asNavFor={nav1}
                                ref={(slider2: any) => setNav2(slider2)}
                                slidesToShow={4}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                adaptiveHeight={true}
                              >
                                {roomData.files.map((item: any) => {
                                  return (
                                    <div
                                      className="cursor-pointer"
                                      key={item.id}
                                    >
                                      <img src={item.full_path} alt="img" />
                                    </div>
                                  );
                                })}
                              </Slider>
                            </div>
                          </>
                        ) : (
                          <div className="py-5">
                            <Empty
                              className="my-5"
                              description="No images available."
                            />
                          </div>
                        )}
                      </div>
                      <div className="tour_details_boxed">
                        <h3 className="heading_theme">Overview</h3>
                        <div className="tour_details_boxed_inner">
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod. Buffet
                            breakfast as per the Itinerary Visit eight villages
                            showcasing Polynesian culture Complimentary Camel
                            safari, Bonfire, and Cultural Dance at Camp All toll
                            tax, parking, fuel, and driver allowances
                            Comfortable and hygienic vehicle (SUV/Sedan) for
                            sightseeing on all days as per the itinerary.
                          </p>
                        </div>
                      </div>

                      {roomData["included_excluded"] && (
                        <div className="tour_details_boxed">
                          <h3 className="heading_theme">included_excluded</h3>
                          <Editor
                            //@ts-ignore
                            toolbarHidden
                            contentState={JSON.parse(
                              roomData["included_excluded"]
                            )}
                            readOnly
                          />
                        </div>
                      )}

                      {/* <div className="tour_details_boxed">
                        <h3 className="heading_theme">Room facilities</h3>
                        <div className="tour_details_boxed_inner">
                          <div className="room_details_facilities">
                            <div className="toru_details_top_bottom_item">
                              <div className="tour_details_top_bottom_icon">
                                <img
                                  src="/client/assets/img/icon/ac.png"
                                  alt="icon"
                                />
                              </div>
                              <div className="tour_details_top_bottom_text">
                                <p>Air condition</p>
                              </div>
                            </div>
                            <div className="toru_details_top_bottom_item">
                              <div className="tour_details_top_bottom_icon">
                                <img
                                  src="/client/assets/img/icon/tv.png"
                                  alt="icon"
                                />
                              </div>
                              <div className="tour_details_top_bottom_text">
                                <p>Flat television</p>
                              </div>
                            </div>
                            <div className="toru_details_top_bottom_item">
                              <div className="tour_details_top_bottom_icon">
                                <img
                                  src="/client/assets/img/icon/gym.png"
                                  alt="icon"
                                />
                              </div>
                              <div className="tour_details_top_bottom_text">
                                <p>Fitness center</p>
                              </div>
                            </div>
                            <div className="toru_details_top_bottom_item">
                              <div className="tour_details_top_bottom_icon">
                                <img
                                  src="/client/assets/img/icon/wifi.png"
                                  alt="icon"
                                />
                              </div>
                              <div className="tour_details_top_bottom_text">
                                <p>Free Wi-fi</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      {/* {hotel.why_choose_us && (
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
                      )} */}
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
                            {/* <h6>
                              <del>$ 35,500</del>
                            </h6> */}
                            <h3>
                              {`Rs.${roomData.price}`} <sub>/Per serson</sub>{" "}
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
                        <div className="tour_select_offer_bar_bottom">
                          <button
                            className="btn btn_theme btn_md w-100"
                            onClick={() => router.push(`/room/${uuid}/book`)}
                          >
                            Book Now
                          </button>
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
            </section>
          </>
        )}
      </>
    </ClientLayout>
  );
};

export default RoomDetail;
