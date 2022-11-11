import { editClientData } from "@/api/client/auth";
import { isValidEmail, responseErrorHandler } from "@/services/helper";
import useUser from "@/services/hooks/useUser";
import { Button } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, mutateUser } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    formState: { errors },
    reset,
    getValues,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: user.name || "",
      phone: user.phone || "",
    },
  });

  const editProfile = (value: any) => {
    setLoading(true);
    editClientData(value)
      .then((res: any) => {
        toast.success(res.message);
        mutateUser();
      })
      .catch(responseErrorHandler)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="dashboard_common_table">
      <h3>My Profile</h3>
      <div className="profile_update_form">
        <form onSubmit={handleSubmit(editProfile)} id="profile_form_area">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label>Full name</label>
                <input
                  placeholder="Full Name *"
                  className="mb-0 form-control"
                  aria-invalid={!!errors?.name?.message}
                  {...register("name", {
                    required: "Full Name is Required",
                  })}
                />
                {errors?.name?.message && (
                  <div className="text-danger">
                    {errors?.name?.message + ""}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Email address</label>
                <input
                  placeholder="Enter Email *"
                  className="mb-0 form-control"
                  value={user?.email}
                  disabled
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Mobile number</label>
                <input
                  placeholder="Enter Phone Number *"
                  className="mb-0 form-control"
                  aria-invalid={!!errors?.phone?.message}
                  {...register("phone")}
                />
                {errors?.phone?.message && (
                  <div className="text-danger">
                    {errors?.phone?.message + ""}
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group change_password_field">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={"Please look into the items"}
                />
                <p>Change password</p>
              </div>
            </div>
            <div className="custom-edit-profile">
              <Button
                loading={loading}
                htmlType="submit"
                className="btn btn-admin-primary btn_theme btn_md"
              >
                <i className="fa fa-edit" />
                Edit
              </Button>
            </div>
            <div className="change_password_input_boxed">
              <h3>Change password</h3>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Old Password"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
