import "@/public/admin/css/custom.css";
import axiosClient from "@/services/axios/clientfetch";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { SessionProvider } from "next-auth/react";
import NextNProgress from 'nextjs-progressbar';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import "../styles/globals.css";

function App({ Component, pageProps, session }: any) {

  return (
    <>
      <NextNProgress />
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          fetcher: (resource, init) =>
            axiosClient(resource, init).then((res) => res),
        }}
      >
        <SessionProvider session={session}>
          <ToastContainer />
          <Component {...pageProps} />
        </SessionProvider>
      </SWRConfig>
    </>
  );
}

export default App;
