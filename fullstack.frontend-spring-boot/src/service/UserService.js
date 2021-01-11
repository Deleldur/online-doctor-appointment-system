import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://localhost:3000/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getPatientBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getDoctorBoard() {
    return axios.get(API_URL + 'doctor', { headers: authHeader() });
  }
}

export default new UserService();
