import Context from "./createContext";
import { useContext } from "react";
export default () => {
  const context = useContext(Context);
  console.log(context);
  return <>son2</>;
};
