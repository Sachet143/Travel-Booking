/* eslint-disable @next/next/no-img-element */

import { Button, message, Switch } from 'antd';
import { RcFile, UploadProps } from 'antd/lib/upload';
import React, { useState } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import dynamic from "next/dynamic";
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
  { ssr: false }
);

interface IProps {
  submitHandler: (data: any) => void;
  loading: boolean;
  formMethods: UseFormReturn;
}

function HotelRoomForm({
  submitHandler,
  loading,
  formMethods,
}: IProps) {
  const { control, register, formState: { errors }, handleSubmit } = formMethods;

  const [rtfChanged, setRtfChanged] = useState(false);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {/* row 1 */}
      <div className="row mb-3">
        <div className="col-md-6 form-group">
          <label className="form-label">Title<span className='text-danger'> *</span></label>
          <input
            {...register("title", { required: "Room Title is required!" })}
            aria-invalid={!!errors?.title?.message}
            className="form-control"
            placeholder="Enter Room Title"
          />
          {errors?.title?.message &&
            <div className="text-danger">
              {errors?.title?.message + ""}
            </div>
          }
        </div>
        <div className="col-md-6 form-group text-center">
          <label className="form-label">Active</label>
          <div>
            <Controller
              control={control}
              name="status"
              render={({ field: { onChange, value = true } }) =>
                <Switch checked={value} onChange={onChange} />
              }
            />
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="row mb-3">
        <div className="col-md-6 col-sm-12 form-group">
          <label className="form-label">Price<span className='text-danger'> *</span></label>
          <input
            {...register("price", {
              required: "Room Price is required!",
              validate: price => !isNaN(price) || "Price must be a number"
            })}
            aria-invalid={!!errors?.price?.message}
            className="form-control"
            placeholder="Enter Room Price"
          />
          {errors?.price?.message &&
            <div className="text-danger">
              {errors?.price?.message + ""}
            </div>
          }
        </div>
        <div className="col-md-6 col-sm-12 form-group">
          <label className="form-label">Discount Price</label>
          <input
            {...register("discount_price", {
              value: 0,
              validate: discount_price => !discount_price || !isNaN(discount_price) || "Discount Price must be a number"
            })}
            aria-invalid={!!errors?.discount_price?.message}
            className="form-control"
            placeholder="Enter Discount Price"
          />
          {errors?.discount_price?.message &&
            <div className="text-danger">
              {errors?.discount_price?.message + ""}
            </div>
          }
        </div>
      </div>
      {/* row 3 */}
      <div className="form-group mb-3">
        <label className="form-label">Included/Excluded<span className='text-danger'> *</span></label>
        <Controller
          control={control}
          name="included/excluded" rules={{ required: "Included/Excluded facilities are required!" }}
          render={({ field: { onChange, value = null } }) =>
            <>
              <div className='wysiwyg-wrapper' aria-invalid={!!errors["included/excluded"]?.message}>
                {rtfChanged
                  ?
                  <Editor
                    // @ts-ignore
                    initialcontentState={value}
                    onContentStateChange={onChange}
                  />
                  :
                  <Editor
                    // @ts-ignore
                    contentState={value}
                    onContentStateChange={(val: any) => {
                      setRtfChanged(true);
                      onChange(val);
                    }}
                  />
                }
              </div>
              {errors["included/excluded"]?.message &&
                <div className="text-danger">
                  {errors["included/excluded"]?.message + ""}
                </div>
              }
            </>
          }
        />
      </div>
      {/* row 4 */}
      <div className="form-group my-4">
        <label className="form-label">Room Images<span className='text-danger'> *</span></label>
        <Controller
          control={control}
          name="files"
          rules={{ required: "Atleast one file required!" }}
          render={({ field: { onChange, value } }) =>
            <>
              <div aria-invalid={!!errors?.files?.message}>
                <Dragger
                  beforeUpload={beforeUpload}
                  fileList={value}
                  maxCount={5}
                  multiple
                  onChange={({ fileList }) => onChange(fileList)}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p></Dragger>
              </div>
              {errors?.files?.message &&
                <div className="text-danger">
                  {errors?.files?.message + ""}
                </div>
              }
            </>
          }
        />
      </div>
      <Button loading={loading} htmlType="submit" className="btn btn-admin-primary">submit form</Button>
    </form>
  )
}

function beforeUpload(file: RcFile) {
  console.log({ file })
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export default HotelRoomForm