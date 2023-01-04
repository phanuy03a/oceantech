import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import MaterialTable from "@material-table/core";
import { InputAdornment, Input } from "@mui/material";
import CustomAvatar from "../Avatar/Avatar";

function Relation(props) {
  return (
    <>
      <Grid container textAlign="center">
        <Grid item xs={12}>
          <Typography variant="h5">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Độc lập - Tự do - Hạnh phúc </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={14} padding={4} alignItems={"center"}>
        <Grid item xs={4} textAlign="center">
          <CustomAvatar image={"assets/images/face-1.png"} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5">SƠ YẾU LÝ LỊCH</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" paddingBottom={1}>
              I. BẢN THÂN
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={8}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">1. Họ và tên (chữ in hoa)</InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={<InputAdornment position="start"> Giới tính</InputAdornment>}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Input
              id="standard-adornment-amount"
              fullWidth
              startAdornment={
                <InputAdornment position="start">2. Họ tên thường dùng</InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              type="date"
              id="standard-adornment-amount"
              fullWidth
              startAdornment={<InputAdornment position="start">3. Sinh ngày</InputAdornment>}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="standard-adornment-amount"
              fullWidth
              startAdornment={<InputAdornment position="start">3. Chỗ ở hiện nay</InputAdornment>}
            />
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={<InputAdornment position="start">4. Điện thoại</InputAdornment>}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={<InputAdornment position="start">Email</InputAdornment>}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={<InputAdornment position="start">5. Dân tộc</InputAdornment>}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={<InputAdornment position="start">Tôn giáo</InputAdornment>}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={<InputAdornment position="start">6. Số CCCD</InputAdornment>}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                type="date"
                id="standard-adornment-amount"
                fullWidth
                startAdornment={<InputAdornment position="start">Cấp ngày</InputAdornment>}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={<InputAdornment position="start">Nơi cấp</InputAdornment>}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Typography variant="h5" paddingBottom={2}>
              II. QUAN HỆ GIA ĐÌNH
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <MaterialTable
              localization={{
                header: {
                  actions: "Thao tác",
                },
              }}
              columns={[
                {
                  title: "STT",
                  field: "STT",
                  width: "10px",
                  render: (rowData, index) => rowData.tableData.id + 1,
                },
                { title: "Họ và Tên", field: "name" },
                { title: "Ngày sinh", field: "birthday" },
                { title: "Giới tính", field: "gender" },
                { title: "Quan hệ", field: "relationship" },
                {
                  title: "Địa chỉ",

                  render: (rowData) =>
                    `${rowData.address.addressDetail} - ${rowData.address.commune} - ${rowData.address.district} - ${rowData.address.province}`,
                },
              ]}
              data={[]}
              actions={[
                {
                  icon: "edit",
                  tooltip: "Edit",
                  iconProps: { style: { color: "green" } },
                  onClick: () => setShouldOpenDialog(true),
                },
                {
                  icon: "delete",
                  tooltip: "Delete",
                  iconProps: { style: { color: "red" } },
                },
              ]}
              options={{
                search: false,
                draggable: false,
                paging: true,
                pageSize: 3,
                toolbar: false,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Relation;
