import { Tabs, Button } from "antd";
import { useState } from "react";

import TabOne from "./index2";
import TabTwo from "./index3";
const onChange = (key) => {
  console.log(key);
};
const App = () => {
  const [text, setText] = useState(1);
  const handleClick = () => {
    setText((text) => text + 1);
  };
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `Tab 1`,
            key: "1",
            children: `Content of Tab Pane 1`,
          },
          {
            label: `Tab 2`,
            key: "2",
            children: <TabOne text={text} />,
          },
          {
            label: `Tab 3`,
            key: "3",
            children: <TabTwo text={text} />,
          },
        ]}
      />
      <Button onClick={handleClick}>按钮</Button>
    </>
  );
};
export default App;
