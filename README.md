# BootcampX
A set of database queries for a [Light House Labs](https://github.com/lighthouse-labs) application to help manage data about students and mentors.

# Creating database
* [_`students`_](https://gist.githubusercontent.com/meech-ward/6074f24ced36917ce608c69914ece777/raw/69a97d29d5d227914fdf11c71e522923efe0597b/students_seeds.sql)
  ```bash
    > SELECT * FROM students;
     id | name | email | phone | github | start_date | end_date | cohort_id
    ----+------+-------+-------+--------+------------+----------+-----------
    (0 rows)
  ```
  - `id`: A unique identifier
  - `name`: The full name of the student
  - `email`: The students' email address
  - `phone`: The students' phone number
  - `github`: The students' github profile url
  - `start_date`: The students' start date of the Bootcamp
  - `end_date`: The students' end date of the Bootcamp
  - `cohort_id`: The id of the cohort that the student is enrolled in

* [_`cohorts`_](https://gist.githubusercontent.com/meech-ward/6074f24ced36917ce608c69914ece777/raw/69a97d29d5d227914fdf11c71e522923efe0597b/cohorts_seeds.sql)
  ```bash
  > SELECT * FROM cohorts;
   id | name | start_date | end_date
  ----+------+------------+----------
  (0 rows)
  ```
  - `id`: A unique identifier
  - `name`: The name of the cohort
  - `start_date`: The cohorts' start date
  - `end_date`: The cohorts' end date

* _`assignments`_
  ```bash
   id | name | content | day | chapter | duration
  ----+------+---------+-----+---------+----------
  (0 rows)
  ```
  - `id`: A unique identifier
  - `name`: The name of the assignment
  - `content`: The written content body of the assignment
  - `day`: The day that the assignment appears on
  - `chapter`: The order that the assignment will appear in the day.
  - `duration`: The average time it takes a student to finish

* _`assignment_submissions`_
  ```bash
   id | assignment_id | student_id | duration | submission_date
  ----+---------------+------------+----------+-----------------
  (0 rows)
  ```
  - `id`: A unique identifier
  - `assignment_id`: The id of the assignment
  - `student_id`: The id of the student
  - `duration`: The time it took the student to complete the assignment
  - `submission_date`: The date is was submitted

* _`teachers`_
* _`assistance_requests`_

Temporary fake data
```bash
wget http://bit.ly/2xuYlJX -O seeds/students.sql
wget http://bit.ly/2JsdAZB -O seeds/cohorts.sql
wget http://bit.ly/2xsHpnr -O seeds/assignment_seeds.sql
wget http://bit.ly/2KVhygR -O seeds/assignment_submissions_seeds.sql
```

```sql
CREATE DATABASE bootcampx;
\c bootcampx;

);

\i migrations/students_cohorts.sql
\i migrations/assignments_submissions.sql

\i seeds/cohorts.sql
\i seeds/students.sql
\i seeds/assignment_seeds.sql
\i seeds/assignment_submissions_seeds.sql

```

# Queries
## [1_students_without_github.sql](queries/1_students_without_github.sql)
Selects `id`, `name`, `email`, and `cohort_id` of those without a github account
```bash
 id  |       name        |             email              | cohort_id
-----+-------------------+--------------------------------+-----------
  99 | Herminia Smitham  | sawayn.sarina@yahoo.com        |         7
 102 | Jacinthe Kautzer  | litzy_fay@hilpert.net          |         7
 111 | Bernardo Turcotte | margarita.anderson@paolo.name  |         8
 123 | Eloisa Quigley    | schmidt.ansel@gmail.com        |         9
 128 | Tiana Altenwerth  | zelda.stanton@yahoo.com        |         9
 ...
```
## [students_in_cohort.sql](queries/students_in_cohort.sql)
Selects `id` and `name` of students in cohort `cohort_id = 1`, and orders them in alphabetical order.
```bash
 id |       name
----+-------------------
  1 | Armand Hilll
 13 | Brian Jones
 16 | Carmel Grant
 14 | Clint Cremin
 17 | Colten Gutkowski
  9 | Donnie Lueilwitz
  ...
```
## [total_students_in_cohort.sql](queries/total_students_in_cohort.sql)
Selects the total number of students who were in the first 3 cohorts.

```bash
 Total
-------
    48
(1 row)
```

## [students_without_contact_details.sql](queries/students_without_contact_details.sql)
Gets the `name`, `id`, and `cohort_id` of all of the students that don't have an email or a phone number.
```bash
       name       | id  | cohort_id
------------------+-----+-----------
 Aurore Yundt     | 160 |        11
 Cory Toy         | 161 |        11
 Kurt Turcotte    | 163 |        11
 Elda McClure     | 164 |        11
 Luisa Sipes      | 168 |        11
 Bertha Johnson   | 172 |        11
 ...
```
## [students_without_gmail_or_phone.sql](queries/students_without_gmail_or_phone.sql)
Gets the `name`, `email`, `id`, and `cohort_id` of all of the students without a gmail.com and phone number.

```bash
      name       |           email           | id  | cohort_id
-----------------+---------------------------+-----+-----------
 Javonte Ward    | jessie_howell@hotmail.com | 178 |
 Jessika Jenkins | stephanie.koss@kevon.io   | 187 |
 Jerrold Rohan   | wehner.twila@hotmail.com  | 189 |
(3 rows)
```

## [currently_enrolled_students.sql](queries/currently_enrolled_students.sql)
Gets the `name`, `id`, and `cohort_id` of all of the students currently enrolled and orders them by `cohort_id`.

```bash
        name         | id  | cohort_id
---------------------+-----+-----------
 Deon Hahn           | 151 |        11
 Sean Bartell        | 152 |        11
 Sarai Flatley       | 153 |        11
 Billie Mitchell     | 154 |        11
 Vance Kihn          | 155 |        11
 ...
 (42 rows)
 ```


## [students_without_github.sql](queries/students_without_github.sql)
Gets the `name`, `email`, and `phone` number of all _graduates_ without a linked Github account.

```bash
       name        |             email             |    phone
-------------------+-------------------------------+--------------
 Herminia Smitham  | sawayn.sarina@yahoo.com       | 778-251-5094
 Jacinthe Kautzer  | litzy_fay@hilpert.net         | 075-883-5570
 Bernardo Turcotte | margarita.anderson@paolo.name | 814-473-6929
 Eloisa Quigley    | schmidt.ansel@gmail.com       | 276-965-2022
 Tiana Altenwerth  | zelda.stanton@yahoo.com       | 448-872-0954
 Hailie Kutch      | zora.corkery@goldner.net      | 249-763-9998
(6 rows)
```
## [total_time_spent_on_all_assignments.sql](queries/total_time_spent_on_all_assignments.sql)
Gets the total amount of time that a student has spent on all assignments, in this case _'Ibrahim Schimmel'_.

```bash
       name       | total_duration
------------------+----------------
 Ibrahim Schimmel |           6888
(1 row)
```
## [cohorts_total_assignment_duration.sql](queries/cohorts_total_assignment_duration.sql)
Gets the total amount of time that all students from a specific cohort have spent on all assignments, in this case _'FEB12'_.

```bash
 cohort | total_duration
--------+----------------
 FEB12  |         373501
(1 row)
```


# pSQL
- `\c ...`: select a table
- `\dt`: List tables
- `\! ...`: executes an external shell command 
- `SELECT * FROM pg_catalog.pg_tables;`: list system tables
# SQL
- `CREATE TABLE ... (...);`
