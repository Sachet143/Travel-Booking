import { busadminLogin } from "@/api/busadmin/auth";
import { toast } from "react-toastify";
import Router from "next/router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  appEncrypt,
  isValidEmail,
  isValidPassword,
  responseErrorHandler,
} from "@/services/helper";
import { Button } from "antd";
import { setCookie } from "cookies-next";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import Password from "@/components/common/Password";

function BusAdminLogin() {
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      "email": "bus1@mail.com",
      "password": "Testing123!",
    }
  });

  function submitLogin(data: any) {
    setLoading(true);
    busadminLogin(data)
      .then((res: any) => {
        toast.success(res.message);
        // @ts-ignore
        setCookie(TOKEN_KEY, res.data.token);
        // @ts-ignore
        setCookie(USER_TYPE_KEY, appEncrypt("busadmin"));
        Router.push("/busadmin");
      })
      .catch((err) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false));
  }

  return (
    <div className="login-wrapper">
      <div className="my-wrapper"></div>
      <div className="window">
        <span className="h1 mb-4">Bus Admin</span>
        <form onSubmit={handleSubmit(submitLogin)}>
          <div className="form-group mb-3">
            <input
              autoFocus
              placeholder="Enter Email"
              className="mb-0 form-control"
              aria-invalid={!!errors?.email?.message}
              {...register("email", {
                required: "Email is Required",
                validate: (email) =>
                  isValidEmail(email) || "Email format is invalid!",
              })}
            />
            {errors?.email?.message && (
              <div className="text-danger">{errors?.email?.message + ""}</div>
            )}
          </div>
          <div className="form-group mb-3">
            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required!",
                validate: (pw) =>
                  isValidPassword(pw) ||
                  "Password must contain - 6 characters, a symbol, an uppercase and a lowercase",
              }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Password
                    value={value}
                    onChange={onChange}
                    aria-invalid={!!errors?.password?.message}
                    placeholder="Enter Password"
                  />
                  {errors?.password?.message && (
                    <div className="text-danger">
                      {errors?.password?.message + ""}
                    </div>
                  )}
                </>
              )}
            />
          </div>
          <Button
            loading={loading}
            htmlType="submit"
            className="btn btn-light mb-2 mt-3 custom-btn-login"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default BusAdminLogin;
