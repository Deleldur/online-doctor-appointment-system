import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getCurrentUserId() {
//    return "5ffc712295f0dd3932d7b593";
    let data = JSON.parse(localStorage.getItem("user")); 
//    console.log(data);
//    console.log( data["id"]);
    return data["id"];

  }
}

export default new AuthService();
