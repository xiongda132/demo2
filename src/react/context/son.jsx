import { useContext } from "react";
import createContext from "./createContext";
import SonTwo from "./sonTwo.jsx";
export default (props) => {
  const context = useContext(createContext);
  console.log(context);
  return (
    <>
      <SonTwo />
    </>
  );
};
