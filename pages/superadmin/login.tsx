import { superadminLogin } from "@/api/superadmin/auth";
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
import { Button, Form } from "antd";
import { setCookie } from "cookies-next";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import Password from "@/components/common/Password";

function SuperAdminLogin() {
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  function submitLogin(data: any) {
    setLoading(true);
    superadminLogin(data)
      .then((res: any) => {
        toast.success(res.message);
        // @ts-ignore
        setCookie(TOKEN_KEY, appEncrypt(res.data.token));
        // @ts-ignore
        setCookie(USER_TYPE_KEY, appEncrypt("superadmin"));
        Router.push("/superadmin");
      })
      .catch((err) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false));
  }

  return (
    // <div className="col-lg-12">
    //   <div className="white_box mb_30">
    //     <div className="row justify-content-center">
    //       <div className="col-lg-6">
    //         <div className="modal-content cs_modal">
    //           <div className="modal-header justify-content-center theme_bg_1">
    //             <h5 className="modal-title text_white">Superadmin Login</h5>
    //           </div>
    //           <div className="modal-body">
    //             <form onSubmit={handleSubmit(submitLogin)}>
    //               <div className="form-group mb-3">
    //                 <label className="form-label">Email</label>
    //                 <input
    //                   placeholder='Enter Email'
    //                   className='mb-0'
    //                   aria-invalid={!!errors?.email?.message}
    //                   {...register("email", {
    //                     required: "Email is Required",
    //                     validate: email => isValidEmail(email) || "Email format is invalid!"
    //                   })}
    //                 />
    //                 {errors?.email?.message &&
    //                   <div className="text-danger">
    //                     {errors?.email?.message + ""}
    //                   </div>
    //                 }
    //               </div>
    //               <div className="form-group mb-3">
    //                 <label className="form-label">Password</label>
    //                 <Controller
    //                   control={control}
    //                   name="password"
    //                   rules={{
    //                     required: "Password is required!",
    //                     validate: pw => isValidPassword(pw) || "Password must contain - 6 characters, a symbol, an uppercase and a lowercase"
    //                   }}
    //                   render={({ field: { onChange, value } }) =>
    //                     <>
    //                       <Password
    //                         value={value}
    //                         onChange={onChange}
    //                         aria-invalid={!!errors?.password?.message}
    //                         placeholder='Enter Password'
    //                       />
    //                       {errors?.password?.message &&
    //                         <div className="text-danger">
    //                           {errors?.password?.message + ""}
    //                         </div>
    //                       }
    //                     </>
    //                   }
    //                 />
    //               </div>
    //               <Button loading={loading} htmlType="submit" className='btn btn-admin-primary'>Login</Button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="login-wrapper">
      <div className="window">
        <span className="h1 mb-4">Super Admin</span>
        <form onSubmit={handleSubmit(submitLogin)}>
          <div className="form-group mb-3">
            {/* <label className="form-label">Email</label> */}
            <input
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
            {/* <label className="form-label">Password</label> */}
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
            className="mb-2 btn btn-light mt-2 custom-btn-login"
          >
            Login
          </Button>
          {/* <small>
            You do not have an account?{" "}
            <a href="#" className="text-warning">
              Sign up
            </a>
          </small> */}
        </form>
      </div>
    </div>
  );
}

export default SuperAdminLogin;
