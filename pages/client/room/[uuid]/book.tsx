// import { roomBooking } from "@/api/client/booking";
import Dropdown from "@/components/common/Dropdown";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { imageFullPath, responseErrorHandler } from "@/services/helper";
import useUser from "@/services/hooks/useUser";
import { Button, Empty, Input, Skeleton, Spin } from "antd";
import Slider from "react-slick";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSWR from "swr";
import dynamic from "next/dynamic";
import { clientLogin } from "@/api/client/auth";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
  { ssr: false }
);

const BookRoom = () => {
  const router = useRouter();
  const { data: paymentMethods } = useSWR("/paymentMethods");
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
      payment_method_id: 1,
      from: moment(Date.now()).format("YYYY-MM-DD"),
      to: moment(Date.now()).add(1, "days").format("YYYY-MM-DD"),
      no_of_adult: finalTotal.adult,
      no_of_children: finalTotal.children,
      quantity: 1,
    },
  });

  function bookRoomHandler(data: any) {
    const duration = moment.duration(moment(data.to).diff(moment(data.from)));
    const totalDays = duration.asDays();

    let finalBookingData = {
      ...data,
      hotel_room_id: roomData.id,
      no_of_adult: finalTotal.adult,
      no_of_children: finalTotal.children,
      payment_method_id: payment,
      room_price: roomData.price,
      discount: roomData.discount_price,
      total: totalDays * (roomData.price - Number(roomData.discount_price)),
    };

    setButtonLoading(true);
    // roomBooking(finalBookingData)
    //   .then((res: any) => {
    //     toast.success(res.message);
    //   })
    //   .catch(responseErrorHandler)
    //   .finally(() => setButtonLoading(false));
  }

  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();

  const [payment, setPayment] = useState<any>(null);

  return (
    <>
      {
        <ClientLayout>
          <>
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
                        {roomData.files.length ? (
                          <>
                            <div className="slider slider-for">
                              <Slider
                                asNavFor={nav2}
                                ref={(slider1) => setNav1(slider1)}
                                adaptiveHeight={true}
                              >
                                {roomData.files.map((item: any) => {
                                  return (
                                    <div
                                      key={item.id}
                                      className="single-slider-wrapper"
                                    >
                                      <img
                                        src={imageFullPath(item.path)}
                                        alt="img"
                                      />
                                    </div>
                                  );
                                })}
                              </Slider>
                            </div>

                            <div className="slider slider-nav">
                              <Slider
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                slidesToShow={3}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                // @ts-ignore
                                unslick={roomData.files.length < 4}
                                adaptiveHeight={true}
                              >
                                {roomData.files.map((item: any) => {
                                  return (
                                    <div
                                      className="cursor-pointer"
                                      key={item.id}
                                    >
                                      <img
                                        src={imageFullPath(item.path)}
                                        alt="img"
                                      />
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
                        <div className="tou_booking_form_Wrapper mt-5">
                          <div className="booking_tour_form">
                            <h3 className="heading_theme">
                              Booking submission
                            </h3>
                            <div className="tour_booking_form_box">
                              <form
                                id="tour_bookking_form_item"
                                onSubmit={handleSubmit(bookRoomHandler)}
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
                                              maxPeople={roomData.max_people}
                                              setSumGuests={setSumGuests}
                                              setDropDown={setDropDown}
                                              setFinalTotal={setFinalTotal}
                                              adultCount={finalTotal.adult}
                                              childrenCount={
                                                finalTotal.children
                                              }
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
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* payment method */}
                                <div className="booking_tour_form mt-5">
                                  <h3 className="heading_theme">
                                    Payment method
                                  </h3>
                                  <div className="tour_booking_form_box">
                                    <div className="booking_payment_boxed">
                                      <div id="payment_checked">
                                        {!paymentMethods ? (
                                          <Skeleton active />
                                        ) : (
                                          paymentMethods.map((pm: any) => (
                                            <div
                                              className="form-check"
                                              key={pm.id}
                                            >
                                              <input
                                                onChange={(e) =>
                                                  setPayment(e.target.id)
                                                }
                                                className="form-check-input cursor-pointer"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id={pm.id}
                                                // @ts-ignore
                                                value={payment === pm.id}
                                              />
                                              <label
                                                className="form-check-label cursor-pointer"
                                                htmlFor={pm.id}
                                              >
                                                {pm.title}
                                              </label>
                                            </div>
                                          ))
                                        )}
                                        {/* <div className="form-check">
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
                                  </div> */}
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="top_form_search_button text-right">
                                  <Button
                                    disabled={buttonLoading}
                                    className="btn btn_theme btn_md px-4"
                                    htmlType="submit"
                                    loading={buttonLoading}
                                  >
                                    Book Now
                                  </Button>
                                </div>
                              </form>
                            </div>
                          </div>

                          {/* <div className="booking_tour_form_submit">
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
                          </div> */}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="tour_details_right_sidebar_wrapper">
                          <div className="tour_detail_right_sidebar">
                            <div className="tour_details_right_boxed">
                              <div className="tour_details_right_box_heading">
                                <h3>{roomData.title}</h3>
                              </div>
                              {roomData["included_excluded"] && (
                                <div className="tour_package_details_bar_list">
                                  <h5>included_excluded</h5>
                                  <Editor
                                    //@ts-ignore
                                    toolbarHidden
                                    contentState={JSON.parse(
                                      `{\"blocks\":[{\"key\":\"d675\",\"text\":\"our facilities are top notch\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}`
                                    )}
                                    // contentState={JSON.parse(roomData["included_excluded"])}
                                    readOnly
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="tour_details_right_sidebar_wrapper">
                          <div className="tour_detail_right_sidebar">
                            <div className="tour_details_right_boxed">
                              <div className="tour_package_details_bar_price">
                                <h3>Price Per Day</h3>
                                <div className="tour_package_bar_price">
                                  {roomData.discount_price ? (
                                    <>
                                      <h6>
                                        <del>NRs.{roomData.price}</del>
                                      </h6>
                                      <h3>
                                        NRs.
                                        {roomData.price -
                                          roomData.discount_price}
                                      </h3>
                                    </>
                                  ) : (
                                    <h6>NRs.{roomData.price}</h6>
                                  )}
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
