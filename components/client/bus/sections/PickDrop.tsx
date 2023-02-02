import {
  Button,
  Divider,
  Radio,
  RadioChangeEvent,
  Skeleton,
  Tabs,
  Tag,
  Timeline,
} from "antd";
import React, { useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useRouter } from "next/router";
import useSWR from "swr";
import moment from "moment";
import { CheckSquareOutlined } from "@ant-design/icons";

const { Title } = Typography;

const { TabPane } = Tabs;
const PickDrop = ({ trip_id, setBoard, setDrop }: any) => {
  const router = useRouter();
  const { data: pickDropData, error } = useSWR(`/boards-drops/${trip_id}`);

  if (!pickDropData && !error) {
    return (
      <div className="p-5">
        <Skeleton className=" w-100" />
      </div>
    );
  }

  return (
    <div className="w-100 d-flex px-4 pt-2 timeline_bus">
      <div style={{ flex: 1 }}>
        <Divider orientation="center">Pick Up Location</Divider>

        <Timeline mode="left">
          {pickDropData?.data?.boards?.map((item: any, index: any) => {
            return (
              <Timeline.Item
                dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                label={item.board_time}
                key={index}
              >
                <Button
                  type="link"
                  className="d-flex align-items-center"
                  onClick={() => setBoard(item)}
                >
                  {item.location}{" "}
                  {true && <CheckSquareOutlined color="#87d068" />}
                </Button>
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
                    {moment(item.drop_datetime).format("LT")}
                  </>
                }
              >
                <div className="">
                  {item.location}
                  <Button type="link" onClick={() => setDrop(item)}>
                    Select
                  </Button>
                </div>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default PickDrop;
