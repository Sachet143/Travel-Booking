import React, { useRef } from "react";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { Button, Card, QRCode, Result, Skeleton } from "antd";
import { useRouter } from "next/router";
import useSWR from "swr";
import html2canvas from "html2canvas";
import moment from "moment";

const Success = () => {
  const router = useRouter();
  console.log(router.query.id);

  const { data: registerDetail, error } = useSWR(
    router.query.id ? `user/trip/payment/success/${router.query.id}` : null
  );
  const loading = !registerDetail && !error;

  const printing = useRef(null);

  const printDoc = async () => {
    if (printing.current) {
      const canvas = await html2canvas(printing.current);
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <ClientLayout>
      <div className="section_padding">
        <div className="container">
          <div className="row">
            {loading ? (
              <Skeleton active />
            ) : (
              <Result
                status="success"
                title="🎉🎉 Congratulations! 🎉🎉"
                subTitle="Your seat reservation has been successfully secured."
                extra={[
                  <div
                    key={1}
                    style={{ display: "inline-block" }}
                    className="width-auto"
                  >
                    <div ref={printing}>
                      <div
                        className="d-flex bg-white"
                        style={{
                          padding: 15,
                          borderRadius: 10,
                        }}
                      >
                        <QRCode
                          errorLevel="L"
                          value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                          style={{ marginTop: 36 }}
                        />
                        <div
                          style={{
                            textAlign: "start",
                            paddingLeft: 14,
                            marginTop: 12,
                          }}
                        >
                          <h6>
                            <b>Yatra Samaya Pvt.ltd</b>
                          </h6>
                          <p style={{ margin: 0 }}>
                            <b>{registerDetail.data.name}</b>
                          </p>
                          <p style={{ margin: 0 }}>
                            {registerDetail.data.board_location} -{" "}
                            {registerDetail.data.drop_location}
                          </p>
                          <p style={{ margin: 0 }}>
                            <b>Transaction</b> :{" "}
                            {registerDetail.data.transaction.invoice_no}(
                            {moment(
                              registerDetail.data.transaction.created_at
                            ).format("MMM Do YY")}
                            )
                          </p>
                          <p style={{ margin: 0 }}>
                            <b>Price</b> : {registerDetail.data.total_amount} /-
                          </p>
                          <p style={{ margin: 0 }}>
                            <b>People</b>: {registerDetail.data.quantity}
                          </p>
                          <p style={{ margin: 0 }}>
                            <b>Seat</b>: {registerDetail.data.booked_seats}
                          </p>
                          <p style={{ margin: 0 }}>
                            <b>Bus no</b>:{" "}
                            {registerDetail.data.bus.plate_number}
                          </p>
                          <p style={{ margin: 0 }}>
                            <b>Date Time</b>:
                            {moment(registerDetail.data.departure_date).format(
                              "MMM Do YY"
                            )}
                            ({registerDetail.data.board_time})
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Button
                        key={2}
                        type="primary"
                        className="mr-3"
                        style={{ marginRight: 10 }}
                        onClick={printDoc}
                      >
                        Download your ticket
                      </Button>

                      <Button key="buy" onClick={() => router.push("/")}>
                        Go to home
                      </Button>
                    </div>
                  </div>,
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Success;
