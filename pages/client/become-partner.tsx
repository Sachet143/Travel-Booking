import { hotelApplication } from "@/api/contact";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { isValidEmail, responseErrorHandler } from "@/services/helper";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function BecomeAPartner() {

  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  function submitApplication(data: any) {
    hotelApplication(data)
      .then((res: any) => {
        toast.success(res.message);
        reset();
      })
      .catch(responseErrorHandler)
      .finally(() => setLoading(false))
  }

  return (
    <ClientLayout>
      <div>
        {/* How It Work */}
        <section id="how_it_work_area" className="section_padding">
          <div className="container">
            {/* Section Heading */}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section_heading_center">
                  <h2>How it works</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="how_it_boxed">
                  <img src="client/assets/img/common/how-1.png" alt="img" />
                  <h3>Sign up</h3>
                  <p>
                    Duis laboris culpa cupidatat do consequat esse officia ex.
                    Reprehenderit quis est id sint ea dolore sint nostrud demos
                    adipisicing.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="how_it_boxed">
                  <img src="client/assets/img/common/how-2.png" alt="img" />
                  <h3>Contact with client</h3>
                  <p>
                    Duis laboris culpa cupidatat do consequat esse officia ex.
                    Reprehenderit quis est id sint ea dolore sint nostrud demos
                    adipisicing.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="how_it_boxed">
                  <img src="client/assets/img/common/how-3.png" alt="img" />
                  <h3>Start earnings</h3>
                  <p>
                    Duis laboris culpa cupidatat do consequat esse officia ex.
                    Reprehenderit quis est id sint ea dolore sint nostrud demos
                    adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Service Area */}
        <section id="about_service_offer" className="section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="about_service_boxed">
                  <img src="client/assets/img/icon/world.png" alt="img" />
                  <h5>
                    <a href="#!">Best services</a>
                  </h5>
                  <p>
                    Phaseus site amet tristique ligua donec iaculis leo sus
                    cipit. Consec tetur adipiscing elit. Incididunt ut dolore.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="about_service_boxed">
                  <img src="client/assets/img/icon/walte.png" alt="img" />
                  <h5>
                    <a href="#!">Trusted payment</a>
                  </h5>
                  <p>
                    Phaseus site amet tristique ligua donec iaculis leo sus
                    cipit. Consec tetur adipiscing elit. Incididunt ut dolore.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="about_service_boxed">
                  <img src="client/assets/img/icon/star.png" alt="img" />
                  <h5>
                    <a href="#!">Top facility</a>
                  </h5>
                  <p>
                    Phaseus site amet tristique ligua donec iaculis leo sus
                    cipit. Consec tetur adipiscing elit. Incididunt ut dolore.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="about_service_boxed">
                  <img src="client/assets/img/icon/persentis.png" alt="img" />
                  <h5>
                    <a href="#!">Awesome deals</a>
                  </h5>
                  <p>
                    Phaseus site amet tristique ligua donec iaculis leo sus
                    cipit. Consec tetur adipiscing elit. Incididunt ut dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Vendor Form Area */}
        <section id="vendor_form_area" className="section_padding_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="vendor_form_heading">
                  <h2>Become a Vendor</h2>
                  <p>
                    Submit your hotel application here and get your hotel listed on <b>YatraSamaya</b>.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="vendor_form">
                  <div className="tour_booking_form_box">
                    {renderHotelApplication()}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="vendor_img">
                  <img src="client/assets/img/common/vendor.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );

  function renderHotelApplication() {
    return (
      <form
        onSubmit={handleSubmit(submitApplication)}
        action="https://andit.co/projects/html/and-tour/!#"
        id="tour_bookking_form_item"
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <div className="form-group mb-3">
                <input
                  autoFocus
                  placeholder="Hotel Name"
                  className="mb-0 form-control bg_input"
                  aria-invalid={!!errors?.hotel_name?.message}
                  {...register("hotel_name", { required: "Hotel Name is Required" })}
                />
                {errors?.hotel_name?.message && (
                  <div className="text-danger">{errors?.hotel_name?.message + ""}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group mb-3">
              <input
                placeholder="Hotel Admin Name"
                className="mb-0 form-control bg_input"
                aria-invalid={!!errors?.name?.message}
                {...register("name", { required: "Admin Name is Required" })}
              />
              {errors?.name?.message && (
                <div className="text-danger">{errors?.name?.message + ""}</div>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <div className="form-group mb-3">
                <input
                  placeholder="Email"
                  className="mb-0 form-control bg_input"
                  aria-invalid={!!errors?.email?.message}
                  {...register("email", {
                    required: "Email is Required", validate: (email) =>
                      isValidEmail(email) || "Email format is invalid!",
                  })}
                />
                {errors?.email?.message && (
                  <div className="text-danger">{errors?.email?.message + ""}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group mb-3">
              <input
                placeholder="Phone Number"
                className="mb-0 form-control bg_input"
                aria-invalid={!!errors?.phone_number?.message}
                {...register("phone_number", { required: "Phone number is Required" })}
              />
              {errors?.phone_number?.message && (
                <div className="text-danger">{errors?.phone_number?.message + ""}</div>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group mb-3">
              <input
                placeholder="Address: City, State, Country"
                className="mb-0 form-control bg_input"
                aria-invalid={!!errors?.address?.message}
                {...register("address", { required: "Hotel Address is Required" })}
              />
              {errors?.address?.message && (
                <div className="text-danger">{errors?.address?.message + ""}</div>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group my-3">
              <textarea
                placeholder="Hotel Description"
                rows={4}
                className="mb-0 form-control bg_input"
                aria-invalid={!!errors?.description?.message}
                {...register("description", { required: "Description is Required" })}
              />
              {errors?.description?.message && (
                <div className="text-danger">{errors?.description?.message + ""}</div>
              )}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn_theme btn_md" disabled={loading}
        >
          Submit Application
        </button>
      </form>
    )
  }
}

export default BecomeAPartner;
