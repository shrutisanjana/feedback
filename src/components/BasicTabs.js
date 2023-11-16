// BasicTabs.js
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUnacknowledged, getAcknowledged, getByOwner } from '../actions/feedbackActions';
import { Tabs, Tab, Box, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const BasicTabs = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedback);
  const { tabIndex, feedbackFrom } = useParams();

  const fetchData = useCallback(async () => {
    await dispatch(getUnacknowledged());
    await dispatch(getAcknowledged());
    if (tabIndex === '2' && feedbackFrom) {
      await dispatch(getByOwner(feedbackFrom));
    }
  }, [dispatch, tabIndex, feedbackFrom]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box sx={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Tabs value={parseInt(tabIndex, 10)} centered>
          <Tab label="Unacknowledged" />
          <Tab label="Acknowledged" />
          <Tab label="By Owner" />
        </Tabs>
        <div>
        {tabIndex === '0' && Array.isArray(feedback.unacknowledged) && feedback.unacknowledged.map((item) => (
            <Paper key={item.feedbackId} elevation={3} style={{ padding: '10px', margin: '10px 0' }}>
              <Typography variant="subtitle1">{item.feedbackTitle}</Typography>
              {/* Add other fields you want to display */}
            </Paper>
          ))}
          {tabIndex === '1' && Array.isArray(feedback.acknowledged )&& feedback.acknowledged.map((item) => (
            <Paper key={item.feedbackId} elevation={3} style={{ padding: '10px', margin: '10px 0' }}>
              <Typography variant="subtitle1">{item.feedbackTitle}</Typography>
              {/* Add other fields you want to display */}
            </Paper>
          ))}
          {tabIndex === '2' && Array.isArray(feedback.byOwner) && feedback.byOwner.map((item) => (
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
