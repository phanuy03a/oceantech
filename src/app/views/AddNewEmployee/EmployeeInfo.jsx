import React from "react";
import { Grid, Box, TextField, MenuItem } from "@mui/material/";
import styled from "@emotion/styled";
import { Paragraph } from "app/components/Typography";
import { spacing } from "@mui/system";
const Label = styled(Paragraph)(() => ({
  color: "#555555",
  fontSize: 14,
}));
const listGender = [
  { id: 1, name: "Nam" },
  { id: 2, name: "Nữ" },
  { id: 3, name: "Khác" },
];

const listPosition = [
  { id: 1, name: "Nhân viên" },
  { id: 2, name: "Quản lý" },
];

const listTeam = [
  { id: 1, name: "Team Front-End" },
  { id: 2, name: "Team Back-End" },
  { id: 3, name: "Team Tester" },
  { id: 4, name: "Team Business Analyst" },
];

function EmployeeInfo(props) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item container spacing={1.5} xs={12}>
          <Grid item>
            <Label>Thông tin cơ bản</Label>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={2}>
              <TextField fullWidth size="small" label="Tên nhân viên" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth size="small" label="Mã nhân viên" variant="outlined" />
            </Grid>

            <Grid item xs={2}>
              <TextField select fullWidth size="small" label="Giới tính" variant="outlined">
                {listGender.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth size="small" label="Nơi sinh" />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                label="Ngày sinh"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                size="small"
                type="file"
                label="Ảnh nhân viên"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} spacing={1.5}>
          <Grid item>
            <Label>Thông tin liên hệ</Label>
          </Grid>

          <Grid item container xs={12} spacing={2}>
            <Grid item xs={2}>
              <TextField size="small" fullWidth label="Số điện thoại" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField size="small" fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField select fullWidth size="small" label="Tỉnh/Thành phố" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth size="small" select label="Quận/Huyện" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField select fullWidth size="small" label="Xã/Phường" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField size="small" fullWidth label="Địa chỉ cụ thể" variant="outlined" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} spacing={1.5}>
          <Grid item>
            <Label>Thông tin liên quan</Label>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={2}>
              <TextField fullWidth size="small" label="Mã CCCD" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth select size="small" label="Nơi cấp" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth size="small" label="Ngày Cấp" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                label="Ngày sinh"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth size="small" label="Dân tộc" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth size="small" label="Tôn giáo" variant="outlined" />
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={1.5}>
            <Grid item>
              <Label> Thông tin vị trí</Label>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={4}>
                <TextField select fullWidth size="small" label="Nhóm" variant="outlined">
                  {listTeam.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField fullWidth size="small" label="Lương(VND)" variant="outlined" />
              </Grid>

              <Grid item xs={4}>
                <TextField fullWidth select size="small" label="Chức vụ" variant="outlined">
                  {listPosition.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default EmployeeInfo;
