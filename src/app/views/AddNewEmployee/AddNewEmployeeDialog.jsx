import React from "react";
import Tab from "@mui/material/Tab";
import { Dialog, DialogTitle, Box, Button, TextField, Grid, styled } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { flexbox } from "@mui/system";
const DialogRoot = styled(Box)(() => ({}));
function AddNewEmployeeDialog(props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Dialog open={true} maxWidth={"lg"}>
      <DialogTitle>Thêm mới nhân viên</DialogTitle>
      <DialogRoot>
        <Box>
          <TabContext value={value}>
            <TabList onChange={handleChange} sx={{ background: "#eee" }} className="tabList">
              <Tab label="Thông tin nhân viên" value="1" />
              <Tab label="Thông tin văn bằng" value="2" />
              <Tab label="Thông tin quan hệ gia đình" value="3" />
            </TabList>
            <Box>
              <TabPanel value="1">
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Mã nhân viên"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Tên nhân viên"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Ảnh nhân viên"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Nơi sinh"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Căn cước công dân"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Tỉnh/Thành phố"
                      variant="outlined"
                    ></TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Giới tính"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Nơi cấp"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Chức vụ"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Quận/Huyện"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Ngày Cấp"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Xã/Phường"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Số điện thoại"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Nhóm"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Lương(VND)"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Địa chỉ cụ thể"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      size="small"
                      label="Quận/Huyên"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value="2"></TabPanel>
              <TabPanel value="3"></TabPanel>
            </Box>
          </TabContext>
        </Box>
        <Box>
          <Button variant="contained" color="secondary" sx={{ mb: 2 }}>
            Lưu
          </Button>
          <Button variant="contained" color="primary" sx={{ mb: 2 }}>
            Gửi lãnh đạo
          </Button>
          <Button variant="contained" color="error" sx={{ mb: 2 }}>
            Hủy
          </Button>
        </Box>
      </DialogRoot>
    </Dialog>
  );
}

export default AddNewEmployeeDialog;
