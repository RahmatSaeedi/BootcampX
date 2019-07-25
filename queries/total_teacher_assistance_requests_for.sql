SELECT name, count(*) AS total_assistances
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
WHERE name = 'Waylon Boehm'
GROUP BY name
