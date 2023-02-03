import { updateBusRoute } from '@/api/busadmin/bus-routes';
import BusRoutes from '@/components/busadmin/forms/bus-routes';
import BusadminLayout from '@/components/layout/busadmin';
import { responseErrorHandler } from '@/services/helper';
import useUser from '@/services/hooks/useUser';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useSWR from 'swr';

export default function UpdateBus() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const formMethods = useForm();
  const { mutateUser } = useUser();
  const { reset, setError } = formMethods;

  const { data } = useSWR(`/bus/routes/${id}`);

  function updateBusRouteHandler(data: any) {
    const dto = {
      ...data,
      boards_drops: [
        ...data.boards.map((board: any) => ({ ...board, time: Number(board.time), type: "Board" })),
        ...data.drops.map((drop: any) => ({ ...drop, time: Number(drop.time), price: Number(drop.price), type: "Drop" })),
      ]
    }
    delete dto.id;
    delete dto.bus_operator_id;
    delete dto.boards;
    delete dto.drops;
    delete dto.bus_stations;

    setLoading(true);
    updateBusRoute(id, dto)
      .then((res: any) => {
        reset();
        mutateUser();
        toast.success(res.message);
        Router.push('/busadmin/bus-routes');
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (data?.data) {
      formMethods.reset({
        ...data?.data,
        boards: data?.data?.bus_stations?.length
          ? data?.data?.bus_stations
            .filter((station: any) => station.type === "Board")
            .map((station: any) => ({ location: station.location, time: station.time }))
          : [{ location: "", time: "" }],
        drops: data?.data?.bus_stations?.length
          ? data?.data?.bus_stations
            .filter((station: any) => station.type === "Drop")
            .map((station: any) => ({ location: station.location, time: station.time, price: station.price }))
          : [{ location: "", time: "", price: "" }],
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <BusadminLayout title="Update Bus Routes">
      <div className="row justify-content-center">
        <div className="col-lg-10 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Update Bus Routes</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <BusRoutes
                submitHandler={updateBusRouteHandler}
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
