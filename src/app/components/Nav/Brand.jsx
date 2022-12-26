import React from "react";
import { Box, styled } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Span } from "../Typography";
const BrandRoot = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 25px",
}));
const StyledSpan = styled(Span)(({}) => ({
  fontSize: "18px",
  marginLeft: ".5rem",
  lineHeight: "1.5",
}));
function Brand(props) {
  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <AccountBalanceIcon color="primary"></AccountBalanceIcon>
        <StyledSpan>Oceantech</StyledSpan>
      </Box>
    </BrandRoot>
  );
}

export default Brand;
