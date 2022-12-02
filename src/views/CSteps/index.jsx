import { Steps, Divider, Button, message, Popover } from "antd";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Step } = Steps;

export default () => {
  const [current, setCurrent] = useState(0);
  const steps = [
    { title: "1", content: "first-content" },
    { title: "2", content: "second-content" },
    { title: "3", content: "last-content" },
  ];
  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrent((current) => current - 1);
  };

  const CDot = (dot, { status, index }) => {
    console.log(dot, status, index);
    return (
      <Popover
        content={
          <span>
            step: {index} status: {status}
          </span>
        }
      >
        {dot}
      </Popover>
    );
  };

  return (
    <>
      <Divider>带内容区域的步骤</Divider>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title}></Step>
        ))}
      </Steps>
      <div
        style={{
          minHeight: 200,
          marginTop: 10,
          padding: 80,
          textAlign: "center",
          backgroundColor: "#fafafa",
          border: "1px solid #e9e9e9",
          borderRadius: "2px",
        }}
      >
        {steps[current].content}
      </div>
      <div style={{ marginTop: "10px" }}>
        {current < steps.length - 1 && (
          <Button onClick={handleNext}>Next</Button>
        )}
        {current === steps.length - 1 && (
          <Button onClick={() => message.info("processing complete")}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            onClick={() => {
              handlePrev();
            }}
            style={{ margin: "0px 10px" }}
          >
            prev
          </Button>
        )}
      </div>
      <Divider>简单步骤条</Divider>
      <Steps current={1}>
        <Step tile="start" description="这是描述1"></Step>
        <Step
          tile="in progress"
          description="这是描述2"
          subTitle="left 00:00:00"
        ></Step>
        <Step tile="end" description="这是描述3"></Step>
      </Steps>
      <Divider>迷你版</Divider>
      <Steps current={1} size="small">
        <Step tile="start" description="这是描述1"></Step>
        <Step
          tile="in progress"
          description="这是描述2"
          subTitle="left 00:00:00"
        ></Step>
        <Step tile="end" description="这是描述3"></Step>
      </Steps>
      <Divider>带图标的步骤</Divider>
      <Steps current={2}>
        <Step
          tile="start"
          description="这是描述1"
          icon={<LoadingOutlined />}
        ></Step>
        <Step
          tile="in progress"
          description="这是描述2"
          subTitle="left 00:00:00"
          icon={<SmileOutlined />}
        ></Step>
        <Step
          tile="end"
          description="这是描述3"
          icon={<SolutionOutlined />}
        ></Step>
      </Steps>
      <Divider>竖直方向的步骤条</Divider>
      <Steps direction="vertical">
        <Step
          tile="start"
          description="这是描述1"
          icon={<LoadingOutlined />}
        ></Step>
        <Step
          tile="in progress"
          description="这是描述2"
          subTitle="left 00:00:00"
          icon={<SmileOutlined />}
        ></Step>
        <Step
          tile="end"
          description="这是描述3"
          icon={<SolutionOutlined />}
        ></Step>
      </Steps>
      <Divider>指定当前状态</Divider>
      <Steps current={1} status="error">
        <Step tile="start" description="这是描述1"></Step>
        <Step
          tile="in progress"
          description="这是描述2"
          subTitle="left 00:00:00"
        ></Step>
        <Step tile="end" description="这是描述3"></Step>
      </Steps>
      <Divider>点状进度条</Divider>
      <Steps current={1} progressDot>
        <Step tile="start" description="这是描述1"></Step>
        <Step
          tile="in progress"
          description="这是描述2"
          subTitle="left 00:00:00"
        ></Step>
        <Step tile="end" description="这是描述3"></Step>
      </Steps>
      <Divider>自定义点状步骤条</Divider>

      <Steps current={1} progressDot={CDot}>
        <Step tile="start" description="这是描述1"></Step>
        <Step
          tile="in progress"
          description="这是描述2"
          subTitle="left 00:00:00"
        ></Step>
        <Step tile="end" description="这是描述3"></Step>
      </Steps>
    </>
  );
};
