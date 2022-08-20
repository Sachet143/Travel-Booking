import ClientLayout from "@/components/layout/client/ClientLayout";
import React from "react";

const ClientLogin = () => {
  return (
    <ClientLayout>
      <>
        <section id="common_banner">
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
        </section>

        <section id="common_author_area" className="section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="common_author_boxed">
                  <div className="common_author_heading">
                    <h3>Login your account</h3>
                    <h2>Logged in to stay in touch</h2>
                  </div>
                  <div className="common_author_form">
                    <form action="#" id="main_author_form">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter user name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                        <a href="forgot-password.html">Forgot password?</a>
                      </div>
                      <div className="common_form_submit">
                        <button className="btn btn_theme btn_md">Log in</button>
                      </div>
                      <div className="have_acount_area">
                        <p>
                          Dont have an account?{" "}
                          <a href="register.html">Register now</a>
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

export default ClientLogin;
