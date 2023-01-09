import React, { useEffect, useState } from "react";
import AddNewEmployeeDialog from "./AddNewEmployeeDialog";
import Breadcrumb from "app/components/Breadcrumb";
import { Button, Box, Icon, IconButton, styled, Tooltip } from "@mui/material";
import MaterialTable from "@material-table/core";

import {
  getListEmployeeRequest,
  getListLocation,
  getOtherFeature,
} from "app/redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { ComponentModel } from "echarts";

const Container = styled("div")(() => ({
  margin: "30px",
  "& .breadcrumb": {
    marginBottom: "30px",
  },
}));

function AddNewEmployee() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListEmployeeRequest());
    dispatch(getListLocation());
    dispatch(getOtherFeature());
  }, []);
  const listAddNew = useSelector((state) => state.Employee.listEmployee);
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [employee, setEmployee] = useState({});
  const handleChangeEmployee = (rowdata, method) => {
    if (method == 1) {
      setShouldOpenDialog(true);
      setEmployee(rowdata);
    }
  };
  const handleClose = () => {
    setShouldOpenDialog(false);
    setEmployee({});
  };
  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="Xem chi tiết">
              <IconButton>
                <Icon color={"success"}>visibilityIcon</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Sửa">
              <IconButton onClick={() => handleChangeEmployee(rowData, 1)}>
                <Icon color="primary">edit</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa">
              <IconButton>
                <Icon color={"error"}>delete</Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
    { title: "Họ tên", field: "name" },
    {
      title: "Ngày sinh",
      field: "birthDay",
      render: (rowdata) => moment(rowdata).format("DD/MM/YYYY"),
    },
    { title: "Email", field: "email" },
    { title: "Số điện thoại", field: "phone" },
    { title: "Trạng thái", field: "status" },
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
          data={listAddNew}
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
            toolbar: false,
          }}
        />
      </Box>

      {shouldOpenDialog && <AddNewEmployeeDialog employee={employee} handleClose={handleClose} />}
      {/* <AddNewEmployeeDialog handleClose={handleClose} employee={employee} /> */}
    </Container>
  );
}

export default AddNewEmployee;
