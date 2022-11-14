-- users
INSERT INTO
  users (user_name, weight, goal_Weight, fitness_Level)
VALUES
  ('Kadynce', 145, 165, 3),
  ('Jarrett', 105, 85, 2),
  ('Brian', 172, 165, 2),
  ('Jordan', 140, 142, 2),
  ('Bain', 195, 200, 2),
  ('Jouholiani', 225, 200, 1);

-- exercises
-- lvl 1 chest/ tri
INSERT INTO
  exercises (name, lvl, muscle_Group)
VALUES
  ('push ups', '1', 'chest'),
  ('tricep extentions', '1', 'tricepts'),
  ('decline push ups', '1', 'chest'),
  ('bench dips', '1', 'tricepts'),
  ('wide push ups', '1', 'chest');

-- lvl 1 back/ bi
INSERT INTO
  exercises (name, lvl, muscle_Group)
VALUES
  ('pull ups', '1', 'back'),
  ('australian pullups', '1', 'back'),
  ('body weight curls', '1', 'biceps'),
  ('chin ups', '1', 'biceps'),
  ('wide pull ups', '1', 'back');

-- lvl 1 legs
INSERT INTO
  exercises (name, lvl, muscle_Group)
VALUES
  ('side lunges', '1', 'legs'),
  ('lunges', '1', 'legs'),
  ('rear lunges', '1', 'legs'),
  ('wall sits', '1', 'legs'),
  ('body weight squats', '1', 'legs');

-- lvl 2
-- lvl 2 chest/ tri
INSERT INTO
  exercises (name, lvl, muscle_Group)
VALUES
  ('diamond push ups', '2', 'chest'),
  ('tricep extentions', '2', 'tricepts'),
  ('decline push ups', '2', 'chest'),
  ('bench dips', '2', 'tricepts'),
  ('wide push ups', '2', 'chest');

-- lvl 2 back/ bi
INSERT INTO
  exercises (name, lvl, muscle_Group)
VALUES
  ('inverted deadlift', '2', 'back'),
  ('front lever raises', '2', 'back'),
  ('single arm negitive pull ups', '2', 'back'),
  ('pause pull ups', '2', 'back'),
  ('active hangs', '2', 'biceps');

INSERT INTO
  exercises (name, lvl, muscle_Group)
VALUES
  ('band assiated pistol squats', '2', 'legs'),
  ('box jumps', '2', 'legs'),
  ('frog jumps', '2', 'legs'),
  ('split squat', '2', 'legs'),
  ('body weight rdl', '2', 'legs');

--lvl 3
INSERT INTO
  exercises (name, lvl, muscle_Group)
VALUES
  ('psudoe planch push ups', '3', 'chest'),
  ('tricep extentions', '3', 'tricepts'),
  ('decline push ups', '3', 'chest'),
  ('bench dips', '3', 'tricepts'),
  ('wide push ups', '3', 'chest');

-- lvl 3 back/ bi
INSERT INTO
  exercises (name, lvl, muscle_Group)
VALUES
  ('archer pull up', '3', 'back'),
  ('pause half pull ups', '3', 'biceps'),
  ('type-writer', '3', 'back'),
  ('front lever', '3', 'back'),
  ('single arm body weight curls', '3', 'biceps');

-- lvl 3 legs
INSERT INTO
  exercises (name, lvl, muscle_Group)
VALUES
  ('sissy squat', '3', 'legs'),
  ('pistol squats', '3', 'legs'),
  ('dragon', '3', 'squats'),
  ('single leg hinge', '3', 'legs'),
  ('walk on tip toes', '3', 'legs');