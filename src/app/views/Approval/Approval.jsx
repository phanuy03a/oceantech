import React, { useState } from "react";
import Breadcrumb from "app/components/Breadcrumb";
import MaterialTable from "@material-table/core";
import { Button, Box, Icon, IconButton, styled, Table, Tooltip } from "@mui/material";
import ApprovalDialog from "./ApprovalDialog";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

function Approval() {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="Xem chi tiết">
              <IconButton onClick={() => setShouldOpenDialog(true)}>
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
        <Breadcrumb routeSegments={[{ name: "Lãnh đạo", path: "/" }, { name: "Chờ duyệt" }]} />
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

            padding: "default",

            toolbar: true,
          }}
        />
      </Box>
      {shouldOpenDialog && <ApprovalDialog handleClose={() => setShouldOpenDialog(false)} />}
      {/* <ApprovalDialog handleClose={() => setShouldOpenDialog(false)} /> */}
    </Container>
  );
}

export default Approval;
