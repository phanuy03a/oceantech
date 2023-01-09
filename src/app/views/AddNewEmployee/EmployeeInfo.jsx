import React from "react";
import { Grid, Box, TextField, MenuItem } from "@mui/material/";
import styled from "@emotion/styled";
import { Paragraph } from "app/components/Typography";
import { useSelector } from "react-redux";

const Label = styled(Paragraph)(() => ({
  color: "#555555",
  fontSize: 14,
}));

function EmployeeInfo(props) {
  const { formikRoot } = props;
  const location = useSelector((state) => state.Location.location);
  const otherFeature = useSelector((state) => state.OtherFeature.otherFeature);
  console.log(otherFeature);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item container spacing={1.5} xs={12}>
          <Grid item>
            <Label>Thông tin cơ bản</Label>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={2}>
              <TextField
                fullWidth
                size="small"
                label="Tên nhân viên"
                variant="outlined"
                name="fullName"
                value={formikRoot.values.fullName}
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.fullName && formikRoot.touched.fullName}
                helperText={formikRoot.errors.fullName}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                size="small"
                label="Mã nhân viên"
                variant="outlined"
                value={formikRoot.values.code}
                name="code"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.code && formikRoot.touched.code}
                helperText={formikRoot.errors.code}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                select
                fullWidth
                size="small"
                label="Giới tính"
                variant="outlined"
                value={formikRoot.values.gender}
                name="gender"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.gender && formikRoot.errors.gender}
                helperText={formikRoot.errors.gender}
              >
                {otherFeature.Gender.map((item) => (
                  <MenuItem key={item.id} value={item.gender}>
                    {item.gender}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                size="small"
                label="Nơi sinh"
                value={formikRoot.values.birthplace}
                name="birthplace"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.birthplace && formikRoot.touched.birthplace}
                helperText={formikRoot.errors.birthplace}
              />
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
                value={formikRoot.values.birthday || null}
                name="birthday"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.birthday && formikRoot.errors.birthday}
                helperText={formikRoot.errors.birthday}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                size="small"
                type="file"
                label="Ảnh nhân viên"
                variant="outlined"
                name="image"
                onChange={(e) => {
                  let reader = new FileReader();
                  let file = e.target.files[0];
                  reader.onloadend = () => {
                    formikRoot.setFieldValue("image", reader.result);
                  };
                  reader.readAsDataURL(file);
                }}
                error={formikRoot.errors.image && formikRoot.errors.image}
                helperText={formikRoot.errors.image}
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
              <TextField
                size="small"
                fullWidth
                label="Số điện thoại"
                variant="outlined"
                value={formikRoot.values.phone}
                name="phone"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.phone && formikRoot.touched.phone}
                helperText={formikRoot.errors.phone}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                onChange={formikRoot.handleChange}
                value={formikRoot.values.email}
                error={formikRoot.errors.email && formikRoot.touched.email}
                helperText={formikRoot.errors.email}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                select
                fullWidth
                size="small"
                label="Tỉnh/Thành phố"
                variant="outlined"
                value={formikRoot.values.province}
                name="province"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.province && formikRoot.errors.province}
                helperText={formikRoot.errors.province}
              >
                {location.provinces.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                size="small"
                select
                label="Quận/Huyện"
                variant="outlined"
                value={formikRoot.values.district}
                name="district"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.district && formikRoot.errors.district}
                helperText={formikRoot.errors.district}
              >
                {location.districts.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                select
                fullWidth
                size="small"
                label="Xã/Phường"
                variant="outlined"
                value={formikRoot.values.commune}
                name="commune"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.commune && formikRoot.errors.commune}
                helperText={formikRoot.errors.commune}
              >
                {location.communes.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                fullWidth
                label="Địa chỉ cụ thể"
                variant="outlined"
                value={formikRoot.values.address}
                name="address"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.address && formikRoot.errors.address}
                helperText={formikRoot.errors.address}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} spacing={1.5}>
          <Grid item>
            <Label>Thông tin liên quan</Label>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={2.4}>
              <TextField
                fullWidth
                size="small"
                label="Mã CCCD"
                variant="outlined"
                name="identityCode"
                onChange={formikRoot.handleChange}
                value={formikRoot.values.identityCode}
                error={formikRoot.errors.identityCode && formikRoot.touched.identityCode}
                helperText={formikRoot.errors.identityCode}
              />
            </Grid>
            <Grid item xs={2.4}>
              <TextField
                select
                fullWidth
                size="small"
                label="Nơi cấp"
                variant="outlined"
                name="placeIssue"
                onChange={formikRoot.handleChange}
                value={formikRoot.values.placeIssue}
                error={formikRoot.errors.placeIssue && formikRoot.touched.placeIssue}
              >
                {otherFeature.placeIssue.map((item) => (
                  <MenuItem key={item.id} value={item.place}>
                    {item.place}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={2.4}>
              <TextField
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                label="Ngày cấp"
                variant="outlined"
                value={formikRoot.values.dateIssue}
                name="dateIssue"
                onChange={formikRoot.handleChange}
                error={formikRoot.errors.dateIssue && formikRoot.errors.dateIssue}
                helperText={formikRoot.errors.dateIssue}
              />
            </Grid>
            <Grid item xs={2.4}>
              <TextField
                fullWidth
                size="small"
                label="Dân tộc"
                variant="outlined"
                name="ethnic"
                onChange={formikRoot.handleChange}
                value={formikRoot.values.ethnic}
                error={formikRoot.errors.ethnic && formikRoot.touched.ethnic}
                helperText={formikRoot.errors.ethnic}
              />
            </Grid>
            <Grid item xs={2.4}>
              <TextField
                fullWidth
                size="small"
                label="Tôn giáo"
                variant="outlined"
                name="religion"
                onChange={formikRoot.handleChange}
                value={formikRoot.values.religion}
                error={formikRoot.errors.religion && formikRoot.touched.religion}
                helperText={formikRoot.errors.religion}
              />
            </Grid>
          </Grid>

          <Grid item container xs={12} spacing={1.5}>
            <Grid item>
              <Label> Thông tin vị trí</Label>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={4}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  label="Nhóm"
                  variant="outlined"
                  value={formikRoot.values.team}
                  name="team"
                  onChange={formikRoot.handleChange}
                  error={formikRoot.errors.team && formikRoot.errors.team}
                  helperText={formikRoot.errors.team}
                >
                  {otherFeature.Team.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  label="Lương(VND)"
                  variant="outlined"
                  name="salary"
                  onChange={formikRoot.handleChange}
                  value={formikRoot.values.salary}
                  error={formikRoot.errors.salary && formikRoot.touched.salary}
                  helperText={formikRoot.errors.salary}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  fullWidth
                  select
                  size="small"
                  label="Chức vụ"
                  variant="outlined"
                  value={formikRoot.values.position}
                  name="position"
                  onChange={formikRoot.handleChange}
                  error={formikRoot.errors.position && formikRoot.errors.position}
                  helperText={formikRoot.errors.position}
                >
                  {otherFeature.Position.map((item) => (
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
