import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { SWRConfig } from "swr";
import axiosClient from "@/services/axios/clientfetch";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "@/public/admin/css/custom.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps, session }: any) {
  const clientId =
    "287378879320-amdhflqu0oq19p655458sokpt1i8cjsd.apps.googleusercontent.com";

  return (
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
  );
}

export default App;
