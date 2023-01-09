import BusadminLayout from '@/components/layout/busadmin';
import axiosServer from '@/services/axios/serverfetch';
import { TOKEN_KEY, USER_TYPE_KEY } from '@/services/constants';
import { appDecrypt } from '@/services/helper';
import { deleteCookie, getCookie } from 'cookies-next';
import { NextPageContext } from 'next'
import React from 'react'

function BusadminIndex() {
  return (
    <BusadminLayout title='Dashboard'>
      <></>
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

  if (!busUser.bus_id) {
    return {
      redirect: {
        destination: '/busadmin/bus/create'
      }
    }
  }

  return {
    props: {}
  }
}

export default BusadminIndex