import React, { useState } from "react";
import Breadcrumb from "app/components/Breadcrumb";
import MaterialTable from "@material-table/core";
import { Button, Box, Icon, IconButton, styled, Table, Tooltip } from "@mui/material";
import ManagerEmployeeDialog from "./ManagerEmployeeDialog";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

function ManagerEmployee() {
  const [openManagerEmployeeDialog, setOpenManagerEmployeeDialog] = useState(false);

  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="Cập nhật diễn biến">
              <IconButton onClick={() => setOpenManagerEmployeeDialog(true)}>
                <Icon color="success">trending_up_icon</Icon>
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
  ];

  const data = [
    {
      name: "Uy ko tín",
      age: "11",
      email: "abcdef@gmail.com",
      phone: "012456789",
    },
    {
      name: "Vũ nhôm",
      age: "22",
      email: "abcdef@gmail.com",
      phone: "012456789",
    },
    {
      name: "Trung tình",
      age: "33",
      email: "abcdef@gmail.com",
      phone: "012456789",
    },
    {
      name: "Huy",
      age: "44",
      email: "abcdef@gmail.com",
      phone: "012456789",
    },
    {
      name: "Cuốc Lươn",
      age: "55",
      email: "abcdef@gmail.com",
      phone: "012456789",
    },
  ];

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Quản lý nhân viên" }]}
        />
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
              backgroundColor: "#222943",
              color: "#fff",
            },
            // padding: 'dense',
            padding: "default",
            // search: false,
            // exportButton: true,0
            toolbar: true,
          }}
        />
      </Box>
      {openManagerEmployeeDialog && (
        <ManagerEmployeeDialog handleClose={() => setOpenManagerEmployeeDialog(false)} />
      )}
    </Container>
  );
}

export default ManagerEmployee;
