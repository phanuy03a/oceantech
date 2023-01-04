import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
  Box,
  IconButton,
  Icon,
} from "@mui/material";
import Resume from "./Resume";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ApprovalDialog({ handleClose }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog open={true} maxWidth={"lg"} fullWidth>
      <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        Hồ sơ nhân viên
        <IconButton onClick={() => handleClose()}>
          <Icon color="error">close</Icon>
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Thông tin cơ bản" {...a11yProps(0)} />
          <Tab label="Văn bằng" {...a11yProps(1)} />
          <Tab label="Quan hệ gia đình" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0} style={{ width: "100%" }}>
          <Resume />
        </TabPanel>
        <TabPanel value={value} index={1} style={{ width: "100%" }}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          sx={{ mb: 2, background: "#FF9E43" }}
          onClick={() => handleClose()}
        >
          Hủy
        </Button>
        <Button variant="contained" sx={{ mb: 2, background: "#7467EF" }}>
          Xác nhận
        </Button>
        <Button variant="contained" sx={{ mb: 2, background: "#77789E" }}>
          Yêu cầu bổ sung
        </Button>
        <Button variant="contained" sx={{ mb: 2, background: "#d32f2f" }}>
          Từ chối
        </Button>
      </DialogActions>
    </Dialog>
  );
}
