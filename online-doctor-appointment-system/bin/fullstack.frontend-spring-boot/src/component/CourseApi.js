import axios from "axios";

const CourseUrl = "http://localhost:8080";

class CourseApi {
  getAllCourses() {
    return axios.get(`${CourseUrl}/patient/`);
  }

}

export default new CourseApi();
