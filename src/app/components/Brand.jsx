import { Box, styled } from "@mui/material";
import { MatxLogo } from "app/components";
import { Span } from "./Typography";
const BrandRoot = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 29px",
}));
const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 18,
  marginLeft: ".5rem",
  display: mode === "compact" ? "none" : "block",
}));
const Brand = ({ children }) => {
  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <MatxLogo />
        <StyledSpan className="sidenavHoverShow">Oceantech</StyledSpan>
      </Box>
      <Box className="sidenavHoverShow">{children}</Box>
    </BrandRoot>
  );
};
export default Brand;
