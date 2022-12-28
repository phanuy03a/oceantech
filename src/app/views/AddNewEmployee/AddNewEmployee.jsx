import React, { useState } from "react";
import AddNewEmployeeDialog from "./AddNewEmployeeDialog";
import Breadcrumb from "app/components/Breadcrumb";
import { Button, Box, Icon, IconButton, styled, Tooltip } from "@mui/material";
import MaterialTable from "@material-table/core";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

function AddNewEmployee() {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);

  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        const isDisabled = rowData.status?.id !== 1;
        return (
          <>
            <Tooltip title="Sửa">
              <IconButton onClick={() => setShouldOpenDialog(true)}>
                <Icon color="primary">edit</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa">
              <IconButton disabled={isDisabled}>
                <Icon color={isDisabled ? "disabled" : "error"}>delete</Icon>
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
      status: { id: 1, title: "Thêm mới" },
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
        <Breadcrumb
          routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Thêm mới nhân viên" }]}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={() => setShouldOpenDialog(true)}
        >
          Thêm mới
        </Button>
      </Box>

      <Box width="100%" overflow="auto">
        <MaterialTable
          title={""}
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
              backgroundColor: "#262e49",
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

      {shouldOpenDialog && <AddNewEmployeeDialog handleClose={() => setShouldOpenDialog(false)} />}
    </Container>
  );
}

export default AddNewEmployee;
