import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { deleteCookie, getCookies } from 'cookies-next'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { SWRConfig } from 'swr';
import axiosClient from '@/services/axios/clientfetch';
import axiosServer from '@/services/axios/serverfetch';
import { kyleDecrypt } from '@/services/helper';

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => axiosClient(resource, init).then(res => res.data)
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const { ctx: { req, res } } = appContext;
  const { token } = getCookies({ req });

  if (token) {

    // @ts-ignore
    const { data: serverUser } = await axiosServer(kyleDecrypt(token)).get('/user')
      .catch((err: any) => {

        // log
        console.log('get user error', err);

        // delete cookies
        deleteCookie("token", { req, res });

        // redirect
        res?.writeHead(301, {
          Location: '/login'
        });
        res?.end();

        return { serverUser: null }
      })

    return { serverUser }
  }

  return { serverUser: null }
}

export default App
