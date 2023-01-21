import { MenuProps, Select } from "antd";
import React from "react";
import { DownCircleTwoTone } from "@ant-design/icons";

function BusFilter() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
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
            <form action="#!">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="flight_Search_boxed">
                    <p>From</p>
                    <input type="text" placeholder="From" />
                    <span>Where does your trip starts ?</span>
                    <div className="plan_icon_posation">
                      {/* <i className="fas fa-plane-departure" /> */}
                      <i className="fas fa-bus-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="flight_Search_boxed">
                    <p>To</p>
                    <input type="text" placeholder="To" />
                    <span>Where is your destination ? </span>
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
                        <input type="date" defaultValue="2022-05-05" />
                        <span>When do you prefer to travel ?</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                  <div className="flight_Search_boxed dropdown_passenger_area">
                    <p className="bus_title_filter">Bus Shift </p>
                    <div className=" dropdown">
                      <Select
                        className="custom_bus_select data-toggle bus_dropdown"
                        defaultValue="day"
                        dropdownAlign={{ offset: [-3, 8] }}
                        style={{ width: 150 }}
                        // suffixIcon={<DownCircleTwoTone />}
                        size={"middle"}
                        onChange={handleChange}
                        bordered={false}
                        options={[
                          { value: "day", label: "Day" },
                          { value: "night", label: "Night" },
                          { value: "both", label: "Both" },
                        ]}
                      />
                      {/* <i className="fas fa-caret-down"></i> */}
                    </div>
                    <span>Day/Night/Both</span>
                  </div>
                </div>
                <div className="top_form_search_button">
                  <button className="btn btn_theme btn_md">Search</button>
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
