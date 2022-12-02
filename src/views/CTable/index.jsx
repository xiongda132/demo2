import { Table } from "antd";

// console.log(arr2);

console.log(Date.parse(new Date().toString()));
const arr = Array(10)
  .fill("0")
  .map(() => <div key={Date.parse(new Date().toString())}>xxx</div>);

console.log(arr);

export default () => {
  return (
    <>
      {Array(10)
        .fill(1)
        .map(() => (
          <div key={Date.parse(new Date().toString())}>111</div>
        ))}
    </>
  );
};
