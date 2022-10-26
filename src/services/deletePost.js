import axios from 'axios';
import { SERVER } from '../redux/actions';

async function deletePost(id) {
    return await axios.delete(`${SERVER}/${id}`)
}

export default deletePost;