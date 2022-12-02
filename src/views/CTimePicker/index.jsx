import { TimePicker, Divider, Space } from "antd";
import moment from "moment";
import { useState } from "react";

const { RangePicker } = TimePicker;

export default () => {
  const [time, setTime] = useState();
  const handleChange = (time, timeString) => {
    console.log(time, timeString);
  };
  const onChange = (time) => {
    console.log(time);
    setTime(time);
  };
  return (
    <>
      <TimePicker
        onChange={handleChange}
        defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
      ></TimePicker>
      <Divider>受控组件</Divider>
      <TimePicker value={time} onChange={onChange}></TimePicker>
      <Divider>禁用</Divider>
      <TimePicker disabled></TimePicker>
      <Divider>12小时制与时间格式化显示</Divider>
      <TimePicker use12Hours format="h a"></TimePicker>
      <Divider>范围选择器</Divider>
      <RangePicker></RangePicker>
      <Divider>添加状态</Divider>
      <Space direction="vertical">
        <TimePicker status="warning"></TimePicker>
        <RangePicker status="error"></RangePicker>
      </Space>
    </>
  );
};
