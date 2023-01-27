import React, { useState } from "react";
import { Modal } from "antd";

const BusModal = ({ busName, isModalData, setIsModalData }: any) => {
  const [bookedSeat, setBookedSeat] = useState<any>([]);
  const handleOk = () => {
    setIsModalData(null);
  };

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

  const grouped = groupBy(isModalData, (item: any) => item.row_name);

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

  const handleCancel = () => {
    setIsModalData(null);
  };

  return (
    <>
      {" "}
      <Modal
        title={busName}
        visible={isModalData}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"60%"}
      >
        <div className="d-flex justify-content-end">
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
                            {item1.column_name == "" ||
                            item1.column_name == null ? (
                              <div className="empty-seat">
                                {item1?.column_name}
                              </div>
                            ) : item1.status == "Booked" ? (
                              <>
                                {
                                  <div
                                    className={`custom-seat final_booked`}
                                    onClick={() => savingSeats(item1)}
                                  >
                                    {item1?.column_name}
                                  </div>
                                }
                              </>
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
      </Modal>
    </>
  );
};

export default BusModal;
