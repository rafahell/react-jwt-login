import axios from "axios";
const API_URL = "http://127.0.0.1:8000/auth/";

export const signUp = (formSignUpData) => {
  return (dispatch) => {
    axios
      .post(`${API_URL}users/`, formSignUpData)
      .then((response) => {
        dispatch({
          type: "SIGN_UP",
          _id: response.data.id,
        });
      })
      .catch((error) => {
        alert(error.ressponse);
      });
  };
};
export const signIn = (formData) => {
  return (dispatch) => {
    axios
      .post(`${API_URL}jwt/create/`, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.access);
        console.log(response.data);
        dispatch({
          type: "SIGN_IN",
          // username: formData.username,
          token: response.data.access,
        });
      })
      .catch((error) => {
        alert(error.ressponse);
      });
  };
};
export const getUser = (jwtToken) => {
  return (dispatch) => {
    axios
      .get(`${API_URL}users/me/`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        dispatch({
          type: "USER_DETAILS",
          username: response.data.username,
          email: response.data.email,
          id: response.data.id,
        });
      })
      .catch((error) => {
        alert(error.ressponse);
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else {
      return null;
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};
