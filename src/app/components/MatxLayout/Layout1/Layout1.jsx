import { ThemeProvider } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { MatxSuspense } from "app/components";
import React, { createContext, useState } from "react";
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
const LayoutContainer = styled(Box)(({ width, display }) => ({
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
export const ModeContext = createContext();
const Layout1 = () => {
  const [width, setWidth] = useState(260);
  const [display, setDisplay] = useState("");

  const theme = useTheme();
  const layoutClasses = `theme-${theme.palette.type}`;
  const handleChangeNav = () => {
    setWidth(width == 80 ? 260 : 80);
    setDisplay(display == "none" ? "" : "none");
  };
  return (
    <ModeContext.Provider value={[display, width]}>
      <Layout1Root className={layoutClasses}>
        <SidenavTheme>
          <Layout1Sidenav />
        </SidenavTheme>
        <LayoutContainer width={width}>
          <ThemeProvider theme={topbarTheme}>
            <Layout1Topbar
              handleChangeNav={handleChangeNav}
              fixed={true}
              className="elevation-z8"
            />
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
    </ModeContext.Provider>
  );
};

export default React.memo(Layout1);
