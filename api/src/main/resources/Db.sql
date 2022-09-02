DROP TABLE IF EXISTS comments;
CREATE TABLE comments(
    id serial PRIMARY KEY,
    name VARCHAR(100),
    topic VARCHAR(200),
    body VARCHAR(5000)
);
