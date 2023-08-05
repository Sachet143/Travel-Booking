import { deleteServerFile } from "@/api/busadmin/files";
import { PlusOutlined } from "@ant-design/icons";
import { Button, message, Modal, Select, Skeleton, Upload } from "antd";
import { RcFile, UploadFile } from "antd/lib/upload";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import useSWR from "swr";
const { Option } = Select;
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
  { ssr: false }
);

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

function Bus({ submitHandler, showSeatModal, formMethods }: any) {
  const [rtfChanged, setRtfChanged] = useState(false);
  const { data: amenities } = useSWR("/bus/bus-amenities");
  const { data: types } = useSWR("/bus/bus-types");

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  // antd room images
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewVisible(false);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {/* 1st */}
      <div className="row mb-3">
        <div className="col-md-6 col-sm-12 form-group">
          <label className="form-label">
            Name<span className="text-danger"> *</span>
          </label>
          <input
            {...register("name", { required: "Bus Name is required!" })}
            aria-invalid={!!errors?.name?.message}
            className="form-control"
            placeholder="Enter Bus Name"
          />
          {errors?.name?.message && (
            <div className="text-danger">{errors?.name?.message + ""}</div>
          )}
        </div>
        <div className="col-md-6 col-sm-12 form-group">
          <label className="form-label">
            Plate Number<span className="text-danger"> *</span>
          </label>
          <input
            {...register("plate_number", {
              required: "Plate Number is required!",
            })}
            aria-invalid={!!errors?.plate_number?.message}
            className="form-control"
            placeholder="Enter Plate Number"
          />
          {errors?.plate_number?.message && (
            <div className="text-danger">
              {errors?.plate_number?.message + ""}
            </div>
          )}
        </div>
      </div>
      {/* 2nd */}
      <div className="row mb-3">
        <div className="col-6 form-group">
          <label className="form-label">
            Amenities<span className="text-danger"> *</span>
          </label>
          <div className="custom-select">
            {!amenities ? (
              <Skeleton className="mt-3" active paragraph={false} />
            ) : (
              <Controller
                control={control}
                name="amenities"
                rules={{ required: "Amenities is required!" }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Select
                      mode="multiple"
                      value={value}
                      onChange={onChange}
                      allowClear
                      status={errors?.amenities?.message && "error"}
                      size="large"
                      className="form-control"
                      placeholder="Select Amenities"
                    >
                      {amenities?.data?.map((cat: any) => (
                        <Option key={cat.id} value={cat.id}>
                          {cat.title}
                        </Option>
                      ))}
                    </Select>
                    {errors?.amenities?.message && (
                      <div className="text-danger">
                        {errors?.amenities?.message + ""}
                      </div>
                    )}
                  </>
                )}
              />
            )}
          </div>
        </div>
        <div className="col-6 form-group">
          <label className="form-label">
            Bus Type<span className="text-danger"> *</span>
          </label>
          <div className="custom-select">
            {!types ? (
              <Skeleton className="mt-3" active paragraph={false} />
            ) : (
              <Controller
                control={control}
                name="bus_type_id"
                rules={{ required: "Bus Type is required!" }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Select
                      value={value}
                      onChange={onChange}
                      allowClear
                      status={errors?.type?.message && "error"}
                      size="large"
                      className="form-control"
                      placeholder="Select type"
                    >
                      {types?.data?.map((cat: any) => (
                        <Option key={cat.id} value={cat.id}>
                          {cat.title}
                        </Option>
                      ))}
                    </Select>
                    {errors?.type?.message && (
                      <div className="text-danger">
                        {errors?.type?.message + ""}
                      </div>
                    )}
                  </>
                )}
              />
            )}
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className="form-group mb-3">
        <label className="form-label">Policies</label>
        <Controller
          control={control}
          name="policies"
          render={({ field: { onChange, value = null } }) => (
            <div className="wysiwyg-wrapper">
              {rtfChanged ? (
                <Editor
                  // @ts-ignore
                  initialcontentState={value}
                  onContentStateChange={onChange}
                />
              ) : (
                <Editor
                  // @ts-ignore
                  contentState={value}
                  onContentStateChange={(val: any) => {
                    setRtfChanged(true);
                    onChange(val);
                  }}
                />
              )}
              {errors?.policies?.message && (
                <div className="text-danger">
                  {errors?.policies?.message + ""}
                </div>
              )}
            </div>
          )}
        />
      </div>
      {/* 4th */}
      <div className="col-md-12 col-sm-12 form-group my-5">
        <Button
          className="w-100"
          size="large"
          type="primary"
          onClick={showSeatModal}
        >
          Select Seat Type
        </Button>
        {errors?.bus_category_id?.message && (
          <div className="text-danger">
            {errors?.bus_category_id?.message + ""}
          </div>
        )}
      </div>
      {/* 5th */}
      <div className="form-group my-4">
        <label className="form-label">
          Bus Images<span className="text-danger"> *</span>
        </label>
        <Controller
          control={control}
          name="files"
          rules={{ required: "Atleast one file required!" }}
          render={({ field: { onChange, value } }) => (
            <>
              <Upload
                onRemove={(val) => {
                  typeof val.uid === "number" && deleteServerFile(val.uid);
                }}
                beforeUpload={beforeUpload}
                maxCount={5}
                listType="picture-card"
                fileList={value}
                onPreview={handlePreview}
                onChange={({ fileList }: any) => onChange(fileList)}
              >
                {value?.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
              {errors?.files?.message && (
                <div className="text-danger">{errors?.files?.message + ""}</div>
              )}
            </>
          )}
        />
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

export default Bus;
