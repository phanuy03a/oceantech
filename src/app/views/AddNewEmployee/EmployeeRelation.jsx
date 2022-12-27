import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { Box, Button } from "@mui/material";
import EmployeeRelationDialog from "./EmployeeRelationDialog";
function EmployeeRelation(props) {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const handleClose = () => {
    setShouldOpenDialog(false);
  };
  const listRelation = [
    {
      name: "Uy",
      birthday: "26/00/2001",
      gender: "Nam",
      relationship: "Bố",
      address: {
        addressDetail: "Số 12",
        commune: "An nội",
        district: "Bình lục",
        province: "Hà nam",
      },
    },
  ];
  return (
    <>
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
        data={listRelation}
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
      {shouldOpenDialog && <EmployeeRelationDialog open={open} handleClose={handleClose} />}
    </>
  );
}

export default EmployeeRelation;
