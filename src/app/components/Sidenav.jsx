import { styled } from "@mui/system";
import { MatxVerticalNav } from "app/components";

import { navigations } from "app/navigations";
import { Fragment } from "react";
import Scrollbar from "react-perfect-scrollbar";

const StyledScrollBar = styled(Scrollbar)(() => ({
  paddingLeft: "1rem",
  paddingRight: "1rem",
  position: "relative",
}));

const Sidenav = ({ children }) => {
  return (
    <Fragment>
      <StyledScrollBar options={{ suppressScrollX: true }}>
        {children}
        <MatxVerticalNav items={navigations} />
      </StyledScrollBar>
    </Fragment>
  );
};

export default Sidenav;
