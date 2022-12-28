import React, { useState } from "react";
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
  IconButton,
  Icon,
  Paper,
  Card,
} from "@mui/material";

import ReleaseDialog from "./ReleaseDialog";
import EmployeeCard from "app/components/EmployeeCard/EmployeeCard";
import EmployeeCardDetail from "app/components/EmployeeCard/EmloyeeCardDetail";
const ListUpdate = [
  { id: 1, name: "Lương" },
  { id: 2, name: "Chức Vụ" },
  { id: 3, name: "Nhóm" },
];

function ManagerEmployeeDialog({ handleClose }) {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);

  return (
    <>
      {" "}
      <Dialog open={true} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          Cập nhật diễn biến
          <IconButton onClick={() => handleClose()}>
            <Icon color="error">close</Icon>
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Grid container xs={12} spacing={4}>
            <Grid item container xs={4} spacing={2}>
              <Grid item xs={12}>
                <EmployeeCard />
              </Grid>
              <Grid item xs={12}>
                <TextField select fullWidth label="Cập nhật">
                  {ListUpdate.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid item container xs={8} spacing={2}>
              <EmployeeCardDetail />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{ mb: 2, background: "#FF9E43" }} onClick={handleClose}>
            Hủy
          </Button>
          <Button
            variant="contained"
            sx={{ mb: 2, background: "#d32f2f" }}
            onClick={() => setShouldOpenDialog(true)}
          >
            Kết thúc
          </Button>
          <Button variant="contained" sx={{ mb: 2, background: "#7467EF" }}>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
      {shouldOpenDialog && <ReleaseDialog handleClose={() => setShouldOpenDialog(false)} />}
    </>
  );
}

export default ManagerEmployeeDialog;
