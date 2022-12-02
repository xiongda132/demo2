import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./views/CLogin";
import Home from "./views/CHome";
import Scan from "./views/Scan";
import { getLoginSession } from "./utils/session";

// const PrivateRoute = ({ children, ...restProps }) => {
//   console.log(123);
//   console.log(getLoginSession());
//   const value = getLoginSession() === 1;
//   return (
//     <Route
//       {...restProps}
//       render={({ location }) => {
//         return value ? (
//           children
//         ) : (
//           <Redirect to={{ pathname: "login", from: location }}></Redirect>
//         );
//       }}
//     ></Route>
//   );
// };
export default () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Home />
          </Route>
          <Route path="/scan">
            <Scan />
          </Route>
          <Route path="/upload">{/* <Home /> */}</Route>
        </Switch>
      </Router>
    </>
  );
};
