import { createHotelFacility } from '@/api/superadmin/miscs/facilities';
import SuperadminLayout from '@/components/layout/superadmin'
import HotelFacilityList from '@/components/layout/superadmin/miscs/FacilitiesTable';
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
    createHotelFacility(data)
      .then((res: any) => {
        matchMutate('/admin/features');
        toast.success(res.message);
        reset();
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  return (
    <SuperadminLayout title="Hotel Facilities">
      <div className="col-lg-12">
        <div className="white_card mb_30">
          <div className="white_card_header">
            <div className="box_header m-0">
              <div className="main-title">
                <h3 className="m-0">Create Hotel Facilities</h3>
              </div>
            </div>
          </div>
          <div className="white_card_body">
            <h6 className="card-subtitle mb-4">
              Create hotel facilities for hotels to select from
            </h6>
            <form onSubmit={handleSubmit(createFacilityHandler)}>
              <div className="row">
                {/* icon */}
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label className="form-label">Icon Class</label>
                    <input
                      {...register("icon_link", { required: "Icon Class is required!" })}
                      aria-invalid={!!errors?.icon_link?.message}
                      className="form-control"
                      placeholder="Enter Icon Class"
                    />
                    {errors?.icon_link?.message &&
                      <div className="text-danger">
                        {errors?.icon_link?.message + ""}
                      </div>
                    }
                  </div>
                </div>
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
        <HotelFacilityList />
      </div>
    </SuperadminLayout>
  )
}

export default CreateHotels