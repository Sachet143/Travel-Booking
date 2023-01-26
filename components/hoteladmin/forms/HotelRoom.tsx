
import { Button, Checkbox, message, Modal, Select, Skeleton, Switch } from 'antd';
import Upload, { RcFile, UploadFile } from 'antd/lib/upload';
import React, { useState } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import dynamic from "next/dynamic";
import { PlusOutlined } from '@ant-design/icons';
import { deleteServerFile } from '@/api/hoteladmin/files';
import axiosClient from '@/services/axios/clientfetch';
import useSWR from 'swr';

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod: any) => mod.Editor),
  { ssr: false }
);
const customFetcher = (url: string) => axiosClient(url).then((res: any) => res);
const { Option } = Select;

interface IProps {
  submitHandler: (data: any) => void;
  loading: boolean;
  formMethods: UseFormReturn;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

function HotelRoomForm({
  submitHandler,
  loading,
  formMethods,
}: IProps) {
  const { control, register, formState: { errors }, handleSubmit } = formMethods;
  const { data: features, error: featureError } = useSWR(`/room-features`, customFetcher);

  // wysiwyg
  const [rtfChanged, setRtfChanged] = useState(false);

  // antd room images
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handleCancel = () => setPreviewVisible(false);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
            placeholder="Super Deluxe Room"
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
              render={({ field: { onChange, value } }) =>
                <Switch checked={value} onChange={onChange} />
              }
            />
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="row my-3">
        <div className="col-md-4 form-group">
          <label className="form-label">Max People<span className='text-danger'> *</span></label>
          <input
            {...register("max_people", { required: "Max number of people is required!" })}
            aria-invalid={!!errors?.max_people?.message}
            className="form-control"
            placeholder="Super Deluxe Room"
          />
          {errors?.max_people?.message &&
            <div className="text-danger">
              {errors?.max_people?.message + ""}
            </div>
          }
        </div>
        <div className="col-md-4 col-sm-12 form-group">
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
        <div className="col-md-4 col-sm-12 form-group">
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
      <div className="col-12 form-group">
        <label className="form-label">Features<span className='text-danger'> *</span></label>
        <div className='custom-select'>
          {
            !features && !featureError ? <Skeleton className='mt-3' active paragraph={false} />
              :
              <Controller
                control={control}
                name="features"
                rules={{ required: "Feature is required!" }}
                render={({ field: { onChange, value } }) =>
                  <>
                    <Select
                      mode='multiple'
                      value={value}
                      onChange={onChange}
                      allowClear
                      status={errors?.features?.message && "error"}
                      size='large'
                      className="form-control"
                      placeholder="Select features"
                    >
                      {
                        features?.map((cat: any) => <Option key={cat.id} value={cat.id}>{cat.title}</Option>)
                      }
                    </Select>
                    {errors?.features?.message &&
                      <div className="text-danger">
                        {errors?.features?.message + ""}
                      </div>
                    }
                  </>
                }
              />
          }
        </div>
      </div>
      {/* row 4 */}
      <div className="row my-3">
        <div className="col-md-4 form-group">
          <label className="form-label">Breakfast</label><br />
          <Controller
            name="breakfast"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <Checkbox
                  checked={value}
                  onChange={e => onChange(e.target.checked)}
                />
              )
            }}
          />
          {errors?.price?.message &&
            <div className="text-danger">
              {errors?.price?.message + ""}
            </div>
          }
        </div>
        <div className="col-md-4 form-group">
          <label className="form-label">Dinner</label><br />
          <Controller
            name="dinner"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <Checkbox
                  checked={value}
                  onChange={e => onChange(e.target.checked)}
                />
              )
            }}
          />
          {errors?.price?.message &&
            <div className="text-danger">
              {errors?.price?.message + ""}
            </div>
          }
        </div>
        <div className="col-md-4 form-group">
          <label className="form-label">Lunch</label><br />
          <Controller
            name="lunch"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <Checkbox
                  checked={value}
                  onChange={e => onChange(e.target.checked)}
                />
              )
            }}
          />
          {errors?.price?.message &&
            <div className="text-danger">
              {errors?.price?.message + ""}
            </div>
          }
        </div>
      </div>
      {/* row 5 */}
      <div className="row my-3">
        <div className="col-md-4 form-group">
          <label className="form-label">Available Rooms<span className='text-danger'> *</span></label>
          <input
            {...register("available_rooms", { required: "Available Rooms is required!" })}
            aria-invalid={!!errors?.available_rooms?.message}
            className="form-control"
            placeholder="eg: 2"
          />
          {errors?.available_rooms?.message &&
            <div className="text-danger">
              {errors?.available_rooms?.message + ""}
            </div>
          }
        </div>
        <div className="col-md-4 form-group">
          <label className="form-label">King Bed</label>
          <input
            {...register("king_bed", { required: "King Bed number is required!" })}
            aria-invalid={!!errors?.king_bed?.message}
            className="form-control"
            placeholder="eg: 2"
          />
          {errors?.king_bed?.message &&
            <div className="text-danger">
              {errors?.king_bed?.message + ""}
            </div>
          }
        </div>
        <div className="col-md-4 form-group">
          <label className="form-label">Queen Bed</label>
          <input
            {...register("queen_bed", { required: "Queen Bed number is required!" })}
            aria-invalid={!!errors?.queen_bed?.message}
            className="form-control"
            placeholder="eg: 2"
          />
          {errors?.queen_bed?.message &&
            <div className="text-danger">
              {errors?.queen_bed?.message + ""}
            </div>
          }
        </div>
        <div className="mt-3 col-md-4 form-group">
          <label className="form-label">Single Bed</label>
          <input
            {...register("twin_bed", { required: "Available Rooms is required!" })}
            aria-invalid={!!errors?.twin_bed?.message}
            className="form-control"
            placeholder="eg: 2"
          />
          {errors?.twin_bed?.message &&
            <div className="text-danger">
              {errors?.twin_bed?.message + ""}
            </div>
          }
        </div>
        <div className="mt-3 col-md-4 form-group">
          <label className="form-label">Twin Bed</label>
          <input
            {...register("twin_bed", { required: "Available Rooms is required!" })}
            aria-invalid={!!errors?.twin_bed?.message}
            className="form-control"
            placeholder="eg: 2"
          />
          {errors?.twin_bed?.message &&
            <div className="text-danger">
              {errors?.twin_bed?.message + ""}
            </div>
          }
        </div>
        <div className="mt-3 col-md-4 form-group">
          <label className="form-label">Full Bed</label>
          <input
            {...register("full_bed", { required: "Available Rooms is required!" })}
            aria-invalid={!!errors?.full_bed?.message}
            className="form-control"
            placeholder="eg: 2"
          />
          {errors?.full_bed?.message &&
            <div className="text-danger">
              {errors?.full_bed?.message + ""}
            </div>
          }
        </div>
      </div>
      {/* row 5 */}
      <div className="form-group mb-3">
        <label className="form-label">included_excluded<span className='text-danger'> *</span></label>
        <Controller
          control={control}
          name="included_excluded" rules={{ required: "included_excluded facilities are required!" }}
          render={({ field: { onChange, value = null } }) =>
            <>
              <div className='wysiwyg-wrapper' aria-invalid={!!errors["included_excluded"]?.message}>
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
              {errors["included_excluded"]?.message &&
                <div className="text-danger">
                  {errors["included_excluded"]?.message + ""}
                </div>
              }
            </>
          }
        />
      </div>
      {/* row 6 */}
      <div className="form-group my-4">
        <label className="form-label">Room Images<span className='text-danger'> *</span></label>
        <Controller
          control={control}
          name="files"
          rules={{ required: "Atleast one file required!" }}
          render={({ field: { onChange, value } }) =>
            <>
              <Upload
                onRemove={val => { typeof val.uid === 'number' && deleteServerFile(val.uid) }}
                beforeUpload={beforeUpload}
                maxCount={5}
                listType="picture-card"
                fileList={value}
                onPreview={handlePreview}
                onChange={({ fileList }: any) => onChange(fileList)}
              >
                {value?.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
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
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
    return Upload.LIST_IGNORE;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
    return Upload.LIST_IGNORE;
  }
  return isJpgOrPng && isLt2M;
};

export default HotelRoomForm