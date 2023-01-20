import React, { useState } from "react";
import useSWR from "swr";
import Driver from "@/public/client/assets/img/driving.png";

const SeatBooking = () => {
  const { data } = useSWR("/bus-seat");
  const { data: tripsData } = useSWR("/trips");
  const [bookedSeat, setBookedSeat] = useState<any>([]);

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

  return (
    <div className="details-container">
      <div className="seat_container">
        <div className="price_container">asdf</div>
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
                            <>
                              {
                                <div
                                  className={`custom-seat ${
                                    bookedSeat.filter(
                                      (e: any) =>
                                        e.column_name === item1.column_name
                                    ).length > 0
                                      ? "selected_seat"
                                      : "available_seats"
                                  }`}
                                  onClick={() => savingSeats(item1)}
                                >
                                  {item1?.column_name}
                                </div>
                              }
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
