import { Form, Input, Button, Checkbox } from "antd";
const { Item } = Form;
const { Password } = Input;
export default () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  return (
    <>
      <Form
        labelCol={{ span: 8 }} //文本列
        wrapperCol={{ span: 16 }} //包装列
        initialValues={{ remember: true }} //初始值
        onFinish={onFinish} //监听提交
        onFinishFailed={onFinishFailed} //监听非正常提交
        autoComplete="off" //关闭历史键值提示, 默认开启
      >
        <Item
          label="username" //文本名
          name="username" //表单项的键
          rules={[{ required: true, message: "请输入用户名" }]} //提交时的验证
        >
          <Input></Input>
        </Item>
        <Item
          label="password"
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Password></Password>
        </Item>
        <Item
          name="remember"
          wrapperCol={{ span: 16, offset: 8 }} //包装列的偏移量、占栅格系统的宽度
          valuePropName="checked" //remember值同步至checked值, 实现表单初始值
        >
          <Checkbox>记住我</Checkbox>
        </Item>
        <Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            提交 {/* 指定提交类型 */}
          </Button>
        </Item>
      </Form>
    </>
  );
};
