-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name
FROM users;



-- Exercise 3
SELECT id, first_name, last_name
FROM users
ORDER BY last_name;



-- Exercise 4
SELECT id, image_url, user_id
FROM posts
WHERE user_id=26;



-- Exercise 5
SELECT id, image_url, user_id
FROM posts
WHERE user_id=26
OR user_id=12;




-- Exercise 6
SELECT COUNT(*)
FROM posts;




-- Exercise 7
SELECT user_id, COUNT (*)
FROM comments
GROUP BY user_id
ORDER BY COUNT(*) DESC;



-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name
FROM posts
JOIN users
ON posts.user_id = users.id
WHERE user_id = 26
OR user_id = 12;



-- Exercise 9
SELECT posts.id, posts.pub_date, following.following_id
FROM posts
JOIN following
ON posts.user_id = following.following_id
WHERE following.user_id=26;



-- Exercise 10
SELECT posts.id, posts.pub_date, following.following_id, users.username
FROM posts
JOIN following
ON posts.user_id = following.following_id
JOIN users
ON users.id = following.following_id
WHERE following.user_id = 26
ORDER BY posts.pub_date DESC;




-- Exercise 11
INSERT INTO bookmarks(id, user_id, post_id, timestamp)
VALUES(596, 26, 219, now()),
      (597, 26, 220, now()),
      (598, 26, 221, now());


-- Exercise 12

DELETE FROM bookmarks
WHERE id = 596 OR id = 597 OR id = 598;


-- Exercise 13
UPDATE users
SET email = 'knick2022@gmail.com'
WHERE id = 26;



-- Exercise 14
SELECT posts.id, posts.user_id, COUNT(comments.id)
FROM posts JOIN comments
ON posts.id = comments.post_id
WHERE posts.user_id=26
GROUP BY posts.id;




-- 1) A join is a combination of multiple tables' columns to create a larger table with related information. Joins allow us to have a lot of logically related data separated into relations or tables and combine them when needed to allow modularity and normalization of data.
-- 2) We want a foreign key of user_id to the users table in the posts table to normalize the data. We want to avoid repeating code/data when possible, and by referencing a specific foreign_key, we have DRYer code since we do not have to repeat the same info (e.g. username, first_name, last_name) for every post. Instead we just reference that data through one column, the user_id.
