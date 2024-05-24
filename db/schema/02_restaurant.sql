DROP TABLE IF EXISTS special_diet CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS dietary_needs CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  photo_url VARCHAR(255)
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  size 	INTEGER,
  price FLOAT NOT NULL,
  photo VARCHAR(255),
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE
)

CREATE TABLE dietary_needs (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER REFERENCES menu_items(id),
  special_diet_id INTEGER REFERENCES special_diet(id)
);

CREATE TABLE special_diet (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);


