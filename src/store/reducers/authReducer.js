import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  _id: null,
  email: null,
  username: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADED":
    case "SIGN_IN": {
      const tokenCredentials = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        _id: tokenCredentials.user_id,
      };
    }
    case "USER_DETAILS": {
      return {
        ...initialState,
        username: action.username,
        email: action.email,
        _id: action.id,
      };
    }
    case "SIGN_OUT": {
      localStorage.removeItem("token");
      return {
        token: null,
        _id: null,
        email: null,
        username: null,
      };
    }
    case "SIGN_UP": {
      // alert("Welcome!!!!");
      // const signUpForm = jwtDecode(action.token);
      return {
        ...initialState,
        // _id: action._id,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
