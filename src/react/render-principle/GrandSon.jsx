import { useState, useEffect } from "react";

export default () => {
  const [grandSon, setGrandSon] = useState("孙子");
  return <>{grandSon}</>;
};
