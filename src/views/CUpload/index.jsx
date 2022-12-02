import { Upload, Button, message } from "antd";

export default () => {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange: (info) => {
      if (info.file.status !== "uploading") {
        console.log(info.file);
        console.log(info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file upload successful`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed`);
      }
    },
  };
  return (
    <>
      <Upload {...props}>
        <Button>click to upload</Button>
      </Upload>
    </>
  );
};
