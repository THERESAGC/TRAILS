import { Container, Paper, Typography, TextField, Select, MenuItem, FormControl, RadioGroup, FormControlLabel, Radio, InputLabel, Grid, Button, Box, Divider, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; // Import DatePicker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // Import LocalizationProvider
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Import AdapterDateFns
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import ReactQuill from "react-quill";
const CustomRadio = styled(Radio)({
  '& .MuiSvgIcon-root': {
    fontSize: 18, // Adjust the size to match other text fields
  },
});
 
import { useState } from 'react';
 
const NewTrainingRequest = () => {
  const [completioncriteria, setCompletionCriteria] = useState("");
  const [otherskill, setOtherSkill] = useState("");
  const [comment, setComments] = useState("");
  const [selectedOption, setSelectedOption] = useState('add');
  const [selectedDate, setSelectedDate] = useState(null);
 
  const handleOtherSkill = (value) => {
    setOtherSkill(value);
  };
 
  const handleComments = (value) => {
    setComments(value);
  };
 
  const handleCompletionCriteria = (value) => {
    setCompletionCriteria(value);
  };
 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
 
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Container maxWidth="xl" style={{ width: '100%', marginTop: '2rem' }}> {/* Increased width from 'md' to 'lg' */}
          <Paper elevation={3} style={{ padding: '2rem' }}> {/* Increased padding */}
            <Box justifyContent="space-between" style={{ marginBottom: '1rem' }}>
              <Typography variant="h5" gutterBottom style={{ fontSize: '16px', fontWeight: 'bold' }}>New Training Request</Typography> {/* Increased font size */}
              <Divider></Divider>
            </Box>
 
            <Grid container justifyContent="space-between" style={{ marginBottom: '1rem', backgroundColor: 'white' }}>
              <Typography color="textSecondary" style={{ fontSize: '14px' }}>Request ID/No: <span style={{ fontWeight: 'bold' }}>#1234</span></Typography>
              <Typography color="textSecondary" style={{ fontSize: '14px' }}>Requested By: <span style={{ fontWeight: 'bold' }}>Joe Maison</span></Typography>
            </Grid>
 
            <Paper elevation={1} style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}> {/* Increased padding */}
              <Typography variant="h6" gutterBottom style={{ fontSize: '14px', fontWeight: 'bold' }}>Training Details</Typography>
             
              <Grid container spacing={3} style={{ marginBottom: '1rem' }}> {/* Increased spacing */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: '14px' }}>Request on behalf of <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField
                      variant="outlined"
                      defaultValue="Joe Maison"
                      InputProps={{
                        style: { height: '45px', fontSize: '14px' }, // Increased height
                        endAdornment: <SearchIcon color="disabled" />
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: '14px' }}>Source <span style={{ color: 'red' }}>*</span></Typography>
                    <Select variant="outlined" defaultValue="" style={{ height: '45px', fontSize: '14px' }}>
                      <MenuItem value=""><em>Select Source </em></MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth style={{ marginBottom: '2rem' }}>
                    <Typography style={{ fontSize: '14px' }}>Training Objective <span style={{ color: 'red' }}>*</span></Typography>
                    <Select variant="outlined" defaultValue="" style={{ height: '45px', fontSize: '14px' }}>
                      <MenuItem value=""><em>Select Training Objective</em></MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
 
              <Typography variant="h6" gutterBottom style={{ fontSize: '14px', fontWeight: 'bold',marginTop:'1rem' }}>Training Purpose</Typography>
             
              <Grid container spacing={3} style={{ marginBottom: '1rem' }}> {/* Increased spacing */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: '14px' }}>New Project <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField
                      variant="outlined"
                      defaultValue="Joe Maison"
                      InputProps={{
                        style: { height: '45px', fontSize: '14px' },
                        endAdornment: <SearchIcon color="disabled" />
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: '14px' }}>Service Division <span style={{ color: 'red' }}>*</span></Typography>
                    <Select variant="outlined" defaultValue="" style={{ height: '45px', fontSize: '14px' }}>
                      <MenuItem value=""><em>Select Service Division</em></MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
 
              <Typography variant="h6" gutterBottom style={{ fontSize: '14px', fontWeight: 'bold' }}>Employee Details</Typography>
              <FormControl component="fieldset" style={{ marginBottom: '1rem' }}>
                <RadioGroup row value={selectedOption} onChange={handleOptionChange}>
                  <FormControlLabel value="add" control={<CustomRadio />} label={<Typography style={{ fontSize: '14px' }}>Add Employees</Typography>} />
                  <FormControlLabel value="open" control={<CustomRadio />} label={<Typography style={{ fontSize: '14px' }}>Place an Open Request</Typography>} />
                </RadioGroup>
              </FormControl>
 
              {selectedOption === 'add' ? (
                <>
                  <Typography variant="h6" gutterBottom style={{ fontSize: '14px' }}>OR</Typography>
 
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: '14px' }}>Project Name</Typography>
                    <TextField
                      variant="outlined"
                      defaultValue="Joe Maison"
                      InputProps={{
                        style: { height: '45px', fontSize: '14px' },
                        endAdornment: <SearchIcon color="disabled" />
                      }}
                    />
                  </FormControl>
 
                  <Grid container spacing={3} style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                    <Grid item xs={12}>
                      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                        <FormControl fullWidth>
                          <Typography style={{ fontSize: '14px' }}>Select Employee <span style={{ color: 'red' }}>*</span></Typography>
                          <TextField
                            variant="outlined"
                            defaultValue="Joe Maison"
                            InputProps={{
                              style: { height: '45px', fontSize: '14px' },
                              endAdornment: <SearchIcon color="disabled" />
                            }}
                          />
                        </FormControl>
                        <Typography style={{ fontSize: '14px', marginRight: '1rem' }}>OR</Typography>
 
                        <FormControl fullWidth>
                          <TextField
                            variant="outlined"
                            placeholder="Enter email by , separated"
                            InputProps={{
                              style: { height: '45px', fontSize: '14px' },
                            }}
                          />
                        </FormControl>
                        <Box display="flex" justifyContent="flex-end" style={{ marginLeft: '1rem' }}>
                          <Button variant="contained" color="primary" style={{ height: '45px', fontSize: '14px' }}>
                            ADD
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid container spacing={3} style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <Typography style={{ fontSize: '14px' }}>Number of People to be Trained <span style={{ color: 'red' }}>*</span></Typography>
                        <TextField
                          variant="outlined"
                          type="number"
                          InputProps={{
                            style: { height: '45px', fontSize: '14px' },
                          }}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <Typography style={{ fontSize: '14px' }}>Employee Level <span style={{ color: 'red' }}>*</span></Typography>
                        <Select variant="outlined" defaultValue="" style={{ height: '45px', fontSize: '14px' }}>
                          <MenuItem value=""><em>Select Employee Level</em></MenuItem>
                          <MenuItem value="junior">Junior</MenuItem>
                          <MenuItem value="mid">Mid</MenuItem>
                          <MenuItem value="senior">Senior</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </>
              )}
 
              <Typography variant="h6" gutterBottom style={{ fontSize: '14px', fontWeight: 'bold' }}>Skill Details</Typography>
              <Grid container spacing={3} style={{ marginBottom: '1rem', marginTop: '1rem' }} direction="row" alignItems="center">
                <Grid item xs={4}>
                  <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                    <Typography style={{ fontSize: '14px', display: 'flex', alignItems: 'center', height: '45px' }}>
                      Expected completion Timeline  <span style={{ color: 'red' }}>*</span>
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
                            style: { height: '45px', fontSize: '14px' },
                          }}
                          InputLabelProps={{
                            style: { fontSize: '14px' },
                          }}
                          style={{
                            height: '45px',
                            fontSize: '14px',
                          }}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                    <Typography style={{ fontSize: '14px', display: 'flex', alignItems: 'center', height: '45px' }}>
                      Request for - Tech Stack / Area <span style={{ color: 'red' }}> *</span>
                    </Typography>
                    <Select variant="outlined" defaultValue="" style={{ height: '45px', fontSize: '14px' }}>
                      <MenuItem value=""><em>Select Tech Stack</em></MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth style={{ marginBottom: '1rem' }}>
                    <Typography style={{ fontSize: '14px', display: 'flex', alignItems: 'center', height: '45px' }}>
                      Request for - Primary Skill / Competency<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Select variant="outlined" defaultValue="" style={{ height: '45px', fontSize: '14px' }}>
                      <MenuItem value=""><em>Select Skill</em></MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
 
              {/* section 3 */}
              <Grid container spacing={3} style={{ marginBottom: '1rem' }}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: '14px',marginBottom:'0.5rem' }}>Provide other skills information <span style={{ color: 'red' }}>*</span></Typography>
                    <ReactQuill
                      value={otherskill}
                      onChange={handleOtherSkill}
                      modules={{
                        toolbar: [
                          ["bold", "italic", "underline"],
                          ["clean"],
                        ],
                      }}
                      placeholder="Other Skill Details should be less than 1000 Words"
                      style={{ height: "150px" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: '14px',marginBottom:'0.5rem' }}>Suggest completion criteria <span style={{ color: 'red' }}>*</span></Typography>
                    <ReactQuill
                      value={completioncriteria}
                      onChange={handleCompletionCriteria}
                      modules={{
                        toolbar: [
                          ["bold", "italic", "underline"],
                          ["clean"],
                        ],
                      }}
                      placeholder="Suggest Completion Criteria should be less than 1000 Words"
                      style={{ height: "150px" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <Typography style={{ fontSize: '14px',marginBottom:'0.5rem' }}>Comments</Typography>
                    <ReactQuill
                      value={comment}
                      onChange={handleComments}
                      modules={{
                        toolbar: [
                          ["bold", "italic", "underline"],
                          ["clean"],
                        ],
                      }}
                      placeholder="Comments should be less than 350 Words"
                      style={{ height: "150px" }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="flex-end" style={{ marginTop: '4rem' }}>
                <Button variant="contained" color="primary" style={{ height: '50px', fontSize: '16px' }}>
                  SUBMIT
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
