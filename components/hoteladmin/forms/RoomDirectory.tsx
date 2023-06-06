import axiosClient from "@/services/axios/clientfetch";
import { Button, message, Select, Skeleton, Switch } from "antd";
import Upload, { RcFile } from "antd/lib/upload";
import { Controller, UseFormReturn } from "react-hook-form";
import useSWR from "swr";

const customFetcher = (url: string) =>
  axiosClient(url).then((res: any) => res?.data);
const { Option } = Select;

interface IProps {
  submitHandler: (data: any) => void;
  loading: boolean;
  formMethods: UseFormReturn;
}

function RoomDirectoryForm({ submitHandler, loading, formMethods }: IProps) {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = formMethods;
  const { data: rooms, error: roomError } = useSWR(
    `/hotel/rooms`,
    customFetcher
  );

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {/* row 1 */}
      <div className="row mb-3">
        <div className="col-md-6 form-group">
          <label className="form-label">
            Directory name<span className="text-danger"> *</span>
          </label>
          <input
            {...register("name", { required: "Directory name is required!" })}
            aria-invalid={!!errors?.name?.message}
            className="form-control"
            placeholder="Super Deluxe Room"
          />
          {errors?.name?.message && (
            <div className="text-danger">{errors?.name?.message + ""}</div>
          )}
        </div>
        <div className="col-md-6 form-group text-center">
          <label className="form-label">Active</label>
          <div>
            <Controller
              control={control}
              name="status"
              render={({ field: { onChange, value } }) => (
                <Switch checked={value} onChange={onChange} />
              )}
            />
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="col-12 form-group">
        <label className="form-label">
          Hotel Rooms<span className="text-danger"> *</span>
        </label>
        <div className="">
          {!rooms && !roomError ? (
            <Skeleton className="mt-3" active paragraph={false} />
          ) : (
            <Controller
              control={control}
              name="hotel_room_id"
              rules={{ required: "hotel room is required!" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <Select
                    value={value}
                    onChange={onChange}
                    allowClear
                    status={errors?.hotel_room_id?.message && "error"}
                    size="large"
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select hotel room"
                  >
                    {rooms?.map((cat: any) => (
                      <Option key={cat.id} value={cat.id}>
                        {cat.title}
                      </Option>
                    ))}
                  </Select>
                  {errors?.hotel_room_id?.message && (
                    <div className="text-danger">
                      {errors?.hotel_room_id?.message + ""}
                    </div>
                  )}
                </>
              )}
            />
          )}
        </div>
      </div>
      <Button
        loading={loading}
        htmlType="submit"
        className="btn btn-admin-primary mt-3"
      >
        submit form
      </Button>
    </form>
  );
}

function beforeUpload(file: RcFile) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
    return Upload.LIST_IGNORE;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
    return Upload.LIST_IGNORE;
  }
  return isJpgOrPng && isLt2M;
}

export default RoomDirectoryForm;
