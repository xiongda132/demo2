import { useState, useEffect, useCallback } from "react";
import Son from "./Son";
import { Button } from "antd";

export default () => {
  const [father, setFather] = useState("父亲");
  console.log("父");
  const handleClick = () => {
    setFather("父亲+1");
  };

  const func = useCallback(() => {});

  useEffect(() => {
    console.log("父effect");
  }, []);

  return (
    <>
      <Son func={func} />
      <Button onClick={handleClick}>按钮1</Button>
    </>
  );
};
