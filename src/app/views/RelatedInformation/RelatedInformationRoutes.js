import Loadable from "app/components/Loadable";
import { lazy } from "react";

const RelatedInformation = Loadable(lazy(() => import("./RelatedInformation")));

const RelatedInformationRoutes = [{ path: "/related_info", element: <RelatedInformation /> }];

export default RelatedInformationRoutes;
