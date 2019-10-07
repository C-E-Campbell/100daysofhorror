import axios from "axios";

const KEY = "AIzaSyC-SL7LVSFJ19W8DuJzJKtwJWtvj_nxi7o";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "id",
		key: KEY
	}
});
