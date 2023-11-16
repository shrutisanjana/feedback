// feedbackActions.js
import axios from '../api/axios-instance';
import * as actionTypes from '../constants/actionTypes';

export const getUnacknowledged = () => ({
  type: actionTypes.GET_UNACKNOWLEDGED,
  payload: axios.get('/getUnacknowledge').then((response) => response.data),
});

export const getAcknowledged = () => ({
  type: actionTypes.GET_ACKNOWLEDGED,
  payload: axios.get('/getAcknowledge').then((response) => response.data),
});

export const getByOwner = (feedbackFrom) => ({
  type: actionTypes.GET_BY_OWNER,
  payload: axios.get(`/feedbackByOwner/${feedbackFrom}`).then((response) => response.data),
});

// Other action creators...