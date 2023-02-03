import React, { useState } from "react";
import useSWR from "swr";
import Driver from "@/public/client/assets/img/driving.png";
import { Button, Popover, Skeleton, notification } from "antd";
import PickDrop from "./PickDrop";
import { RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { holdSeats } from "@/api/client/booking";
import { toast } from "react-toastify";
import { responseErrorHandler } from "@/services/helper";

const SeatBooking = ({
  bus_id,
  trip_id,
  setTripInfo,
  setBookedSeat,
  bookedSeat,
  trip,
}: any) => {
  const { data, error } = useSWR(`/show-seats/${bus_id}/${trip_id}`);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //   const [bookedSeat, ] = useState<any>([]);

  function groupBy(list: any, keyGetter: any) {
    const map = new Map();
    list?.forEach((item: any) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  const grouped = groupBy(data?.data, (item: any) => item.row_name);

  const savingSeats = (item: any) => {
    if (
      bookedSeat.filter((e: any) => e.column_name === item.column_name).length >
      0
    ) {
      const allBookedSeat = bookedSeat.filter((bookItem: any) => {
        return bookItem.column_name != item.column_name;
      });
      setBookedSeat(allBookedSeat);
    } else {
      setBookedSeat([...bookedSeat, item]);
    }
  };

  if (!data && !error) {
    return (
      <div className="p-5">
        <Skeleton className=" w-100" />
      </div>
    );
  }

  const holdingSeats = () => {
    setLoading(true);

    holdSeats({
      trip_id: trip_id,
      seats: bookedSeat.map((item: any) => item.id),
    })
      .then((res: any) => toast.success(res.message))
      .catch(responseErrorHandler)
      .finally(() => {
        setLoading(false);
      });
  };

  const returnSeatsData = (item: any) => {
    switch (item.status) {
      case "Paid":
        return (
          <>
            {
              <div
                className={`custom-seat final_booked`}
                // onClick={() => savingSeats(item)}
              >
                {item?.column_name}
              </div>
            }
          </>
        );

      case "Available":
        return (
          <Popover content={"Available"} overlayStyle={{ padding: 0 }}>
            <div
              title="Available"
              className={`custom-seat ${
                bookedSeat.filter(
                  (e: any) => e.column_name === item.column_name
                ).length > 0
                  ? "selected_seat"
                  : "available_seats"
              }`}
              onClick={() => savingSeats(item)}
            >
              {item?.column_name}
            </div>
          </Popover>
        );

      case "Reserved":
        return (
          <Popover content={"Reserved"}>
            <div
              className={`custom-seat seat-pending`}
              // onClick={() => savingSeats(item)}
            >
              {item?.column_name}
            </div>
          </Popover>
        );
    }
  };

  return (
    <div className="details-container">
      <div className="seat_container">
        <div className="price_container w-100">
          <label>Legend</label>
          <div className="legend_wrapper">
            <span className="legend_color_booked"></span>
            <span className="legend_name">Booked</span>
          </div>
          <div className="legend_wrapper">
            <span className="legend_color_selected"></span>
            <span className="legend_name">Selected</span>
          </div>
          <div className="legend_wrapper">
            <span className="legend_color_pending"></span>
            <span className="legend_name">Pending</span>
          </div>
        </div>
        <div className="all_seat_wrapper">
          <div className="driver">FRONT</div>
          <>
            {Array.from(grouped)
              .reverse()
              .map((item: any, index: any) => {
                return (
                  <div key={index} className="d-flex seat-wrapper">
                    {item[1].map((item1: any, index: any) => {
                      return (
                        <div key={index}>
                          {item1.column_name == "" ? (
                            <div className="empty-seat">
                              {item1?.column_name}
                            </div>
                          ) : (
                            <>{returnSeatsData(item1)}</>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}

            {bookedSeat.length <= 0 ? (
              <></>
            ) : (
              <Button
                className="float-right mt-4 align-items-center d-flex"
                type="primary"
                loading={loading}
                onClick={() => {
                  holdingSeats();
                  setTripInfo(trip);
                }}
              >
                Proceed Booking <RightOutlined />
              </Button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
