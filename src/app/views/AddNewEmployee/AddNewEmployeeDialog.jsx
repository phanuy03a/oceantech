import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addNewEmployee, updateEmployee, getEmployeeData } from "app/redux/actions/actions";

import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
function AddNewEmployeeDialog(props) {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const [saved, setSaved] = useState("none");
  const { handleClose } = props;
  const employee = useSelector((state) => state.Employee.employeeData);
  const [employeeData, setEmployee] = useState(employee);
  useEffect(() => {
    setEmployee(employee);
  }, [employee]);
  const handleAddToList = (data, method) => {
    setEmployee({ ...employeeData, [method]: [...employeeData[method], data] });
  };
  const [employeeId, setEmployeeId] = useState(employeeData.id);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formik = useFormik({
    initialValues: {
      fullName: employeeData?.fullName || "",
      code: employeeData?.code || "",
      phone: employeeData?.phone || "",

      email: employeeData?.email || "",
      address: employeeData?.address || "",
      identityCode: employeeData?.identityCode || "",
      placeIssue: employeeData?.placeIssue || null,
      ethnic: employeeData?.ethnic || "",
      religion: employeeData?.religion || "",
      salary: employeeData?.salary || "",
      birthplace: employeeData?.birthplace || "",
      district: employeeData?.district || null,
      province: employeeData?.province || null,
      commune: employeeData?.commune || null,
      gender: employeeData?.gender || "",
      position: employeeData.position || "",
      team: employeeData.team || "",
      birthday: employeeData?.birthday || "",
      dateIssue: employeeData?.dateIssue || "",
      image: employeeData?.image || "/assets/images/illustrations/dreamer.svg",
      listDiploma: employeeData?.listDiploma || [],
      listRelationship: employeeData?.listRelationship || [],
      education: employeeData?.education || [""],
      experience: employeeData?.experience || [""],
      generalIntroduction: employeeData?.generalIntroduction || [""],
      careerGoals: employeeData?.careerGoals || [""],
      skill: employeeData?.skill || [""],
      hobby: employeeData?.hobby || [""],
      status: employeeData?.status || "L??u m???i",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "H??y nh???p ?????y ????? h??? v?? t??n")
        .max(30, "Nh???p h??? t??n ????ng ?????nh d???ng")
        .required("Kh??ng ???????c b??? tr???ng"),
      email: Yup.string().email("Email sai ?????nh d???ng").required("Kh??ng ???????c b??? tr???ng"),
      code: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      phone: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      birthplace: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      email: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      address: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      identityCode: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      placeIssue: Yup.object().nullable().required("Ch???n n??i c???p"),

      ethnic: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      religion: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      salary: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      dateIssue: Yup.date().required("Vui l??ng nh???p ng??y"),
      birthday: Yup.date()

        .max(new Date(Date.now() - 567648000000), "Y??u c???u tr??n 18 tu???i")
        .min(new Date(Date.now() - 1892160000000), "Y??u c???u d?????i 60 tu???i")
        .required("Vui l??ng nh???p ng??y"),

      gender: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      province: Yup.object().nullable().required("Kh??ng ???????c b??? tr???ng"),
      district: Yup.object().required("Kh??ng ???????c b??? tr???ng").nullable(),
      commune: Yup.object().required("Kh??ng ???????c b??? tr???ng").nullable(),
      team: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
      position: Yup.string().required("Kh??ng ???????c b??? tr???ng"),
    }),
    onSubmit: (values) => {
      if (!employeeId) {
        values.id = uuidv4();
        values.status = "L??u m???i";
        setEmployeeId(values.id);
        dispatch(addNewEmployee(values));
        toast.success("L??u m???i th??nh c??ng");
      } else {
        values.id = employeeId;
        values.listDiploma = employeeData.listDiploma;
        values.listRelationship = employeeData.listRelationship;
        const updateData = { ...employeeData, ...values };
        console.log(updateData);
        dispatch(updateEmployee(updateData));
        toast.success("C???p nh???t th??nh c??ng");
      }
      setSaved("block");
      setShouldOpenDialog(false);
    },
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Dialog open={true} maxWidth={"lg"} fullWidth={true}>
        <DialogTitle
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {!employeeData.id ? "Th??m m???i nh??n vi??n" : "S???a nh??n vi??n"}
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
                  background: "#ddd",
                }}
              >
                <TabList onChange={handleChange}>
                  <Tab label="Th??ng tin nh??n vi??n" value="1" />
                  <Tab label="Th??ng tin  v??n b???ng" value="2" />
                  <Tab label="Th??ng tin quan h??? gia ????nh" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ p: "20px 0" }}>
                <EmployeeInfo formikRoot={formik} />
              </TabPanel>
              <TabPanel value="2" sx={{ p: "20px 0" }}>
                <EmployeeDiploma employeeData={employeeData} handleAddDiploma={handleAddToList} />
              </TabPanel>
              <TabPanel value="3" sx={{ p: "20px 0" }}>
                <EmployeeRelation employeeData={employeeData} handleAddRelation={handleAddToList} />
              </TabPanel>
            </TabContext>
          </DialogContent>

          <DialogActions>
            <Button variant="contained" type="submit" sx={{ mb: 2, background: "#7467EF" }}>
              L??u
            </Button>
            <Button
              variant="contained"
              sx={{ mb: 2, background: "#339999", display: saved }}
              onClick={() => {
                setShouldOpenDialog("true");
              }}
            >
              ????ng k??
            </Button>
            <Button
              variant="contained"
              sx={{ mb: 2, background: "#FF9E43" }}
              onClick={() => handleClose()}
            >
              H???y
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      {shouldOpenDialog && (
        <EmployeeRegisterDialog
          handleAddToList={handleAddToList}
          handleClose={() => {
            setShouldOpenDialog(false);
          }}
          handleCloseAll={handleClose}
        />
      )}
      {/* <EmployeeRegisterDialog
        formikRoot={formik}
        handleClose={() => {
          setShouldOpenDialog(false);
        }}
        handleAddToFomik={handleAddToFomik}
      /> */}
    </>
  );
}

export default AddNewEmployeeDialog;
