import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEmployee } from "app/redux/actions/actions";
import MaterialTable from "@material-table/core";
import { Button, Box, Icon, IconButton, styled, Tooltip } from "@mui/material";
import EmployeeRelationDialog from "./EmployeeRelationDialog";
import ConfirmDialog from "app/components/confirmDialog/ConfirmDialog";
function EmployeeRelation(props) {
  const dispatch = useDispatch();
  const { employeeData, handleAddRelation } = props;
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);

  const [relationship, setRelationship] = useState({});
  const handleClose = () => {
    setShouldOpenDialog(false);
    setRelationship({});
  };
  const [shouldOpenConfirmationDeleteDialog, setshouldOpenConfirmationDeleteDialog] =
    useState(false);
  const handleChangeEmployee = (rowdata, method) => {
    if (method == 1) {
      setShouldOpenDialog(true);
      setRelationship(rowdata);
    }
    if (method == 0) {
      setRelationship(rowdata);
      setshouldOpenConfirmationDeleteDialog(true);
    }
  };
  const handleDeleteRelationship = () => {
    employeeData.listRelationship = employeeData.listRelationship.filter(
      (Relationship) => Relationship.id !== relationship.id
    );
    setshouldOpenConfirmationDeleteDialog(false);
    setRelationship({});
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
              <IconButton
                onClick={() => {
                  handleChangeEmployee(rowData, 0);
                }}
              >
                <Icon color={"error"}>delete</Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
    { title: "Họ và tên", field: "name" },
    {
      title: "Ngày sinh ",
      field: "birthday",
    },
    { title: "Giới tính", field: "gender" },
    {
      title: "Quan hệ",
      render: (rowData) => rowData.relationship.relationship,
    },
    { title: "Địa chỉ", field: "address" },
  ];

  return (
    <>
      {shouldOpenConfirmationDeleteDialog && (
        <ConfirmDialog
          onConfirmDialogClose={() => {
            setshouldOpenConfirmationDeleteDialog(false);
            setRelationship({});
          }}
          onYesClick={() => {
            handleDeleteRelationship();
          }}
          title="Xóa quan hệ"
        />
      )}
      <Box className="box" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={() => {
            setShouldOpenDialog(true);
          }}
        >
          Thêm mới
        </Button>
      </Box>
      <MaterialTable
        title={""}
        data={employeeData?.listRelationship}
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
        <EmployeeRelationDialog
          open={open}
          handleClose={handleClose}
          employee={employeeData}
          handleAddRelation={handleAddRelation}
          relationshipData={relationship}
        />
      )}
    </>
  );
}

export default EmployeeRelation;
