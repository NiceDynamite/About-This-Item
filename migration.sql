DROP TABLE IF EXISTS shipping;

CREATE TABLE shipping (
    id SERIAL PRIMARY KEY,
    dimensions TEXT,
    weight TEXT
);