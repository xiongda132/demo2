import Context from "./createContext";
import Son from "./son";
console.log(Context);
export default () => {
  console.log(Context);
  return (
    <>
      <Context.Provider value={1}>
        <Son />
      </Context.Provider>
    </>
  );
};

/* 
总结：
    1. 使用react的createContext创建Context
*/
