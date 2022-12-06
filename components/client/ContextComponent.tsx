import { Modal } from "antd";
import React, { useState } from "react";

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
        title="Basic Modal"
        onCancel={handleCancel}
        onOk={handleOk}
      >
        Ready To Roll
      </Modal>
    </div>
  );
};

export default ContextComponent;
