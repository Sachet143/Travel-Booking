import { MenuProps, Select } from "antd";
import React, { useState } from "react";
import { DownCircleTwoTone } from "@ant-design/icons";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";

function BusFilter() {
  const router = useRouter();

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      start_destination: "Pokhara",
      final_destination: "Kathmandu",
      date: moment(Date.now()).format("YYYY-MM-DD"),
      shift: "Day",
    },
  });

  function handleFilter(data: any) {
    router.push({ pathname: "/trip", query: data });
  }

  return (
    <div
      className="tab-pane fade"
      id="bus"
      role="tabpanel"
      aria-labelledby="bus-tab"
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="oneway_search_form">
            <form onSubmit={handleSubmit(handleFilter)}>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="flight_Search_boxed">
                    <p>From</p>
                    <input
                      type="text"
                      placeholder="From"
                      //   aria-invalid={!!errors?.start_destination?.message}
                      {...register("start_destination", {
                        required: "Please select your travel start location!",
                      })}
                    />
                    {errors?.start_destination?.message ? (
                      <span className="text-danger">
                        {errors?.start_destination?.message + ""}
                      </span>
                    ) : (
                      <span>Where does your trip starts ?</span>
                    )}

                    <div className="plan_icon_posation">
                      {/* <i className="fas fa-plane-departure" /> */}
                      <i className="fas fa-bus-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="flight_Search_boxed">
                    <p>To</p>
                    <input
                      type="text"
                      placeholder="To"
                      {...register("final_destination", {
                        required: "Please select your destination of travel!",
                      })}
                    />
                    {errors?.final_destination?.message ? (
                      <span className="text-danger">
                        {errors?.final_destination?.message + ""}
                      </span>
                    ) : (
                      <span>Where is your destination ?</span>
                    )}

                    <div className="plan_icon_posation">
                      {/* <i className="fas fa-plane-arrival" /> */}
                      <i className="fas fa-bus-alt"></i>
                    </div>
                    <div className="range_plan">
                      <i className="fas fa-exchange-alt" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  col-md-6 col-sm-12 col-12">
                  <div className="form_search_date">
                    <div className="flight_Search_boxed date_flex_area">
                      <div className="Journey_date">
                        <p>Journey date</p>
                        <input
                          type="date"
                          {...register("date", {
                            required: "Please select the date of travel!",
                          })}
                        />
                        <span>When do you prefer to travel ?</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                  <div className="flight_Search_boxed dropdown_passenger_area">
                    <p className="bus_title_filter">Bus Shift </p>
                    <div className=" dropdown">
                      <Controller
                        control={control}
                        name="shift"
                        rules={{ required: "Please select the shift!" }}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <Select
                              className="custom_bus_select data-toggle bus_dropdown"
                              value={value}
                              dropdownAlign={{ offset: [-3, 8] }}
                              style={{ width: 150 }}
                              size={"middle"}
                              onChange={onChange}
                              bordered={false}
                              options={[
                                { value: "Day", label: "Day" },
                                { value: "Night", label: "Night" },
                                { value: "Both", label: "Both" },
                              ]}
                            />
                          );
                        }}
                      />

                      {/* <i className="fas fa-caret-down"></i> */}
                    </div>
                    <span>Day/Night/Both</span>
                  </div>
                </div>
                <div className="top_form_search_button">
                  <button
                    type="submit"
                    onClick={handleFilter}
                    className="btn btn_theme btn_md"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusFilter;
