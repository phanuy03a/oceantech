import { ThemeProvider } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { MatxSuspense } from "app/components";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer.jsx";
import SidenavTheme from "../../MatxTheme/SidenavTheme/SidenavTheme";
import Layout1Sidenav from "./Layout1Sidenav";
import Layout1Topbar from "./Layout1Topbar";
import { themes } from "app/components/MatxTheme/initThemes.js";
const Layout1Root = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));
const ContentBox = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  overflowY: "auto",
  overflowX: "hidden",
  flexDirection: "column",
  justifyContent: "space-between",
}));
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
const topbarTheme = themes["whiteBlue"];
const Layout1 = () => {
  const theme = useTheme();
  const layoutClasses = `theme-${theme.palette.type}`;
  return (
    <Layout1Root className={layoutClasses}>
      <SidenavTheme>
        <Layout1Sidenav />
      </SidenavTheme>
      <LayoutContainer width={260}>
        <ThemeProvider theme={topbarTheme}>
          <Layout1Topbar fixed={true} className="elevation-z8" />
        </ThemeProvider>
        <ContentBox>
          <Box flexGrow={1} position="relative">
            <MatxSuspense>
              <Outlet />
            </MatxSuspense>
          </Box>
          <Footer />
        </ContentBox>
      </LayoutContainer>
    </Layout1Root>
  );
};

export default React.memo(Layout1);
