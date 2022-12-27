import React from "react";
import Tab from "@mui/material/Tab";
import {
  Dialog,
  DialogTitle,
  Box,
  Button,
  styled,
  DialogActions,
  DialogContent,
} from "@mui/material";

import { Close } from "@mui/icons-material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeDiploma from "./EmployeeDiploma";
import EmployeeRelation from "./EmployeeRelation";

function AddNewEmployeeDialog(props) {
  const { open, handleClose } = props;
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog open={true} maxWidth={"lg"} fullWidth>
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        Thêm mới nhân viên
        <Box onClick={() => handleClose()}>
          <Close color="error"></Close>
        </Box>
      </DialogTitle>

      <DialogContent>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", background: "#eee" }}>
            <TabList onChange={handleChange}>
              <Tab label="Thông tin nhân viên" value="1" />
              <Tab label="Thông tin  văn bằng" value="2" />
              <Tab label="Thông tin quan hệ gia đình" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ p: "20px 0" }}>
            <EmployeeInfo />
          </TabPanel>
          <TabPanel value="2" sx={{ p: "20px 0" }}>
            <EmployeeDiploma />
          </TabPanel>
          <TabPanel value="3" sx={{ p: "20px 0" }}>
            <EmployeeRelation />
          </TabPanel>
        </TabContext>
      </DialogContent>

      <DialogActions>
        <Button variant="contained" sx={{ mb: 2, background: "#7467EF" }}>
          Lưu
        </Button>
        <Button variant="contained" sx={{ mb: 2, background: "#339999" }}>
          Gửi lãnh đạo
        </Button>
        <Button
          variant="contained"
          sx={{ mb: 2, background: "#FF9E43" }}
          onClick={() => handleClose()}
        >
          Hủy
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddNewEmployeeDialog;
