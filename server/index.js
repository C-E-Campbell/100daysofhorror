const express = require("express");
const m = require("./controller/movie_controller");
const data = require("./myAPI.json");
const app = express();

app.use(express.json());

app.get("/api/movies", m.get);

app.delete("/api/movie/:id", m.delete);

const port = process.env.PORT || 8290;
app.listen(port, () => {
	console.log(`server listening on ${port}`);
});
