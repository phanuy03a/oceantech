import { ThemeProvider, useTheme } from "@mui/material";
import { themes } from "../initThemes";
const SidenavTheme = ({ children }) => {
  const theme = useTheme();
  const sidenavTheme = themes["slateDark1"];

  return <ThemeProvider theme={sidenavTheme}>{children}</ThemeProvider>;
};

export default SidenavTheme;
