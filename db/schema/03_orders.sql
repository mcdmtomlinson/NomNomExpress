DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS order_details CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS orders_restaurant CASCADE;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  client INTEGER REFERENCES users(id) ON DELETE CASCADE,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  date TIMESTAMP
);

CREATE TABLE order_details (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  quantity SMALLINT DEFAULT 1,
  special_requests TEXT,
  price FLOAT NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  rating SMALLINT NOT NULL,
  message TEXT
);

-- Drop and recreate orders table

DROP TABLE IF EXISTS orders_restaurant CASCADE;

CREATE TABLE orders_restaurant (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,

  /*preferred_pickup TIMESTAMP NOT NULL,
  */

  estimated_pickup TIMESTAMP NOT NULL,
  order_date TIMESTAMP NOT NULL DEFAULT NOW(),
  confirmed BOOLEAN DEFAULT false,
  completed BOOLEAN DEFAULT false
);

