
import { Container, Paper, Typography, TextField, Select, MenuItem, FormControl, RadioGroup, FormControlLabel, Radio, InputLabel, Grid, Button, Box, Divider, Autocomplete } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; // Import DatePicker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // Import LocalizationProvider
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Import AdapterDateFns


const CustomRadio = styled(Radio)({
  '& .MuiSvgIcon-root': {
    fontSize: 18, // Adjust the size to match other text fields
  },
});

import { useState } from 'react';

const NewTrainingRequest = () => {

  const [selectedDate, setSelectedDate] = useState(null);
 
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <Container maxWidth="md" style={{width: '100%', marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
      <Box justifyContent="space-between" style={{ marginBottom: '1rem' }}> <Typography variant="h5" gutterBottom style={{ fontSize: '12px', fontWeight: 'bold'}}>New Training Request</Typography>
      <Divider></Divider>
      </Box>
        
       

        <Grid container justifyContent="space-around" style={{ marginBottom: '1rem',backgroundColor:'white' }}>
          <Typography color="textSecondary" style={{ fontSize: '12px' }}>Request ID/No: <span style={{ fontWeight: 'bold' }}>#1234</span></Typography>
          <Typography color="textSecondary" style={{ fontSize: '12px' }}>Requested By: <span style={{ fontWeight: 'bold' }}>Joe Maison</span></Typography>
        </Grid>
        <Paper elevation={1} style={{ padding: '1.5rem', backgroundColor: '#f9f9f9' }}>
          <Typography variant="h6" gutterBottom style={{ fontSize: '12px',fontWeight: 'bold'}}>Training Details</Typography>
          <Grid container spacing={2} style={{ marginBottom: '1rem' }}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <Typography style={{ fontSize: '12px' }}>Request on behalf of</Typography>
                <TextField
                  variant="outlined"
                  defaultValue="Joe Maison"
                  InputProps={{
                    style: { height: '30px', fontSize: '12px' },
                    endAdornment: <SearchIcon color="disabled" />
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <Typography style={{ fontSize: '12px' }}>Source</Typography>
                <Select variant="outlined" defaultValue="" style={{ height: '30px', fontSize: '12px' }}>
                  <MenuItem value=""><em>Select Source</em></MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <Typography style={{ fontSize: '12px' }}>Training Objective</Typography>
                <Select variant="outlined" defaultValue="" style={{ height: '30px', fontSize: '12px' }}>
                  <MenuItem value=""><em>Select Training Objective</em></MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom style={{ fontSize: '12px',fontWeight: 'bold' }}>Training Purpose</Typography>
          <Grid container spacing={2} style={{ marginBottom: '1rem' }}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <Typography style={{ fontSize: '12px' }}>New Project</Typography>
                <TextField
                  variant="outlined"
                  defaultValue="Joe Maison"
                  InputProps={{
                    style: { height: '30px', fontSize: '12px' },
                    endAdornment: <SearchIcon color="disabled" />
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <Typography style={{ fontSize: '12px' }}>Service Division</Typography>
                <Select variant="outlined" defaultValue="" style={{ height: '30px', fontSize: '12px' }}>
                  <MenuItem value=""><em>Select Service Division</em></MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom style={{ fontSize: '12px' ,fontWeight: 'bold'}}>Employee Details</Typography>
          <FormControl component="fieldset" style={{ marginBottom: '1rem' }}>
            <RadioGroup row>
              <FormControlLabel value="add" control={<CustomRadio />} label={<Typography style={{ fontSize: '12px' }}>Add Employees</Typography>} />
              <FormControlLabel value="open" control={<CustomRadio />} label={<Typography style={{ fontSize: '12px' }}>Place an Open Request</Typography>} />
            </RadioGroup>
          </FormControl>
          <Typography variant="h6" gutterBottom style={{ fontSize: '12px' }}>OR</Typography>
          <FormControl fullWidth>
            <Typography style={{ fontSize: '12px' }}>Project Name</Typography>
           
    <TextField
                  variant="outlined"
                  defaultValue="Joe Maison"
                  InputProps={{
                    style: { height: '30px', fontSize: '12px' },
                    endAdornment: <SearchIcon color="disabled" />
                  }}
                />
          </FormControl>


          <Grid container spacing={2} style={{ marginBottom: '1rem',marginTop: '1rem' }}>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
            <FormControl fullWidth>
                <Typography style={{ fontSize: '12px' }}>Select Employee <span style={{ color: 'red' }}>*</span></Typography>
               
    <TextField
                  variant="outlined"
                  defaultValue="Joe Maison"
                  InputProps={{
                    style: { height: '30px', fontSize: '12px' },
                    endAdornment: <SearchIcon color="disabled" />
                  }}
                />
              </FormControl>
              <Typography style={{ fontSize: '12px', marginRight: '1rem' }}>OR</Typography>
           
              <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  placeholder="Enter email by , separated"
                  InputProps={{
                    style: { height: '30px', fontSize: '12px' },
                  }}
                />
              </FormControl>
              <Box display="flex" justifyContent="flex-end" style={{ marginTop: '1rem' }}>
              <Button variant="contained" color="primary">
                ADD
              </Button>
            </Box>
            </Box>
          </Grid>
        </Grid>

         <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom style={{ fontSize: '12px',fontWeight: 'bold' }}>Skill Details</Typography>
          </Grid>

          <Grid container spacing={2} style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                <Grid item xs={12}>
                    <FormControl style={{ marginBottom: '1rem' }}>
                    <Typography style={{ fontSize: '12px' }}>Expected completion Timeline</Typography>
                    <DatePicker
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            InputProps={{
                            ...params.InputProps,
                            style: { height: '30px', fontSize: '12px' },
                            }}
                            InputLabelProps={{
                            style: { fontSize: '12px' },
                            }}
                        />
                        )}
                    />
                    </FormControl>
                    <FormControl  style={{ marginBottom: '1rem' }}>
                    <Typography style={{ fontSize: '12px' }}>Request for - Tech Stack / Area</Typography>
                    <Select variant="outlined" defaultValue="" style={{ height: '30px', fontSize: '12px' }}>
                        <MenuItem value=""><em>Select Tech Stack</em></MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl style={{ marginBottom: '1rem' }}>
                    <Typography style={{ fontSize: '12px' }}>Request for - Primary Skill / Competency</Typography>
                    <Select variant="outlined" defaultValue="" style={{ height: '30px', fontSize: '12px' }}>
                        <MenuItem value=""><em>Select Skill</em></MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
                </Grid>
                             <Grid container spacing={2} style={{ marginBottom: '1rem' }}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
              <Typography style={{ fontSize: '12px' }}>Provide other skills information in detail</Typography>
            
                     <ReactQuill
                  value={otherskill}
                  onChange={handleOtherSkill}
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline"], // Formatting options
                    
                      ["clean"], // Remove formatting
                    ],
                  }}
                  placeholder="Other Skill Details should be less than 1000 Words"
                  style={{ height: "150px" }}
                />
                </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                <Typography style={{ fontSize: '12px' }}>Suggest completion criteria</Typography>

          <ReactQuill
                  value={completioncriteria}
                  onChange={handleCompletionCriteria}
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline"], // Formatting options
                    
                      ["clean"], // Remove formatting
                    ],
                  }}
                  placeholder="Suggest Completion Criteria should be less than 1000 Words"
                  style={{ height: "150px" }}
                />
                </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                <Typography style={{ fontSize: '12px' }}>Comments</Typography>
                   
                    <ReactQuill
                  value={comment}
                  onChange={handleComments}
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline"], // Formatting options
                    
                      ["clean"], // Remove formatting
                    ],
                  }}
                  placeholder="Comments should be less than 350 Words"
                  style={{ height: "150px" }}
                />
                </FormControl>
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end" style={{ marginTop: '4rem' }}>
              <Button variant="contained" color="primary">
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
