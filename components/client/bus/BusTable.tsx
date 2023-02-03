import React, { useEffect, useState } from "react";
import SeatBooking from "./sections/SeatBooking";
import PickDrop from "./sections/PickDrop";
import { Select } from "antd";
import Arrow from "@/public/client/assets/img/show_arrow.png";
import { useRouter } from "next/router";
import useSWR from "swr";
import moment from "moment";

const BusTable = ({
  trip,
  setTripInfo,
  setPrice,
  price,
  setBookedSeat,
  bookedSeat,
}: any) => {
  const [section, setSection] = useState("");
  const [busId, setBusID] = useState();
  const [tripId, setTripId] = useState();
  const [board, setBoard] = useState<any>();
  const [drop, setDrop] = useState<any>();
  const [travelTime, setTravelTime] = useState<any>("");
  const [dropTime, setDropTime] = useState("");

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
          tripId && (
            <PickDrop setBoard={setBoard} setDrop={setDrop} trip_id={tripId} />
          )
        );
      case "bookseat":
        return (
          busId &&
          tripId && (
            <SeatBooking
              setTripInfo={setTripInfo}
              bus_id={busId}
              trip={trip}
              trip_id={tripId}
              bookedSeat={bookedSeat}
              setBookedSeat={setBookedSeat}
            />
          )
        );
      default:
        return null;
    }
  };

  const dateConvertor = (dateParam: any) => {
    let date = new Date(dateParam);
    return moment(date).format("MMM-DD").split("-").reverse().join(" ");
  };

  useEffect(() => {
    if (board || drop) {
      if (board && !drop) {
        //setting the travel time by initial trip departure time and board api board time
        // let duration = moment.duration(trip.travel_minutes, "minutes"); //gives total tracel munites
        // let time = moment.utc(duration.asMilliseconds()).format("HH:mm");
        // setTravelTime(time);
        // let datetime = trip.departure_date + " " + trip.departure_time;
        let duration = moment.duration(
          moment(dropTime, "YYYY-MM-DD hh:mm A").diff(
            moment(board.board_datetime, "YYYY-MM-DD hh:mm A")
          )
        );
        let result = moment.utc(duration.asMilliseconds()).format("HH:mm");
        setTravelTime(result);
      }
      if (drop && board) {
        let duration = moment.duration(
          moment(drop.drop_datetime, "YYYY-MM-DD hh:mm A").diff(
            moment(board.board_datetime, "YYYY-MM-DD hh:mm A")
          )
        );
        let result = moment.utc(duration.asMilliseconds()).format("HH:mm");
        setTravelTime(result);
      }
      if (drop && !board) {
        let duration = moment.duration(
          moment(drop.drop_datetime, "YYYY-MM-DD hh:mm A").diff(
            moment(
              trip.departure_date + " " + trip.departure_time,
              "YYYY-MM-DD HH:mm:ss"
            )
          )
        );
        let result = moment.utc(duration.asMilliseconds()).format("HH:mm");
        setTravelTime(result);
        console.log(trip, drop);
      }
    } else {
      let duration = moment.duration(trip.travel_minutes, "minutes");
      let time = moment.utc(duration.asMilliseconds()).format("HH:mm");
      setTravelTime(time);
      let datetime = trip.departure_date + " " + trip.departure_time;
      setDropTime(
        moment(datetime).add(time, "minutes").format("YYYY-MM-DD hh:mm A")
      );
    }
    if (bookedSeat.length <= 1) {
      if (drop) {
        setPrice(drop?.price);
      } else {
        setPrice(trip.price);
      }
    } else {
      if (drop) {
        setPrice(drop?.price * bookedSeat.length);
      } else {
        setPrice(trip.price * bookedSeat.length);
      }
    }
  }, [drop, bookedSeat, board]);

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
                {trip?.bus?.bus_type}
              </span>

              <span className="sc-kgoBCf hOSqgy">
                <span className="sc-kGXeez bfoMHl">4.6</span>/5
              </span>
              <div className="font12 lightGreyText">6 Ratings</div>
            </div>

            <span className="latoBlack font12 blackText appendRight15">
              Jagadamba Tours and Travels (Bus No:{trip?.bus?.plate_number})
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
                {trip?.bus?.total_seats} total seats
              </ul>
            </div>
          </div>

          <div className="makeFlex hrtlCenter">
            <div>
              <span className="font20 latoBlack blackText">
                {board
                  ? moment(board.board_time, "HH:mm:ss").format("hh:mm A")
                  : moment(trip.departure_time, "HH:mm:ss").format("hh:mm A")}
                ,&nbsp;
                {/* trip.departure_time?.split(":").slice(0, -1).join(":") ; */}
              </span>
              <span className="font16 lightGreyText capText">
                {dateConvertor(
                  board ? board?.board_datetime : trip.departure_date
                )}
              </span>
            </div>

            <div className="line-border-top"></div>
            <div className="latoBold font16 lightGreyText">
              {}
              <span className="blackText">{travelTime.split(":")[0]}</span>
              hrs <span className="blackText">{travelTime.split(":")[1]}</span>
              mins
            </div>
            <div className="line-border-top"></div>
            <div>
              <span className="font20 latoBlack blackText">
                {drop ? (
                  drop?.drop_time?.split("")
                ) : (
                  <>{dropTime.split(" ")[1] + " " + dropTime.split(" ")[2]}</>
                )}
                , &nbsp;
              </span>
              <span className="font16 lightGreyText capText">
                {dateConvertor(dropTime)}
              </span>
            </div>
          </div>
          <div className="d-flex gap-5 my-3 mb-4 align-items-center">
            <div className="">
              <p className="font12 pick_drop_text">Board Location</p>
              {board ? board?.location : trip.start_destination}
            </div>
            <img
              src={Arrow.src}
              style={{ height: "32px", marginBottom: "-12px" }}
            />
            <div className="">
              <p className="font12 pick_drop_text">Drop Location</p>
              {drop ? drop.location : trip.final_destination}
            </div>
          </div>
          <div className="makeFlex hrtlCenter font12 deepskyBlueText latoBold noSelection">
            <div
              className="detail-header"
              onClick={() => setSection(section == "photos" ? "" : "photos")}
            >
              <span className="appendRight5">Photos</span>
              <i
                className={`fa  mx-1 mt-1 ${
                  section == "photos" ? "fa-angle-up" : "fa-angle-down"
                }`}
              />
            </div>
            <div
              className="detail-header"
              onClick={() =>
                setSection(section == "amenities" ? "" : "amenities")
              }
            >
              <span className="appendRight5">Amenities</span>
              <i
                className={`fa  mx-1 mt-1 ${
                  section == "amenities" ? "fa-angle-up" : "fa-angle-down"
                }`}
              />
            </div>
            <div
              className="detail-header"
              onClick={() => {
                setBusID(trip.bus.id);
                setTripId(trip.id);
                setSection(section == "pickdrop" ? "" : "pickdrop");
              }}
            >
              <span className="appendRight5">Pickups &amp; Drops</span>
              <i
                className={`fa  mx-1 mt-1 ${
                  section == "pickdrop" ? "fa-angle-up" : "fa-angle-down"
                }`}
              />
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
                &nbsp;
                {price}
              </span>
            </div>
          </div>
          <button
            className={`btn custom_btn_seat ${
              section != "bookseat" ? "btn_theme" : "grey_btn"
            } btn_sm mt-5 mb-2 py-2`}
            type="button"
            style={{ marginRight: "9px" }}
            onClick={() => {
              setBusID(trip.bus.id);
              setTripId(trip.id);
              setSection(section == "bookseat" ? "" : "bookseat");
            }}
          >
            {section != "bookseat" ? "View Seats" : "Hide Seats"}{" "}
            <span>
              &nbsp;&nbsp;
              {section != "bookseat" ? (
                <i className="fa fa-chevron-right" />
              ) : (
                <i className="fa fa-chevron-down" />
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="tabs_bus_booking">{renderDetailSections(section)}</div>
    </div>
  );
};

export default BusTable;
