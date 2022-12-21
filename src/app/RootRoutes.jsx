import { MatxLayout } from "./components";
import NotFound from "./views/NotFound";
import AddNewEmployeeRoutes from "./views/AddNewEmployee/AddNewEmployeeRoutes";
import ManageEmployeeRoutes from "./views/ManageEmployee/ManageEmployeeRoutes";
import NoLongerWorkingRoutes from "./views/NoLongerWorking/NoLongerWorkingRoutes";
import RelatedInformationRoutes from "./views/RelatedInformation/RelatedInformationRoutes";
const routes = [
  {
    path: "/",
    element: <MatxLayout />,
    children: [
      ...AddNewEmployeeRoutes,
      ...ManageEmployeeRoutes,
      ...NoLongerWorkingRoutes,
      ...RelatedInformationRoutes,
    ],
  },

  { path: "*", element: <NotFound /> },
];

export default routes;
