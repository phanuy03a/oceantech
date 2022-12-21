import { AppBar, Button, ThemeProvider, Toolbar } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { topBarHeight } from "app/utils/constant";
import { themes } from "./MatxTheme/initThemes";
const AppFooter = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  minHeight: topBarHeight,
  "@media (max-width: 499px)": {
    display: "table",
    width: "100%",
    minHeight: "auto",
    padding: "1rem 0",
    "& .container": {
      flexDirection: "column !important",
      "& a": { margin: "0 0 16px !important" },
    },
  },
}));

const Footer = () => {
  const theme = useTheme();
  const footerTheme = themes["slateDark1"];

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar color="primary" position="static" sx={{ zIndex: 96 }}>
        <AppFooter></AppFooter>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
