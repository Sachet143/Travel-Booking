import { Button, Radio, Select, Skeleton } from "antd";
import { Controller, useFieldArray } from "react-hook-form";
import useSWR from "swr";
const { Option } = Select;

function BusRoutes({ submitHandler, formMethods }: any) {
  const { data: locations } = useSWR("/bus/bus-locations");

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const {
    append: appendBoards,
    remove: removeBoards,
    fields: fieldsBoards,
  } = useFieldArray({ control, name: "boards" } as any);
  const {
    append: appendDrops,
    remove: removeDrops,
    fields: fieldsDrops,
  } = useFieldArray({ control, name: "drops" } as any);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div id="Routes">
        {/* 1st */}
        <div className="row mb-3">
          {/* Start Location */}
          <div className="col-6 form-group">
            <label className="form-label">
              Start Location
              <span className="text-danger"> *</span>
            </label>
            <div className="custom-select">
              {!locations ? (
                <Skeleton className="mt-3" active paragraph={false} />
              ) : (
                <Controller
                  control={control}
                  name="start_destination"
                  rules={{ required: "Start Location is required!" }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Select
                        showSearch
                        value={value}
                        onChange={onChange}
                        allowClear
                        status={errors?.start_destination?.message && "error"}
                        size="large"
                        className="form-control"
                        placeholder="Select Start Location"
                      >
                        {locations?.data?.map((cat: any) => (
                          <Option key={cat.id} value={cat.address}>
                            {cat.address}
                          </Option>
                        ))}
                      </Select>
                      {errors?.start_destination?.message && (
                        <div className="text-danger">
                          {errors?.start_destination?.message + ""}
                        </div>
                      )}
                    </>
                  )}
                />
              )}
            </div>
          </div>
          {/* Final Location */}
          <div className="col-6 form-group">
            <label className="form-label">
              End Destination
              <span className="text-danger"> *</span>
            </label>
            <div className="custom-select">
              {!locations ? (
                <Skeleton className="mt-3" active paragraph={false} />
              ) : (
                <Controller
                  control={control}
                  name="final_destination"
                  rules={{ required: "Final Destination is required!" }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Select
                        showSearch
                        value={value}
                        onChange={onChange}
                        allowClear
                        status={errors?.final_destination?.message && "error"}
                        size="large"
                        className="form-control"
                        placeholder="Select Final Location"
                      >
                        {locations?.data?.map((cat: any) => (
                          <Option key={cat.id} value={cat.address}>
                            {cat.address}
                          </Option>
                        ))}
                      </Select>
                      {errors?.final_destination?.message && (
                        <div className="text-danger">
                          {errors?.final_destination?.message + ""}
                        </div>
                      )}
                    </>
                  )}
                />
              )}
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="form-group mb-3">
          <label className="form-label">Shift</label>
          <Controller
            control={control}
            name="shift"
            render={({ field: { onChange, value = null } }) => (
              <div>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value="Day">Day</Radio>
                  <Radio value="Night">Night</Radio>
                </Radio.Group>
              </div>
            )}
          />
        </div>
        {/* 3rd */}
        <div className="form-group mb-3">
          <label className="form-label">Description</label>
          <textarea
            rows={4}
            {...register("description")}
            aria-invalid={!!errors?.description?.message}
            className="form-control"
            placeholder="Enter Description"
          />
          {errors?.description?.message && (
            <div className="text-danger">
              {errors?.description?.message + ""}
            </div>
          )}
        </div>
      </div>
      <hr />
      {/* Bus Station */}
      <div id="Stations">
        <div className="row">
          {/* boards */}
          <div className="col-md-12 mb-3">
            <div className="d-flex gap-3">
              <h4>Board</h4>
              <Button
                size="small"
                type="primary"
                onClick={() => appendBoards({ location: "", time: "" })}
              >
                + Add
              </Button>
            </div>
            {fieldsBoards.map((field, i) => (
              <div className="row" key={field.id}>
                <div className="col-md-4 form-group mb-3">
                  <label className="form-label">Location</label>
                  {!locations ? (
                    <Skeleton className="mt-3" active paragraph={false} />
                  ) : (
                    <Controller
                      control={control}
                      name={`boards.${i}.location`}
                      rules={{ required: "Location is required!" }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <Select
                            showSearch
                            value={value}
                            onChange={onChange}
                            allowClear
                            status={
                              errors?.start_destination?.message && "error"
                            }
                            size="large"
                            className="form-control"
                            placeholder="Select Start Location"
                          >
                            {locations?.data?.map((cat: any) => (
                              <Option key={cat.id} value={cat.address}>
                                {cat.address}
                              </Option>
                            ))}
                          </Select>
                          {errors?.boards?.[i]?.location?.message && (
                            <div className="text-danger">
                              {errors?.boards?.[i]?.location.message + ""}
                            </div>
                          )}
                        </>
                      )}
                    />
                  )}
                </div>
                <div className="col-md-4 form-group mb-3">
                  <label className="form-label">Time (In Minutes)</label>
                  <input
                    {...register(`boards.${i}.time`, {
                      required: "Time is required!",
                    })}
                    aria-invalid={!!errors?.boards?.[i]?.time?.message}
                    className="form-control"
                    placeholder="Enter Location"
                  />
                  {errors?.boards?.[i]?.time?.message && (
                    <div className="text-danger">
                      {errors?.boards?.[i]?.time.message + ""}
                    </div>
                  )}
                </div>
                <div className="col-md-4 form-group mb-3 align-self-center">
                  <Button
                    size="small"
                    danger
                    onClick={() => fieldsBoards.length > 1 && removeBoards(i)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <hr />
          {/* destination */}
          <div className="col-md-12 mb-3">
            <div className="d-flex gap-3">
              <h4>Drop</h4>
              <Button
                size="small"
                type="primary"
                onClick={() =>
                  appendDrops({ location: "", time: "", price: "" })
                }
              >
                + Add
              </Button>
            </div>
            {fieldsDrops.map((field, i) => (
              <div className="row" key={field.id}>
                <div className="col-md-3 form-group mb-3">
                  <label className="form-label">Location</label>
                  {!locations ? (
                    <Skeleton className="mt-3" active paragraph={false} />
                  ) : (
                    <Controller
                      control={control}
                      name={`drops.${i}.location`}
                      rules={{ required: "Location is required!" }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <Select
                            showSearch
                            value={value}
                            onChange={onChange}
                            allowClear
                            status={
                              errors?.start_destination?.message && "error"
                            }
                            size="large"
                            className="form-control"
                            placeholder="Select Start Location"
                          >
                            {locations?.data?.map((cat: any) => (
                              <Option key={cat.id} value={cat.address}>
                                {cat.address}
                              </Option>
                            ))}
                          </Select>
                          {errors?.drops?.[i]?.location?.message && (
                            <div className="text-danger">
                              {errors?.drops?.[i]?.location?.message + ""}
                            </div>
                          )}
                        </>
                      )}
                    />
                  )}
                </div>
                <div className="col-md-3 form-group mb-3">
                  <label className="form-label">Time (In Minutes)</label>
                  <input
                    {...register(`drops.${i}.time`, {
                      required: "Time is required!",
                    })}
                    aria-invalid={!!errors?.drops?.[i]?.time?.message}
                    className="form-control"
                    placeholder="Enter Time"
                  />
                  {errors?.drops?.[i]?.time?.message && (
                    <div className="text-danger">
                      {errors?.drops?.[i]?.time.message + ""}
                    </div>
                  )}
                </div>
                <div className="col-md-3 form-group mb-3">
                  <label className="form-label">Price</label>
                  <input
                    {...register(`drops.${i}.price`, {
                      required: "Price is required!",
                    })}
                    aria-invalid={!!errors?.drops?.[i]?.time?.message}
                    className="form-control"
                    placeholder="Enter Price"
                  />
                  {errors?.drops?.[i]?.time?.message && (
                    <div className="text-danger">
                      {errors?.drops?.[i]?.time.message + ""}
                    </div>
                  )}
                </div>
                <div className="col-md-3 form-group mb-3 align-self-center">
                  <Button
                    size="small"
                    danger
                    onClick={() => fieldsDrops.length > 1 && removeDrops(i)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12 form-group  mb-3">
        <Button
          // loading={loading}
          htmlType="submit"
          className="btn btn-admin-primary"
        >
          submit form
        </Button>
      </div>
    </form>
  );
}

export default BusRoutes;
