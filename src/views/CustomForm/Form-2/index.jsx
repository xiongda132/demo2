import { Form, Input, Button, Select } from "antd";
const { Item } = Form;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default () => {
  const [form] = Form.useForm(); //函数组件推荐对表单数据域进行控制， 类组件推荐使用ref
  console.log("form", form);
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi lady" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there" });
        break;
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "hello world",
      gender: "man",
    });
  };
  return (
    <>
      <Form
        form={form}
        {...layout}
        layout="horizontal"
        disabled={false}
        size="large"
      >
        {/* layout: 表单的布局方式,  disabled表单是否禁用, size表单项大小*/}
        <Item label="Note" name="note" rules={[{ required: true }]}>
          <Input></Input>
        </Item>
        <Item label="Gender" name="gender" rules={[{ required: true }]}>
          <Select onChange={onGenderChange} placeHolder="占位符" allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Item>
        <Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            填充表单
          </Button>
        </Item>
      </Form>
    </>
  );
};
