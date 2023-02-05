import ClientLayout from "@/components/layout/client/ClientLayout";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Result, Typography } from "antd";
import React from "react";

const Failure = () => {
  const { Paragraph, Text } = Typography;
  return (
    <ClientLayout>
      <div className="section_padding">
        <div className="container">
          <div className="row">
            <Result
              status="error"
              title="Submission Failed"
              subTitle="Please check and modify the following information before resubmitting."
              extra={[
                // <>
                //   <iframe
                //     src="https://giphy.com/embed/XJCL959KwYbE4"
                //     width="480"
                //     height="433"
                //     frameBorder="0"
                //     className="giphy-embed"
                //     allowFullScreen
                //   ></iframe>
                //   <p>
                //     <a href="https://giphy.com/gifs/XJCL959KwYbE4">via GIPHY</a>
                //   </p>
                // </>,
                <Button type="primary" key="console">
                  Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>,
              ]}
            >
              <div className="desc">
                <Paragraph>
                  <Text
                    strong
                    style={{
                      fontSize: 16,
                    }}
                  >
                    The content you submitted has the following error:
                  </Text>
                </Paragraph>
                <Paragraph>
                  <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
                  Your account has been frozen. <a>Thaw immediately &gt;</a>
                </Paragraph>
                <Paragraph>
                  <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
                  Your account is not yet eligible to apply.{" "}
                  <a>Apply Unlock &gt;</a>
                </Paragraph>
              </div>
            </Result>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Failure;
