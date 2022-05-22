import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../feature/userSlice";

const loginThunk = (userData) => async (dispatch) => {
  const url = process.env.REACT_APP_SOCIAL;

  const { data, status } = await axios.post(`${url}/user/login`, userData);

  if (status === 200) {
    const userInfo = jwtDecode(data.token);
    localStorage.setItem("token", data.token);
    dispatch(loginActionCreator({ username: userInfo.username }));
  }
};

export default loginThunk;
