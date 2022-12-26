import Layout from "./components/Layout/Layout";
import ManageEmployeeRoutes from "./views/ManageEmployee/ManageEmployeeRoutes.js";
import NotFound from "./components/NotFound";
import AddNewEmployeeRoutes from "./views/AddNewEmployee/AddNewEmployeeRoutes";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [...ManageEmployeeRoutes, ...AddNewEmployeeRoutes],
  },

  { path: "*", element: <NotFound /> },
];

export default routes;
