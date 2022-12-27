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
const listField = [{ name: "A" }, { name: "B" }, { name: "C" }];

function EmployeeDiplomaDialog(props) {
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
          <Grid item sm={12} xs={12}>
            <TextField
              label="Tên văn bằng"
              type="text"
              fullWidth
              variant="outlined"
              name="name"
              size="small"
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            <TextField
              label="Nội dung văn bằng"
              type="text"
              fullWidth
              variant="outlined"
              name="content"
              size="small"
            />
          </Grid>
          <Grid item sm={4} xs={4}>
            <TextField
              select
              label="Nơi cấp"
              type="text"
              fullWidth
              size="small"
              variant="outlined"
              name="diplomaAddress"
            ></TextField>
          </Grid>
          <Grid item sm={4} xs={4}>
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
          <Grid item sm={4} xs={4}>
            <TextField
              select
              label="Lĩnh vực"
              type="text"
              fullWidth
              variant="outlined"
              name="field"
              size="small"
            >
              {listField.map((item) => (
                <MenuItem value={item.name}>{item.name}</MenuItem>
              ))}
            </TextField>
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

export default EmployeeDiplomaDialog;
