import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Grid, Button, Icon, Tooltip, IconButton } from "@mui/material";
import MaterialTable from "@material-table/core";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
function Promote(props) {
  const { handleClose } = props;
  const formik = useFormik({
    initialValues: {
      reason: "",
      time: "",
      note: "",
      date: "",
      oldPosition: "",
      currentPosition: "",
    },
    validationSchema: Yup.object({
      reason: Yup.string().required("Không được bỏ trống"),
      note: Yup.string().required("Không được bỏ trống"),
      time: Yup.string().required("Không được bỏ trống"),
      oldPosition: Yup.string().required("Không được bỏ trống"),
      currentPosition: Yup.string().required("Không được bỏ trống"),
      date: Yup.date().required("Vui lòng nhập ngày"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!values.id) {
        values.id = uuidv4();
        setListPromote([...listPromote, values]);
        toast.success("Thêm thành công");
      } else {
        const newListFilter = listPromote.filter((Promote) => Promote.id != values.id);
        setListPromote([...newListFilter, values]);
        toast.success("Sửa thành công");
      }
      resetForm();
    },
  });
  const [listPromote, setListPromote] = useState([]);

  const handleEditPromote = (rowData) => {
    formik.setValues(rowData);
  };
  const handleRemovePromote = (rowData) => {
    const newListFilter = listPromote.filter((Promote) => Promote.id != rowData.id);
    setListPromote([...newListFilter]);
    toast.success("Xóa thành công");
  };
  const handleSavePromote = () => {
    toast.success("Thêm thành công");
  };
  const columns = [
    {
      title: "Hành động",
      render: (rowData) => {
        return (
          <>
            <Tooltip title="Sửa">
              <IconButton
                color="primary"
                onClick={() => {
                  handleEditPromote(rowData);
                }}
              >
                <Icon>edit</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa">
              <IconButton
                color="error"
                onClick={() => {
                  handleRemovePromote(rowData);
                }}
              >
                <Icon>delete</Icon>
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },

    { title: "Chức vụ cũ", field: "oldPosition" },
    { title: "Chực vụ hiện tại", field: "currentPosition" },
    { title: "Lý do", field: "reason" },

    { title: "Ngày", field: "date" },
    { title: "Ghi chú", field: "note" },
  ];
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} pt={1}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <TextField
              size="small"
              label="Ngày tăng chức"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.errors.date && formik.touched.date}
              helperText={formik.errors.date}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              label="Lần thứ"
              name="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              error={formik.errors.time && formik.touched.time}
              helperText={formik.errors.time}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              label="Chức vụ cũ"
              name="oldPosition"
              value={formik.values.oldPosition}
              onChange={formik.handleChange}
              error={formik.errors.oldPosition && formik.touched.oldPosition}
              helperText={formik.errors.oldPosition}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              label="Chức vụ hiện tại"
              name="currentPosition"
              value={formik.values.currentPosition}
              onChange={formik.handleChange}
              error={formik.errors.currentPosition && formik.touched.currentPosition}
              helperText={formik.errors.currentPosition}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <TextField
              size="small"
              fullWidth
              label="Lý do"
              name="reason"
              value={formik.values.reason}
              onChange={formik.handleChange}
              error={formik.errors.reason && formik.touched.reason}
              helperText={formik.errors.reason}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              label="Ghi chú"
              name="note"
              value={formik.values.note}
              onChange={formik.handleChange}
              error={formik.errors.note && formik.touched.note}
              helperText={formik.errors.note}
            />
          </Grid>
          <Grid container item xs={3} spacing={1}>
            <Grid item>
              <Button variant="contained" sx={{ background: "#FF9E43" }} onClick={handleClose}>
                Hủy
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" type="submit">
                Thêm
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleSavePromote}>
                Lưu
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <MaterialTable
            title={""}
            data={listPromote}
            columns={columns}
            options={{
              pageSize: 5,
              pageSizeOptions: [5, 10, 15, 20],
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
        </Grid>
      </Grid>
    </form>
  );
}

export default Promote;
