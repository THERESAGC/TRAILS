import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio, Paper } from '@mui/material';
import './NewRequest.css';

const NewRequest = () => {
  const [requestedBy, setRequestedBy] = useState('Joe Maison');
  const [employeeOption, setEmployeeOption] = useState('');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <Container className="form-container">
        <Paper>
          <Typography variant="h4" className="form-header" gutterBottom>
            New Training Request
          </Typography>
          <Box display="flex" justifyContent="space-between" mb={6} sx={{ width: '100%' }}>
            <Typography color="textSecondary">
              Request ID/No: <span style={{ fontWeight: 'bold', color: 'black' }}>#1234</span>
            </Typography>
            <Typography color="textSecondary">
              Requested By: <span style={{ fontWeight: 'bold', color: 'black' }}>{requestedBy}</span>
            </Typography>
          </Box>
          <Box className="form-section">
            <Typography variant="h5" className="form-section-title" gutterBottom>
              Training Details
            </Typography>
            <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4} mb={6} sx={{ width: '100%' }}>
              <FormControl fullWidth className="form-field">
                <InputLabel>Request on behalf of</InputLabel>
                <TextField value={requestedBy} placeholder="Search..." />
              </FormControl>
              <FormControl fullWidth className="form-field">
                <InputLabel>Source</InputLabel>
                <Select>
                  <MenuItem value="">Select Source</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth className="form-field">
                <InputLabel>Training Objective</InputLabel>
                <Select>
                  <MenuItem value="">Select Training Objective</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box className="form-section">
            <Typography variant="h5" className="form-section-title" gutterBottom>
              Training Purpose
            </Typography>
            <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4} mb={6} sx={{ width: '100%' }}>
              <FormControl fullWidth className="form-field">
                <InputLabel>New Project</InputLabel>
                <TextField value="Joe Maison" placeholder="Search..." />
              </FormControl>
              <FormControl fullWidth className="form-field">
                <InputLabel>Service Division</InputLabel>
                <Select>
                  <MenuItem value="">Select Service Division</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box className="form-section">
            <Typography variant="h5" className="form-section-title" gutterBottom>
              Employee Details
            </Typography>
            <Box mb={4} sx={{ width: '100%' }}>
              <Typography gutterBottom>Add Employees</Typography>
              <RadioGroup row value={employeeOption} onChange={(e) => setEmployeeOption(e.target.value)}>
                <FormControlLabel value="addEmployees" control={<Radio />} label="Add Employees" className="form-field" />
                <FormControlLabel value="openRequest" control={<Radio />} label="Place an Open Request" className="form-field" />
              </RadioGroup>
              <Typography align="center" color="textSecondary" mb={2}>
                OR
              </Typography>
              <FormControl fullWidth className="form-field">
                <InputLabel>Project Name</InputLabel>
                <Select>
                  <MenuItem value="">Select Project</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default NewRequest;