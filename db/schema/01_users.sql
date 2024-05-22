-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS payment_info CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone number VARCHAR(55) NOT NULL,
  address VARCHAR(255) NOT NULL,
  picture VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  promotions BOOLEAN DEFAULT true
);

CREATE TABLE payment_info (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES user(id) ON DELETE CASCADE,
  card_number SMALLINT NOT NULL,
  expiry_date VARCHAR(15) NOT NULL,
  bank_name VARCHAR(32) NOT NULL,
  CVV SMALLINT NOT NULL
);
