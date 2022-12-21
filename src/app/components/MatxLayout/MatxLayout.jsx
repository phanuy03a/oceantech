import MatxSuspense from "../MatxSuspense";
import { MatxLayouts } from "./index";

const MatxLayout = (props) => {
  const Layout = MatxLayouts["layout1"];

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
};

export default MatxLayout;
