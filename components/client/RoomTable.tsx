import { Empty, Modal, Select, Skeleton } from "antd";
import { useState } from "react";
import DataTable from "react-data-table-component";
import ContextComponent from "./ContextComponent";

const columns = [
  {
    name: "Room Type",
    selector: (row: any) => row.title,
  },
  {
    name: "Sleeps",
    selector: (row: any) => row.sleeps,
  },
  {
    name: "Price for one night",
    selector: (row: any) => row.price,
  },
  {
    name: "Select Rooms",
    selector: (row: any) => row.select,
  },
];

const RoomTable = ({ roomLoading, rooms }: any) => {
  const [selectedRooms, setSelectedRooms] = useState<any>([]);

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

  const data2 = rooms.map((room: any, i: any) => {
    let totalRoomLength = Array.from(
      { length: room?.available_rooms },
      (_, i) => i + 1
    );
    totalRoomLength.splice(0, 0, 0);
    return {
      id: room.id,
      title: room.title,
      price: (
        <div className="">
          {room?.discount_price ? (
            <>
              <h6>
                <del>NRs.{room?.price}</del>
              </h6>
              <h3>
                NRs.
                {room?.price - room?.discount_price}
              </h3>
            </>
          ) : (
            <h6>NRs.{room?.price}</h6>
          )}
        </div>
      ),
      sleeps: (
        <span className="sleeping_wrapper">
          <p>
            <b>Full Bed </b>: {room?.full_bed}
          </p>
          <p>
            <b>King Bed </b>: {room?.king_bed}
          </p>
          <p>
            <b>Queen Bed </b>: {room?.queen_bed}
          </p>
          <p>
            <b>Single Bed </b>: {room?.small_single_bed}
          </p>
          <p>
            <b>Twin Bed </b>: {room?.twin_bed}
          </p>
        </span>
      ),
      select: (
        <>
          {" "}
          <Select
            defaultValue="0"
            style={{ width: 120 }}
            onChange={(value: any) => handleRoomChange(room, value)}
            options={totalRoomLength.map((item) => {
              return {
                value: item,
                label: item,
              };
            })}
          />
        </>
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
              title="Rooms"
              columns={columns}
              data={data2}
              selectableRowDisabled={(row) => true}
              selectableRows
              onSelectedRowsChange={(value: any) => console.log(value)}
              selectableRowSelected={(row) =>
                selectedRooms.find((room: any) => room.id === row.id)
              }
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
    </div>
  );
};

export default RoomTable;
