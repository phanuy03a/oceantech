import React from "react";
import AddNewEmployeeDialog from "./AddNewEmployeeDialog";
import Breadcrumb from "app/components/Breadcrumb";
import {
  Button,
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0, fontWeight: "600" } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));
const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD.",
  },
];

function AddNewEmployee() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Thêm mới nhân viên" }]}
        />
      </Box>
      <Box>
        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
          Thêm mới
        </Button>
      </Box>

      <Box width="100%" overflow="auto">
        <StyledTable className="style-table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Start Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscribarList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{subscriber.name}</TableCell>
                  <TableCell align="center">{subscriber.company}</TableCell>
                  <TableCell align="center">{subscriber.date}</TableCell>
                  <TableCell align="center">{subscriber.status}</TableCell>
                  <TableCell align="center">${subscriber.amount}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <Icon color="error">close</Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </StyledTable>

        <TablePagination
          sx={{ px: 2 }}
          page={page}
          component="div"
          rowsPerPage={rowsPerPage}
          count={subscribarList.length}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ "aria-label": "Next Page" }}
          backIconButtonProps={{ "aria-label": "Previous Page" }}
        />
      </Box>

      {/* <AddNewEmployeeDialog></AddNewEmployeeDialog> */}
    </Container>
  );
}

export default AddNewEmployee;
