import { createBus } from '@/api/busadmin/bus';
import BusForm from '@/components/busadmin/forms/bus';
import BusadminLayout from '@/components/layout/busadmin';
import axiosServer from '@/services/axios/serverfetch';
import { TOKEN_KEY, USER_TYPE_KEY } from '@/services/constants';
import { appDecrypt, objectToFormData, responseErrorHandler } from '@/services/helper';
import useUser from '@/services/hooks/useUser';
import { Button, Modal } from 'antd';
import { deleteCookie, getCookie } from 'cookies-next';
import { NextPageContext } from 'next';
import Router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function CreateBus() {

  const [loading, setLoading] = useState(false);
  const [showSeatModal, setShowSeatModal] = useState<boolean>(false);
  const formMethods = useForm();
  const { reset, setError } = formMethods;
  const { mutateUser } = useUser();

  function createBusHandler(data: any) {
    setLoading(true);
    const dto = {
      ...data,
      logo: typeof data.logo === "string" ? null : data.logo,
      cover_image: typeof data.cover_image === "string" ? null : data.cover_image,
      why_choose_us: data.why_choose_us && data.why_choose_us?.blocks[0]?.text?.length ? JSON.stringify(data.why_choose_us) : null,
      our_facilities: data.our_facilities && data.our_facilities?.blocks[0]?.text?.length ? JSON.stringify(data.our_facilities) : null,
    }

    createBus(objectToFormData(dto))
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
    <BusadminLayout title="Bus">
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
                submitHandler={createBusHandler}
                loading={loading}
                formMethods={formMethods}
              />
              <Button type='primary' onClick={() => setShowSeatModal(true)}>Select Seat</Button>
            </div>
          </div>
        </div>
        <Modal width={'80%'} visible={showSeatModal} onCancel={() => setShowSeatModal(false)}>
          asdfasdfsadf
        </Modal>
      </div>
    </BusadminLayout>
  )
}


export const getServerSideProps = async (ctx: NextPageContext) => {
  const { req, res } = ctx;
  const token = appDecrypt(getCookie(TOKEN_KEY, ctx) + "");

  const { data: busUser } = await axiosServer(token).get('/bus/user')
    .catch((err: any) => {
      console.log({ err });

      deleteCookie(USER_TYPE_KEY, { req, res });
      deleteCookie(TOKEN_KEY, { req, res });

      return {
        redirect: {
          destination: '/client'
        }
      }
    })

  if (busUser.bus_id) {
    return {
      redirect: {
        destination: '/busadmin/bus/update'
      }
    }
  }

  return {
    props: {}
  }
}