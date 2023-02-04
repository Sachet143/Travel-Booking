import { createBusRoute } from '@/api/busadmin/bus-routes';
import BusRoutes from '@/components/busadmin/forms/bus-routes';
import BusadminLayout from '@/components/layout/busadmin';
import { responseErrorHandler } from '@/services/helper';
import useUser from '@/services/hooks/useUser';
import Router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function CreateBusRoutes() {

  const [loading, setLoading] = useState(false);
  const formMethods = useForm({
    defaultValues: {
      start_destination: null,
      final_destination: null,
      shift: "Day",
      description: "",
      boards: [{ location: "", time: "" }],
      drops: [{ location: "", time: "", price: "" }],
    }
  });
  const { mutateUser } = useUser();
  const { reset, setError } = formMethods;

  function createBusRouteHandler(data: any) {
    const dto = {
      ...data,
      boards_drops: [
        ...data.boards.map((board: any) => ({ ...board, time: Number(board.time), type: "Board" })),
        ...data.drops.map((drop: any) => ({ ...drop, time: Number(drop.time), price: Number(drop.price), type: "Drop" })),
      ]
    }
    delete dto.boards;
    delete dto.drops;

    setLoading(true);
    createBusRoute(dto)
      .then((res: any) => {
        reset();
        toast.success(res.message);
        Router.push('/busadmin/bus-routes');
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  return (
    <BusadminLayout title="Create Bus Routes">
      <div className="row justify-content-center">
        <div className="col-lg-10 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Create Bus Routes</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <BusRoutes
                submitHandler={createBusRouteHandler}
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
