const { Pool } = require('pg');
const { password } = require('./pSQLConfig');

const pool = new Pool({
  user: 'postgres',
  password,
  host: 'localhost',
  database: 'bootcampx'
});

if (process.argv.length >= 3) {
  const queryNumber = parseInt(process.argv[2]) ? parseInt(process.argv[2]) : 3;
  const cohort = process.argv[3];
  const limit = parseInt(process.argv[4]) ? parseInt(process.argv[4]) : 5;

  let queryString = '';

  if (queryNumber === 1) {
    queryString = `
      SELECT DISTINCT
      teachers.name AS name,
      cohorts.name AS cohort
      FROM teachers
      LEFT OUTER JOIN assistance_requests ON teacher_id = teachers.id
      LEFT OUTER JOIN students ON student_id = students.id
      LEFT OUTER JOIN cohorts ON cohort_id = cohorts.id
      WHERE cohorts.name LIKE '%${cohort}%'
      ORDER BY name
      LIMIT ${limit};
    `;
  } else if (queryNumber === 2) {
    queryString = `
      SELECT students.id, students.name, cohorts.name AS cohort
      FROM students
      JOIN cohorts ON cohort_id = cohorts.id
      WHERE cohorts.name LIKE '%${cohort}%'
      LIMIT ${limit};
    `;
  }

  pool.query(queryString).then(resp => {
    if (queryNumber === 1) {
      resp.rows.forEach(teacher => {
        console.log(`${teacher.name} helped cohort ${cohort}.`);
      });
    } else if (queryNumber === 2) {
      resp.rows.forEach(user => {
        console.log(`${user.name} is a student, has an id of ${user.id}, and was in ${user.cohort}.`);
      });
    }
    process.exit(0);
  }).catch(err => {
    console.error('query error', err.stack);
    process.exit(0);
  });
} else {
  console.log('>node students {queryNumber} {cohortName} {maxNumberOfRows}');
  console.log('Try: \n >node students 1 FEB 5');
  console.log(' or: \n >node students 2 FEB 5');
}
