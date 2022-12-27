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
import { Close } from "@mui/icons-material";
const listGender = [
  { id: 1, name: "Nam" },
  { id: 2, name: "Nữ" },
  { id: 3, name: "Khác" },
];

const listRelationship = [
  { name: "Bố" },
  { name: "Mẹ" },
  { name: "Anh" },
  { name: "Chị" },
  { name: "Em" },
  { name: "Khác" },
];

function EmployeeRelationDialog(props) {
  const { open, handleClose } = props;
  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        Thêm văn bằng
        <Box onClick={handleClose}>
          <Close color="error"></Close>
        </Box>
      </DialogTitle>

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
            >
              {listGender.map((item) => (
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
            >
              {listRelationship.map((item) => (
                <MenuItem value={item.name}>{item.name}</MenuItem>
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
            ></TextField>
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
            ></TextField>
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
            ></TextField>
          </Grid>
          <Grid item sm={3} xs={3} className="input-dialog">
            <TextField
              label="Địa chỉ cụ thể"
              type="text"
              fullWidth
              size="small"
              variant="outlined"
              name="addressDetail"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" sx={{ mb: 2, background: "#FF9E43" }} onClick={handleClose}>
          Hủy
        </Button>
        <Button variant="contained" sx={{ mb: 2, background: "#7467EF" }}>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EmployeeRelationDialog;
