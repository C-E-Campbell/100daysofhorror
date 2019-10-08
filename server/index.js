const express = require("express");
const m = require("./controller/movie_controller");
const data = require("./myAPI.json");
const app = express();
const cors = require("cors");
app.use(express.json());

app.get("/api/movies", cors(), m.get);

app.delete("/api/movie/:id", cors(), m.delete);

const port = 8290;
app.listen(port, () => {
	console.log("server is running on port 8290");
});
