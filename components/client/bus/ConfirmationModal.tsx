import { bookSeats, releaseSeats } from "@/api/client/booking";
import { isValidEmail, responseErrorHandler } from "@/services/helper";
import { Button, Card, Divider, Modal, Select, Spin, message } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Arrow from "@/public/client/assets/img/show_arrow.png";
import Countdown from "antd/lib/statistic/Countdown";
import ESEWA from "@/public/client/assets/img/esewa.png";
import KHALTI from "@/public/client/assets/img/khalti.png";
import { CheckCircleFilled, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/router";

const ConfirmationModal = ({
  tripInfo,
  setTripInfo,
  bookedSeat,
  setBookedSeat,
  price,
  modal,
  setModal,
  board,
  drop,
}: any) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState("");
  const [khaltiLoading, setKhaltiLoading] = useState(false);
  let esewaPath = "https://uat.esewa.com.np/epay/main";
  let khaltipath = "https://a.khalti.com/api/v2/epayment/initiate/";
  const router = useRouter();

  const {
    formState: { errors },
    register,
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      bus_id: tripInfo?.bus.id,
      bus_trip_id: tripInfo?.id,
      booked_seats: bookedSeat.map((item: any) => item.column_name).join(","),
      departure_date: tripInfo?.departure_date,
      start_destination: tripInfo?.start_destination,
      final_destination: tripInfo?.final_destination,
      bus_route_id: tripInfo.bus_route_id,
      bus_trip_seats: bookedSeat.map((item: any) => {
        return {
          bus_trip_id: tripInfo.id,
          bus_seat_id: item.id,
        };
      }),
      drop_location: drop?.location,
      board_location: board?.location,
      drop_time: drop?.drop_time,
      board_time: board?.board_datetime,
      name: "",
      email: "",
      phone: "",
      gender: "male",
    },
  });

  const releasingSeats = () => {
    releaseSeats({
      seats: bookedSeat.map((item: any) => item.id),
      trip_id: tripInfo?.id,
    })
      .then((res: any) => {
        toast.success(res.message);
        setBookedSeat([]);
      })
      .catch(responseErrorHandler)
      .finally(() => {});
  };

  function post(params: any) {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", esewaPath);
    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }

  const bookSeat = (data: any) => {
    if (!payment) {
      return toast.error("Please select the payment method to proceed.");
    } else {
      setLoading(true);
      bookSeats(data)
        .then((res: any) => {
          toast.success(res.message);
          if (payment == "esewa") {
            post({
              amt: res.data.total_amount,
              psc: 0,
              pdc: 0,
              txAmt: 0,
              tAmt: res.data.total_amount,
              pid: res.data.uuid,
              scd: "EPAYTEST",
              su: `http://103.233.57.220:8000/bus/esewa/verifyBusPayment?q=su`,
              fu: `http://103.233.57.220:8000/bus/esewa/verifyBusPayment?q=fu`,
            });
          } else if (payment == "khalti") {
            setKhaltiLoading(true);
            axios
              .post(
                khaltipath,
                {
                  return_url:
                    "http://103.233.57.220:8000/bus/khalti/verifyBusPayment",
                  website_url: "http://103.233.57.220:3000/",
                  amount: parseInt(res.data.total_amount),
                  purchase_order_id: res.data.uuid,
                  purchase_order_name: "test",
                },

                {
                  headers: {
                    Authorization: "Key addaae1af48a4d16979c8f0e25deacf3",
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((res: any) => {
                router.replace(res.data.payment_url);
              })
              .catch(responseErrorHandler);
          }
        })
        .catch(responseErrorHandler);
    }
  };

  const deadline = Date.now() + 1000 * 6 * 24 * 2;

  const paymentCheck = (value: any) => {
    switch (value) {
      case "khalti":
        setPayment("khalti");
        break;

      case "esewa":
        setPayment("esewa");
    }
  };

  return (
    <Modal
      open={modal}
      width={"80%"}
      title={tripInfo?.bus?.name}
      className="modal_form_style"
      footer={null}
      onCancel={() => {
        setTripInfo(null);
        setBookedSeat([]);
        releasingSeats();
        setModal(false);
      }}
      okText={null}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit(bookSeat)}>
              <div className="d-flex gap-3 mt-3">
                <div className="form-group mb-3 flex-1">
                  <label>Name of Passenger</label>

                  <input
                    autoFocus
                    placeholder="e.g Hari Bahadur"
                    className="mb-0 form-control mt-1"
                    aria-invalid={!!errors?.name?.message}
                    {...register("name", {
                      required: "Name is Required",
                    })}
                  />
                  {errors?.name?.message && (
                    <div className="text-danger">
                      {errors?.name?.message + ""}
                    </div>
                  )}
                </div>
                <div className="form-group mb-3 flex-1">
                  <label>Email of Passenger</label>
                  <input
                    autoFocus
                    placeholder="e.g haribahadur@gmail.com"
                    className="mb-0 form-control mt-1"
                    aria-invalid={!!errors?.email?.message}
                    {...register("email", {
                      required: "Email is Required",
                      validate: (email) =>
                        isValidEmail(email) || "Email format is invalid!",
                    })}
                  />
                  {errors?.email?.message && (
                    <div className="text-danger">
                      {errors?.email?.message + ""}
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="form-group mb-3 flex-1">
                  <label>Boarding Point</label>
                  <div>
                    <input
                      autoFocus
                      disabled
                      placeholder="e.g Kalanki"
                      className="mb-0 form-control mt-1"
                      aria-invalid={!!errors?.board_location?.message}
                      {...register("board_location", {
                        required: "Enter your board point",
                      })}
                    />
                  </div>

                  {errors?.board_location?.message && (
                    <div className="text-danger">
                      {errors?.board_location?.message + ""}
                    </div>
                  )}
                </div>
                <div className="form-group mb-3 flex-1">
                  <label>Drop Point</label>
                  <div>
                    <input
                      disabled
                      autoFocus
                      placeholder="e.g New Road"
                      className="mb-0 form-control mt-1"
                      aria-invalid={!!errors?.drop_location?.message}
                      {...register("drop_location", {
                        required: "Enter your drop point",
                      })}
                    />
                  </div>
                  {errors?.drop_location?.message && (
                    <div className="text-danger">
                      {errors?.drop_location?.message + ""}
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="form-group mb-3 flex-1">
                  <label>Mobile Number</label>
                  <input
                    autoFocus
                    placeholder="e.g 98******"
                    className="mb-0 form-control mt-1"
                    aria-invalid={!!errors?.phone?.message}
                    {...register("phone", {
                      required: "Phone number is Required",
                    })}
                  />
                  {errors?.phone?.message && (
                    <div className="text-danger">
                      {errors?.phone?.message + ""}
                    </div>
                  )}
                </div>
                <div className="form-group mb-3 flex-1">
                  <label>Gender</label>
                  <div className="">
                    <Controller
                      control={control}
                      name="gender"
                      render={({ field: { onChange, value } }) => {
                        return (
                          <Select
                            className="mt-2"
                            style={{ width: 120 }}
                            onChange={onChange}
                            value={value}
                            options={[
                              { value: "male", label: "Male" },
                              { value: "female", label: "Female" },
                              { value: "others", label: "Others" },
                            ]}
                          />
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <label>Select Payment Method</label>
                  <div className="payment_wrapper mt-2">
                    <div
                      className={`img_wrapper_payment  ${
                        payment == "esewa" ? "custom_border" : ""
                      }`}
                    >
                      <img
                        src={ESEWA.src}
                        className={`esewa_wrapper`}
                        onClick={() => paymentCheck("esewa")}
                      />
                      <CheckCircleFilled
                        height={30}
                        width={30}
                        className="icon"
                      />
                    </div>
                    <Spin spinning={khaltiLoading} indicator={antIcon}>
                      <div
                        className={`img_wrapper_payment ${
                          payment == "khalti" ? "custom_border" : ""
                        }`}
                      >
                        <img
                          src={KHALTI.src}
                          className={`khalti_wrapper`}
                          onClick={() => paymentCheck("khalti")}
                        />
                        <CheckCircleFilled
                          height={30}
                          width={30}
                          className="icon"
                        />
                      </div>
                    </Spin>
                  </div>
                </div>

                <Button
                  size="large"
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                >
                  Book
                </Button>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-between align-items-center">
              <label>Travel Detail</label>
              <div className="d-flex gap-3 align-items-center  deadline_wrapper">
                <label style={{ color: "red" }}>Deadline</label>
                <Countdown
                  // title="Bus Booking Deadline"
                  valueStyle={{ fontSize: "17px", color: "red" }}
                  value={deadline}
                  format="mm:ss"
                  style={{ fontSize: "40px" }}
                  onFinish={() => {
                    setTripInfo(null);
                    setBookedSeat([]);
                    releasingSeats();
                    setModal(false);
                  }}
                />
              </div>
            </div>

            <Card className="mt-2">
              <div className="d-flex gap-5 my-3 mb-4 align-items-end justify-content-between">
                <div className="">
                  <p className="font12 pick_drop_text">
                    {tripInfo?.start_destination}
                  </p>
                </div>
                <img
                  alt="image"
                  src={Arrow.src}
                  style={{ height: "32px", marginBottom: "-12px" }}
                />
                <div className="">
                  <p className="font12 pick_drop_text">
                    {tripInfo?.final_destination}
                  </p>
                </div>
              </div>
              <Divider plain>Seats</Divider>
              <div className="d-flex justify-content-between">
                <p>Seat(s) :</p>
                <div className="seats d-flex">
                  {bookedSeat.map((seatNames: any, index: any) => {
                    return (
                      <p key={seatNames.column_name}>
                        {seatNames.column_name}
                        {bookedSeat.length - 1 < index ? "" : ","}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p>Date :</p>
                <p>{tripInfo?.departure_date}</p>
              </div>
            </Card>
            <Card className="mt-2">
              <div className="d-flex justify-content-between">
                <p>Price</p>
                <p>Rs.{price}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
