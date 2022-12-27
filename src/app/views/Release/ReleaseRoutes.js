import Loadable from "app/components/Loadable";
import { lazy } from "react";

const Release = Loadable(lazy(() => import("./Release")));

const ReleaseRoutes = [{ path: "/release", element: <Release /> }];

export default ReleaseRoutes;
