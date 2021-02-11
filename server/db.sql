CREATE DATABASE rental-app

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255)NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    user_id int NOT NULL,
    street VARCHAR(40) NOT NULL,
    apartment VARCHAR(40),
    city VARCHAR(40),
    state VARCHAR(40),
    comments text,
    rating int NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NULL DEFAULT NULL,
    post_date DATE NOT NULL DEFAULT CURRENT_DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);