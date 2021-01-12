import axios from 'axios';
import authHeader from './AuthHeader';
import authService from './AuthService';

const API_URL = 'http://localhost:3000/api/';
//const API_URL2 = 'http://localhost:3000/';

//let userId = "5ffc712295f0dd3932d7b593";
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

  getAppointments() {
    return axios.get(API_URL + 'appointment/', { headers: authHeader() });
  }
  getDoctorBoard() {
    return axios.get(API_URL + 'doctor', { headers: authHeader() });
  }

  getDoctorInfo() {
    let userId = authService.getCurrentUserId();
    return axios.get(API_URL + 'doctor/finddoctor/' + userId, { headers: authHeader() });
  }
}

export default new UserService();
