import { roomBooking } from "@/api/client/booking";
import Dropdown from "@/components/common/Dropdown";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { responseErrorHandler } from "@/services/helper";
import useUser from "@/services/hooks/useUser";
import { Button, Input, Skeleton, Spin } from "antd";
import moment from "moment";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSWR from "swr";

const BookRoom = () => {
  const router = useRouter();
  //   const { data: session, status } = useSession({ required: true });
  const { uuid } = router.query;
  const { data: roomData, error: roomError } = useSWR(
    uuid ? `rooms/${uuid}` : null
  );
  const { user } = useUser();
  const [buttonLoading, setButtonLoading] = useState(false);
  const roomLoading = !roomData && !roomError;
  const [dropDown, setDropDown] = useState(false);

  const [sumGuests, setSumGuests] = useState(1);

  const [finalTotal, setFinalTotal] = useState({
    adult: 1,
    children: 0,
    infant: 0,
  });

  const [selectedDay, setSelectedDay] = useState({
    today: moment(Date.now()).format("dddd"),
    tomorrow: moment(Date.now()).add(1, "days").format("dddd"),
  });

  const {
    control,
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hotel_room_id: "",
      payment_method_id: 1,
      from: moment(Date.now()).format("YYYY-MM-DD"),
      to: moment(Date.now()).add(1, "days").format("YYYY-MM-DD"),
      no_of_adult: finalTotal.adult,
      no_of_children: finalTotal.children,
      no_of_infant: finalTotal.infant,
    },
  });

  const bookRoom = (data: any) => {
    let finalBookingData = {
      ...data,
      hotel_room_id: roomData.id,
      no_of_adult: finalTotal.adult,
      no_of_children: finalTotal.children,
      no_of_infant: finalTotal.infant,
      user_id: user.id,
    };

    setButtonLoading(true);
    roomBooking(finalBookingData)
      .then((res: any) => toast.success(res.message))
      .catch((err) => responseErrorHandler(err, setError))
      .finally(() => setButtonLoading(false));
  };
  return (
    <>
      {
        <ClientLayout>
          <>
            <Spin spinning={roomLoading}>
              <section id="common_banner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="common_bannner_text">
                        <h2>Room boking</h2>
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
                            </span>
                            <a href="hotel-details.html">Hotel details</a>
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle"></i>
                            </span>{" "}
                            Booking
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Spin>
            <section id="tour_booking_submission" className="section_padding">
              <div className="container">
                <div className="row">
                  {roomLoading ? (
                    <div className="col-lg-8">
                      {" "}
                      <Skeleton active />
                    </div>
                  ) : (
                    <>
                      <div className="col-lg-8">
                        <div className="tou_booking_form_Wrapper">
                          <div className="booking_tour_form">
                            <h3 className="heading_theme">
                              Booking submission
                            </h3>
                            <div className="tour_booking_form_box">
                              <form
                                id="tour_bookking_form_item"
                                onSubmit={handleSubmit(bookRoom)}
                              >
                                <div className="tour_search_form">
                                  <div className="row">
                                    <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                                      <div className="form_search_date">
                                        <div className="flight_Search_boxed date_flex_area">
                                          <div className="Journey_date">
                                            <p>Check In date</p>
                                            <Controller
                                              name="from"
                                              control={control}
                                              render={({
                                                field: { onChange, value },
                                              }) => {
                                                return (
                                                  <Input
                                                    type="date"
                                                    onChange={(val: any) => {
                                                      setSelectedDay({
                                                        ...selectedDay,
                                                        today: moment(
                                                          val.target.value
                                                        ).format("dddd"),
                                                      });
                                                      onChange(val);
                                                    }}
                                                    value={value}
                                                  />
                                                );
                                              }}
                                            />
                                            <span>{selectedDay.today}</span>
                                          </div>
                                          <div className="Journey_date">
                                            <p>Check Out date</p>
                                            <Controller
                                              name="to"
                                              control={control}
                                              rules={{ required: true }}
                                              render={({
                                                field: { value, onChange },
                                              }) => (
                                                <Input
                                                  type="date"
                                                  onChange={(val: any) => {
                                                    setSelectedDay({
                                                      ...selectedDay,
                                                      tomorrow: moment(
                                                        val.target.value
                                                      ).format("dddd"),
                                                    });
                                                    onChange(val);
                                                  }}
                                                  value={value}
                                                />
                                              )}
                                            />
                                            <span>{selectedDay.tomorrow}</span>
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
                                              adultCount={finalTotal.adult}
                                              childrenCount={
                                                finalTotal.children
                                              }
                                              infantCount={finalTotal.infant}
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
                                      <Button
                                        className="btn btn_theme btn_md"
                                        htmlType="submit"
                                        loading={buttonLoading}
                                      >
                                        Book Now
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="booking_tour_form">
                            <h3 className="heading_theme">Payment method</h3>
                            <div className="tour_booking_form_box">
                              <div className="booking_payment_boxed">
                                <form
                                  action="https://andit.co/projects/html/and-tour/!#"
                                  id="payment_checked"
                                >
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault1"
                                      value="red"
                                    />
                                    <label className="form-check-label">
                                      Payment by card
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault2"
                                      value="green"
                                    />
                                    <label className="form-check-label">
                                      Paypal
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault3"
                                      value="black"
                                    />
                                    <label className="form-check-label">
                                      Payoneer
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault4"
                                      value="white"
                                    />
                                    <label className="form-check-label">
                                      Cash on delivery
                                    </label>
                                  </div>
                                  <div className="payment_filed_wrapper">
                                    <div className="payment_card payment_toggle red">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control bg_input"
                                              placeholder="Card number"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control bg_input"
                                              placeholder="Cardholder name"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control bg_input"
                                              placeholder="Date of expiry"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control bg_input"
                                              placeholder="Security code"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="paypal_payment payment_toggle green">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control bg_input"
                                              placeholder="Email Address"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="payoneer_payment payment_toggle black">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control bg_input"
                                              placeholder="Email Address"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="booking_tour_form_submit">
                            <div className="form-check write_spical_check">
                              <input
                                className="form-check-input cursor-pointer"
                                type="checkbox"
                                value=""
                                id="flexCheckDefaultf1"
                              />
                              <label className="form-check-label cursor-pointer" htmlFor="flexCheckDefaultf1">
                                <span className="main_spical_check">
                                  <span>
                                    I read and accept all{" "}
                                    <a href="terms-service.html">
                                      Terms and conditios
                                    </a>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <a
                              href="booking-confirmation.html"
                              className="btn btn_theme btn_md"
                            >
                              Submit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="tour_details_right_sidebar_wrapper">
                          <div className="tour_detail_right_sidebar">
                            <div className="tour_details_right_boxed">
                              <div className="tour_details_right_box_heading">
                                <h3>Double deluxe room</h3>
                              </div>
                              <div className="valid_date_area">
                                <div className="valid_date_area_one">
                                  <h5>Valid from</h5>
                                  <p>01 Feb 2022</p>
                                </div>
                                <div className="valid_date_area_one">
                                  <h5>Valid till</h5>
                                  <p>15 Feb 2022</p>
                                </div>
                              </div>
                              <div className="tour_package_details_bar_list">
                                <h5>Room facilities</h5>
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
                                    <i className="fas fa-circle"></i>
                                    Complimentary Camel safari, Bonfire,
                                  </li>
                                  <li>
                                    <i className="fas fa-circle"></i>All toll
                                    tax, parking, fuel, and driver allowances
                                  </li>
                                  <li>
                                    <i className="fas fa-circle"></i>Comfortable
                                    and hygienic vehicle
                                  </li>
                                </ul>
                              </div>
                              <div className="tour_package_details_bar_price">
                                <h5>Price</h5>
                                <div className="tour_package_bar_price">
                                  <h6>
                                    <del>$ 35,500</del>
                                  </h6>
                                  <h3>
                                    $ 30,500 <sub>/Per serson</sub>{" "}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="tour_detail_right_sidebar">
                            <div className="tour_details_right_boxed">
                              <div className="tour_details_right_box_heading">
                                <h3>Booking amount</h3>
                              </div>

                              <div className="tour_booking_amount_area">
                                <ul>
                                  <li>
                                    Adult Price x 1 <span>$40,000.00</span>
                                  </li>
                                  <li>
                                    Discount <span>-10%</span>
                                  </li>
                                  <li>
                                    Tax<span>5%</span>
                                  </li>
                                </ul>
                                <div className="tour_bokking_subtotal_area">
                                  <h6>
                                    Subtotal <span>$38,000.00</span>
                                  </h6>
                                </div>
                                <div className="coupon_add_area">
                                  <h6>
                                    <span className="remove_coupon_tour">
                                      Remove
                                    </span>{" "}
                                    Coupon code (OFF 5000)
                                    <span>$5,000.00</span>
                                  </h6>
                                </div>
                                <div className="total_subtotal_booking">
                                  <h6>
                                    Total Amount <span>$33,000.00</span>{" "}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          </>
        </ClientLayout>
      }
    </>
  );
};

export default BookRoom;
