import React, { useState } from "react";

const Create = () => {
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
  const layout = createSeatLayout(15);
  const [removeSeat, setRemoveSeat] = useState<any>([]);
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
  const removeSeats = (item: any) => {
    // if (
    //   removeSeat.filter((e: any) => e.column_name === item.column_name).length >
    //   0
    // ) {
    //   const allremoveSeat = removeSeat.filter((bookItem: any) => {
    //     return bookItem.column_name != item.column_name;
    //   });
    //   setRemoveSeat(allremoveSeat);
    // } else {
    // }
    setRemoveSeat([...removeSeat, item]);
  };

  //   const availableSeats = layout.filter((item1: any) => {
  //     return !removeSeat.some((item2: any) => {
  //       return item2.column_name == item1.column_name;
  //     });
  //   });

  const managedSeats = layout.map((item1: any, index: any) => {
    if (
      removeSeat.some((item2: any) => {
        return item2.column_name == item1.column_name;
      })
    ) {
      return {
        row_name: item1.row_name,
        column_name: "",
        has_seat: item1.has_seat,
      };
    } else {
      return item1;
    }
  });

  const groupedManagedSeats = groupBy(
    managedSeats,
    (item: any) => item.row_name
  );
  function addItems(array: any) {
    let emptyValue = 0;
    let finalValue = array.map((item: any, index: any) => {
      if (item.column_name == "") {
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

  const finalSeats = seatName.map((item: any) => {
    return addItems(groupedManagedSeats.get(item));
  });

  const finalSeatManaged = groupBy(
    finalSeats.flat(1),
    (item: any) => item.row_name
  );

  return (
    <div className="details-container">
      <div className="seat_container">
        <div className="price_container">Buses Seats</div>
        <div className="all_seat_wrapper">
          <div className="driver">FRONT</div>
          <>
            {Array.from(finalSeatManaged)
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
                                    removeSeat.filter(
                                      (e: any) =>
                                        e.column_name === item1.column_name
                                    ).length > 0
                                      ? "selected_seat"
                                      : "available_seats"
                                  }`}
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
