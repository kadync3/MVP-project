
const express = require("express");
const app = express();
const { Pool } = require("pg");
const config = require("./config")[process.env.NODE_ENV||"dev"];
const pool = new Pool({ connectionString: config.connectionString });
const cors = require('cors')
app.use(cors())
pool.connect();
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// [] build and if statement to handle levels
app.get("/exercises", (req, res) => {
  pool
    .query("SELECT * FROM exercises")
    .then((result) => res.send(result.rows))
    .catch((err) => console.error(err.stack));
});

//[] build individual users functionality
app.get("/users", (req, res) => {
  // var id = req.params.id;
  pool
    .query(`SELECT * FROM users`)
    .then((result) => res.send(result.rows))
    .catch((err) => console.error(err.stack));
});

app.post("/users", (req, res) => {
  var table = req.params.table;
  var newUser = req.body;
  pool
    .query(
      `INSERT INTO users (user_name, weight, goal_Weight, fitness_Level) VALUES ('${newUser.user_name}', '${newUser.weight}', '${newUser.goal_Weight}','${newUser.fitness_Level}')`
    )
    .then((result) => res.send(newUser))
    .catch((err) => console.error(err.stack));
});
app.post("/exercises", (req, res) => {
  var table = req.params.table;
  var newExercise = req.body;
  pool
    .query(
      `INSERT INTO exercises (name, lvl, muscle_Group ) VALUES ('${newExercise.name}', '${newExercise.lvl}', '${newExercise.muscle_Group}')`
    )
    .then((result) => res.send(newExercise))
    .catch((err) => console.error(err.stack));
});

app.delete(`/:table/:id`, (req, res) => {
  var id = req.params.id;
  var table = req.params.table;
  pool
    .query(`DELETE FROM ${table} WHERE id=${id}`)
    .then((result) => res.send("User " + id + " has been deleted"))
    .catch((err) => console.error(err.stack));
});
app.patch("/:table/:id", (req, res) => {
  var id = req.params.id;
  var table = req.params.table;
  pool
    .query(
      `UPDATE ${table} SET ${Object.keys(req.body)}='${Object.values(
        req.body
      )}' WHERE id=${id}`
    )
    .then((result) => res.send(req.body))
    .catch((err) => console.error(err.stack));
});
// listen

app.listen(8000, () => {
  console.log("listining on port 8000");
});
