import Dropdown from "@/components/common/Dropdown";
import { Select, Skeleton } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

function HotelFilter() {
  const router = useRouter();
  const { data: categories } = useSWR("/categories");
  const [roomCount, setRoomCount] = useState(1);
  const [finalTotal, setFinalTotal] = useState({
    adult: 2,
    children: 0,
  });
  const [sumGuests, setSumGuests] = useState(1);

  const [filter, setFilter] = useState({
    whole_location: "",
    max_price: "",
    categories: "",
    max_room: roomCount,
    max_people: sumGuests,
  });

  const [dropDown, setDropDown] = useState(false);

  function handleFilter(e: any) {
    e.preventDefault();
    router.push({ pathname: "/hotels", query: filter });
  }

  useEffect(() => {
    setSumGuests(finalTotal.adult + finalTotal.children);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilter({ ...filter, max_people: sumGuests });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sumGuests]);

  return (
    <div
      className="tab-pane fade"
      id="hotels"
      role="tabpanel"
      aria-labelledby="hotels-tab"
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="tour_search_form">
            <form action="#!">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="flight_Search_boxed">
                    <p>Destination</p>
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      value={filter.whole_location}
                      onChange={(e) =>
                        setFilter({ ...filter, whole_location: e.target.value })
                      }
                    />
                    <span>Where are you going?</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <div
                    className="flight_Search_boxed"
                    style={{ height: "100%" }}
                  >
                    <p>Price</p>
                    <input
                      type="text"
                      placeholder="What is your budget?"
                      value={filter.max_price}
                      onChange={(e) =>
                        setFilter({ ...filter, max_price: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-3  col-md-6 col-sm-12 col-12">
                  <div
                    className="flight_Search_boxed dropdown_passenger_area"
                    style={{ height: "100%" }}
                  >
                    <p>Type</p>
                    <div className="dropdown">
                      {!categories ? (
                        <Skeleton active paragraph={false} />
                      ) : (
                        <>
                          <Select
                            className="custom_bus_select data-toggle bus_dropdown"
                            placeholder="Select"
                            dropdownAlign={{ offset: [0, 10] }}
                            style={{ width: 250 }}
                            size={"large"}
                            onChange={(value) =>
                              setFilter({
                                ...filter,
                                categories: value,
                              })
                            }
                            bordered={false}
                            options={categories.map((cat: any) => {
                              return {
                                value: cat.id,
                                label: cat.title,
                              };
                            })}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="flight_Search_boxed dropdown_passenger_area">
                    <p>Guests</p>
                    <div className="dropdown home_dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        onClick={() => setDropDown(!dropDown)}
                      >
                        {sumGuests} Guests and {roomCount} Room
                      </button>
                      {dropDown && (
                        <Dropdown
                          setSumGuests={setSumGuests}
                          setDropDown={setDropDown}
                          setFinalTotal={setFinalTotal}
                          adultCount={finalTotal.adult}
                          childrenCount={finalTotal.children}
                          roomCount={roomCount}
                          setRoomCount={setRoomCount}
                        />
                      )}
                    </div>
                    <div className="d-flex">
                      <span>
                        {finalTotal.adult ? `Adult ${finalTotal.adult}` : null}
                      </span>
                      <span className="mx-3">
                        {finalTotal.children
                          ? `Children ${finalTotal.children}`
                          : null}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="top_form_search_button">
                  <button
                    onClick={handleFilter}
                    className="btn btn_theme btn_md"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelFilter;
