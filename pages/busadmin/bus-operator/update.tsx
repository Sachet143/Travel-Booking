import { createBusOperator } from '@/api/busadmin/bus-operator';
import BusOperatorForm from '@/components/busadmin/forms/busOperator';
import BusadminLayout from '@/components/layout/busadmin';
import { imageFullPath, objectToFormData, responseErrorHandler } from '@/services/helper';
import useUser from '@/services/hooks/useUser';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function UpdateHotel() {
  const { user, mutateUser } = useUser();
  const [loading, setLoading] = useState(false);
  const formMethods = useForm();
  const { reset, setError } = formMethods;

  function createBusHandler(data: any) {
    setLoading(true);
    const dto = {
      ...data,
      logo: typeof data.logo === "string" ? null : data.logo,
    }

    createBusOperator(objectToFormData(dto))
      .then((res: any) => {
        reset();
        mutateUser();
        toast.success(res.message);
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    user && reset({
      logo: imageFullPath(user?.bus_operator?.logo),
      name: user.bus_operator.name,
      phone_no: user.bus_operator.phone_no,
      address: user.bus_operator.address,
      description: user.bus_operator.description
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <BusadminLayout title="Update Bus">
      <div className="row justify-content-center">
        <div className="col-lg-6 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Update Bus Operator</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <h6 className="card-subtitle mb-4">
                Enter your bus details to get a dashboard
              </h6>
              <BusOperatorForm
                submitHandler={createBusHandler}
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

export default UpdateHotel;
