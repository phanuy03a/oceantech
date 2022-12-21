import Loadable from "app/components/Loadable";
import { lazy } from "react";

const NoLongerWorking = Loadable(lazy(() => import("./NoLongerWorking")));

const NoLongerWorkingRoutes = [{ path: "/nolongerworking", element: <NoLongerWorking /> }];

export default NoLongerWorkingRoutes;
