SELECT cohorts.name, count(*) AS student_count
  FROM cohorts
  LEFT OUTER JOIN students ON cohort_id = cohorts.id
  GROUP BY cohorts.name
  HAVING count(*) >= 18
  ORDER BY student_count