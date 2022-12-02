import { Modal, Button, Form, Input } from "antd";
import { useState } from "react";
import styles from "./index.module.css";

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const onClick = () => {
    setIsOpen(true);
  };
  const onOk = () => {
    Modal.confirm({
      title: "确认删除吗？",
      content: "删除",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        setConfirmLoading(false);
        setIsOpen(false);
      },
    });
  };
  const onCancel = () => {
    setIsOpen(false);
  };
  const onFinish = (values) => {
    alert(JSON.stringify(values));
    console.log(values);
  };
  return (
    <>
      <div className={styles.center}>
        <Button onClick={onClick} type="primary">
          open modal
        </Button>
      </div>
      <Modal
        width={"50%"}
        title="custom modal"
        open={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        destroyOnClose //关闭时销毁子元素
        // footer={[
        //   <Button onClick={onCancel}>取消</Button>,
        //   <Button onClick={onOk}>确定</Button>,
        // ]}
        confirmLoading={confirmLoading}
        maskClosable={false}
      >
        <Form form={form} onFinish={onFinish} layout="inline">
          <Form.Item
            name="username"
            label="账号"
            rules={[{ required: true, message: "请输入账号" }]}
            // labelCol={{span: 10, offset: 5}}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: "请输入密码" }]}
            labelCol={{ span: 10 }}
            style={{ width: "50%" }}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CustomModal;
