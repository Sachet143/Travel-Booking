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
      <div className="mb-4">
        <div className="bg-white grid grid-cols-3 gap-3 hover:shadow-md">
          {/* image */}
          <div className="col-span-3 lg:col-span-1">
            <img
              onClick={() => router.push(`/hotels/${hotel.uuid}`)}
              className="cursor-pointer"
              width={"100%"}
              style={{
                objectFit: "cover",
                maxHeight: "250px",
              }}
              src={imageFullPath(hotel.files[0]?.path)}
              alt="img"
            />
          </div>
          {/* data */}
          <div className="col-span-3 lg:col-span-2 px-3 py-2">
            {/* 1st row */}
            <div className="flex justify-between flex-wrap">
              <div className="flex gap-3 items-center">
                <h3 className="mb-0 cursor-pointer text-xl">
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
              <div
                className="flex gap-2 mt-2 ml-auto"
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
            </div>
            {/* 2nd row */}
            <div className="my-2 flex flex-wrap">
              {/* left */}
              <div>
                {/* location */}
                <div className="flex gap-4 mb-2 flex-wrap">
                  <p>
                    <i
                      className="fas fa-map-marker-alt"
                      style={{ color: "#EA4335" }}
                      aria-hidden="true"
                    />{" "}
                    {renderLocation(hotel.location)}
                  </p>
                  <p
                    className="text-capitalize cursor-pointer purp show_on_map"
                    onClick={() => setShowMap(true)}
                  >
                    Show on map
                  </p>
                </div>
                {/* services */}
                <ul className="flex gap-3">
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
              {/* right */}
              <div className="ml-auto">
                <div
                  style={{
                    width: "100%",
                    textAlign: "end",
                    marginRight: "8px",
                  }}
                >
                  <p
                    className="mb-0 strating_wrapper"
                    style={{ fontSize: "12px", marginRight: "5px !important" }}
                  >
                    Starting from
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    textAlign: "end",
                    marginRight: "9px",
                  }}
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
              </div>
            </div>
            {/* 3rd row */}
            <div className="my-3">
              <p>
                {hotel.description.length > 350
                  ? hotel.description.slice(0, 350) + "..."
                  : hotel.description}
              </p>
            </div>
            {/* see availability */}
            <div>
              <button
                className="btn btn_theme btn_sm py-2 float-right mb-2"
                type="button"
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
