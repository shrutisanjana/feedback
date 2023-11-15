// feedbackReducer.js
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  unacknowledged: [],
  acknowledged: [],
  byOwner: [],
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_UNACKNOWLEDGED:
      return { ...state, unacknowledged: action.payload };
    case actionTypes.GET_ACKNOWLEDGED:
      return { ...state, acknowledged: action.payload };
    case actionTypes.GET_BY_OWNER:
      return { ...state, byOwner: action.payload };
    default:
      return state;
  }
};

export default feedbackReducer;
