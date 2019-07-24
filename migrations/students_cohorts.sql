CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  start_date DATE,
  end_date DATE
);

CREATE TABLE students (
  id serial primary key NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50),
  phone VARCHAR(15),
  github VARCHAR(50),
  start_date DATE,
  end_date DATE,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
);