SELECT
  teachers.name AS teacher,
  students.name AS student,
  assignments.name AS assignment,
  (completed_at - started_at) AS duration
FROM assistance_requests
JOIN assignments ON assignment_id = assignments.id
JOIN students on student_id = students.id
JOIN teachers on teacher_id = teachers.id
ORDER BY duration
