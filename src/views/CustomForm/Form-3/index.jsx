import { Form, Input, Button } from "antd";
import { useState } from "react";
const { Item } = Form;
const { Password } = Input;


export default () => {
  const [value, setValue] = useState("");
  const onFinish = (values) => {
    console.log(values);
  };
  const onChange = (e) => {
    console.log(e.target.value);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Form onFinish={onFinish}>
        <Item label="账号" name="user">
          <Input value={value} onChange={onChange}></Input>
        </Item>
        <Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "必填且为数字和字母",
              pattern: /[\da-zA-Z]/g,
            },
          ]}
        >
          <Password onChange={handleChange}></Password>
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </>
  );
};
