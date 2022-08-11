import { superadminLogin } from '@/api/superadmin/auth';
import { toast } from 'react-toastify';
import Router from 'next/router';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { appEncrypt, responseErrorHandler } from '@/services/helper';
import { Button, Form } from 'antd';
import { setCookie } from 'cookies-next';
import { TOKEN_KEY, USER_TYPE_KEY } from '@/services/constants';

function SuperAdminLogin() {

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  function submitLogin(data: any) {
    // {
    //   email: "admin@mail.com",
    //   password: "Password123@"
    // }
    setLoading(true);
    superadminLogin(data)
      .then((res: any) => {
        toast.success(res.message);
        // @ts-ignore
        setCookie(TOKEN_KEY, appEncrypt(res.data.token))
        // @ts-ignore
        setCookie(USER_TYPE_KEY, appEncrypt("superadmin"))
        Router.push('/superadmin')
      })
      .catch(err => responseErrorHandler(err, setError))
      .finally(() => setLoading(false))
  }

  return (
    <div className="col-lg-12">
      <div className="white_box mb_30">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="modal-content cs_modal">
              <div className="modal-header justify-content-center theme_bg_1">
                <h5 className="modal-title text_white">Log in</h5>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(submitLogin)}>
                  <Form.Item
                    className='mb-5'
                    validateStatus={errors?.email?.message && "error"}
                    help={errors?.email?.message ? errors?.email?.message + "" : ""}
                  >
                    <input placeholder='Enter Email' className='mb-0'
                      {...register("email", { required: "Email is Required" })}
                    />
                  </Form.Item>
                  <Form.Item
                    className='mb-5'
                    validateStatus={errors?.password?.message && "error"}
                    help={errors?.password?.message ? errors?.password?.message + "" : ""}
                  >
                    <input
                      placeholder='Enter Password'
                      className='mb-0'
                      {...register("password", { required: "Password is Required" })}
                    />
                  </Form.Item>
                  <Button loading={loading} htmlType="submit">Login</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperAdminLogin