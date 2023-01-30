import { releaseSeats } from "@/api/client/booking";
import { isValidEmail, responseErrorHandler } from "@/services/helper";
import { Card, Divider, Modal, Select, message } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Arrow from "@/public/client/assets/img/show_arrow.png";

const ConfirmationModal = ({
  tripInfo,
  setTripInfo,
  reserveSeats,
  setReserveSeats,
}: any) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const {
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      boardingPoints: "",
      dropPoints: "",
    },
  });

  const releasingSeats = () => {
    releaseSeats({
      seats: reserveSeats.map((item: any) => item.id),
      trip_id: tripInfo?.id,
    })
      .then((res: any) => {
        toast.success(res.message);
        setReserveSeats([]);
      })
      .catch(responseErrorHandler)
      .finally(() => {});
  };

  console.log(tripInfo);

  return (
    <Modal
      visible={!!tripInfo && !!reserveSeats.length}
      //   onOk={releasingSeats}
      width={"80%"}
      title={tripInfo?.bus?.name}
      className="modal_form_style"
      onCancel={() => {
        setTripInfo(null);
        setReserveSeats([]);
        releasingSeats();
      }}
      okText={null}
    >
      {contextHolder}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form>
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
                    <Select
                      defaultValue="lucy"
                      style={{ width: 120 }}
                      className="mt-1 w-100"
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
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
              <div className="d-flex gap-3">
                <div className="form-group mb-3 flex-1">
                  <label>Drop Point</label>
                  <div>
                    <Select
                      defaultValue="lucy"
                      style={{ width: 120 }}
                      className="mt-1 w-100"
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
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
            </form>
          </div>
          <div className="col-md-4">
            <label>Travel Detail</label>
            <Card className="mt-2">
              <div className="d-flex gap-5 my-3 mb-4 align-items-end">
                <div className="">
                  <p className="font12 pick_drop_text">
                    {tripInfo?.start_destination}
                  </p>
                </div>
                <img
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
                <p>Seat(s)</p>
                <p>A8</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Seat(s)</p>
                <p>A8</p>
              </div>
            </Card>
            <Card className="mt-2">
              <div className="d-flex justify-content-between">
                <p>Price</p>
                <p>Rs.1000</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
