import { createHotelRoom } from '@/api/hoteladmin/hotelRoom';
import HotelRoomForm from '@/components/hoteladmin/forms/HotelRoom';
import HoteladminLayout from '@/components/layout/hoteladmin';
import { objectToFormData, responseErrorHandler, useMatchMutate } from '@/services/helper';
import Router from 'next/router';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function HotelRoomCreate() {

  const [loading, setLoading] = useState(false);
  const matchMutate = useMatchMutate();
  const formMethods = useForm<any>({
    defaultValues: {
      status: true
    }
  });

  const { setError } = formMethods;

  function createHotelRoomHandler(data: any) {
    setLoading(true);

    createHotelRoom(objectToFormData({
      ...data,
      status: Number(data.status),
      ["included_excluded"]: JSON.stringify(data["included_excluded"]),
      files: data.files.map((file: any) => file.originFileObj)
    }))
      .then((res: any) => {
        matchMutate('/hotel/rooms');
        toast.success(res.message);
        Router.push('/hoteladmin/room');
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  return (
    <HoteladminLayout title="Update Hotel">
      <div className="row justify-content-center">
        <div className="col-lg-8 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Create Hotel Room</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <h6 className="card-subtitle mb-4">
                Create a new room for your hotel
              </h6>
              <HotelRoomForm
                submitHandler={createHotelRoomHandler}
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

export default HotelRoomCreate