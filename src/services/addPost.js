import axios from "axios";
import { SERVER } from "../redux/actions";

async function addPost(post) {
  return await axios.post(SERVER, post);
}

export default addPost;
