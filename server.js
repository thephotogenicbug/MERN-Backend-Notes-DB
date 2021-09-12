const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
app.use(cors());

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.send("Api is Running...");
});

// get all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// get notes by id
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
  //   console.log(req.params);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));