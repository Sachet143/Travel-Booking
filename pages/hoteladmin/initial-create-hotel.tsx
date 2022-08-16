import { createHotel } from '@/api/hoteladmin/hotel';
import SuperadminLayout from '@/components/layout/superadmin'
import { isValidPassword, responseErrorHandler } from '@/services/helper';
import { Button, message, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
  { ssr: false }
);

const block = {
  blocks: [
    {
      key: "1",
      text: ``,
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

export default function InitialCreateHotel() {

  const [loading, setLoading] = useState(false);
  const { reset, control, register, formState: { errors }, handleSubmit, setError } = useForm()

  function createHotelHandler(data: any) {
    setLoading(true);
    createHotel(data)
      .then((res: any) => {
        toast.success(res.message);
        reset();
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  return (
    <div className="row justify-content-center" style={{ marginTop: "5em" }}>
      <div className="col-lg-6 card shadow">
        <div className="white_card card_height_100 mb_30">
          <div className="white_card_header">
            <div className="box_header m-0">
              <div className="main-title">
                <h3 className="m-0">Create Hotel</h3>
              </div>
            </div>
          </div>
          <div className="white_card_body">
            <h6 className="card-subtitle mb-4">
              Enter your hotel details and get a dashboard to manage it
            </h6>
            <form onSubmit={handleSubmit(createHotelHandler)}>
              <Button loading={loading} htmlType="submit" className="mb-5 btn btn-admin-primary">Submit</Button>
              {/* row 1 */}
              <Controller
                control={control}
                name="logo"
                render={({ field: { onChange, value } }) =>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader circular mb-3"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={onChange}
                  >
                    Logo
                  </Upload>
                }
              />
              {/* row 2 */}
              <div className="row mb-3">
                <div className="col-md-6 col-sm-12 form-group">
                  <label className="form-label">Hotel Name</label>
                  <input
                    {...register("name", { required: "Hotel Name is required!" })}
                    aria-invalid={!!errors?.name?.message}
                    className="form-control"
                    placeholder="Enter Admin Name"
                  />
                  {errors?.name?.message &&
                    <div className="text-danger">
                      {errors?.name?.message + ""}
                    </div>
                  }
                </div>
                <div className="col-md-6 col-sm-12 form-group">
                  <label className="form-label">Category</label>
                  <input
                    type={"select"}
                    {...register("category", { required: "Category is required!" })}
                    aria-invalid={!!errors?.category?.message}
                    className="form-control"
                    placeholder="Enter Category"
                  />
                  {errors?.category?.message &&
                    <div className="text-danger">
                      {errors?.category?.message + ""}
                    </div>
                  }
                </div>
              </div>
              {/* row 3 */}
              <div className="form-group mb-3">
                <label className="form-label">Description</label>
                <textarea
                  rows={4}
                  {...register("longitude", { required: "Longitude is required!" })}
                  aria-invalid={!!errors?.longitude?.message}
                  className="form-control"
                  placeholder="Enter Description"
                />
                {errors?.longitude?.message &&
                  <div className="text-danger">
                    {errors?.longitude?.message + ""}
                  </div>
                }

              </div>
              {/* row 4 */}
              <div className="row mb-3">
                <div className="col-md-6 col-sm-12 form-group">
                  <label className="form-label">Longitude</label>
                  <input
                    {...register("longitude", { required: "Longitude is required!" })}
                    aria-invalid={!!errors?.longitude?.message}
                    className="form-control"
                    placeholder="Enter Longitude"
                  />
                  {errors?.longitude?.message &&
                    <div className="text-danger">
                      {errors?.longitude?.message + ""}
                    </div>
                  }
                </div>
                <div className="col-md-6 col-sm-12 form-group">
                  <label className="form-label">Latitude</label>
                  <input
                    {...register("latitude", { required: "Latitude is required!" })}
                    aria-invalid={!!errors?.latitude?.message}
                    className="form-control"
                    placeholder="Enter Latitude"
                  />
                  {errors?.latitude?.message &&
                    <div className="text-danger">
                      {errors?.latitude?.message + ""}
                    </div>
                  }
                </div>
              </div>
              {/* row 5 */}
              <div className="row mb-3">
                <div className="col-md-4 col-sm-12 form-group">
                  <label className="form-label">Longitude</label>
                  <input
                    {...register("longitude", { required: "Longitude is required!" })}
                    aria-invalid={!!errors?.longitude?.message}
                    className="form-control"
                    placeholder="Enter Longitude"
                  />
                  {errors?.longitude?.message &&
                    <div className="text-danger">
                      {errors?.longitude?.message + ""}
                    </div>
                  }
                </div>
                <div className="col-md-4 col-sm-12 form-group">
                  <label className="form-label">Latitude</label>
                  <input
                    {...register("latitude", { required: "Latitude is required!" })}
                    aria-invalid={!!errors?.latitude?.message}
                    className="form-control"
                    placeholder="Enter Latitude"
                  />
                  {errors?.latitude?.message &&
                    <div className="text-danger">
                      {errors?.latitude?.message + ""}
                    </div>
                  }
                </div>
                <div className="col-md-4 col-sm-12 form-group">
                  <label className="form-label">Latitude</label>
                  <input
                    {...register("latitude", { required: "Latitude is required!" })}
                    aria-invalid={!!errors?.latitude?.message}
                    className="form-control"
                    placeholder="Enter Latitude"
                  />
                  {errors?.latitude?.message &&
                    <div className="text-danger">
                      {errors?.latitude?.message + ""}
                    </div>
                  }
                </div>
              </div>
              {/* row 6 */}
              <div className="form-group mb-3">
                <label className="form-label">Why Choose Us</label>
                <Controller
                  control={control}
                  name="logo"
                  render={({ field: { onChange, value } }) =>
                    <div className='wysiwyg-wrapper'>
                      <Editor
                        // @ts-ignore
                        contentState={block}
                        onContentStateChange={onChange}
                      />
                      {errors?.longitude?.message &&
                        <div className="text-danger">
                          {errors?.longitude?.message + ""}
                        </div>
                      }
                    </div>
                  }
                />
              </div>
              {/* row 7 */}
              <div className="form-group mb-3">
                <label className="form-label">Our Facilities</label>
                <Controller
                  control={control}
                  name="logo"
                  render={({ field: { onChange, value } }) =>
                    <div className='wysiwyg-wrapper'>
                      <Editor
                        // @ts-ignore
                        contentState={block}
                        onContentStateChange={onChange}
                      />
                      {errors?.longitude?.message &&
                        <div className="text-danger">
                          {errors?.longitude?.message + ""}
                        </div>
                      }
                    </div>
                  }
                />
              </div>
              <Button loading={loading} htmlType="submit" className="btn btn-admin-primary">Submit</Button>
            </form>
          </div>
        </div>
      </div >
    </div >
  )
}

function beforeUpload(file: RcFile) {
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