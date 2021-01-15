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
  getDoctorBoard() {
    return axios.get(API_URL + "doctor", { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  // fetches all appointments from the end point
  getAppointments() {
    return axios.get(API_URL + "appointment/", { headers: authHeader() });
  }
  // fetches all appointments with a specific patient id
  getAppointmentsFromPatientId(patientId) {
    return axios.get(API_URL + "appointment/patient/" + patientId, {
      headers: authHeader()
    });
  }
  // fetches all appointments with a specific doctor id
  getAppointmentsFromDoctorId(doctorId) {
    return axios.get(API_URL + "appointment/doctor/" + doctorId, {
      headers: authHeader()
    });
  }
  // fetches all appointment history from the end point
  getAppointmentHistory() {
    return axios.get(API_URL + "appointmenthistory/", {
      headers: authHeader()
    });
  }
  // fetches all database information for a specific patient
  getPatientInfo() {
    let userId = authService.getCurrentUserId();
    return axios.get(API_URL + "patient/findpatient/" + userId, {
      headers: authHeader()
    });
  }
  // fetches all database information for a specific doctor
  getDoctorInfo() {
    let userId = authService.getCurrentUserId();
    return axios.get(API_URL + "doctor/finddoctor/" + userId, {
      headers: authHeader()
    });
  }

  // fetches all locations for all the doctors in the datbase
  // this is used to render the drop down menu in the search function for the booking requests.
  getDoctorLocations() {
    let role = "5ff86007480a2c4b6d697909";
    return axios.get(API_URL + "doctorlocations/" + role, {
      headers: authHeader()
    });
  }

  // fetches all ailments from the end point
  // this is used to render the drop down menu in the search function for the booking requests.
  getAilmentList() {
    return axios.get(API_URL + "ailments/", {
      headers: authHeader()
    });
  }

  // edits the current user information (works for both doctors and patients)
  editUser(user) {
    console.log(user);
    let userId = authService.getCurrentUserId();
    return axios.put(API_URL + "doctor/updatedoctor/" + userId, user, {
      headers: authHeader()
    });
  }
}
export default new UserService();
