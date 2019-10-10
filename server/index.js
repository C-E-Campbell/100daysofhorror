const express = require("express");
const m = require("./controller/movie_controller");
const j = require("./controller/journal_controller");
const app = express();

app.use(express.json());

// movie methods
app.get("/api/movies", m.get);

app.delete("/api/movie/:id", m.delete);

// journal methods
app.get("/api/journal_entries", j.get);

app.post("/apijournal/:id", j.post);

app.put("/api/journal/:id", j.put);

app.delete("/api/journal/:id", j.delete);

const port = process.env.PORT || 8293;
app.listen(port, () => {
	console.log(`server listening on ${port}`);
});
