const express = require("express");
const m = require("./controller/movie_controller");
const j = require("./controller/journal_controller");
const app = express();
app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

// movie methods
app.get("/api/movies", m.get);

app.delete("/api/movie/:id", m.delete);

// journal methods
app.get("/api/journal_entries", j.getAll);

app.get("/api/journal_entries/:id", j.getSingle);

app.post("/api/journal_entries/", j.post);

app.put("/api/journal_entries/:id", j.put);

app.delete("/api/journal_entries/:id", j.delete);

const port = process.env.PORT || 8293;
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
