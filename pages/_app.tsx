import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { deleteCookie, getCookies } from 'cookies-next'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
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
