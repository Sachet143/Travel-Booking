import { createBusOperator as createBusOperator } from '@/api/busadmin/bus-operator';
import { appDecrypt, objectToFormData, responseErrorHandler } from '@/services/helper';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import BusadminTopbar from '@/components/layout/busadmin/Topbar';
import useUser from '@/services/hooks/useUser';
import { NextPageContext } from 'next';
import { deleteCookie, getCookie } from 'cookies-next';
import { TOKEN_KEY, USER_TYPE_KEY } from '@/services/constants';
import axiosServer from '@/services/axios/serverfetch';
import Router from 'next/router';
import BusOperatorForm from '@/components/busadmin/forms/busOperator';

export default function CreateBusOperator() {
  const [loading, setLoading] = useState(false);
  const formMethods = useForm();
  const { reset, setError } = formMethods;
  const { mutateUser } = useUser();

  function createBusOperatorHandler(data: any) {
    setLoading(true);
    const dto = {
      ...data,
      logo: typeof data.logo === "string" ? null : data.logo,
    };

    createBusOperator(objectToFormData(dto))
      .then((res: any) => {
        reset();
        mutateUser();
        toast.success(res.message);
        Router.push("/busadmin");
      })
      .catch((err: any) => responseErrorHandler(err, setError))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <BusadminTopbar />
      <div className="row justify-content-center" style={{ marginTop: "5em" }}>
        <div className="col-lg-6 card shadow">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Create Bus Operator</h3>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <h6 className="card-subtitle mb-4">
                Enter your bus details to get a dashboard
              </h6>
              <BusOperatorForm
                submitHandler={createBusOperatorHandler}
                loading={loading}
                formMethods={formMethods}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { req, res } = ctx;
  const token = appDecrypt(getCookie(TOKEN_KEY, ctx) + "");

  const { data: busUser } = await axiosServer(token)
    .get("/bus-operator/user")
    .catch((err: any) => {
      console.log({ err });

      deleteCookie(USER_TYPE_KEY, { req, res });
      deleteCookie(TOKEN_KEY, { req, res });

      return {
        redirect: {
          destination: "/client",
        },
      };
    });

  if (busUser.bus_id) {
    return {
      redirect: {
        destination: "/busadmin/bus/update",
      },
    };
  }

  return {
    props: {},
  };
};
