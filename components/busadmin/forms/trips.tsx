import { Button, Select, Skeleton } from 'antd';
import { Controller } from 'react-hook-form';
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import useSWR from 'swr';
const { Option } = Select;

function Trips({ submitHandler, formMethods }: any) {
  const { data: buses } = useSWR('/bus/buses');
  const { data: routes } = useSWR('/bus/routes');

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div id="Routes">
        {/* 1st */}
        <div className="row mb-3">
          {/* Buses */}
          <div className="col-6 form-group">
            <label className="form-label">
              Bus
              <span className="text-danger"> *</span>
            </label>
            <div className="custom-select">
              {!buses ? (
                <Skeleton className="mt-3" active paragraph={false} />
              ) : (
                <Controller
                  control={control}
                  name="bus_id"
                  rules={{ required: "Bus is required!" }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Select
                        showSearch
                        value={value}
                        onChange={onChange}
                        allowClear
                        status={errors?.bus_id?.message && "error"}
                        size="large"
                        className="form-control"
                        placeholder="Select Bus"
                      >
                        {buses?.data?.map((cat: any) => (
                          <Option key={cat.id} value={cat.id}>
                            {cat.plate_number}
                          </Option>
                        ))}
                      </Select>
                      {errors?.bus_id?.message && (
                        <div className="text-danger">
                          {errors?.bus_id?.message + ""}
                        </div>
                      )}
                    </>
                  )}
                />
              )}
            </div>
          </div>
          {/* Routes */}
          <div className="col-6 form-group">
            <label className="form-label">
              Route
              <span className="text-danger"> *</span>
            </label>
            <div className="custom-select">
              {!routes ? (
                <Skeleton className="mt-3" active paragraph={false} />
              ) : (
                <Controller
                  control={control}
                  name="bus_route_id"
                  rules={{ required: "Route is required!" }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Select
                        value={value}
                        onChange={onChange}
                        allowClear
                        status={errors?.routes?.message && "error"}
                        size="large"
                        className="form-control"
                        placeholder="Select Final Location"
                      >
                        {routes?.data?.map((cat: any) => (
                          <Option key={cat.id} value={cat.id}>
                            {cat.start_destination} - {cat.final_destination}
                          </Option>
                        ))}
                      </Select>
                      {errors?.routes?.message && (
                        <div className="text-danger">
                          {errors?.routes?.message + ""}
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
        <div className="row">
          <div className="col-md-6 form-group">
            <div className="form-group mb-3">
              <label className="form-label">Departure Date<span className="text-danger"> *</span></label>
              <div />
              <div className='f-width-date'>
                <Controller
                  control={control}
                  name="departure_dates"
                  rules={{ required: "Date is required!" }}
                  render={({ field: { onChange, value = [] } }) => (
                    <DatePicker
                      // @ts-ignore
                      onChange={e => onChange(e?.map((f: any) => new Date(f)))}
                      value={value}
                      placeholder='Select Multiple Date'
                      style={{ height: "50px" }}
                      multiple
                      plugins={[
                        <DatePanel key={value} />
                      ]}
                    />
                  )}
                />
                {errors?.departure_dates?.message && (
                  <div className="text-danger">
                    {errors?.departure_dates?.message + ""}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 form-group">
            <div className="form-group mb-3">
              <label className="form-label">Departure Time<span className="text-danger"> *</span></label>
              <div />
              <input
                {...register(`departure_time`, { required: "Time is required!" })}
                aria-invalid={!!errors?.departure_time?.message}
                className="form-control"
                placeholder="07:30"
              />
              {errors?.departure_time?.message && (
                <div className="text-danger">{errors?.departure_time.message + ""}</div>
              )}
            </div>
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
    </form >
  )
}

export default Trips