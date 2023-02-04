import { bookSeats, releaseSeats } from "@/api/client/booking";
import { isValidEmail, responseErrorHandler } from "@/services/helper";
import { Button, Card, Divider, Modal, Select, message } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Arrow from "@/public/client/assets/img/show_arrow.png";

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
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

  console.log(bookedSeat);
  const {
    formState: { errors },
    register,
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
      name: "Prawesh",
      email: "prawesh@gmail.com",
      phone: "9868108812",
      gender: "Male",
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
      .finally(() => { });
  };

  const bookSeat = (data: any) => {
    console.log(data);
    setLoading(true);
    bookSeats(data)
      .then((res: any) => toast.success(res.message))
      .catch(responseErrorHandler)
      .finally(() => setLoading(false));
  };

  return (
    <Modal
      visible={modal}
      //   onOk={releasingSeats}
      width={"80%"}
      title={tripInfo?.bus?.name}
      className="modal_form_style"
      onCancel={() => {
        setTripInfo(null);
        setBookedSeat([]);
        releasingSeats();
        setModal(false);
      }}
      okText={null}
    >
      {contextHolder}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit(bookSeat)}>
              <div className="d-flex gap-3">
                <div className="form-group mb-3 flex-1">
                  <label>Name of Passenger</label>

                  <input
                    autoFocus
                    placeholder="e.g Hari Bahadur"
                    className="mb-0 form-control mt-1"
                    aria-invalid={!!errors?.email?.message}
                    {...register("email", {
                      required: "Name is Required",
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
                  <label>Mobile Number</label>
                  <input
                    autoFocus
                    placeholder="e.g 98******"
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
                <div className="form-group mb-3 flex-1">
                  <label>Boarding Point</label>
                  <div>
                    <input
                      autoFocus
                      placeholder="e.g Hari Bahadur"
                      className="mb-0 form-control mt-1"
                      aria-invalid={!!errors?.email?.message}
                      {...register("email", {
                        required: "Name is Required",
                        validate: (email) =>
                          isValidEmail(email) || "Email format is invalid!",
                      })}
                    />
                  </div>

                  {errors?.email?.message && (
                    <div className="text-danger">
                      {errors?.email?.message + ""}
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="form-group mb-3 flex-1">
                  <label>Drop Point</label>
                  <div>
                    <Select
                      defaultValue="lucy"
                      style={{ width: 120 }}
                      disabled
                      className="mt-1 w-100"
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                      ]}
                    />
                  </div>
                  {errors?.email?.message && (
                    <div className="text-danger">
                      {errors?.email?.message + ""}
                    </div>
                  )}
                </div>
              </div>
              <Button loading={loading} type="primary" htmlType="submit">
                Book
              </Button>
            </form>
          </div>
          <div className="col-md-4">
            <label>Travel Detail</label>
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
                <p>2023-01-31</p>
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
