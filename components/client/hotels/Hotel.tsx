/* eslint-disable @next/next/no-img-element */
import { imageFullPath } from '@/services/helper';
import { Modal, Rate, Tooltip } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { renderLocation } from '@/services/helper'
import MapLocation from '@/components/common/MapLocation';

function HotelListDetail({ hotel }: any) {
  const router = useRouter();
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <div
        className="room_book_item"
        key={hotel.id}
      >
        <div className="room_book_img">
          <img
            width="350px"
            height="250px"
            style={{ objectFit: "cover" }}
            src={imageFullPath(
              hotel.files[0]?.path
            )}
            alt="img"
          />
        </div>
        <div className='row'>
          <div className='col-md-9 col-sm-12'>
            <div className="room_booking_right_side">
              <div className="room_booking_heading">
                <h3>
                  <a
                    className="text-capitalize"
                    onClick={() => {
                      router.push(
                        `/room/${hotel.uuid}`
                      );
                    }}
                  >
                    {hotel.name}
                  </a>
                </h3>
                {/* features */}
                <div className="room_fasa_area">
                  <ul>
                    {[...hotel.features].splice(0, 5).map(
                      (f) => {
                        return (
                          <li
                            className="toru_details_top_bottom_item"
                            key={f.id}
                          >
                            <div className="tour_details_top_bottom_icon">
                              <i
                                className={
                                  f.icon_link
                                }
                              />
                              {/* <img src="/client/assets/img/icon/ac.png" alt="icon" /> */}
                            </div>
                            <div className="tour_details_top_bottom_text">
                              <p className="text-capitalize mx-1">
                                {f.title}
                              </p>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
                {/* rating */}
                <Tooltip placement="top" title="The Stars are provided by the property and is usually determined by an official">
                  <span>
                    <Rate value={hotel.stars || 3} disabled />
                  </span>
                </Tooltip>
                {/* location */}
                <div className='my-3'>
                  <i className='fa fa-map-marker' />{" "}
                  <span>
                    {renderLocation(hotel.location)}
                  </span>
                </div>
                <h5>
                  <u>
                    <a
                      className="text-capitalize"
                      onClick={() => setShowMap(true)}
                    >
                      Show on map
                    </a>
                  </u>
                </h5>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-12 align-self-center'>
            {/* price */}
            <div className="room_person_select flex-wrap">
              <h3>Starting from</h3>
              <h3 style={{ marginBottom: "10px !important" }}>
                {"Rs." + hotel.starting_price}
                {"/"}
                <sub>Per night</sub>
              </h3>
              <button
                className="btn btn_theme btn_sm mt-5"
                type="button"
                onClick={() => {
                  router.push(`/hotels/${hotel.uuid}`)
                  // bookRoomHandler(hotel.uuid)
                }}
              >
                See Availability
              </button>
            </div>
          </div>
        </div>

      </div>
      <MapLocationModal />
    </>
  )

  function MapLocationModal() {
    return (
      <Modal width={"1000px"} visible={showMap} onCancel={() => setShowMap(false)} footer={null}>
        <br />
        <MapLocation lat={hotel.location.lat} long={hotel.location.long} />
      </Modal>
    )
  }
}

export default HotelListDetail