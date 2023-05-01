import { clientRegister, googleLogin } from "@/api/client/auth";
import Password from "@/components/common/Password";
import ClientLayout from "@/components/layout/client/ClientLayout";
import {
  appEncrypt,
  isValidEmail,
  isValidPassword,
  responseErrorHandler,
} from "@/services/helper";
import { Button } from "antd";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import Router from "next/router";
import Link from "next/link";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const submitRegister = (data: any) => {
    setLoading(true);
    clientRegister(data)
      .then((res: any) => {
        toast.success(res.message);
        // @ts-ignore
        setCookie(TOKEN_KEY, appEncrypt(res.data.token));
        // @ts-ignore
        setCookie(USER_TYPE_KEY, appEncrypt("client"));
        Router.push("/");
      })
      .catch((err) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false));
  };

  const googleLoginHandler = () => {
    setLoading(true);
    googleLogin()
      .then((res: any) => {
        toast.success(res.message);
        // @ts-ignore
        setCookie(TOKEN_KEY, appEncrypt(res.data.token));
        // @ts-ignore
        setCookie(USER_TYPE_KEY, appEncrypt("client"));
        Router.push("/login");
      })
      .catch((err) => responseErrorHandler(err, setError));
  };

  return (
    <ClientLayout>
      <>
        <section id="common_author_area" className="section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 shadow ">
                <div className="common_author_boxed">
                  <div className="common_author_heading">
                    <h3>Register account</h3>
                    <h2>Register your account</h2>
                  </div>
                  <div className="common_author_form">
                    <form
                      onSubmit={handleSubmit(submitRegister)}
                      id="main_author_form"
                    >
                      <div className="form-group">
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

                      <div className="form-group">
                        <input
                          placeholder="Enter Email *"
                          className="mb-0 form-control"
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

                      <div className="form-group">
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
                      <div className="form-group">
                        <Controller
                          control={control}
                          name="password_confirmation"
                          rules={{
                            required: "Passowrd did not match!",
                            validate: (pw) =>
                              pw === getValues("password") ||
                              "The password do not match.",
                          }}
                          render={({ field: { onChange, value } }) => (
                            <>
                              <Password
                                value={value}
                                onChange={onChange}
                                aria-invalid={
                                  !!errors?.password_confirmation?.message
                                }
                                placeholder="Confirm Password"
                              />
                              {errors?.password_confirmation?.message && (
                                <div className="text-danger">
                                  {errors?.password_confirmation?.message + ""}
                                </div>
                              )}
                            </>
                          )}
                        />
                      </div>
                      <div className="common_form_submit">
                        <Button
                          loading={loading}
                          htmlType="submit"
                          className="btn btn-admin-primary btn_theme btn_md"
                        >
                          Register
                        </Button>
                      </div>
                      <div className="have_acount_area other_author_option">
                        <div className="line_or">
                          <span>or</span>
                        </div>
                        <ul>
                          <li onClick={googleLoginHandler}>
                            <a href="#!">
                              <img
                                src="/client/assets/img/icon/google.png"
                                alt="icon"
                              />
                            </a>
                          </li>
                        </ul>
                        <p>
                          Already have an account?{" "}
                          <Link href={"/login"}>Log in now</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </ClientLayout>
  );
};

export default Register;
