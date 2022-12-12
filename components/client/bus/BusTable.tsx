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
            <DataTable
              columns={columns}
              data={data2}
              selectableRowDisabled={(row) => true}
              //   selectableRows
              onSelectedRowsChange={(value: any) => console.log(value)}
              selectableRowSelected={(row) =>
                selectedRooms.find((room: any) => room.id === row.id)
              }
              expandableIcon={{
                collapsed: <i className="fa fa-angle-right" />,
                expanded: <i className="fa fa-angle-down" />,
              }}
              expandOnRowClicked
              expandableRows
              expandableRowsComponent={() => <ExpandableRowComponent />}
              selectableRowsNoSelectAll={true}
              highlightOnHover={true}
              contextComponent={
                <ContextComponent selectedRoom={selectedRooms} />
              }
              pagination
            />
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
