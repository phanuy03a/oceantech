import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { Box, Button } from "@mui/material";
import EmployeeDiplomaDialog from "./EmployeeDiplomaDialog";

function EmployeeDiploma(props) {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const handleClose = () => {
    setShouldOpenDialog(false);
  };
  const listDiploma = [
    {
      name: "Bùi Trịnh",
      content: "Quang",
      diplomaAddress: "Hú",
      diplomaDate: "20/11/2001",
      sector: "Đánh bạc",
    },
  ];
  return (
    <>
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
          { title: "Tên", field: "name" },
          { title: "Nội dung", field: "content" },
          { title: "Nơi cấp", field: "diplomaAddress" },
          { title: "Ngày cấp", field: "diplomaDate" },
          { title: "Lĩnh vực", field: "sector" },
        ]}
        data={listDiploma}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit",
            iconProps: { style: { color: "green" } },
            onClick: () => setShouldOpenDialog(true),
          },
          {
            icon: "delete",
            tooltip: "Edit",
            iconProps: { style: { color: "red" } },
          },
        ]}
        options={{
          search: false,
          draggable: true,
          paging: true,
          pageSize: 3,
          toolbar: false,
        }}
      />
      {shouldOpenDialog && <EmployeeDiplomaDialog open={open} handleClose={handleClose} />}
    </>
  );
}

export default EmployeeDiploma;
