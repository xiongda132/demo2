import { Popconfirm, message, Divider } from "antd";
import { useState } from "react";

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

  const handleConfirm = (e) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsTrue(false);
      setIsLoading(false);
    }, 2000);
  };
  const handleCancel = (e) => {
    console.log(e);
    message.error("失败");
  };
  const handleClick = () => {
    setIsTrue(true);
  };
  return (
    <>
      <Divider>基础用法</Divider>
      <Popconfirm
        title="是否删除"
        // onConfirm={handleConfirm}
        // onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <div>delete</div>
      </Popconfirm>
      <Divider>调整箭头位置</Divider>
      <Popconfirm
        placement="top"
        title="是否删除"
        // onConfirm={handleConfirm}
        // onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <div>位置</div>
      </Popconfirm>
      <Divider>异步加载状态</Divider>
      <Popconfirm
        open={isTrue}
        title="是否删除"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
        okButtonProps={{
          loading: isLoading,
        }}
      >
        <div onClick={handleClick}>请点击</div>
      </Popconfirm>
    </>
  );
};
