import { roomBookingApi } from "@/api/client/booking";
import { responseErrorHandler } from "@/services/helper";
import { Button, Input, Modal, Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContextComponent = ({ selectedRoom }: any) => {
  const initialValue = 0;
  let selectedPrice = selectedRoom
    .map((room: any) => {
      return (room?.price - room?.discount_price) * room?.roomCount;
    })
    .reduce(
      (accumulator: any, currentValue: any) => accumulator + currentValue,
      initialValue
    );

  const [isLoading, setIsLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const myInitial = 0;

  const roomBooking = (roomData: any) => {
    const finalRoomData = selectedRoom.map((room: any) => {
      return {
        type: "hotel",
        hotel_room_id: room.id,
        payment_method_id: roomData.payment_method_id,
        hotel_id: room.hotel_id,
        from: roomData.from,
        to: roomData.to,
        quantity: room.roomCount,
        room_price: room.price,
        discount: room.discount_price,
        total: (room?.price - room?.discount_price) * room.roomCount,
      };
    });
    setIsLoading(true);
    roomBookingApi(finalRoomData)
      .then((res: any) => {
        toast.success(res.message);
        handleCancel();
      })
      .catch(responseErrorHandler)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const {
    control,
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      payment_method_id: 1,
      from: moment(Date.now()).format("YYYY-MM-DD"),
      to: moment(Date.now()).add(1, "days").format("YYYY-MM-DD"),
    },
  });

  const [selectedDay, setSelectedDay] = useState({
    today: moment(Date.now()).format("dddd"),
    tomorrow: moment(Date.now()).add(1, "days").format("dddd"),
  });

  return (
    <div className="contextmenu_wrapper">
      <div className="context_room_detail" style={{ fontSize: "14px" }}>
        {selectedRoom?.map((item: any, i: any) => {
          return (
            item.roomCount +
            " " +
            item.title +
            `${i + 1 != selectedRoom.length ? ", " : " "}`
          );
        })} for {" "}
        <span style={{ fontSize: "16px" }}><strong>NPR {selectedPrice}</strong></span>
      </div>

      <div className="context_room_price">
        <button className="btn btn_theme btn_sm px-4 ml-2" onClick={showModal}>
          Book now
        </button>
      </div>
      <Modal
        visible={isModalOpen}
        title="Booking Detail"
        onCancel={handleCancel}
        okText={"Book"}
        footer={false}
      >
        <form onSubmit={handleSubmit(roomBooking)}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex w-100 flex-wrap">
            <div className="form_search_date">
              <div className="flight_Search_boxed date_flex_area">
                <div className="Journey_date">
                  <p>Check In date</p>
                  <Controller
                    name="from"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <Input
                          type="date"
                          onChange={(val: any) => {
                            setSelectedDay({
                              ...selectedDay,
                              today: moment(val.target.value).format("dddd"),
                            });
                            onChange(val);
                          }}
                          value={value}
                        />
                      );
                    }}
                  />
                  <span>{selectedDay.today}</span>
                </div>
                <div className="Journey_date">
                  <p>Check Out date</p>
                  <Controller
                    name="to"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Input
                        type="date"
                        onChange={(val: any) => {
                          setSelectedDay({
                            ...selectedDay,
                            tomorrow: moment(val.target.value).format("dddd"),
                          });
                          onChange(val);
                        }}
                        value={value}
                      />
                    )}
                  />
                  <span>{selectedDay.tomorrow}</span>
                </div>
              </div>
            </div>
            <label></label>
            <div className="form_search_date mt-3">
              <div className="flight_Search_boxed">
                <Select
                  defaultValue="0"
                  style={{ width: 120 }}
                  //   onChange={(value: any) => handleRoomChange(room, value)}
                  options={[1, 2, 4, 5, 6, 6].map((item) => {
                    return {
                      value: item,
                      label: item,
                    };
                  })}
                />
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-end">
            <Button
              loading={isLoading}
              htmlType="submit"
              className="mt-3 btn btn_theme btn_sm"
            >
              Book Room
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ContextComponent;
