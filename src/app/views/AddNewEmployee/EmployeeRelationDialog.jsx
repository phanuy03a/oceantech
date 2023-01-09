import React from "react";
import {
  Dialog,
  DialogTitle,
  Box,
  Button,
  styled,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Close } from "@mui/icons-material";
import { useSelector } from "react-redux";

function EmployeeRelationDialog(props) {
  const { open, handleClose, handleAddToFomik } = props;
  const location = useSelector((state) => state.Location.location);
  const otherFeature = useSelector((state) => state.OtherFeature.otherFeature);
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      date: "",
      relationship: "",
      province: "",
      district: "",
      commune: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Hãy nhập đầy đủ họ và tên")
        .max(30, "Nhập họ tên đúng định dạng")
        .required("Không được bỏ trống"),

      gender: Yup.string().required("Không được bỏ trống"),
      province: Yup.string().required("Không được bỏ trống"),
      district: Yup.string().required("Không được bỏ trống"),
      commune: Yup.string().required("Không được bỏ trống"),
      address: Yup.string().required("Không được bỏ trống"),
      date: Yup.date().required("Vui lòng nhập ngày"),
      relationship: Yup.string().required("Không được bỏ trống"),
    }),
    onSubmit: () => {
      onSubmit: (values) => {
        handleAddToFomik(values, "relationship");
      };
    },
  });

  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        Thêm văn bằng
        <Box onClick={handleClose}>
          <Close color="error"></Close>
        </Box>
      </DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent style={{ paddingTop: 10 }}>
          <Grid container spacing={2}>
            <Grid item sm={4} xs={4} className="input-dialog">
              <TextField
                label="Họ và Tên"
                type="text"
                fullWidth
                variant="outlined"
                name="name"
                size="small"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name && formik.touched.name}
                helperText={formik.errors.name}
              />
            </Grid>
            <Grid item sm={3} xs={3} className="input-dialog">
              <TextField
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                label="Ngày cấp"
                variant="outlined"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                error={formik.errors.date && formik.touched.date}
                helperText={formik.errors.date}
              />
            </Grid>
            <Grid item sm={2} xs={2} className="input-dialog">
              <TextField
                select
                label="Giới tính"
                type="text"
                fullWidth
                size="small"
                variant="outlined"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                error={formik.errors.gender && formik.touched.gender}
                helperText={formik.errors.gender}
              >
                {otherFeature.Gender.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item sm={3} xs={3} className="input-dialog">
              <TextField
                select
                label="Mối quan hệ"
                type="text"
                fullWidth
                variant="outlined"
                name="relationship"
                size="small"
                value={formik.values.relationship}
                onChange={formik.handleChange}
                error={formik.errors.relationship && formik.touched.relationship}
                helperText={formik.errors.relationship}
              >
                {otherFeature.Related.map((item) => (
                  <MenuItem value={item.related}>{item.related}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item sm={3} xs={3} className="input-dialog">
              <TextField
                select
                label="Tỉnh/Thành phố"
                type="text"
                fullWidth
                variant="outlined"
                name="province"
                size="small"
                value={formik.values.province}
                onChange={formik.handleChange}
                error={formik.errors.province && formik.touched.province}
                helperText={formik.errors.province}
              >
                {location.provinces.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item sm={3} xs={3} className="input-dialog">
              <TextField
                select
                label="Quận/Huyện"
                type="text"
                fullWidth
                variant="outlined"
                name="district"
                size="small"
                value={formik.values.district}
                onChange={formik.handleChange}
                error={formik.errors.district && formik.touched.district}
                helperText={formik.errors.district}
              >
                {location.districts.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item sm={3} xs={3} className="input-dialog">
              <TextField
                select
                label="Xã/Phường"
                type="text"
                fullWidth
                variant="outlined"
                name="commune"
                size="small"
                value={formik.values.commune}
                onChange={formik.handleChange}
                error={formik.errors.commune && formik.touched.commune}
                helperText={formik.errors.commune}
              >
                {location.communes.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item sm={3} xs={3} className="input-dialog">
              <TextField
                label="Địa chỉ cụ thể"
                type="text"
                fullWidth
                size="small"
                variant="outlined"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.errors.address && formik.touched.address}
                helperText={formik.errors.address}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{ mb: 2, background: "#FF9E43" }} onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="contained" sx={{ mb: 2, background: "#7467EF" }} type="submit">
            Xác nhận
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default EmployeeRelationDialog;
