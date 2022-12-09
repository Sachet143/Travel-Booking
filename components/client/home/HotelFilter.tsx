import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import useSWR from 'swr'

function HotelFilter() {
  const router = useRouter();
  const { data: categories } = useSWR('/categories');

  const [filter, setFilter] = useState({
    whole_location: "",
    max_price: "",
    categories: ""
  })

  function handleFilter(e: any) {
    e.preventDefault();
    router.push({ pathname: '/hotels', query: filter });
  }

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
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="flight_Search_boxed">
                    <p>Destination</p>
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      value={filter.whole_location}
                      onChange={e => setFilter({ ...filter, whole_location: e.target.value })}
                    />
                    <span>Where are you going?</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="flight_Search_boxed" style={{ height: "100%" }}>
                    <p>Price</p>
                    <input
                      type="text"
                      placeholder="What is your budget?"
                      value={filter.max_price}
                      onChange={e => setFilter({ ...filter, max_price: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                  <div className="flight_Search_boxed dropdown_passenger_area" style={{ height: "100%" }}>
                    <p>Type</p>
                    <div className="dropdown">
                      {
                        !categories ? <Skeleton active paragraph={false} />
                          :
                          <select
                            placeholder='Type'
                            defaultValue={""}
                            onChange={e => setFilter({ ...filter, categories: e.target.value })}
                            style={{
                              color: "rgb(118, 118, 118)",
                              fontWeight: "500",
                              fontSize: "22px",
                              width: "100%",
                              height: "35px",
                              background: "none",
                              border: "none",
                            }}>
                            <option value="" disabled selected>Select Type</option>
                            {
                              categories.map((cat: any) =>
                                <option key={cat.id} value={cat.id}>{cat.title}</option>
                              )
                            }
                          </select>
                      }
                    </div>
                  </div>
                </div>
                <div className="top_form_search_button">
                  <button onClick={handleFilter} className="btn btn_theme btn_md">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelFilter