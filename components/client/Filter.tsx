import { Select, Skeleton } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import useSWR from "swr";

const Filter = () => {
  const { data: featureList, error: featureError } = useSWR(`/room-features`);
  const { data: activitiesList, error: activitiesError } =
    useSWR(`/activities`);

  const {
    register,
    control,
    formState: { errors, touchedFields, dirtyFields },
    getValues,
    reset,
    handleSubmit,
    watch,
  } = useForm<any>({
    defaultValues: {
      search: null,
      min_price: 500,
      max_price: 50000,
      country: "Nepal",
      state: null,
      city: null,
      features: [],
      categories: [],
    },
  });

  const { Option } = Select;
  return (
    <div className="left_side_search_area">
      <div className="left_side_search_boxed">
        <div className="left_side_search_heading">
          <h5>Filter by Hotel</h5>
        </div>
        <div className="filter_review">
          <form className="review_star">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault1"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_asse"></i>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault2"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault3"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault5"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="left_side_search_boxed">
        <div className="left_side_search_heading">
          <h5>Filter by Room</h5>
        </div>
        <div className="filter_review">
          <form className="review_star">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefaulta"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefaulf21"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_asse"></i>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefaultf3"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefaultf4"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefaultf5"
              />
              <label className="form-check-label">
                <i className="fas fa-star color_theme"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
                <i className="fas fa-star color_asse"></i>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Features */}
      <div className="left_side_search_heading">
        <h5>Features</h5>
      </div>
      <div className="tour_search_type">
        <div className="custom-select">
          {!featureList && !featureError ? (
            <Skeleton className="mt-3" active paragraph={false} />
          ) : (
            <>
              {" "}
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
      </div>
    </div>
  );
};

export default Filter;
