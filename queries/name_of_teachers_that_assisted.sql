SELECT DISTINCT
  teachers.name AS teacher,
  cohorts.name AS cohort
FROM teachers
LEFT OUTER JOIN assistance_requests ON teacher_id = teachers.id
LEFT OUTER JOIN students ON student_id = students.id
LEFT OUTER JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher