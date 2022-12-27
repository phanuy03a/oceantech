import React from "react";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import LayoutSidenav from "./LayoutSidenav";
import LayoutTopbar from "./LayoutTopbar";
import MatxSuspense from "../MatxSuspense";
const LayoutRoot = styled(Box)(() => ({
  display: "flex",
}));
import Footer from "../Footer/Footer";
const LayoutContainer = styled(Box)(({ width }) => ({
  height: "100vh",
  display: "flex",
  flexGrow: "1",
  flexDirection: "column",
  verticalAlign: "top",
  marginLeft: width,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
}));
const ContentBox = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  overflowY: "auto",
  overflowX: "hidden",
  flexDirection: "column",
  justifyContent: "space-between",
}));
function Layout(props) {
  return (
    <>
      <LayoutRoot>
        <LayoutSidenav />
        <LayoutContainer width={260}>
          <LayoutTopbar />
          <ContentBox>
            <Box flexGrow={1} position="relative">
              <MatxSuspense>
                <Outlet />
              </MatxSuspense>
            </Box>
            <Footer />
          </ContentBox>
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
}

export default Layout;
