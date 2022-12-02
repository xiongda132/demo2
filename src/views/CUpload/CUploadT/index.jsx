import { Upload, Button, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
// window.undefined = 8;
// var undefined = 8;
// console.log(window.undefined);
// console.log(window);

// console.log(true <= 0.5);

const beforeUpload = (file) => {
  const isJpgPng = file.type === "image/jepg" || file.type === "image/jpg";
  if (!isJpgPng) {
    message.error("you can only upload jpg/png files");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("image must smaller than 2MB!");
  }

  return isJpgPng && isLt2M;
};

const getBase64 = (imag, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(imag);
};

export default () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div>Button</div>
    </div>
  );

  const onChange = (info) => {
    console.log(info.file.originFileObj);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "down") {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        beforeUpload={beforeUpload}
        onChange={onChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar"></img> : uploadButton}
      </Upload>
    </>
  );
};
