// axios-instance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8010/feedbackService', // Update with your API endpoint
});

export default instance;
