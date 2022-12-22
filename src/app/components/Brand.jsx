import { Box, styled } from "@mui/material";
import { MatxLogo } from "app/components";
import { Span } from "./Typography";
const BrandRoot = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 29px",
}));
const StyledSpan = styled(Span)(({ display }) => ({
  fontSize: 18,
  marginLeft: ".5rem",
  display: display,
}));
const Brand = ({ children, display }) => {
  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <MatxLogo />
        <StyledSpan display={display} className="sidenavHoverShow">
          Oceantech
        </StyledSpan>
      </Box>
      <Box className="sidenavHoverShow" sx={{ display: display }}>
        {children}
      </Box>
    </BrandRoot>
  );
};
export default Brand;
