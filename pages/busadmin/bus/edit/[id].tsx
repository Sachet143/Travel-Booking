import { updateBus } from '@/api/busadmin/bus';
import BusForm from '@/components/busadmin/forms/bus';
import BusSeatModal from '@/components/busadmin/modal/busSeatModal';
import BusadminLayout from '@/components/layout/busadmin';
import { imageFullPath, objectToFormData, responseErrorHandler } from '@/services/helper';
import useUser from '@/services/hooks/useUser';
import { Skeleton } from 'antd';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useSWR from 'swr';

export default function UpdateBus() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [showSeatModal, setShowSeatModal] = useState<boolean>(false);
  const formMethods = useForm();
  const { mutateUser } = useUser();
  const { reset, setError } = formMethods;

  const { data } = useSWR(`bus/bus-show/${id}`);

  function updateBusHandler(data: any) {
    setLoading(true);
    const dto = {
      ...data,
      files: data.files.map((file: any) => file.originFileObj),
      policies: data.policies && data.policies?.blocks[0]?.text?.length ? JSON.stringify(data.policies) : null,
    }

    updateBus(Number(id), objectToFormData(dto))
      .then((res: any) => {
        reset();
        mutateUser();
        toast.success(res.message);
        Router.push('/busadmin/bus');
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (data) {
      formMethods.reset({
        name: data.data.name,
        plate_number: data.data.plate_number,
        bus_category_id: data.data.bus_category_id,
        amenities: data.data.amenities.map((a: any) => a.id),
        bus_type_id: data.data.bus_type_id ? Number(data.data.bus_type_id) : null,
        policies: data.data.policies ? JSON.parse(data.data.policies) : null,
        files: data.data.files.map((file: any) => ({
          uid: file.id,
          name: `image.${file.type}`,
          url: imageFullPath(file.path),
        }
        ))
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <BusadminLayout title="Update Bus">
      <div className="row justify-content-center">
        <div className="col-lg-10 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Update Bus</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              {
                !data ? <Skeleton active /> :
                  <BusForm
                    showSeatModal={() => setShowSeatModal(true)}
                    submitHandler={updateBusHandler}
                    loading={loading}
                    formMethods={formMethods}
                  />
              }
            </div>
          </div>
        </div>
        {
          showSeatModal ?
            <BusSeatModal
              showSeatModal={showSeatModal}
              setShowSeatModal={setShowSeatModal}
              formMethods={formMethods}
            />
            : null}
      </div>
    </BusadminLayout>
  )
}
