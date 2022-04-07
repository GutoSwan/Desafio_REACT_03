import axios from "axios";
const apizinha = axios.create({
  baseURL: "https://api.github.com",
});
export default apizinha;