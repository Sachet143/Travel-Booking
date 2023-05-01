import { clientLogin } from "@/api/client/auth";
import Password from "@/components/common/Password";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import {
  appEncrypt,
  isValidEmail,
  isValidPassword,
  responseErrorHandler,
} from "@/services/helper";
import useUser from "@/services/hooks/useUser";
import { Button } from "antd";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ClientLogin = () => {
  const router = useRouter();
  const { user, mutateUser } = useUser();

  const { redirectUrl } = router.query;
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "user@mail.com",
      password: "Testing123!",
    },
  });

  function submitLogin(data: any) {
    setLoading(true);
    clientLogin(data)
      .then((res: any) => {
        mutateUser();
        toast.success(res.message);
        // @ts-ignore
        setCookie(TOKEN_KEY, appEncrypt(res.data.token));
        // @ts-ignore
        setCookie(USER_TYPE_KEY, appEncrypt("client"));
        router.push(redirectUrl?.toString() || "/");
      })
      .catch((err) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false));
  }

  return (
    <ClientLayout>
      <>
        {/* <section id="common_banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="common_bannner_text">
                  <h2>Login</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-circle"></i>
                      </span>{" "}
                      Login
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="common_author_area" className="section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="common_wrapper d-flex gap-5 bg-white flex-wrap">
                  <div className="common_author_boxed">
                    <div className="common_author_heading">
                      <h3 className="color-primary login_title">Login</h3>
                    </div>
                    <div className="common_author_form">
                      <form
                        onSubmit={handleSubmit(submitLogin)}
                        id="main_author_form"
                      >
                        <div className="form-group">
                          {/* <label style={{ float: "left" }} className="form-label">
                          Email
                        </label> */}
                          <input
                            placeholder="Enter Email"
                            className="mb-0 form-control"
                            aria-invalid={!!errors?.email?.message}
                            {...register("email", {
                              required: "Email is Required",
                              validate: (email) =>
                                isValidEmail(email) ||
                                "Email format is invalid!",
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
                          <a href="#" style={{ float: "right" }}>
                            Forgot password?
                          </a>
                        </div>
                        <div className="common_form_submit">
                          <Button
                            loading={loading}
                            htmlType="submit"
                            className="btn btn-admin-primary"
                          >
                            Login
                          </Button>
                          {/* <button className="btn btn_theme btn_md">Log in</button> */}
                        </div>
                        <div className="have_acount_area other_author_option">
                          <div className="line_or">
                            <span>or</span>
                          </div>
                          <ul>
                            <li>
                              <a href="#!">
                                <img
                                  src="/client/assets/img/icon/google.png"
                                  alt="icon"
                                />
                              </a>
                            </li>
                          </ul>
                          <p>
                            Dont have an account?{" "}
                            <Link href={"/register"}>Register now</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="extra_details border">
                    <div className="detail_title">
                      Logged In/Registered users get More !
                    </div>
                    <div className="detail_listing_wrapper">
                      <div className="detail_list_item d-flex align-items-center">
                        <i className="fas fa-bus" />
                        <p className="ml-1">
                          <b>View/Cancel/Reschedule</b> bookings
                        </p>
                      </div>
                      <div className="detail_list_item d-flex align-items-center">
                        <i className="fas fa-bus" />
                        <p className="ml-1">
                          Check booking <b>history</b>, manage{" "}
                          <b>cancellations</b> & print <b>eTickets</b>
                        </p>
                      </div>
                      <div className="detail_list_item d-flex align-items-center">
                        <i className="fas fa-bus" />
                        <p className="ml-1">
                          Book faster with Pre-Filled Forms, saved Travellers &
                          Saved Cards
                        </p>
                      </div>
                      <div className="detail_list_item d-flex align-items-center">
                        <i className="fas fa-bus" />
                        <p className="ml-1">Use Yatra eCash to get discounts</p>
                      </div>
                      <div className="detail_list_item d-flex align-items-center">
                        <i className="fas fa-bus" />
                        <p className="ml-1">
                          Transfer eCash to your Family/Friends
                        </p>
                      </div>
                      <div className="detail_list_item d-flex align-items-center">
                        <i className="fas fa-bus" />
                        <p className="ml-1">
                          Convert eCash to Shopping Coupons from Amazon,
                          BookMyShow, etc.
                        </p>
                      </div>
                      <div className="detail_list_item d-flex align-items-center">
                        <i className="fas fa-bus" />
                        <p className="ml-1">
                          Do you have GST number?Additional Benefits of Free
                          Meals, Low Cancellation Fee, Free Rescheduling for SME
                          business customers
                        </p>
                      </div>
                    </div>
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

export default ClientLogin;
