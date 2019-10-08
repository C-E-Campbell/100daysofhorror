const express = require("express");
const m = require("./controller/movie_controller");
const data = require("./myAPI.json");
const app = express();
const cors = require("cors");

app.get("/api/movies", cors(), m.get);

app.get("/api/movie/:id", cors(), (req, res) => {
	const { id } = req.params;
	const index = data.findIndex(movie => {
		return movie.id === parseInt(id);
	});
	res.status(200).send(data[index]);
});

const port = 8290;
app.listen(port, () => {
	console.log("server is running on port 8290");
});
