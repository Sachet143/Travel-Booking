import { Divider, Skeleton, Tabs, Tag, Timeline } from "antd";
import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useRouter } from "next/router";
import useSWR from "swr";
import moment from "moment";
const { Title } = Typography;

const { TabPane } = Tabs;
const PickDrop = ({ bus_id }: any) => {
  const router = useRouter();
  const { data: pickDropData, error } = useSWR(
    `/boards-drops/${bus_id}/${router.query.to_location}`
  );

  if (!pickDropData && !error) {
    return (
      <div className="p-5">
        <Skeleton className=" w-100" />
      </div>
    );
  }

  console.log(moment().add("minutes", 5000).format());

  return (
    <div className="w-100 d-flex px-4 pt-2 timeline_bus">
      <div style={{ flex: 1 }}>
        <Divider orientation="center">Pick Up Location</Divider>
        <Timeline mode="left">
          {pickDropData?.data?.boards?.map((item: any, index: any) => {
            return (
              <Timeline.Item
                dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                label="3 PM"
                key={index}
              >
                {item.board_location}
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
      <div style={{ flex: 1 }}>
        <Divider orientation="center">Drop Location</Divider>
        <Timeline mode="left">
          {pickDropData?.data?.drops?.map((item: any, index: any) => {
            return (
              <Timeline.Item
                key={index}
                dot={
                  <ClockCircleOutlined
                    style={{ fontSize: "16px", backgroundColor: "transparent" }}
                  />
                }
                style={{ backgroundColor: "transparent" }}
                label={
                  <>
                    <Tag color="green">Rs. {item.price}</Tag>{" "}
                    {moment(item.drop_time).format("LT")}
                  </>
                }
              >
                {item.drop_location}
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default PickDrop;
