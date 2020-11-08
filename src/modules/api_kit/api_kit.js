import axios from "axios";
let APIKit = axios.create({
  baseURL: `https://perot-backend.herokuapp.com/`,
});

export default APIKit;
