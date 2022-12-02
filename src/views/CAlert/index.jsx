import { Alert, Divider, Button, Space } from "antd";
import Marquee from "react-fast-marquee";
import { useState } from "react";

const { ErrorBoundary } = Alert;

const CButton = () => {
  const [error, setError] = useState();
  const handleClick = () => {
    setError(new Error("错误"));
  };
  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={handleClick}>
      click me to throw a error
    </Button>
  );
};

export default () => {
  const onClose = (e) => {
    console.log(e, "i was closed");
  };

  return (
    <>
      <Divider>内容轮播</Divider>
      <Alert
        message={
          <Marquee pauseOnHover>这是一段很长的内容， 可以滚动哦</Marquee>
        }
      ></Alert>
      <Divider>基础提示</Divider>
      <Alert type="success" message="success text"></Alert>
      <Alert type="info" message="info text"></Alert>
      <Alert type="warning" message="warning text"></Alert>
      <Alert type="error" message="error text"></Alert>
      <Divider>可关闭的提示</Divider>
      <Alert
        type="success"
        message="success text"
        closable
        onClose={onClose}
      ></Alert>
      <Divider>带描述的提示</Divider>
      <Alert
        type="success"
        message="success text"
        description="这是一段描述信息， 可以较长"
        closable
      ></Alert>
      <Divider>带图标的提示</Divider>
      <Alert type="success" message="success text" showIcon></Alert>
      <Alert
        type="error"
        message="success text"
        description="这是一段描述信息， 可以较长"
        closable
        showIcon
      ></Alert>
      <Divider>自定义关闭文本</Divider>
      <Alert type="success" message="success text" closeText="关闭"></Alert>
      <Divider>用做顶部公告</Divider>
      <Alert type="success" message="success text" banner></Alert>
      <Divider>错误处理包裹组件</Divider>
      <ErrorBoundary>
        <CButton></CButton>
      </ErrorBoundary>{" "}
      <Divider>右上角自定义操作项</Divider>
      <Alert
        type="success"
        message="success text"
        closable
        action={
          <Space direction="vertical">
            <Button type="success">按钮1</Button>
            <Button type="success">按钮2</Button>
            <Button type="success">按钮3</Button>
          </Space>
        }
      ></Alert>
    </>
  );
};
