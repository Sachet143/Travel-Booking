import { updateBus } from '@/api/busadmin/bus';
import BusForm from '@/components/busadmin/forms/bus';
import BusSeatModal from '@/components/busadmin/modal/busSeatModal';
import BusadminLayout from '@/components/layout/busadmin';
import { objectToFormData, responseErrorHandler } from '@/services/helper';
import useUser from '@/services/hooks/useUser';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function UpdateBus() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [showSeatModal, setShowSeatModal] = useState<boolean>(false);
  const formMethods = useForm();
  const { mutateUser } = useUser();
  const { reset, setError } = formMethods;

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
        Router.push('/busadmin');
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  return (
    <BusadminLayout title="Update Bus">
      <div className="row justify-content-center">
        <div className="col-lg-10 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Create Bus</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <h6 className="card-subtitle mb-4">
                Enter your bus details to get a dashboard
              </h6>
              <BusForm
                showSeatModal={() => setShowSeatModal(true)}
                submitHandler={updateBusHandler}
                loading={loading}
                formMethods={formMethods}
              />
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
