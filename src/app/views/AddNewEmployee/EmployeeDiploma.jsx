import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { updateEmployee, getEmployeeData } from "app/redux/actions/actions";
import EmployeeDiplomaDialog from "./EmployeeDiplomaDialog";
import { useSelector, useDispatch } from "react-redux";
import ConfirmDialog from "app/components/confirmDialog/ConfirmDialog";
import { Button, Box, Icon, IconButton, styled, Tooltip } from "@mui/material";
function EmployeeDiploma(props) {
  const { employeeData, handleAddDiploma } = props;
  console.log("bb", employeeData);
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [diplomaData, setDiplomaData] = useState({});
  const [shouldOpenConfirmationDeleteDialog, setshouldOpenConfirmationDeleteDialog] =
    useState(false);
  const handleClose = () => {
    setShouldOpenDialog(false);
    setDiplomaData({});
  };
  const handleChangeEmployee = (rowdata, method) => {
    if (method == 1) {
      setShouldOpenDialog(true);
      setDiplomaData(rowdata);
    }
    if (method == 0) {
      setDiplomaData(rowdata);
      setshouldOpenConfirmationDeleteDialog(true);
    }
  };
  const handleDeleteDiploma = () => {
    employeeData.listDiploma = employeeData.listDiploma.filter(
      (diploma) => diploma.id !== diplomaData.id
    );
    setshouldOpenConfirmationDeleteDialog(false);
    setDiplomaData({});
  };
  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="Sửa">
              <IconButton onClick={() => handleChangeEmployee(rowData, 1)}>
                <Icon color="primary">edit</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa">
              <IconButton onClick={() => handleChangeEmployee(rowData, 0)}>
                <Icon color={"error"}>delete</Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
    { title: "Tên văn bằng", field: "name" },
    {
      title: "Nội dung ",
      field: "content",
    },
    { title: "Nơi cấp", field: "place" },
    { title: "Ngày cấp", field: "date" },
    { title: "Lĩnh Vực", render: (rowData) => rowData.field.fieldName },
  ];

  return (
    <>
      {shouldOpenConfirmationDeleteDialog && (
        <ConfirmDialog
          onConfirmDialogClose={() => {
            setshouldOpenConfirmationDeleteDialog(false);
            setDiplomaData({});
          }}
          onYesClick={() => {
            handleDeleteDiploma();
          }}
          title="Xóa văn bằng"
        />
      )}

      <Box className="box" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={() => setShouldOpenDialog(true)}
        >
          Thêm mới
        </Button>
      </Box>
      <MaterialTable
        title={""}
        data={employeeData?.listDiploma}
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

      {shouldOpenDialog && (
        <EmployeeDiplomaDialog
          open={open}
          handleClose={handleClose}
          employee={employeeData}
          diplomaData={diplomaData}
          handleAddDiploma={handleAddDiploma}
        />
      )}
    </>
  );
}

export default EmployeeDiploma;
