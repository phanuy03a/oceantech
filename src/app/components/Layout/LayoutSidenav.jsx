import React from "react";
import { Box, margin, styled } from "@mui/system";
import Brand from "../Nav/Brand";
import Sidenav from "../Nav/Sidenav";
import { navigations } from "../../navigations";
const NavListBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));
const SidebarNavRoot = styled(Box)(() => ({
  position: "fixed",
  height: "100vh",
  width: 260,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "cover",
  zIndex: 111,
  overflow: "hidden",
  color: "#FFFFFF",
  transition: "all 250ms ease-in-out",
  background:
    "linear-gradient(to bottom, rgba(34,42,69, 0.96), rgba(34,42,69, 0.96)),url(/assets/images/sidebar/sidebar-bg-dark.jpg)",
}));
function LayoutSidenav(props) {
  return (
    <>
      <SidebarNavRoot>
        <NavListBox>
          <Brand></Brand>
          <Sidenav items={navigations}></Sidenav>
        </NavListBox>
      </SidebarNavRoot>
    </>
  );
}

export default LayoutSidenav;
