import axios from "axios";

const API_URL = "http://127.0.0.1:8000/auth/";

// export default axios.create({
//   baseURL: "http://127.0.0.1:8000/auth/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

const register = (formData) => {
  return axios.post(API_URL + "users/", JSON.stringify({ formData }));
};

const login = (username, password) => {
  return axios
    .post(API_URL + "jwt/create/", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
