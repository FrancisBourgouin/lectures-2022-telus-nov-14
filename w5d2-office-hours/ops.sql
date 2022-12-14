-- SELECT * FROM jokes;
-- SELECT * FROM authors;


-- Show all the jokes where the question starts with "what"

SELECT * FROM jokes WHERE question LIKE 'What%';

-- SELECT AVG(rating) FROM jokes;

-- SELECT * FROM jokes GROUP BY id HAVING rating > AVG(rating) ;


-- SELECT AVG(rating), author_id FROM jokes GROUP BY author_id HAVING AVG(rating) > 4;

SELECT * 
FROM jokes
JOIN authors
ON jokes.author_id = authors.id
WHERE 
  rating > (SELECT AVG(rating) FROM jokes)
AND
  authors.id > 2
;

-- Math.max(1,2,4,2,1,2,4,8)

-- const list = [1,2,4,2,1,2,4,8]
-- Math.max(...list)

-- SELECT *
-- FROM jokes
-- WHERE
--   author_id IN (1,2,5,8,10)
--   ;

-- SELECT *
-- FROM jokes
-- WHERE
--   author_id IN (SELECT id FROM authors WHERE description LIKE '%july%')
--   ;


-- UPDATE users
-- SET "currChallenge" = 16
-- WHERE id IN (
--    SELECT id
--    FROM users
--    WHERE id IN (SELECT user_id FROM completions GROUP BY user_id HAVING count(*) = 15 )
--    AND "currChallenge" = 15
-- )


-- SELECT AVG(rating) AS average_rating, author_id 
-- FROM jokes 
-- GROUP BY author_id 
-- HAVING AVG(rating) > 4
-- ;


SELECT * 
FROM jokes
JOIN authors
ON jokes.author_id = authors.id
WHERE 
  rating > (SELECT AVG(rating) FROM jokes)
;

CREATE VIEW above_average_jokes AS (
  SELECT jokes.*, authors.name, authors.description
  FROM jokes
  JOIN authors
  ON jokes.author_id = authors.id
  WHERE 
    rating > (SELECT AVG(rating) FROM jokes)

)

-- INNER vs FULL vs LEFT/RIGHT

-- 90% INNER