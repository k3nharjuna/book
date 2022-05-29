import axios from "axios";

const instance = axios.create({
  baseURL: "https://book-mongoose.herokuapp.com/api",
  //   timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
