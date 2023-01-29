import { isValidEmail } from "@/services/helper";
import { Modal, Select, message } from "antd";
import React from "react";
import { useForm } from "react-hook-form";

const ConfirmationModal = ({
  tripInfo,
  setTripInfo,
  reserveSeats,
  setReserveSeats,
}: any) => {
  const [messageApi, contextHolder] = message.useMessage();
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

  const info = () => {
    messageApi.info("Payment Option will be here !!");
  };
  return (
    <Modal
      visible={!!tripInfo && !!reserveSeats.length}
      onOk={info}
      width={"80%"}
      onCancel={() => {
        setTripInfo(null);
        setReserveSeats([]);
      }}
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
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
