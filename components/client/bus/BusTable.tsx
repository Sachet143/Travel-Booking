import React, { useState } from "react";
import SeatBooking from "./sections/SeatBooking";

const BusTable = ({ bus }: any) => {
  const [section, setSection] = useState("");

  console.log(bus);

  const renderDetailSections = (value: any) => {
    switch (value) {
      case "photos":
        return (
          <div className="details-container">
            <b>photos</b>
          </div>
        );
      case "amenities":
        return (
          <div className="details-container">
            <b>Amenities</b>
          </div>
        );
      case "pickdrop":
        return (
          <div className="details-container">
            <b>Pick and drop</b>
          </div>
        );
      case "bookseat":
        return <SeatBooking />;
      default:
        return null;
    }
  };

  return (
    <div
      className="bus-card"
      id="bus_39_MMTCC1199_MMTCC2140_14-12-2022_1001653243653972013"
    >
      <div className="makeFlex">
        <div className="makeFlex column bus-view-left">
          <div className="makeFlex column appendBottom22">
            <div className="makeFlex hrtlCenter appendBottom8">
              <span className="latoBlack font22 blackText appendRight15">
                {bus.bus_type}
              </span>

              <span className="sc-kgoBCf hOSqgy">
                <span className="sc-kGXeez bfoMHl">4.6</span>/5
              </span>
              <div className="font12 lightGreyText">6 Ratings</div>
            </div>
            <span className="latoBlack font12 blackText appendRight15">
              Jagadamba Tours and Travels (Bus No:{bus?.plate_number})
            </span>
            <div className="makeFlex hrtlCenter font12 blackText">
              <span>A/C Sleeper (2+1)</span>
              <div className="line-border-right"></div>
              <ul className="sc-fjdhpX fXgCif">
                <span className="sc-cSHVUG lajtry sc-jzJRlG gKqGkn"></span> 30
                Seats Left
              </ul>
              <div className="line-border-right"></div>
              <ul className="sc-fjdhpX fXgCif">
                <span className="sc-cSHVUG lajtry sc-jzJRlG koyVmu"></span>{" "}
                {bus.total_seats} total seats
              </ul>
            </div>
          </div>
          <div className="makeFlex hrtlCenter appendBottom20">
            <div>
              <span className="font20 latoBlack blackText">23:10,&nbsp;</span>
              <span className="font16 lightGreyText capText">14 Dec</span>
            </div>
            <div className="line-border-top"></div>
            <div className="latoBold font16 lightGreyText">
              <span className="blackText">07</span>hrs{" "}
              <span className="blackText">20</span>mins
            </div>
            <div className="line-border-top"></div>
            <div>
              <span className="font20 latoBlack blackText">06:30, </span>
              <span className="font16 lightGreyText capText">15 Dec</span>
            </div>
          </div>
          <div className="makeFlex hrtlCenter font12 deepskyBlueText latoBold noSelection">
            <div
              className="detail-header"
              onClick={() => setSection(section == "photos" ? "" : "photos")}
            >
              <span className="appendRight5">Photos</span>
              <i className="fa fa-angle-down mx-1 mt-1" />
            </div>
            <div
              className="detail-header"
              onClick={() =>
                setSection(section == "amenities" ? "" : "amenities")
              }
            >
              <span className="appendRight5">Amenities</span>
              <i className="fa fa-angle-down mx-1 mt-1" />
            </div>
            <div
              className="detail-header"
              onClick={() =>
                setSection(section == "pickdrop" ? "" : "pickdrop")
              }
            >
              <span className="appendRight5">Pickups &amp; Drops</span>
              <i className="fa fa-angle-down mx-1 mt-1" />
            </div>
          </div>
        </div>
        <div className="price-section">
          <div className="makeFlex column end">
            <div className="latoBold font12 lightGreyText appendBottom5">
              starting from
            </div>
            <div className="makeFlex">
              <div className="makeFlex end">
                <span className="old-price" id="old_price">
                  NPR
                </span>
              </div>
              <span placeholder="true" className="sc-ckVGcZ dYlDBG" id="price">
                &nbsp;850
              </span>
            </div>
          </div>
          <button
            className="btn btn_theme btn_sm mt-5 mb-2 py-2"
            type="button"
            style={{ marginRight: "9px" }}
            onClick={() => setSection(section == "bookseat" ? "" : "bookseat")}
          >
            Select Seats{" "}
            <span>
              &nbsp;&nbsp;
              <i className="fa fa-chevron-right" />
            </span>
          </button>
        </div>
      </div>
      {renderDetailSections(section)}
    </div>
  );
};

export default BusTable;
