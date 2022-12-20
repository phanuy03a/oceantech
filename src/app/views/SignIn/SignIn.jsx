import { LoadingButton } from "@mui/lab";
import { Card, Checkbox, Grid, TextField } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { Paragraph } from "../../components/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const FlexBox = styled(Box)(() => ({ display: "flex", alignItems: "center" }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: "center" }));

const ContentBox = styled(Box)(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
  background: "rgba(0, 0, 0, 0.01)",
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100vh !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
  },
}));

import React from "react";

function SignIn(props) {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <JWTRoot>
        <Card className="card">
          <Grid container>
            <Grid sm={6} xs={12}>
              <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
                <img src="/assets/images/illustrations/dreamer.svg" width="100%" alt="" />
              </JustifyBox>
            </Grid>
            <Grid item sm={6} xs={12}>
              <ContentBox>
                <form action="">
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    name="text"
                    label="Tên đăng nhập"
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    name="password"
                    type="password"
                    label="Mật Khẩu"
                    variant="outlined"
                    sx={{ mb: 1.5 }}
                  />
                  <FlexBox justifyContent="space-between">
                    <FlexBox gap={1}>
                      <Checkbox size="small" name="remember" sx={{ padding: 0 }} />

                      <Paragraph>Remember Me</Paragraph>
                    </FlexBox>
                    <NavLink
                      to="/session/forgot-password"
                      style={{ color: theme.palette.primary.main }}
                    >
                      Forgot password?
                    </NavLink>
                  </FlexBox>
                  <LoadingButton
                    type="submit"
                    color="primary"
                    loading={loading}
                    variant="contained"
                    sx={{ my: 2 }}
                  >
                    Login
                  </LoadingButton>
                  <Paragraph>
                    Don't have an account?
                    <NavLink
                      to="/session/signup"
                      style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                    >
                      Register
                    </NavLink>
                  </Paragraph>
                </form>
              </ContentBox>
            </Grid>
          </Grid>
        </Card>
      </JWTRoot>
    </div>
  );
}

export default SignIn;
