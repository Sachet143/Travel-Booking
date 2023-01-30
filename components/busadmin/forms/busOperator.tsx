
import { Button, message, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { Controller, UseFormReturn } from 'react-hook-form';

interface IProps {
  submitHandler: (data: any) => void;
  loading: boolean;
  formMethods: UseFormReturn;
}

function BusOperatorForm({ submitHandler, loading, formMethods }: IProps) {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Button
        loading={loading}
        htmlType="submit"
        className="mb-4 btn btn-admin-primary"
      >
        submit form
      </Button>
      {/* row 1 */}
      <div className="row mb-3">
        <div className="col-md-6 col-sm-12">
          <label className="form-label">
            Logo<span className="text-danger">*</span>
          </label>
          <Controller
            control={control}
            name="logo"
            rules={{ required: "Logo is required!" }}
            render={({ field: { onChange, value } }) => (
              <>
                <Upload
                  previewFile={value}
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={(val) => onChange(val.file.originFileObj)}
                >
                  {renderImagePlaceholder(value)}
                </Upload>
                {errors?.logo?.message && (
                  <div className="text-danger">Logo is Required</div>
                )}
              </>
            )}
          />
        </div>
      </div>
      {/* row 2 */}
      <div className="row mb-3">
        <div className="col-md-12 col-sm-12 form-group">
          <label className="form-label">
            Bus Operator Name<span className="text-danger"> *</span>
          </label>
          <input
            {...register("name", {
              required: "Bus Operator Name is required!",
            })}
            aria-invalid={!!errors?.name?.message}
            className="form-control"
            placeholder="Enter Bus Operator Name"
          />
          {errors?.name?.message && (
            <div className="text-danger">{errors?.name?.message + ""}</div>
          )}
        </div>
      </div>
      {/* row 3 */}
      <div className="row mb-3">
        <div className="col-md-12 col-sm-12 form-group">
          <label className="form-label">
            Phone Number<span className="text-danger"> *</span>
          </label>
          <input
            {...register("phone_no", {
              required: "Bus Operator Phone Number is required!",
            })}
            aria-invalid={!!errors?.phone_no?.message}
            className="form-control"
            placeholder="Enter Bus Operator Phone Number"
          />
          {errors?.phone_no?.message && (
            <div className="text-danger">{errors?.phone_no?.message + ""}</div>
          )}
        </div>
      </div>
      {/* row 4 */}
      <div className="row mb-3">
        <div className="col-md-12 col-sm-12 form-group">
          <label className="form-label">
            Address<span className="text-danger"> *</span>
          </label>
          <input
            {...register("address", {
              required: "Bus Operator Address is required!",
            })}
            aria-invalid={!!errors?.address?.message}
            className="form-control"
            placeholder="Enter Bus Operator Address"
          />
          {errors?.address?.message && (
            <div className="text-danger">{errors?.address?.message + ""}</div>
          )}
        </div>
      </div>
      {/* row 5 */}
      <div className="form-group my-3">
        <label className="form-label">
          Description<span className="text-danger"> *</span>
        </label>
        <textarea
          rows={4}
          {...register("description", {
            required: "Description is required!",
            validate: (desc) =>
              desc?.length > 20 || "Description must be atleast 20 letters!",
          })}
          aria-invalid={!!errors?.description?.message}
          className="form-control"
          placeholder="Enter Description"
        />
        {errors?.description?.message && (
          <div className="text-danger">{errors?.description?.message + ""}</div>
        )}
      </div>
      <Button
        loading={loading}
        htmlType="submit"
        className="btn btn-admin-primary"
      >
        submit form
      </Button>
    </form>
  );
}

function renderImagePlaceholder(value: File | string, defaultText?: string) {
  if (typeof value === "string") {
    return (
      <img
        src={value}
        alt="logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        }}
        className="border"
      />
    );
  } else if (value) {
    return (
      <img
        src={URL.createObjectURL(value)}
        alt="logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
    );
  } else {
    return defaultText ?? "Upload";
  }
}

function beforeUpload(file: RcFile) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

export default BusOperatorForm;
