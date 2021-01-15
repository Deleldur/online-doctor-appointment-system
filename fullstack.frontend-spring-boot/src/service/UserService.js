import axios from "axios";
import authHeader from "./AuthHeader";
import authService from "./AuthService";

const API_URL = "http://localhost:3000/api/";
//const API_URL2 = 'http://localhost:3000/';

//let userId = "5ffc712295f0dd3932d7b593";
class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getPatientBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAppointments() {
    return axios.get(API_URL + "appointment/", { headers: authHeader() });
  }
  getAppointmentsFromPatientId(patientId) {
    return axios.get(API_URL + "appointment/patient/" + patientId, {
      headers: authHeader()
    });
  }

  getAppointmentsFromDoctorId(doctorId) {
    return axios.get(API_URL + "appointment/doctor/" + doctorId, {
      headers: authHeader()
    });
  }

  getAppointmentHistory() {
    return axios.get(API_URL + "appointmenthistory/", {
      headers: authHeader()
    });
  }
  getDoctorBoard() {
    return axios.get(API_URL + "doctor", { headers: authHeader() });
  }

  getPatientInfo() {
    let userId = authService.getCurrentUserId();
    return axios.get(API_URL + "patient/findpatient/" + userId, {
      headers: authHeader()
    });
  }
  getDoctorInfo() {
    let userId = authService.getCurrentUserId();
    return axios.get(API_URL + "doctor/finddoctor/" + userId, {
      headers: authHeader()
    });
  }

  getDoctorLocations() {
    let role = "5ff86007480a2c4b6d697909";
    return axios.get(API_URL + "doctorlocations/" + role, {
      headers: authHeader()
    });
  }
  getAilmentList() {
    return axios.get(API_URL + "ailments/", {
      headers: authHeader()
    });
  }
  editUser(user) {
    console.log(user);
    let userId = authService.getCurrentUserId();
    return axios.put(API_URL + "doctor/updatedoctor/" + userId, user, {
      headers: authHeader()
    });
  }
}
export default new UserService();
