const express = require("express");
const app = express();
const cors = require("cors");
const data = require("../server/myAPI.json");
app.get("/api/movies", cors(), (req, res) => {
	res.status(200).send(data);
});
const port = 8290;
app.listen(port, () => {
	console.log("server is running on port 8290");
});
