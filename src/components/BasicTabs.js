// BasicTabs.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUnacknowledged, getAcknowledged, getByOwner } from '../actions/feedbackActions';
import { Tabs, Tab, Box, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const BasicTabs = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedback);
  const { tabIndex, feedbackFrom } = useParams();

  useEffect(() => {
    dispatch(getUnacknowledged());
    dispatch(getAcknowledged());
    if (tabIndex === '2' && feedbackFrom) {
      dispatch(getByOwner(feedbackFrom));
    }
  }, [dispatch, tabIndex, feedbackFrom]);

  return (
    <Box sx={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Tabs value={parseInt(tabIndex, 10)} centered>
          <Tab label="Unacknowledged" />
          <Tab label="Acknowledged" />
          <Tab label="By Owner" />
        </Tabs>
        <div>
          {tabIndex === '0' && feedback.unacknowledged && feedback.unacknowledged.map((item) => (
            <Paper key={item.feedbackId} elevation={3} style={{ padding: '10px', margin: '10px 0' }}>
              <Typography variant="subtitle1">{item.feedbackTitle}</Typography>
              {/* Add other fields you want to display */}
            </Paper>
          ))}
          {tabIndex === '1' && feedback.acknowledged && feedback.acknowledged.map((item) => (
            <Paper key={item.feedbackId} elevation={3} style={{ padding: '10px', margin: '10px 0' }}>
              <Typography variant="subtitle1">{item.feedbackTitle}</Typography>
              {/* Add other fields you want to display */}
            </Paper>
          ))}
          {tabIndex === '2' && feedback.byOwner && feedback.byOwner.map((item) => (
            <Paper key={item.feedbackId} elevation={3} style={{ padding: '10px', margin: '10px 0' }}>
              <Typography variant="subtitle1">{item.feedbackTitle}</Typography>
              {/* Add other fields you want to display */}
            </Paper>
          ))}
        </div>
      </Paper>
    </Box>
  );
};

export default BasicTabs;
