import React from "react";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { Button, Result } from "antd";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  return (
    <ClientLayout>
      <div className="section_padding">
        <div className="container">
          <div className="row">
            <Result
              status="success"
              title="🎉🎉 Congratulations! 🎉🎉"
              subTitle="Your seat reservation has been successfully secured."
              extra={[
                // <>
                //   <iframe
                //     src="https://giphy.com/embed/l0Exgd8ofUusqQKGs"
                //     width="480"
                //     height="360"
                //     frameBorder="0"
                //     className="giphy-embed"
                //     allowFullScreen
                //   ></iframe>
                //   <p>
                //     <a href="https://giphy.com/gifs/oscars-academy-awards-oscars-1985-l0Exgd8ofUusqQKGs">
                //       via GIPHY
                //     </a>
                //   </p>
                // </>,
                <Button type="primary" key="console">
                  Download your ticket
                </Button>,
                <Button key="buy" onClick={() => router.push("/")}>
                  Go to home
                </Button>,
              ]}
            />
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Success;
