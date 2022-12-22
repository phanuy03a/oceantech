import React from "react";
import MatxTheme from "./components/MatxTheme/MatxTheme";
import Layout1 from "./components/MatxLayout/Layout1/Layout1";
import { useRoutes } from "react-router-dom";
import { MatxLayout } from "./components";
import routes from "./RootRoutes";
import SignIn from "./views/SignIn/SignIn";

const App = () => {
  const content = useRoutes(routes);
  return (
    <>
      <MatxTheme>{content}</MatxTheme>
    </>
  );
};
export default App;
