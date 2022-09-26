import { updateHotel } from '@/api/hoteladmin/hotel';
import { createHotelRoom, updateHotelRoom } from '@/api/hoteladmin/hotelRoom';
import { resetPassword } from '@/api/superadmin/auth';
import HotelRoomForm from '@/components/hoteladmin/forms/HotelRoom';
import HoteladminLayout from '@/components/layout/hoteladmin';
import { objectToFormData, responseErrorHandler } from '@/services/helper';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useSWR from 'swr';

function HotelRoomEdit() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const formMethods = useForm();
  const { reset, setError } = formMethods;

  const { data, error, mutate } = useSWR(`/hotel/room/${id}`);

  function editHotelRoomHandler(data: any) {
    setLoading(true);
    updateHotelRoom(id, objectToFormData({
      ...data,
      status: Number(data.status),
      ["included/excluded"]: JSON.stringify(data["included/excluded"]),
      files: data.files.map((file: any) => file.originFileObj)
    }))
      .then((res: any) => {
        mutate();
        toast.success(res.message);
        router.push('/hoteladmin/room');
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  useEffect(() => {

    if (data) {
      reset({
        title: data.title,
        status: data.status,
        price: data.price,
        features: data.features.map((f: any) => f.hotel_feature_id),
        discount_price: data.discount_price,
        "included/excluded": data["included/excluded"] ? JSON.parse(data["included/excluded"]) : null,
        files: data.files.map((file: any) => ({
          uid: file.id,
          name: `image.${file.type}`,
          url: file.full_path,
        }
        ))
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <HoteladminLayout title="Update Hotel">
      <div className="row justify-content-center">
        <div className="col-lg-8 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Edit Hotel Room</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <h6 className="card-subtitle mb-4">
                Edit room for your hotel
              </h6>
              <HotelRoomForm
                submitHandler={editHotelRoomHandler}
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

export default HotelRoomEdit