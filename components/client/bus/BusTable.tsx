import { Empty, Select, Skeleton } from "antd";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import ContextComponent from "../ContextComponent";
import ExpandableRowComponent from "./ExpandableRowComponent";
const columns = [
  {
    name: "Travel",
    selector: (row: any) => row.travel,
    width: "200px",
  },
  {
    name: "Bus Type",
    selector: (row: any) => row.title,
  },
  {
    name: "Departure",
    selector: (row: any) => row.shift,
  },
  {
    name: "Available Seats",
    selector: (row: any) => row.seats,
    width: "120px",
  },
  {
    name: "Price",
    selector: (row: any) => row.price,
    width: "120px",
  },
];

const BusTable = ({ roomLoading, rooms }: any) => {
  const [selectedRooms, setSelectedRooms] = useState<any>([]);
  const [viewRoom, setViewRoom] = useState<any>();

  function handleRoomChange(room: any, roomCount: any) {
    if (roomCount == 0) {
      setSelectedRooms(
        selectedRooms.filter((item: any) => {
          return item.id != room.id;
        })
      );
    } else {
      if (!!selectedRooms.filter((item: any) => item.id == room.id).length) {
        let filteredList = selectedRooms.filter((item: any) => {
          return item.id != room.id;
        });
        setSelectedRooms([...filteredList, { ...room, roomCount }]);
      } else {
        setSelectedRooms([...selectedRooms, { ...room, roomCount }]);
      }
    }
  }

  const data2 = rooms?.map((room: any, i: any) => {
    let totalRoomLength = Array.from(
      { length: room?.available_rooms },
      (_, i) => i + 1
    );
    totalRoomLength.splice(0, 0, 0);
    return {
      id: room.id,
      travel: (
        <>
          <h4 className="table_room_title" onClick={() => setViewRoom(room)}>
            Jagadamba Travel
          </h4>
          <span className="sleeping_wrapper">Click to view details</span>
        </>
      ),
      seats: <>13</>,
      title: (
        <div>
          <span className="sleeping_wrapper">
            <b>Super A/C delux</b>
          </span>
        </div>
      ),
      shift: (
        <span>
          <i className="far fa-clock" /> <b>08:00pm</b>
        </span>
      ),
      price: (
        <div className="custom_pricing_detail">
          {room?.discount_price ? (
            <>
              <h6>
                Rs.
                {room?.price - room?.discount_price}
              </h6>
            </>
          ) : (
            <h6>Rs.{room?.price}</h6>
          )}
        </div>
      ),
    };
  });

  return (
    <div>
      {roomLoading ? (
        <section id="tour_details_main" className="section_padding">
          <div className="container">
            <Skeleton active />
          </div>
        </section>
      ) : (
        <>
          {rooms?.length ? (
            <>
              {rooms.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="bus-card"
                    id="bus_39_MMTCC1199_MMTCC2140_14-12-2022_1001653243653972013"
                  >
                    <div className="makeFlex">
                      <div className="makeFlex column bus-view-left">
                        <div className="makeFlex column appendBottom22">
                          <div className="makeFlex hrtlCenter appendBottom8">
                            <span className="latoBlack font22 blackText appendRight15">
                              Yadav Vishvkarma Tours And Travels
                            </span>
                            <span className="sc-kgoBCf hOSqgy">
                              <span className="sc-kGXeez bfoMHl">4.6</span>/5
                            </span>
                            <div className="font12 lightGreyText">
                              6 Ratings
                            </div>
                          </div>
                          <div className="makeFlex hrtlCenter font12 blackText">
                            <span>A/C Sleeper (2+1)</span>
                            <div className="line-border-right"></div>
                            <ul className="sc-fjdhpX fXgCif">
                              <span className="sc-cSHVUG lajtry sc-jzJRlG gKqGkn"></span>{" "}
                              30 Seats Left
                            </ul>
                            <div className="line-border-right"></div>
                            <ul className="sc-fjdhpX fXgCif">
                              <span className="sc-cSHVUG lajtry sc-jzJRlG koyVmu"></span>{" "}
                              20 Window Seats
                            </ul>
                          </div>
                        </div>
                        <div className="makeFlex row hrtlCenter appendBottom20">
                          <div>
                            <span className="font20 latoBlack blackText">
                              23:10,&nbsp;
                            </span>
                            <span className="font16 lightGreyText capText">
                              14 Dec
                            </span>
                          </div>
                          <div className="line-border-top"></div>
                          <div className="latoBold font16 lightGreyText">
                            <span className="blackText">07</span>hrs{" "}
                            <span className="blackText">20</span>mins
                          </div>
                          <div className="line-border-top"></div>
                          <div>
                            <span className="font20 latoBlack blackText">
                              06:30,{" "}
                            </span>
                            <span className="font16 lightGreyText capText">
                              15 Dec
                            </span>
                          </div>
                        </div>
                        <div className="makeFlex hrtlCenter font12 deepskyBlueText latoBold noSelection">
                          <div className="detail-header ">
                            <span className="appendRight5">Policies</span>
                            <img
                              className="ic-blue-arrow"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXtlT1Ow0AQhWfp0tHkCNyBgo46V0hDHyRMQU4ABUYKddJwBWo6Co5Dly7LPEcjxZJ/Mutd0byV7Nnsz5t5n9exCBsJkAAJkAAJkAAJkAAJkAAJkMD/EAjutHW8ligfEuRSr7U8hJ1b43TDW7xTvWe9flVvKVX4OZ0e61+MLeiY3+jYlSacy0G2UsdVx5rzhrAXGtCCpgi0XS3FQDtB1KQpJrAHeyc2v4EolT7qfSuv10RX8dCEtrP5DTyGb82xSDbRVzw0j9ouC/6X2OTreKvdT6U2s6EmBrnXF/G9NWY/hoqvwpct88R0A8jiMVGgeJQwzcC5JgoVn8fAsIknTOsxe2mi3Y5/Ags9aknHxmQQpz8BU+s7TjZvMWPxkMxnAGpjJjIXn9/AkIkCxZcx0GWiUPHlDED5Nd7oAa3Rbb6wCR+pZi9vJEACJEACJEACJEACJEACJNBD4A+x5nvbCErmpwAAAABJRU5ErkJggg=="
                              alt=""
                            />
                          </div>
                          <div className="detail-header ">
                            <span className="appendRight5">Photos</span>
                            <img
                              className="ic-blue-arrow"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXtlT1Ow0AQhWfp0tHkCNyBgo46V0hDHyRMQU4ABUYKddJwBWo6Co5Dly7LPEcjxZJ/Mutd0byV7Nnsz5t5n9exCBsJkAAJkAAJkAAJkAAJkAAJkMD/EAjutHW8ligfEuRSr7U8hJ1b43TDW7xTvWe9flVvKVX4OZ0e61+MLeiY3+jYlSacy0G2UsdVx5rzhrAXGtCCpgi0XS3FQDtB1KQpJrAHeyc2v4EolT7qfSuv10RX8dCEtrP5DTyGb82xSDbRVzw0j9ouC/6X2OTreKvdT6U2s6EmBrnXF/G9NWY/hoqvwpct88R0A8jiMVGgeJQwzcC5JgoVn8fAsIknTOsxe2mi3Y5/Ags9aknHxmQQpz8BU+s7TjZvMWPxkMxnAGpjJjIXn9/AkIkCxZcx0GWiUPHlDED5Nd7oAa3Rbb6wCR+pZi9vJEACJEACJEACJEACJEACJNBD4A+x5nvbCErmpwAAAABJRU5ErkJggg=="
                              alt=""
                            />
                          </div>
                          <div className="detail-header ">
                            <span className="appendRight5">Amenities</span>
                            <img
                              className="ic-blue-arrow"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXtlT1Ow0AQhWfp0tHkCNyBgo46V0hDHyRMQU4ABUYKddJwBWo6Co5Dly7LPEcjxZJ/Mutd0byV7Nnsz5t5n9exCBsJkAAJkAAJkAAJkAAJkAAJkMD/EAjutHW8ligfEuRSr7U8hJ1b43TDW7xTvWe9flVvKVX4OZ0e61+MLeiY3+jYlSacy0G2UsdVx5rzhrAXGtCCpgi0XS3FQDtB1KQpJrAHeyc2v4EolT7qfSuv10RX8dCEtrP5DTyGb82xSDbRVzw0j9ouC/6X2OTreKvdT6U2s6EmBrnXF/G9NWY/hoqvwpct88R0A8jiMVGgeJQwzcC5JgoVn8fAsIknTOsxe2mi3Y5/Ags9aknHxmQQpz8BU+s7TjZvMWPxkMxnAGpjJjIXn9/AkIkCxZcx0GWiUPHlDED5Nd7oAa3Rbb6wCR+pZi9vJEACJEACJEACJEACJEACJNBD4A+x5nvbCErmpwAAAABJRU5ErkJggg=="
                              alt=""
                            />
                          </div>
                          <div className="detail-header ">
                            <span className="appendRight5">
                              Pickups &amp; Drops
                            </span>
                            <img
                              className="ic-blue-arrow"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXtlT1Ow0AQhWfp0tHkCNyBgo46V0hDHyRMQU4ABUYKddJwBWo6Co5Dly7LPEcjxZJ/Mutd0byV7Nnsz5t5n9exCBsJkAAJkAAJkAAJkAAJkAAJkMD/EAjutHW8ligfEuRSr7U8hJ1b43TDW7xTvWe9flVvKVX4OZ0e61+MLeiY3+jYlSacy0G2UsdVx5rzhrAXGtCCpgi0XS3FQDtB1KQpJrAHeyc2v4EolT7qfSuv10RX8dCEtrP5DTyGb82xSDbRVzw0j9ouC/6X2OTreKvdT6U2s6EmBrnXF/G9NWY/hoqvwpct88R0A8jiMVGgeJQwzcC5JgoVn8fAsIknTOsxe2mi3Y5/Ags9aknHxmQQpz8BU+s7TjZvMWPxkMxnAGpjJjIXn9/AkIkCxZcx0GWiUPHlDED5Nd7oAa3Rbb6wCR+pZi9vJEACJEACJEACJEACJEACJNBD4A+x5nvbCErmpwAAAABJRU5ErkJggg=="
                              alt=""
                            />
                          </div>
                          <div className="detail-header ">
                            <span className="appendRight5">Reviews</span>
                            <img
                              className="ic-blue-arrow"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXtlT1Ow0AQhWfp0tHkCNyBgo46V0hDHyRMQU4ABUYKddJwBWo6Co5Dly7LPEcjxZJ/Mutd0byV7Nnsz5t5n9exCBsJkAAJkAAJkAAJkAAJkAAJkMD/EAjutHW8ligfEuRSr7U8hJ1b43TDW7xTvWe9flVvKVX4OZ0e61+MLeiY3+jYlSacy0G2UsdVx5rzhrAXGtCCpgi0XS3FQDtB1KQpJrAHeyc2v4EolT7qfSuv10RX8dCEtrP5DTyGb82xSDbRVzw0j9ouC/6X2OTreKvdT6U2s6EmBrnXF/G9NWY/hoqvwpct88R0A8jiMVGgeJQwzcC5JgoVn8fAsIknTOsxe2mi3Y5/Ags9aknHxmQQpz8BU+s7TjZvMWPxkMxnAGpjJjIXn9/AkIkCxZcx0GWiUPHlDED5Nd7oAa3Rbb6wCR+pZi9vJEACJEACJEACJEACJEACJNBD4A+x5nvbCErmpwAAAABJRU5ErkJggg=="
                              alt=""
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
                                ₹900
                              </span>
                            </div>
                            <span
                              placeholder="true"
                              className="sc-ckVGcZ dYlDBG"
                              id="price"
                            >
                              &nbsp;850
                            </span>
                          </div>
                        </div>
                        <a
                          className="sc-jKJlTe bPClQZ"
                          data-test-id="select-seats"
                        >
                          Select Seats
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <Empty
              className="my-4"
              description="No Rooms Found for this Hotel"
            />
          )}
        </>
      )}
      {/* <RoomModal viewRoom={viewRoom} setViewRoom={setViewRoom} /> */}
    </div>
  );
};

export default BusTable;
