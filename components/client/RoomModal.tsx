import { imageFullPath } from "@/services/helper";
import { Empty, Modal } from "antd";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Slider from "react-slick";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
  { ssr: false }
);

const RoomModal = ({ viewRoom, setViewRoom }: any) => {
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();

  return (
    <Modal
      visible={!!viewRoom}
      title={viewRoom?.title}
      onCancel={() => setViewRoom(null)}
      footer={null}
      width={"60%"}
    >
      <section id="tour_booking_submission">
        <div className="container">
          <div className="row">
            <>
              <div className="col-lg-12">
                {viewRoom?.files?.length ? (
                  <>
                    <div className="slider slider-for">
                      <Slider
                        asNavFor={nav2}
                        ref={(slider1) => setNav1(slider1)}
                        adaptiveHeight={true}
                      >
                        {viewRoom?.files?.map((item: any) => {
                          return (
                            <div
                              key={item.id}
                              className="single-slider-wrapper"
                            >
                              <img src={imageFullPath(item.path)} alt="img" />
                            </div>
                          );
                        })}
                      </Slider>
                    </div>

                    <div className="slider slider-nav">
                      <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        // @ts-ignore
                        unslick={viewRoom?.files?.length < 4}
                        adaptiveHeight={true}
                      >
                        {viewRoom?.files.map((item: any) => {
                          return (
                            <div className="cursor-pointer" key={item.id}>
                              <img src={imageFullPath(item?.path)} alt="img" />
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
              <div className="col-lg-4">
                <div className="tour_details_right_sidebar_wrapper">
                  <div className="tour_detail_right_sidebar">
                    <div className="tour_details_right_boxed">
                      <div className="tour_details_right_box_heading">
                        <h3>{viewRoom?.title}</h3>
                      </div>
                      {viewRoom && viewRoom["included_excluded"] && (
                        <div className="tour_package_details_bar_list">
                          <h5>included_excluded</h5>
                          <Editor
                            //@ts-ignore
                            toolbarHidden
                            contentState={JSON.parse(
                              `{\"blocks\":[{\"key\":\"d675\",\"text\":\"our facilities are top notch\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}`
                            )}
                            // contentState={JSON.parse(viewRoom["included_excluded"])}
                            readOnly
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="tour_details_right_sidebar_wrapper">
                  <div className="tour_detail_right_sidebar">
                    <div className="tour_details_right_boxed">
                      <div className="tour_package_details_bar_price">
                        <h3>Price Per Day</h3>
                        <div className="tour_package_bar_price">
                          {viewRoom?.discount_price ? (
                            <>
                              <h6>
                                <del>NRs.{viewRoom?.price}</del>
                              </h6>
                              <h3>
                                NRs.
                                {viewRoom?.price - viewRoom?.discount_price}
                              </h3>
                            </>
                          ) : (
                            <h6>NRs.{viewRoom?.price}</h6>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default RoomModal;
