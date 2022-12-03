import { createRoomFacility } from '@/api/superadmin/miscs/room_facilities';
import SuperadminLayout from '@/components/layout/superadmin'
import RoomFacilityList from '@/components/layout/superadmin/miscs/RoomFacilitiesTable';
import { responseErrorHandler, useMatchMutate } from '@/services/helper';
import { Button } from 'antd';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

function CreateHotels() {
  const [loading, setLoading] = useState(false);
  const { reset, register, formState: { errors }, handleSubmit, setError } = useForm();
  const matchMutate = useMatchMutate();

  function createFacilityHandler(data: any) {
    setLoading(true);
    createRoomFacility(data)
      .then((res: any) => {
        matchMutate('/admin/room-features');
        toast.success(res.message);
        reset();
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  return (
    <SuperadminLayout title="Room Facilities">
      <div className="col-lg-12">
        <div className="white_card mb_30">
          <div className="white_card_header">
            <div className="box_header m-0">
              <div className="main-title">
                <h3 className="m-0">Create Room Facilities</h3>
              </div>
            </div>
          </div>
          <div className="white_card_body">
            <h6 className="card-subtitle mb-4">
              Create room facilities for hotel rooms to select from
            </h6>
            <form onSubmit={handleSubmit(createFacilityHandler)}>
              <div className="row">
                {/* title */}
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label className="form-label">Title</label>
                    <input
                      {...register("title", { required: "Icon Title is required!" })}
                      aria-invalid={!!errors?.title?.message}
                      className="form-control"
                      placeholder="Enter Icon Title"
                    />
                    {errors?.title?.message &&
                      <div className="text-danger">
                        {errors?.title?.message + ""}
                      </div>
                    }
                  </div>
                </div>
              </div>
              <Button loading={loading} htmlType="submit" className="btn btn-admin-primary">Submit</Button>
            </form>
          </div>
        </div>
        <RoomFacilityList />
      </div>
    </SuperadminLayout>
  )
}

export default CreateHotels