import { useLocation, useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  console.log(history);
  const onClick = () => {
    history.go(-1);
  };
  return (
    <>
      这是首页<button onClick={onClick}>回到之前页面</button>
    </>
  );
};
