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
* _`assignment_submissions`_
* _`teachers`_
* _`assistance_requests`_


```sql
CREATE DATABASE bootcampx;
\c bootcampx;

);

\i migrations/students_cohorts.sql
\i seeds/cohorts.sql
\i seeds/students.sql

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
### [students_without_gmail_or_phone.sql](queries/students_without_gmail_or_phone.sql)
Gets the `name`, `email`, `id`, and `cohort_id` of all of the students without a gmail.com and phone number.

```bash
      name       |           email           | id  | cohort_id
-----------------+---------------------------+-----+-----------
 Javonte Ward    | jessie_howell@hotmail.com | 178 |
 Jessika Jenkins | stephanie.koss@kevon.io   | 187 |
 Jerrold Rohan   | wehner.twila@hotmail.com  | 189 |
(3 rows)
```

### [currently_enrolled_students.sql](queries/currently_enrolled_students.sql)
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



# pSQL
- `\c ...`: select a table
- `\dt`: List tables
- `\! ...`: executes an external shell command 
- `SELECT * FROM pg_catalog.pg_tables;`: list system tables
# SQL
- `CREATE TABLE ... (...);`
