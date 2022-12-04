import { imageFullPath } from "@/services/helper";
import useUser from "@/services/hooks/useUser";
import { Empty, Select, Skeleton } from "antd";
import { useRouter } from "next/router";
import React from "react";
import DataTable from "react-data-table-component";

const RoomTable = ({ roomLoading, rooms }: any) => {
  const router = useRouter();
  const { user } = useUser();

  function bookRoomHandler(roomId: any) {
    if (user) {
      router.push(`/room/${roomId}/book`);
    } else {
      router.push({
        pathname: "/login",
        query: { redirectUrl: `/room/${roomId}/book` },
      });
    }
  }

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
      name: "Your Choices",
      selector: (row: any) => row.choice,
    },
    {
      name: "Select Rooms",
      selector: (row: any) => row.select,
    },
  ];

  const data = rooms.map((room: any, index: any) => {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    return {
      id: index,
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
      choice: <>No dish available</>,
      year: room.title,
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
            onChange={handleChange}
            options={Array.from(
              { length: room?.available_rooms },
              (_, i) => i + 1
            ).map((item) => {
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
            <DataTable selectableRows columns={columns} data={data} />
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
