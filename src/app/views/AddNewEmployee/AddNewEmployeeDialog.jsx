import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import { Dialog, DialogTitle, Box, Button, DialogActions, DialogContent } from "@mui/material";
import EmployeeRegisterDialog from "./EmployeeRegisterDialog";
import { Close } from "@mui/icons-material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeDiploma from "./EmployeeDiploma";
import EmployeeRelation from "./EmployeeRelation";
import { useFormik } from "formik";
import moment from "moment";
import * as Yup from "yup";
function AddNewEmployeeDialog(props) {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [saved, setSaved] = useState("none");
  const { handleClose, employee } = props;
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formik = useFormik({
    initialValues: {
      fullName: employee?.fullName || "",
      code: employee?.code || "",
      phone: employee?.phone || "",
      birthplace: employee?.birthday || "",
      email: employee?.email || "",
      address: employee?.address || "",
      identityCode: employee?.identityCode || "",
      placeIssue: employee?.placeIssue?.place || "",
      ethnic: employee?.ethnic || "",
      religion: employee?.religion || "",
      salary: employee?.salary || "",
      birthplace: employee?.birthplace || "",
      district: employee?.district?.name || "",
      province: employee?.province?.name || "",
      commune: employee?.commune?.name || "",
      gender: employee?.gender || "",
      position: employee.position || "",
      team: employee.team || "",
      birthday: employee?.birthDay || "2002-08-01",
      dateIssue: employee?.dateIssue ? moment(employee?.dateIssue).format("YYYY-MM-DD") : "",
      image: employee?.image || null,
      listDiploma: employee?.listDiploma || [],
      listRelationship: employee?.listRelationship || [],
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "Hãy nhập đầy đủ họ và tên")
        .max(30, "Nhập họ tên đúng định dạng")
        .required("Không được bỏ trống"),
      email: Yup.string().email("Email sai định dạng").required("Không được bỏ trống"),
      code: Yup.string().required("Không được bỏ trống"),
      phone: Yup.string().required("Không được bỏ trống"),
      birthplace: Yup.string().required("Không được bỏ trống"),
      email: Yup.string().required("Không được bỏ trống"),
      address: Yup.string().required("Không được bỏ trống"),
      identityCode: Yup.string().required("Không được bỏ trống"),
      placeIssue: Yup.string().required("Chọn nơi cấp"),

      ethnic: Yup.string().required("Không được bỏ trống"),
      religion: Yup.string().required("Không được bỏ trống"),
      salary: Yup.string().required("Không được bỏ trống"),
      dateIssue: Yup.date().required("Vui lòng nhập ngày"),
      birthday: Yup.date()

        .max(new Date(Date.now() - 567648000000), "Yêu cầu trên 18 tuổi")
        .min(new Date(Date.now() - 1892160000000), "Yêu cầu dưới 60 tuổi")
        .required("Vui lòng nhập ngày"),
      image: Yup.string().nullable().required("Vui lòng chọn ảnh nhân viên!"),
      gender: Yup.string().required("Không được bỏ trống"),
      province: Yup.string().required("Không được bỏ trống"),
      district: Yup.string().required("Không được bỏ trống"),
      commune: Yup.string().required("Không được bỏ trống"),
      team: Yup.string().required("Không được bỏ trống"),
      position: Yup.string().required("Không được bỏ trống"),
    }),
    onSubmit: (data) => {
      console.log(data);
      setSaved("block");
    },
  });
  const handleAddToFomik = (value, method) => {
    console.log(value, method);
    if (method === "diploma") formik.values.listDiploma.push(value);
    if (method === "relationship") formik.values.listRelationship.push(value);
  };

  return (
    <>
      <Dialog open={true} maxWidth={"lg"} fullWidth>
        <DialogTitle
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {Object.keys(employee).length === 0 ? "Thêm mới nhân viên" : "Sửa nhân viên"}
          <Box onClick={() => handleClose()}>
            <Close color="error"></Close>
          </Box>
        </DialogTitle>

        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  background: "#eee",
                }}
              >
                <TabList onChange={handleChange}>
                  <Tab label="Thông tin nhân viên" value="1" />
                  <Tab label="Thông tin  văn bằng" value="2" />
                  <Tab label="Thông tin quan hệ gia đình" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ p: "20px 0" }}>
                <EmployeeInfo formikRoot={formik} />
              </TabPanel>
              <TabPanel value="2" sx={{ p: "20px 0" }}>
                <EmployeeDiploma handleAddToFomik={handleAddToFomik} />
              </TabPanel>
              <TabPanel value="3" sx={{ p: "20px 0" }}>
                <EmployeeRelation handleAddToFomik={handleAddToFomik} />
              </TabPanel>
            </TabContext>
          </DialogContent>

          <DialogActions>
            <Button variant="contained" type="submit" sx={{ mb: 2, background: "#7467EF" }}>
              Lưu
            </Button>
            <Button
              variant="contained"
              sx={{ mb: 2, background: "#339999", display: saved }}
              onClick={() => {
                setShouldOpenDialog("true");
              }}
            >
              Đăng kí
            </Button>
            <Button
              variant="contained"
              sx={{ mb: 2, background: "#FF9E43" }}
              onClick={() => handleClose()}
            >
              Hủy
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      {shouldOpenDialog && (
        <EmployeeRegisterDialog
          handleClose={() => {
            setShouldOpenDialog(false);
          }}
        />
      )}
      {/* <EmployeeRegisterDialog
        handleClose={() => {
          setShouldOpenDialog(false);
        }}
      /> */}
    </>
  );
}

export default AddNewEmployeeDialog;
