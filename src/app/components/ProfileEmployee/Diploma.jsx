import React from "react";
import MaterialTable from "@material-table/core";
const listDiploma = [
  {
    name: "Bằng kĩ sư",
    content: "Front-end",
    diplomaAddress: "PTIT",
    diplomaDate: "20/11/2026",
    sector: "Giáo dục",
  },
];
function Diploma(props) {
  return (
    <>
      {" "}
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
        data={[]}
        actions={[
          {
            icon: "visibilityIcon",
            width: 10,
            tooltip: "Xem chi tiết",
            iconProps: { style: { color: "green" } },
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
    </>
  );
}

export default Diploma;
