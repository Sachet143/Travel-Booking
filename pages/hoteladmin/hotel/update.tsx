import { updateHotel } from '@/api/hoteladmin/hotel';
import HotelForm from '@/components/hoteladmin/forms/hotel';
import HoteladminLayout from '@/components/layout/hoteladmin';
import { objectToFormData, responseErrorHandler } from '@/services/helper';
import useUser from '@/services/hooks/useUser';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function UpdateHotel() {

  const { user, mutateUser } = useUser();
  const [loading, setLoading] = useState(false);
  const formMethods = useForm();
  const { reset, setError } = formMethods;

  function updateHotelHandler(data: any) {

    const dto = {
      ...data,
      why_choose_us: data.why_choose_us ? JSON.stringify(data.why_choose_us) : null,
      our_facilities: data.our_facilities ? JSON.stringify(data.our_facilities) : null,
    }

    setLoading(true);
    updateHotel(objectToFormData(dto))
      .then((res: any) => {
        reset();
        mutateUser();
        toast.success(res.message);
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    user && reset({
      logo: user?.hotel?.logo_full_path,
      cover_image: user?.hotel?.cover_full_path,
      name: user.hotel.name,
      category_id: user.hotel.category_id,
      long: user?.hotel?.location?.long,
      lat: user?.hotel?.location?.lat,
      coutntry: user?.hotel?.location?.coutntry,
      state: user?.hotel?.location?.state,
      city: user?.hotel?.location?.city,
      description: user.hotel.description,
      why_choose_us: user.hotel.why_choose_us ? JSON.parse(user.hotel.why_choose_us) : null,
      our_facilities: user.hotel.our_facilities ? JSON.parse(user.hotel.our_facilities) : null
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <HoteladminLayout title="Update Hotel">
      <div className="row justify-content-center">
        <div className="col-lg-8 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Update Hotel</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <h6 className="card-subtitle mb-4">
                Update your hotel information here
              </h6>
              <HotelForm
                submitHandler={updateHotelHandler}
                loading={loading}
                formMethods={formMethods}
              />
            </div>
          </div>
        </div >
      </div >
    </HoteladminLayout>
  )
}

export default UpdateHotel