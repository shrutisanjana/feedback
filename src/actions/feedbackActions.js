// feedbackActions.js
import axios from '../api/axios-instance';
import * as actionTypes from '../constants/actionTypes';

export const getUnacknowledged = () => async (dispatch) => {
  try {
    const response = await axios.get('/getUnacknowledge');
    dispatch({ type: actionTypes.GET_UNACKNOWLEDGED, payload: response.data });
  } catch (error) {
    console.error('Error fetching unacknowledged feedback:', error);
  }
};

export const getAcknowledged = () => async (dispatch) => {
  try {
    const response = await axios.get('/getAcknowledge');
    dispatch({ type: actionTypes.GET_ACKNOWLEDGED, payload: response.data });
  } catch (error) {
    console.error('Error fetching acknowledged feedback:', error);
  }
};

export const getByOwner = (feedbackFrom) => async (dispatch) => {
  try {
    const response = await axios.get(`/feedbackByOwner/${feedbackFrom}`);
    dispatch({ type: actionTypes.GET_BY_OWNER, payload: response.data });
  } catch (error) {
    console.error('Error fetching feedback by owner:', error);
  }
};
