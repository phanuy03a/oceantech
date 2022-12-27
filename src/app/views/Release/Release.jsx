import React from "react";
import Breadcrumb from "app/components/Breadcrumb";
import MaterialTable from "@material-table/core";
import { Button, Box, Icon, IconButton, styled, Table, Tooltip } from "@mui/material";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

function Release() {
  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="abc">
              <IconButton>
                <Icon color="success">visibilityIcon</Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
    { title: "Họ tên", field: "name" },
    { title: "Tuổi", field: "age" },
    { title: "Email", field: "email" },
    { title: "Số điện thoại", field: "phone" },
    { title: "Trạng thái", field: "status.title" },
  ];

  const data = [
    {
      name: "Uy ko tín",
      age: "11",
      email: "abcdef@gmail.com",
      phone: "012456789",
      status: { id: 1, title: "Đã duyệt" },
    },
    {
      name: "Vũ nhôm",
      age: "22",
      email: "abcdef@gmail.com",
      phone: "012456789",
      status: { id: 2, title: "Chờ duyệt" },
    },
    {
      name: "Trung tình",
      age: "33",
      email: "abcdef@gmail.com",
      phone: "012456789",
      status: { id: 2, title: "Chờ duyệt" },
    },
    {
      name: "Huy",
      age: "44",
      email: "abcdef@gmail.com",
      phone: "012456789",
      status: { id: 3, title: "Chờ nộp hồ sơ" },
    },
    {
      name: "Cuốc Lươn",
      age: "55",
      email: "abcdef@gmail.com",
      phone: "012456789",
      status: { id: 4, title: "Yêu cầu bổ sung" },
    },
  ];

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Kết thúc" }]} />
      </Box>

      <Box width="100%" overflow="auto">
        <MaterialTable
          title={"Danh sách kết thúc"}
          data={data}
          columns={columns}
          options={{
            rowStyle: (rowData, index) => {
              return {
                backgroundColor: index % 2 === 1 ? "#EEE" : "#FFF",
              };
            },
            maxBodyHeight: "1000px",
            minBodyHeight: "370px",
            headerStyle: {
              backgroundColor: "#222943",
              color: "#fff",
            },
            // padding: 'dense',
            padding: "default",
            // search: false,
            // exportButton: true,
            toolbar: true,
          }}
        />
      </Box>
    </Container>
  );
}

export default Release;
