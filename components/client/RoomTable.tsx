import { imageFullPath, responseErrorHandler } from "@/services/helper";
import useUser from "@/services/hooks/useUser";
import { Button, Empty, Select, Skeleton } from "antd";
import { differenceBy } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { esewaPay } from "@/api/client/booking";

const RoomTable = ({ roomLoading, rooms }: any) => {
  const router = useRouter();
  const { user } = useUser();
  let selectedRooms: any = [];

  const [selectedRows, setSelectedRows] = useState<any>(selectedRooms);
  const [toggleCleared, setToggleCleared] = useState<any>(false);
  const [allSelected, setAllSelected] = useState<any>([]);
  const [changeValue, setChangeValue] = useState<any>("Total Rooms Datas");
  const rerender = React.useReducer(() => ({}), {})[1];

  type TRoomData = {
    title: string;
    sleeps: string;
    price: number;
    choice: number;
  };

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

  const columnHelper = createColumnHelper<any>();

  const columns: any = [
    columnHelper.accessor((row) => row.title, {
      id: "title",
      cell: (info) => <>{info.getValue()}</>,
      header: () => <span>Title</span>,
    }),
    columnHelper.accessor((row) => row.sleeps, {
      id: "sleeps",
      cell: (info) => <>{info.getValue()}</>,
      header: () => <span>Sleeps</span>,
    }),
    columnHelper.accessor((row) => row.price, {
      id: "price",
      cell: (info) => <>{info.getValue()}</>,
      header: () => <span>Price</span>,
    }),
    columnHelper.accessor((row) => row.choice, {
      id: "choice",
      cell: (info) => <>{info.getValue()}</>,
      header: () => <span>Choice</span>,
    }),
    columnHelper.accessor((row) => row.select, {
      id: "select",
      cell: (info) => <>{info.getValue()}</>,
      header: () => <span>Select</span>,
    }),
    columnHelper.accessor((row) => row.total, {
      id: "total",
      cell: (info) => <>{info.getValue()}</>,
      header: () => <span>Total</span>,
    }),
  ];

  const roomData = rooms.map((room: any, index: any) => {
    const handleChange = (value: string) => {
      setSelectedRows(data[index]);
      setAllSelected(data[index]);
      selectedRooms = [...selectedRooms, data[index]];
      setChangeValue((state: any) => {
        console.log(state);
        return "hello";
      });
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
      total: index < 1 ? <>{changeValue}</> : null,
    };
  });

  const [data, setData] = React.useState(roomData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
            <div className="p-2">
              <table className="w-100">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row, index) => {
                    return (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => {
                          console.log();
                          return (
                            <td
                              key={cell.id}
                              rowSpan={
                                cell.column.id == "total" && index == 0
                                  ? data.length
                                  : null
                              }
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <Empty
              className="my-4"
              description="No Rooms Found for this Hotel"
            />
          )}

          <button
            onClick={() => {
              esewaPay()
                .then((res) => console.log("Sucessfull"))
                .catch(responseErrorHandler);
            }}
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
};

export default RoomTable;
