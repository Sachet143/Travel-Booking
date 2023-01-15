import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Create = () => {
  const router = useRouter();
  const seatName = ["A", "B", "C", "D", "E"];

  function createSeatLayout(column: any) {
    const seatLayout: any = [];
    for (let row = 0; row < seatName.length; row++) {
      for (let col = 0; col < column; col++) {
        seatLayout.push({
          row_name: seatName[row],
          column_name: seatName[row] + (col + 1),
          has_seat: false,
        });
      }
    }
    return seatLayout;
  }

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

  const [layout, setLayout] = useState(
    groupBy(createSeatLayout(15), (item: any) => item.row_name)
  );

  const removeSeats = (seat: any) => {
    const afterRemove = addItems(layout.get(seat.row_name), seat);
    layout.set(seat.row_name, afterRemove);
    setLayout(layout);
    router.push(router.asPath);
  };

  function addItems(array: any, seat: any) {
    let emptyValue = 0;
    let finalValue = array.map((item: any, index: any) => {
      if (item.column_name == seat.column_name || item.column_name == "") {
        emptyValue = emptyValue + 1;
        return {
          row_name: item.row_name,
          column_name: "",
          has_seat: false,
        };
      } else {
        return {
          row_name: item.row_name,
          column_name: item.row_name + (index - emptyValue + 1),
          has_seat: false,
        };
      }
    });
    return finalValue;
  }

  return (
    <div className="details-container">
      <div className="seat_container">
        <div className="price_container">Buses Seats</div>
        <div className="all_seat_wrapper">
          <div className="driver">FRONT</div>
          <>
            {Array.from(layout)
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
                                  className={`custom-seat available_seats`}
                                  onClick={() => removeSeats(item1)}
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

export default Create;
