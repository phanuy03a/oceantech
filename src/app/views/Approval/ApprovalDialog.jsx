import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Resume from "app/components/ProfileEmployee/Resume";
import CurriculumVitae from "app/components/ProfileEmployee/CurriculumVitae";
import AdditionalRequestDialog from "./AdditionalRequestDialog";
import ConfirmDialog from "app/components/confirmDialog/ConfirmDialog";
import RefuseDialog from "./RefuseDialog";
import AcceptDialog from "./AcceptDialog";
import { useState } from "react";
import { updateEmployee } from "app/redux/actions/actions";
import ResignationLetter from "app/components/ResignationLetter/ResignationLetter";
import ReleaseDialog from "../ManageEmployee/ReleaseDialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Tooltip,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
  Box,
  IconButton,
  Icon,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from "@material-table/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ApprovalDialog({ handleClose }) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [shouldOpenRequestDialog, setShouldOpenRequestDialog] = useState(false);
  const [shouldOpenRefuseDialog, setShouldOpenRefuseDialog] = useState(false);
  const [shouldOpenAcceptDialog, setShouldOpenAcceptDialog] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const employeeData = useSelector((state) => state.Employee.employeeData);
  console.log(employeeData);
  const columns = [
    {
      title: "H??nh ?????ng",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="S???a">
              <IconButton>
                <Icon color="success">visibilityIcon</Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
    { title: "T??n v??n b???ng", field: "name" },
    {
      title: "N???i dung ",
      field: "content",
    },
    { title: "N??i c???p", field: "place" },
    { title: "Ng??y c???p", field: "date" },
    { title: "L??nh V???c", render: (rowData) => rowData.field.fieldName },
  ];

  return (
    <>
      <Dialog open={true} maxWidth={"lg"} fullWidth>
        <DialogTitle
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          H??? s?? nh??n vi??n
          <IconButton onClick={() => handleClose()}>
            <Icon color="error">close</Icon>
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {employeeData.releaseRequest ? (
            <ResignationLetter />
          ) : (
            <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="H??? s??" {...a11yProps(0)} />
                <Tab label="S?? y???u l?? l???ch" {...a11yProps(2)} />
                <Tab label="Danh s??ch v??n b???ng" {...a11yProps(1)} />
              </Tabs>
              <TabPanel value={value} index={0} style={{ width: "100%" }}>
                <Resume employee={employeeData} display={"none"} status={true} />
              </TabPanel>
              <TabPanel value={value} index={1} style={{ width: "100%" }}>
                <CurriculumVitae employeeData={employeeData} status={true} />
              </TabPanel>
              <TabPanel value={value} index={2} style={{ width: "100%" }}>
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

                    // padding: 'dense',
                    padding: "default",
                    // search: false,
                    // exportButton: true,
                    toolbar: false,
                  }}
                />
              </TabPanel>
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            sx={{ background: "#FF9E43", mb: 1 }}
            onClick={() => handleClose()}
          >
            H???y
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ mb: 1 }}
            onClick={() => {
              setShouldOpenRefuseDialog(true);
            }}
          >
            T??? Ch???i
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ mb: 1 }}
            onClick={() => {
              setShouldOpenAcceptDialog(true);
            }}
          >
            Duy???t
          </Button>
          <Button
            sx={{ mb: 1 }}
            variant="contained"
            color="primary"
            onClick={() => {
              setShouldOpenRequestDialog(true);
            }}
          >
            Y??u c???u b??? sung
          </Button>
        </DialogActions>
      </Dialog>

      {shouldOpenRequestDialog && (
        <AdditionalRequestDialog
          handleClose={() => {
            setShouldOpenRequestDialog(false);
          }}
          handleCloseAll={handleClose}
        />
      )}
      {shouldOpenRefuseDialog && (
        <RefuseDialog
          handleClose={() => {
            setShouldOpenRefuseDialog(false);
          }}
          handleCloseAll={handleClose}
        />
      )}
      {shouldOpenAcceptDialog && (
        <AcceptDialog
          handleClose={() => {
            setShouldOpenAcceptDialog(false);
          }}
          handleCloseAll={handleClose}
        />
      )}
    </>
  );
}
// {shouldOpenDialog && ! ? (
//   <ApprovalDialog handleClose={() => setShouldOpenDialog(false)} />
// ) : shouldOpenDialog && employeeData.releaseRequest ? (
//   <ReleaseDialog handleClose={() => setShouldOpenDialog(false)} />
// ) : null}
