/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import RoomTable from "@/components/client/RoomTable";
import YoutubeComponent from "@/components/common/YoutubeComponent";
import ClientLayout from "@/components/layout/client/ClientLayout";
import axiosClient from "@/services/axios/clientfetch";
import {
  cleanUrlParams,
  imageFullPath,
  renderLocation
} from "@/services/helper";
import useUser from "@/services/hooks/useUser";
import {
  Breadcrumb,
  Col,
  Empty,
  InputNumber, Row,
  Select,
  Skeleton, Slider as AntSlider, Tag
} from "antd";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Slider from "react-slick";
import useSWR from "swr";
const { Option } = Select;
const customFetcher = (url: string) => axiosClient(url).then((res: any) => res);

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
  { ssr: false }
);

function HotelPage() {
  const router = useRouter();
  const { user } = useUser();
  const { uuid, ...restQuery } = router.query;

  const { data: hotel, error } = useSWR(uuid ? `/hotels/${uuid}` : null);
  const { data: rooms, error: roomError } = useSWR(
    hotel
      ? cleanUrlParams(`rooms`, {
        hotel_id: hotel.id,
        ...restQuery,
      })
      : null
  );
  const hotelLoading = !hotel && !error;

  const { data: featureList, error: featureError } = useSWR(
    `/features`,
    customFetcher
  );

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const {
    getValues,
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      min_price: 500,
      max_price: 50000,
      features: [],
    },
  });

  useEffect(() => {
    reset({
      min_price: restQuery?.min_price || 500,
      max_price: restQuery?.max_price || 50000,
      features: router.query.features
        ? router.query.features.toString().split(",").map(Number)
        : [],
    });
  }, [router.query]);

  const applyPriceFilter = (e: any) => {
    e.preventDefault();
    router.push(
      cleanUrlParams(`/hotels/${uuid}`, {
        ...restQuery,
        min_price: getValues("min_price"),
        max_price: getValues("max_price"),
      })
    );
  };

  const clearPriceFilter = (e: any) => {
    e.preventDefault();

    router.push(
      cleanUrlParams(`/hotels/${uuid}`, {
        ...restQuery,
        min_price: 500,
        max_price: 50000,
      })
    );
  };
  const applyFeaturesFilter = (e: any) => {
    e.preventDefault();
    router.push(
      cleanUrlParams(`/hotels/${uuid}`, {
        ...restQuery,
        features: getValues("features").join(","),
      })
    );
  };

  const clearFilter = (value: any) => {
    router.push(
      cleanUrlParams(`/hotels/${uuid}`, {
        ...restQuery,
        [value]: null,
      })
    );
  };

  const submitFilter = (value: any) => {
    router.push(
      cleanUrlParams(`/hotels/${uuid}`, {
        restQuery,
        ...value,
      })
    );
  };

  return (
    <ClientLayout>
      <>
        {hotelLoading ? (
          <section id="tour_details_main" className="section_padding">
            <div className="container">
              <Skeleton active />
            </div>
          </section>
        ) : (
          <>
            <section id="tour_details_main" className="section_padding">
              <div className="container">
                <div className="row">
                  <Breadcrumb className="mt-3 mb-5">
                    <Breadcrumb.Item>
                      <Link href='/'>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <Link href='/hotels'>Hotels</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{hotel?.name}</Breadcrumb.Item>
                  </Breadcrumb>
                  <div className="col-lg-8">
                    <div className="tour_details_leftside_wrapper">
                      <div className="tour_details_heading_wrapper">
                        <div className="tour_details_top_heading">
                          <h2 className="text-capitalize mb-0">{hotel?.name}</h2>
                          <h5 className="text-capitalize mb-0">
                            <i className="fas fa-map-marker-alt" style={{ color: "#EA4335" }}></i>{" "}
                            {renderLocation(hotel?.location)}
                          </h5>
                        </div>
                      </div>
                      {/* images */}
                      <div className="tour_details_img_wrapper">
                        {hotel.files.length > 0 ? (
                          <>
                            <div className="slider slider-for">
                              <Slider
                                asNavFor={nav2}
                                ref={(slider1) => setNav1(slider1)}
                                adaptiveHeight={true}
                              >
                                {hotel.files.map((item) => {
                                  return (
                                    <div
                                      key={item.id}
                                      className="single-slider-wrapper"
                                    >
                                      <img
                                        src={imageFullPath(item.path)}
                                        alt="img"
                                      />
                                    </div>
                                  );
                                })}
                              </Slider>
                            </div>

                            <div className="slider slider-nav">
                              <Slider
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                slidesToShow={4}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                unslick={hotel.files.length < 4}
                                adaptiveHeight={true}
                              >
                                {hotel.files.map((item) => {
                                  return (
                                    <div
                                      className="cursor-pointer"
                                      key={item.id}
                                    >
                                      <img
                                        src={imageFullPath(item.path)}
                                        alt="img"
                                      />
                                    </div>
                                  );
                                })}
                              </Slider>
                            </div>
                          </>
                        ) : (
                          <div className="py-5">
                            <Empty
                              className="my-5"
                              description="No images available."
                            />
                          </div>
                        )}
                      </div>
                      {/* hotel features */}
                      <div className="tour_details_top_bottom">
                        {hotel.features.map((f) => (
                          <div
                            className="toru_details_top_bottom_item"
                            key={f.id}
                          >
                            <div className="tour_details_top_bottom_icon">
                              <i className={`${f.icon_link} text-primary`} />
                            </div>
                            <div className="tour_details_top_bottom_text" >
                              <p className="text-capitalize mx-1" style={{ color: "black" }}>{f.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3">
                        <div className="tour_details_boxed_inner">
                          <p style={{ color: "black", fontWeight: "600" }}>{hotel.description}</p>
                        </div>
                      </div>

                      {hotel.why_choose_us && (
                        <div>
                          <Editor
                            //@ts-ignore
                            toolbarHidden
                            contentState={JSON.parse(hotel.why_choose_us)}
                            readOnly
                          />
                        </div>
                      )}
                      {hotel.our_facilities && (
                        <div>
                          <Editor
                            //@ts-ignore
                            toolbarHidden
                            contentState={JSON.parse(hotel.our_facilities)}
                            readOnly
                          />
                        </div>
                      )}

                      <div className="tour_details_boxed">
                        <h3 className="heading_theme">Select your room</h3>
                        <div className="room_select_area">
                          <ul
                            className="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                              >
                                Book
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Enquiry
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="myTabContent">
                            <div
                              className="tab-pane fade show active"
                              id="home"
                              role="tabpanel"
                              aria-labelledby="home-tab"
                            >
                              <div className="room_booking_area">
                                <RoomTable
                                  roomLoading={hotelLoading}
                                  rooms={hotel?.hotel_rooms}
                                />
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="profile"
                              role="tabpanel"
                              aria-labelledby="profile-tab"
                            >
                              <div className="write_review_inner_boxed">
                                <form
                                  action="https://andit.co/projects/html/and-tour/!#"
                                  id="news_comment_form"
                                >
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="form-froup">
                                        <input
                                          type="text"
                                          className="form-control bg_input"
                                          placeholder="Enter full name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="form-froup">
                                        <input
                                          type="text"
                                          className="form-control bg_input"
                                          placeholder="Enter email address"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-froup">
                                        <textarea
                                          placeholder="Write your comments"
                                          className="form-control bg_input"
                                        ></textarea>
                                      </div>
                                      <div className="comment_form_submit">
                                        <button className="btn btn_theme btn_md">
                                          Enquiry
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="tour_details_right_sidebar_wrapper">
                      <div className="tour_detail_right_sidebar">
                        <div className="shadow" style={{ "margin-bottom": "30px" }}>
                          <YoutubeComponent id={"0NMIZ-PTt8k"} />
                        </div>
                      </div>
                    </div>
                    {hotel?.location?.lat && hotel.location.long ? (
                      <div className="shadow sticky-sidebar">
                        <div className="google-map-code">
                          <iframe
                            src={`https://maps.google.com/maps?q=${hotel.location.lat},${hotel.location.long}&hl=es;z=14&output=embed`}
                            width="100%"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            aria-hidden="false"
                            tabIndex={0}
                          ></iframe>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </>
    </ClientLayout>
  );

  function renderRoomFilter() {
    return (
      <div className="tour_details_boxed" id="#filter">
        <h3 className="heading_theme">Room Filter</h3>
        {Object.keys(router.query).length > 1 && (
          <>
            <div className="h5">
              <h5>Applied Filter:</h5>
            </div>
            <div className="mb-3 left_side_search_heading">
              {Object.keys(router.query)
                .filter((item) => item != "uuid")
                .map((keyName: any, index: any) => {
                  return (
                    <Tag
                      key={index}
                      closable
                      onClose={() => clearFilter(keyName)}
                      className={"text-capitalize"}
                    >
                      {keyName}
                    </Tag>
                  );
                })}
            </div>
          </>
        )}
        <div className="flex-wrap row">
          <form onSubmit={handleSubmit(submitFilter)} className="row">
            <div className="col">
              <div className="custom-room-filter">
                {/* minimum price */}
                <label>Minimum price</label>
                <Controller
                  name="min_price"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <>
                        <Row>
                          <Col span={12}>
                            <AntSlider
                              step={5}
                              min={500}
                              max={1500}
                              onChange={onChange}
                              value={Number(value)}
                            />
                          </Col>
                          <Col span={4}>
                            <InputNumber
                              min={500}
                              max={1500}
                              style={{ margin: "0 16px" }}
                              value={Number(value)}
                              onChange={onChange}
                            />
                          </Col>
                        </Row>
                        {errors?.min_price && (
                          <p>{errors.min_price.message + ""}</p>
                        )}
                      </>
                    );
                  }}
                />
                {/* minimum price */}
                <label>MaxPrice price</label>
                <Controller
                  name="max_price"
                  control={control}
                  rules={{
                    validate: (val) =>
                      (val && val >= 100 && val <= 50000) ||
                      "Lowest Price should be in range",
                  }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <>
                        <Row>
                          <Col span={12}>
                            <AntSlider
                              step={5}
                              min={1500}
                              max={50000}
                              onChange={onChange}
                              value={Number(value)}
                            />
                          </Col>
                          <Col span={4}>
                            <InputNumber
                              min={1500}
                              max={50000}
                              style={{ margin: "0 16px" }}
                              value={Number(value)}
                              onChange={onChange}
                            />
                          </Col>
                        </Row>
                        {errors?.max_price && (
                          <p>{errors.max_price.message + ""}</p>
                        )}
                      </>
                    );
                  }}
                />
              </div>
            </div>
            <div className="col">
              <div className="tour_search_type text-align-right">
                <div className="custom-select text-align-left">
                  {!featureList && !featureError ? (
                    <Skeleton className="mt-3" active paragraph={false} />
                  ) : (
                    <>
                      <Controller
                        control={control}
                        name="features"
                        // rules={{ required: "Feature is required!" }}
                        render={({ field: { onChange, value } }) => (
                          <>
                            <Select
                              mode="multiple"
                              value={value}
                              onChange={onChange}
                              allowClear
                              status={errors?.features?.message && "error"}
                              size="large"
                              className="form-control mb-3"
                              placeholder="Select features"
                            >
                              {featureList?.map((feat: any) => (
                                <Option key={feat.id} value={feat.id}>
                                  {feat.title}
                                </Option>
                              ))}
                            </Select>
                            {errors?.features?.message && (
                              <div className="text-danger">
                                {errors?.features?.message + ""}
                              </div>
                            )}
                          </>
                        )}
                      />
                    </>
                  )}
                </div>
                <button className="btn btn-admin-dark" type="submit">
                  Apply
                </button>
              </div>
            </div>
          </form>
          {/* Features */}
        </div>
      </div>
    );
  }
}

export default HotelPage;
