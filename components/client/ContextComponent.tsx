import { roomBookingApi } from "@/api/client/booking";
import { responseErrorHandler } from "@/services/helper";
import useUser from "@/services/hooks/useUser";
import { Modal, notification } from "antd";
import axios from "axios";
import clsx from "clsx";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const ContextComponent = ({ selectedRoom, bookingDate, people }: any) => {
  const router = useRouter();
  const { uuid } = router.query;
  let esewaPath = "https://uat.esewa.com.np/epay/main";
  let khaltipath = "https://a.khalti.com/api/v2/epayment/initiate/";
  const { user } = useUser();
  const [paymentMethodId, setPaymentMethodId] = useState<any>(null);
  const [paymentMethodToggle, setPaymentMethodToggle] = useState(false);
  const initialValue = 0;
  let selectedPrice = selectedRoom
    .map((room: any) => {
      return (room?.price - room?.discount_price) * room?.roomCount;
    })
    .reduce(
      (accumulator: any, currentValue: any) => accumulator + currentValue,
      initialValue
    );

  const roomBooking = () => {
    if (!bookingDate) {
      return notification.error({ message: "Please select date" });
    }
    if (!people) {
      return notification.error({ message: "Please select number of people" });
    }
    if (!selectedRoom?.length) {
      return notification.error({ message: "Please select atleast one room" });
    }
    const finalRoomData = {
      hotel_id: selectedRoom[0].hotel_id,
      checkin_date: bookingDate[0],
      checkout_date: bookingDate[1],
      no_of_adult: 0,
      no_of_children: people,
      room_selected_bookings: selectedRoom.map((room: any) => ({
        hotel_room_id: room.id,
        quantity: room.roomCount,
      })),
    };
    roomBookingApi(finalRoomData)
      .then((res: any) => {
        toast.success(res.message);

        if (paymentMethodId == "esewa") {
          post({
            amt: res.data.total_amount,
            psc: 0,
            pdc: 0,
            txAmt: 0,
            tAmt: res.data.total_amount,
            pid: res.data.uuid,
            scd: "EPAYTEST",
            su: `https://api.eakaksha.com/hotel/esewa/verifyHotelPayment?q=su`,
            fu: `https://api.eakaksha.com/bus/esewa/verifyHotelPayment?q=fu`,
          });
        } else if (paymentMethodId == "khalti") {
          //  setKhaltiLoading(true);
          axios
            .post(
              khaltipath,
              {
                return_url:
                  "https://api.eakaksha.com/bus/esewa/verifyHotelPayment",
                website_url: "http://103.233.57.220:3000/",
                amount: parseInt(res.data.total_amount),
                purchase_order_id: res.data.uuid,
                purchase_order_name: "test",
              },

              {
                headers: {
                  Authorization: "Key addaae1af48a4d16979c8f0e25deacf3",
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res: any) => {
              router.replace(res.data.payment_url);
            })
            .catch(responseErrorHandler);
        }
      })
      .catch(responseErrorHandler)
      .finally(() => {
        // setIsLoading(false);
      });
  };

  function post(params: any) {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", esewaPath);
    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }

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
        })}{" "}
        for{" "}
        <span style={{ fontSize: "16px" }}>
          <strong>NPR {selectedPrice}</strong>
        </span>
      </div>

      <div className="context_room_price">
        {!user ? (
          <button
            className="btn btn_theme btn_sm px-4 ml-2"
            onClick={(e) => Router.push(`/login?redirectUrl=/hotels/${uuid}`)}
          >
            Login
          </button>
        ) : (
          <button
            className="btn btn_theme btn_sm px-4 ml-2"
            onClick={() => setPaymentMethodToggle(true)}
          >
            Book now
          </button>
        )}
      </div>
      <Modal
        title="Payment Method"
        onOk={roomBooking}
        open={paymentMethodToggle}
        onCancel={() => setPaymentMethodToggle(false)}
      >
        <div
          className="row align-items-center mt-4 rounded"
          style={{ height: "150px", backgroundColor: "lightgray" }}
        >
          <div
            className={clsx("col cursor-pointer text-center rounded")}
            style={{
              // width: "50%",
              height: "150px",
              lineHeight: "10",
              backgroundColor: paymentMethodId === "esewa" ? "#73b10e7a" : "",
              border:
                paymentMethodId === "esewa"
                  ? "3px solid rgb(11 84 11 / 36%)"
                  : "",
            }}
            onClick={() => setPaymentMethodId("esewa")}
          >
            <img
              src="/client/assets/img/esewa.png"
              // className="w-50"
              // style={{ objectFit: "cover" }}
            />
          </div>
          <div
            className={clsx("col cursor-pointer text-center rounded")}
            style={{
              // width: "50%",
              height: "150px",
              lineHeight: "10",
              backgroundColor:
                paymentMethodId === "khalti" ? "rgb(81 20 123 / 30%)" : "",
              border:
                paymentMethodId === "khalti"
                  ? "3px solid rgb(57 11 78 / 50%)"
                  : "",
            }}
            onClick={() => setPaymentMethodId("khalti")}
          >
            <img className="w-50" src="/client/assets/img/khalti.png" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContextComponent;
