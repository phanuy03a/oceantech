import { CssBaseline, ThemeProvider } from "@mui/material";
import { themes } from "./initThemes";
const MatxTheme = ({ children }) => {
  let activeTheme = { ...themes["blue"] };

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MatxTheme;
