import MapLocation from "@/components/common/MapLocation";
import { imageFullPath, renderLocation } from "@/services/helper";
import { Modal, Rate, Tag, Tooltip } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

function HotelListDetail({ hotel }: any) {
  const router = useRouter();
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <div className="room_book_item bg-white" key={hotel.id}>
        <div className="room_book_img" style={{ zIndex: 1 }}>
          <img
            onClick={() => router.push(`/hotels/${hotel.uuid}`)}
            className="cursor-pointer"
            width="250px"
            height="200px"
            style={{ objectFit: "cover", minWidth: "250px", maxWidth: "250px" }}
            src={imageFullPath(hotel.files[0]?.path)}
            alt="img"
          />
        </div>
        <div className="row">
          <div className="col-md-9 col-sm-12">
            <div className="room_booking_right_side">
              <div className="room_booking_heading">
                <div className="d-flex gap-3">
                  <h3 className="mb-0 cursor-pointer">
                    <a
                      className="text-capitalize purp"
                      onClick={() => router.push(`/hotels/${hotel.uuid}`)}
                    >
                      {hotel.name}
                    </a>
                  </h3>
                  {/* rating */}
                  <Tooltip
                    placement="top"
                    title="The Stars are provided by the property and is usually determined by an official"
                  >
                    <span>
                      <Rate
                        count={hotel.stars || 3}
                        style={{ fontSize: "11px" }}
                        value={hotel.stars || 3}
                        disabled
                      />
                    </span>
                  </Tooltip>
                </div>
                <div className="d-flex gap-4 mt-2">
                  {/* location */}
                  <div>
                    <span>
                      <p>
                        <i
                          className="fas fa-map-marker-alt"
                          style={{ color: "#EA4335" }}
                          aria-hidden="true"
                        />{" "}
                        {renderLocation(hotel.location)}
                      </p>
                    </span>
                  </div>

                  <p
                    className="text-capitalize cursor-pointer purp show_on_map"
                    onClick={() => setShowMap(true)}
                  >
                    Show on map
                  </p>
                </div>
                {/* features */}
                <div className="room_fasa_area">
                  <ul>
                    {[...hotel.features].splice(0, 5).map((f) => {
                      return (
                        <li className="toru_details_top_bottom_item" key={f.id}>
                          <div className="tour_details_top_bottom_icon">
                            <i className={`${f.icon_link} text-primary`} />
                          </div>
                          <div className="tour_details_top_bottom_text">
                            <p className="text-capitalize mx-1">{f.title}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* description */}
                <p className="mt-3">
                  {hotel.description.length > 222
                    ? hotel.description.slice(0, 222) + "..."
                    : hotel.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 align-self-center">
            <div
              className="d-flex gap-2 mt-2 ml-auto"
              style={{ float: "right" }}
            >
              <p style={{ fontSize: "10px" }}>{hotel.rating_count} reviews</p>
              <Tag
                style={{ height: "fit-content", marginRight: "0 !important" }}
                color="#3b5999"
              >
                {Math.round(hotel.rating * 10) / 10}
              </Tag>
            </div>
            {/* price */}
            <div className="room_person_select">
              <div
                style={{ width: "100%", textAlign: "end", marginRight: "8px" }}
              >
                <p
                  className="mb-0 strating_wrapper"
                  style={{ fontSize: "12px", marginRight: "5px !important" }}
                >
                  Starting from
                </p>
              </div>
              <div
                style={{ width: "100%", textAlign: "end", marginRight: "9px" }}
              >
                <p
                  style={{ fontSize: "16px" }}
                  className={"nepali_price_wrapper"}
                >
                  <span className="mx-1">NPR</span>
                  <b>{hotel.starting_price}</b>
                  {"/"}
                  <sub>per night</sub>
                </p>
              </div>
              <button
                className="btn btn_theme btn_sm mt-5 mb-2 py-2"
                type="button"
                style={{ marginRight: "9px" }}
                onClick={() => {
                  router.push(`/hotels/${hotel.uuid}`);
                }}
              >
                See availability{" "}
                <span>
                  &nbsp;&nbsp;
                  <i className="fa fa-chevron-right" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MapLocationModal />
    </>
  );

  function MapLocationModal() {
    return (
      <Modal
        width={"1000px"}
        visible={showMap}
        onCancel={() => setShowMap(false)}
        footer={null}
      >
        <br />
        <MapLocation lat={hotel.location.lat} long={hotel.location.long} />
      </Modal>
    );
  }
}

export default HotelListDetail;
