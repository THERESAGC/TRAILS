import React from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Button,
  Box,
  Divider,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  Table,
  IconButton,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import "react-quill/dist/quill.snow.css";

const CustomRadio = styled(Radio)({
  "& .MuiSvgIcon-root": {
    fontSize: 18,
  },
});
// Sample Employee Data (Can be replaced with API calls)
const employeeDatabase = {
  "jonathan.hart@example.com": {
    id: "HS158",
    name: "Jonathan Hart",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    training: {
      reqNo: "#231",
      project: "Staffing Nation",
      objective: "Upskilling",
      techStack: "React",
      requestedOn: "Jan 20, 2025",
    },
  },
  "mike.clark@example.com": {
    id: "HS305",
    name: "Mike Clark",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  "alan.patel@example.com": {
    id: "HS97",
    name: "Alan Patel",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  "joe.estrada@example.com": {
    id: "HS391",
    name: "Joe Estrada",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  "janet.powell@example.com": {
    id: "HS467",
    name: "Janet Powell",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
};


 
  
const NewTrainingRequest = () => {
  const [completioncriteria, setCompletionCriteria] = useState("");
  const [otherskill, setOtherSkill] = useState("");
  const [comment, setComments] = useState("");
  const [trainingPurposeOption, setTrainingPurposeOption] = useState('prospect');
  const [employeeDetailsOption, setEmployeeDetailsOption] = useState('add');
  const [selectedDate, setSelectedDate] = useState(null);
  const [emails, setEmails] = useState('');
  const [employees, setEmployees] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [email, setEmail] = useState("");


  const handleOtherSkill = (value) => {
    setOtherSkill(value);
  };

  const handleComments = (value) => {
    setComments(value);
  };

  const handleCompletionCriteria = (value) => {
    setCompletionCriteria(value);
  };

  const handleTrainingPurposeOptionChange = (event) => {
    setTrainingPurposeOption(event.target.value);
  };

  const handleEmployeeDetailsOptionChange = (event) => {
    setEmployeeDetailsOption(event.target.value);
  };
// Function to add an employee by email
const addEmployee = () => {
  if (!emails.trim()) {
    alert("Please enter at least one email.");
    return;
  }

  const emailList = emails.split(",").map(email => email.trim()); // Split and trim
  const validEmployees = [];
  const invalidEmails = [];

  emailList.forEach(email => {
    if (email in employeeDatabase) {
      if (!employees.some(emp => emp.id === employeeDatabase[email].id)) {
        validEmployees.push({
          ...employeeDatabase[email],
          availableFrom: "",
          bandwidth: "",
          weekend: "No"
        });
      }
    } else {
      invalidEmails.push(email);
    }
  });
 // Show summary
 let summaryMessage = "";
 if (validEmployees.length > 0) {
   summaryMessage += `✅ Successfully added: ${validEmployees.map(emp => emp.name).join(", ")}\n`;
   setEmployees(prev => [...prev, ...validEmployees]);
 }
 if (invalidEmails.length > 0) {
   summaryMessage += `❌ Not found: ${invalidEmails.join(", ")}`;
 }

 if (summaryMessage) alert(summaryMessage);
  setEmails(""); // Clear input field
};

// Function to remove an employee
const removeEmployee = (id) => {
  setEmployees(employees.filter((emp) => emp.id !== id));
};

// Function to update employee details
const updateEmployee = (id, field, value) => {
  setEmployees(
    employees.map((emp) =>
      emp.id === id ? { ...emp, [field]: value } : emp
    )
  );
};
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Container maxWidth="md" style={{ width: "100%", marginTop: "2rem" }}>
          <Paper elevation={3} style={{ padding: "2rem", width: "100%" }}>
            <Box justifyContent="space-between" style={{ marginBottom: "1rem" }}>
              <Typography variant="h5" gutterBottom style={{ fontSize: "16px", fontWeight: "bold" }}>
                New Training Request
              </Typography>
              <Divider></Divider>
            </Box>
            <Grid container justifyContent="space-between" style={{ marginBottom: "1rem", backgroundColor: "white" }}>
              <Typography color="textSecondary" style={{ fontSize: "14px" }}>
                Request ID/No: <span style={{ fontWeight: "bold" }}>#1234</span>
              </Typography>
              <Typography color="textSecondary" style={{ fontSize: "14px" }}>
                Requested By: <span style={{ fontWeight: "bold" }}>Joe Maison</span>
              </Typography>
            </Grid>
            <Paper elevation={1} style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
              <Typography variant="h6" gutterBottom style={{ fontSize: "14px", fontWeight: "bold" }}>
                Training Details
              </Typography>
              <Grid container spacing={3} style={{ marginBottom: "1rem", marginTop: "1rem", justifyContent: "space-between" }}>
                <Grid item xs={12} md={4}>
                  <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                    <FormControl fullWidth>
                      <Typography style={{ fontSize: "14px" }}>
                        Request on behalf <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        variant="outlined"
                        defaultValue="Joe Maison"
                        InputProps={{
                          style: { height: "45px", fontSize: "14px" },
                          endAdornment: <SearchIcon color="disabled" />,
                        }}
                      />
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                    <FormControl fullWidth>
                      <Typography style={{ fontSize: "14px" }}>
                        Source <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Select variant="outlined" defaultValue="" style={{ height: "45px", fontSize: "14px" }}>
                        <MenuItem value="">
                          <em>Select Source</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                    <FormControl fullWidth>
                      <Typography style={{ fontSize: "14px" }}>
                        Training Objective <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Select variant="outlined" defaultValue="" style={{ height: "45px", fontSize: "14px" }}>
                        <MenuItem value="">
                          <em>Select Training Objective</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="h6" gutterBottom style={{ fontSize: "14px", fontWeight: "bold", marginTop: "1rem" }}>
                Training Purpose
              </Typography>
              <FormControl component="fieldset" style={{ marginBottom: "1rem" }}>
                <RadioGroup row value={trainingPurposeOption} onChange={handleTrainingPurposeOptionChange}>
                  <FormControlLabel
                    value="prospect"
                    control={<CustomRadio />}
                    label={<Typography style={{ fontSize: "14px" }}>Prospect</Typography>}
                  />
                  <FormControlLabel
                    value="project"
                    control={<CustomRadio />}
                    label={<Typography style={{ fontSize: "14px" }}>Project</Typography>}
                  />
                </RadioGroup>
              </FormControl>

              {trainingPurposeOption === "prospect" ? (
                <Grid container spacing={3} style={{ marginBottom: "1rem", marginTop: "1rem", alignItems: "center" }}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <Typography style={{ fontSize: "14px" }}>
                        Prospect Name <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        variant="outlined"
                        defaultValue="Joe Maison"
                        InputProps={{
                          style: { height: "45px", fontSize: "14px" },
                          endAdornment: <SearchIcon color="disabled" />,
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <Typography style={{ fontSize: "14px" }}>
                        Service Division <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Select variant="outlined" defaultValue="" style={{ height: "45px", fontSize: "14px" }}>
                        <MenuItem value="">
                          <em>Select Service Division</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={3} style={{ marginBottom: "1rem", marginTop: "1rem", alignItems: "center" }}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <Typography style={{ fontSize: "14px" }}>
                        Project Name <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        variant="outlined"
                        defaultValue="Joe Maison"
                        InputProps={{
                          style: { height: "45px", fontSize: "14px" },
                          endAdornment: <SearchIcon color="disabled" />,
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <Typography style={{ fontSize: "14px" }}>
                        Service Division <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Select variant="outlined" defaultValue="" style={{ height: "45px", fontSize: "14px" }}>
                        <MenuItem value="">
                          <em>Select Service Division</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              )}

              <Typography variant="h6" gutterBottom style={{ fontSize: "14px", fontWeight: "bold" }}>
                Employee Details
              </Typography>
              <FormControl component="fieldset" style={{ marginBottom: "1rem" }}>
                <RadioGroup row value={employeeDetailsOption} onChange={handleEmployeeDetailsOptionChange}>
                  <FormControlLabel
                    value="add"
                    control={<CustomRadio />}
                    label={<Typography style={{ fontSize: "14px" }}>Add Employees</Typography>}
                  />
                  <FormControlLabel
                    value="open"
                    control={<CustomRadio />}
                    label={<Typography style={{ fontSize: "14px" }}>Place an Open Request</Typography>}
                  />
                </RadioGroup>
              </FormControl>

              <Box style={{ width: "100%" }}>
                {employeeDetailsOption === "add" ? (
                  <Grid container spacing={3} style={{ marginBottom: "1rem", marginTop: "1rem", alignItems: "center" }}>
                    <Grid item xs={12} md={4}>
                      <FormControl fullWidth>
                      <Typography style={{ fontSize: "14px", marginBottom: "5px" }}>
                          Select Employee <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          InputProps={{
                            style: { height: "45px", fontSize: "14px" },
                            
                          }}
                        />
                      </FormControl>
                    </Grid>
                          <Grid item xs={12} md={0.75}>
                          <Typography>
                           OR
                        </Typography>
                            </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl fullWidth>
                        <Typography style={{ fontSize: "14px", marginBottom: "5px" }}>
                           <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <TextField label="Enter Email by , separated" variant="outlined" type="text" value={emails} onChange={(e) => setEmails(e.target.value)} InputProps={{ style: { height: "45px", fontSize: "14px" }, }} />

                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={3} style={{ marginTop: "1.5rem" }}>
                      <Button variant="contained" onClick={addEmployee} color="primary" style={{ height: "45px", fontSize: "14px", minWidth: "100px" }}>
                        ADD
                      </Button>
                    </Grid>
                       {/* Employee Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#e3f2fd" }}>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Available From</TableCell>
              <TableCell>Daily Bandwidth</TableCell>
              <TableCell>Available on Weekend?</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <React.Fragment key={employee.id}>
                <TableRow>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar src={employee.image} />
                      {employee.id}
                    </Box>
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>
                    <TextField
                      type="date"
                      value={employee.availableFrom}
                      onChange={(e) => updateEmployee(employee.id, "availableFrom", e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl fullWidth>
                      <Select
                        value={employee.bandwidth}
                        onChange={(e) => updateEmployee(employee.id, "bandwidth", e.target.value)}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="2 Hours">2 Hours</MenuItem>
                        <MenuItem value="4 Hours">4 Hours</MenuItem>
                        <MenuItem value="6 Hours">6 Hours</MenuItem>
                        <MenuItem value="Full Day">Full Day</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <RadioGroup
                      row
                      value={employee.weekend}
                      onChange={(e) => updateEmployee(employee.id, "weekend", e.target.value)}
                    >
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </TableCell>
                  <TableCell>
                    <IconButton color="error" onClick={() => removeEmployee(employee.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>

                {/* Training Info (If exists) */}
                {employee.training && (
                  <TableRow>
                    <TableCell colSpan={6} sx={{ backgroundColor: "#fffbe6", padding: 2 }}>
                      <Typography fontWeight="bold" color="warning.main">
                        1 training is already in progress
                      </Typography>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Req No:</TableCell>
                            <TableCell>Project</TableCell>
                            <TableCell>Objective</TableCell>
                            <TableCell>Tech Stack</TableCell>
                            <TableCell>Requested on</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>{employee.training.reqNo}</TableCell>
                            <TableCell>{employee.training.project}</TableCell>
                            <TableCell>{employee.training.objective}</TableCell>
                            <TableCell>{employee.training.techStack}</TableCell>
                            <TableCell>{employee.training.requestedOn}</TableCell>
                            <TableCell>
                              <IconButton color="error" onClick={() => removeEmployee(employee.id)}>
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                  </Grid>
                ) : (
                  <Grid container spacing={3} style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <Typography style={{ fontSize: "14px" }}>
                          Number of People to be Trained <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          type="number"
                          InputProps={{
                            style: { height: "45px", fontSize: "14px" },
                          }}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <Typography style={{ fontSize: "14px" }}>
                          Employee Level <span style={{ color: "red" }}>*</span>
                        </Typography>
                        <Select variant="outlined" defaultValue="" style={{ height: "45px", fontSize: "14px" }}>
                          <MenuItem value="">
                            <em>Select Employee Level</em>
                          </MenuItem>
                          <MenuItem value="junior">Junior</MenuItem>
                          <MenuItem value="mid">Mid</MenuItem>
                          <MenuItem value="senior">Senior</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
              </Box>

              <Typography variant="h6" gutterBottom style={{ fontSize: "14px", fontWeight: "bold" }}>
                Skill Details
              </Typography>
              <Grid container spacing={3} style={{ marginBottom: "1rem", marginTop: "1rem" }} direction="row" alignItems="center">
                <Grid item xs={4}>
                  <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                    <Typography style={{ fontSize: "14px", display: "flex", alignItems: "center", height: "45px" }}>
                      Expected completion Timeline <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <DatePicker
                      value={selectedDate}
                      onChange={(newValue) => setSelectedDate(newValue)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          InputProps={{
                            ...params.InputProps,
                            style: { height: "45px", fontSize: "14px" },
                          }}
                          InputLabelProps={{
                            style: { fontSize: "14px" },
                          }}
                          style={{
                            height: "45px",
                            fontSize: "14px",
                          }}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                    <Typography style={{ fontSize: "14px", display: "flex", alignItems: "center", height: "45px" }}>
                      Request for - Tech Stack / Area <span style={{ color: "red" }}> *</span>
                    </Typography>
                    <Select variant="outlined" defaultValue="" style={{ height: "45px", fontSize: "14px" }}>
                      <MenuItem value="">
                        <em>Select Tech Stack</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                    <Typography style={{ fontSize: "14px", display: "flex", alignItems: "center", height: "45px" }}>
                      Request for - Primary Skill / Competency <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <Select variant="outlined" defaultValue="" style={{ height: "45px", fontSize: "14px" }}>
                      <MenuItem value="">
                        <em>Select Skill</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={3} style={{ marginBottom: "1rem" }}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: "14px", marginBottom: "0.5rem" }}>
                      Provide other skills information <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <ReactQuill
                      value={otherskill}
                      onChange={handleOtherSkill}
                      modules={{
                        toolbar: [["bold", "italic", "underline"], ["clean"]],
                      }}
                      placeholder="Other Skill Details should be less than 1000 Words"
                      style={{ height: "150px" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: "14px", marginBottom: "0.5rem" }}>
                      Suggest completion criteria <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <ReactQuill
                      value={completioncriteria}
                      onChange={handleCompletionCriteria}
                      modules={{
                        toolbar: [["bold", "italic", "underline"], ["clean"]],
                      }}
                      placeholder="Suggest Completion Criteria should be less than 1000 Words"
                      style={{ height: "150px" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: "14px", marginBottom: "0.5rem" }}>
                      Comments
                    </Typography>
                    <ReactQuill
                      value={comment}
                      onChange={handleComments}
                      modules={{
                        toolbar: [["bold", "italic", "underline"], ["clean"]],
                      }}
                      placeholder="Comments should be less than 350 Words"
                      style={{ height: "150px" }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="flex-end" style={{ marginTop: "4rem" }} gap={2}>
                <Button variant="outlined" style={{ height: "50px", fontSize: "16px", color: "primary", borderColor: "transparent" }}>
                  Cancel
                </Button>
                <Button variant="contained" style={{ height: "50px", fontSize: "16px", backgroundColor: "primary", color: "white" }}>
                  Submit
                </Button>
              </Box>
            </Paper>
          </Paper>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default NewTrainingRequest;
