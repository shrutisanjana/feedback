// LandingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Grid, Paper } from '@mui/material';

const LandingPage = () => {
  const navigate = useNavigate();
  const [feedbackFrom, setFeedbackFrom] = useState('');

  const handleNavigate = (tabIndex) => {
    navigate(`/tabs/${tabIndex}`);
  };

  const handleSearch = () => {
    navigate(`/tabs/2/${feedbackFrom}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={() => handleNavigate(0)}>
          Unacknowledged
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleNavigate(1)}>
          Acknowledged
        </Button>

        <TextField
          type="text"
          label="Enter feedbackFrom"
          variant="outlined"
          margin="normal"
          value={feedbackFrom}
          onChange={(e) => setFeedbackFrom(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search By Owner
        </Button>
      </Paper>
    </div>
  );
};

export default LandingPage;
