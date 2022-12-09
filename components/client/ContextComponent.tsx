import { Button, Input, Modal } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

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
      <div className="context_room_detail">
        {selectedRoom?.map((item: any, i: any) => {
          console.log(i + 1);
          return (
            item.roomCount +
            " " +
            item.title +
            `${i + 1 != selectedRoom.length ? ", " : " "}`
          );
        })}
      </div>

      <div className="context_room_price">
        Total Price: ${selectedPrice}
        <button className="btn btn_theme btn_sm px-4 ml-2" onClick={showModal}>
          Book now
        </button>
      </div>
      <Modal
        visible={isModalOpen}
        title="Booking Detail"
        onCancel={handleCancel}
        okText={"Book"}
        confirmLoading={true}
      >
        <form>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
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
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ContextComponent;
