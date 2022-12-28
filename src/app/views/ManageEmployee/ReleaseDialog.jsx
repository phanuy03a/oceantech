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
  TextareaAutosize,
} from "@mui/material";

import { Close } from "@mui/icons-material";

function ReleaseDialog(props) {
  const { handleClose } = props;
  return (
    <Dialog open={true} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        Kết thúc
        <Box onClick={handleClose}>
          <Close color="error"></Close>
        </Box>
      </DialogTitle>

      <DialogContent style={{ paddingTop: 10 }}>
        <Grid container xs={12} direction={"column"} spacing={2}>
          <Grid item>
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
          <Grid item>
            <TextField
              fullWidth
              size="small"
              label="Lý do kết thúc"
              multiline
              InputProps={{
                rows: 3,
              }}
            />
          </Grid>
          <Grid item>
            <TextField fullWidth size="small" label="Ghi chú " />
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

export default ReleaseDialog;
