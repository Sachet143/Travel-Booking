import { createTrip } from '@/api/busadmin/trip';
import Trips from '@/components/busadmin/forms/trips';
import BusadminLayout from '@/components/layout/busadmin';
import { responseErrorHandler } from '@/services/helper';
import Router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function CreateBusRoutes() {

  const [loading, setLoading] = useState(false);
  const formMethods = useForm({
    defaultValues: {
      bus_id: null,
      bus_route_id: null,
      departure_dates: [],
      departure_time: null,
    }
  });
  const { reset, setError } = formMethods;

  function createTripHandler(data: any) {

    const dto = {
      ...data,
      departure_dates: data.departure_dates.map((date: Date) => date.toISOString().split('T')[0])
    }

    setLoading(true);
    createTrip(dto)
      .then((res: any) => {
        reset();
        toast.success(res.message);
        Router.push('/busadmin/trip');
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  return (
    <BusadminLayout title="Create Trip">
      <div className="row justify-content-center">
        <div className="col-lg-10 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Create Trip</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <Trips
                submitHandler={createTripHandler}
                loading={loading}
                formMethods={formMethods}
              />
            </div>
          </div>
        </div>
      </div>
    </BusadminLayout>
  )
}
