import { Box, styled, useTheme } from "@mui/system";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import { convertHexToRGB } from "app/utils/utils";
import React from "react";
import Brand from "../../Brand";
import Sidenav from "../../Sidenav";
import Layout1Settings from "./Layout1Settings";
import { useContext } from "react";
import { ModeContext } from "./Layout1";

const SidebarNavRoot = styled(Box)(({ theme, width, primaryBg, bgImgURL }) => ({
  position: "fixed",
  top: 0,
  left: 0,

  height: "100vh",
  width: width,
  boxShadow: themeShadows[8],
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "cover",
  zIndex: 111,
  overflow: "hidden",
  color: theme.palette.text.primary,
  transition: "all 250ms ease-in-out",
  backgroundImage: `linear-gradient(to bottom, rgba(${primaryBg}, 0.96), rgba(${primaryBg}, 0.96)), url(${bgImgURL})`,
}));

const NavListBox = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));
const Layout1Sidenav = (props) => {
  const [display, width] = useContext(ModeContext);
  const theme = useTheme();
  const { bgImgURL } = Layout1Settings.leftSidebar;
  const primaryRGB = convertHexToRGB(theme.palette.primary.main);
  return (
    <SidebarNavRoot bgImgURL={bgImgURL} primaryBg={primaryRGB} width={width}>
      <NavListBox>
        <Brand display={display}></Brand>
        <Sidenav />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default React.memo(Layout1Sidenav);
