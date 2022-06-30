DROP TABLE IF EXISTS shipping;
DROP TABLE IF EXISTS target_questions;
DROP TABLE IF EXISTS label;

CREATE TABLE shipping (
    id SERIAL PRIMARY KEY,
    dimensions TEXT
);

CREATE TABLE target_questions (
    id SERIAL PRIMARY KEY,
    question TEXT
);

CREATE TABLE label (
    id SERIAL PRIMARY KEY,
    number int
);