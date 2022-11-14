DROP TABLE
  IF EXISTS users;

DROP TABLE
  IF EXISTS exercises;

CREATE TABLE
  users (
    id serial PRIMARY KEY,
    user_name varchar(50),
    weight int,
    goal_Weight int,
    fitness_Level int
  );

CREATE TABLE
  exercises (
    id serial PRIMARY KEY,
    name varchar(50),
    lvl int,
    muscle_Group varchar(50)
  );