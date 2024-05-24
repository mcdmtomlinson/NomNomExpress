INSERT INTO restaurants (name, location, phone, photo_url) VALUES
('NomNom', 'Calgary', '6399941909', 'photo_here');

INSERT INTO categories (name) VALUES
('Globally Inspired Bites'),
('Classic Comforts'),
('Lighter Options'),
('Unique Twists');

INSERT INTO special_diet (name) VALUES
('Gluten-free'),
('Vegetarian'),
('Vegan'),
('Seasonal');

INSERT INTO menu_items (name, description, category, size, price, photo, Restaurant_id) VALUES
('Korean BBQ Lettuce Wraps', 'Allergy Ingredients: Soy (in bulgogi marinade), gluten (in gochujang aioli). Special Dietary Needs: Gluten-free option available.', 1, 1, 8.00, 'https://cookingformysoul.com/wp-content/uploads/2022/09/feat-korean-bulgogi-wraps-min-480x270.jpg', 1),
('Vietnamese Summer Rolls', 'Allergy Ingredients: Shrimp, peanuts. Special Dietary Needs: Vegetarian option available.', 1, 1, 7.00, 'https://drivemehungry.com/wp-content/uploads/2020/06/vegetarian-summer-rolls-3.jpg', 1),
('Miniature Beef Empanadas', 'Allergy Ingredients: Wheat (in pastry), beef. Special Dietary Needs: Vegetarian option available.', 1, 1, 7.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93HKZyhGNbGn6EVZefdKVO2NwKYV9-9_3Enjwi1xe9A&s.jpg', 1),
('Loaded Mac & Cheese Bites', 'Allergy Ingredients: Dairy (in cheese), gluten (in pasta). Special Dietary Needs: Options for add-ins like bacon or truffle oil.', 2, 1, 6.00, 'https://cookingformysoul.com/wp-content/uploads/2023/03/feat-mac-cheese-bites-min.jpg', 1),
('Miniature Chicken Pot Pies', 'Allergy Ingredients: Wheat (in puff pastry), dairy (in gravy).', 2, 1, 8.00, 'https://www.southernliving.com/thmb/W1pZDSD7StYePEj_RcGR7klRk_s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mini-Chicken-Pot-Pies302-2000-a4146137b7424f73ad7938bdc4b75e8d.jpg', 1),
('Bacon-Wrapped Dates', 'Allergy Ingredients: Pork (in bacon). Special Dietary Needs: Vegetarian option available.', 2, 1, 8.00, 'https://www.realsimple.com/thmb/1S_XHNhb9PWcJv3ZKGTMr_eilB4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bacon-wrapped-goat-cheese-dates-recipe-2000-eee4c6448a7f43ceb141bdff657a67fb.jpg', 1),
('Grilled Vegetable Skewers with Hummus', 'Allergy Ingredients: None. Special Dietary Needs: Vegan.', 3, 1, 7.00, 'https://ohsodelicioso.com/wp-content/uploads/2021/08/veggieskewer-3.jpg', 1),
('Edamame with Spicy Mayo', 'Allergy Ingredients: Soy (in mayo). Special Dietary Needs: Vegan, gluten-free.', 3, 1, 6.00, 'https://img-global.cpcdn.com/recipes/94de876c05834be2/680x482cq70/spicy-edamame-recipe-main-photo.jpg', 1),
('Fresh Fruit & Yogurt Parfaits', 'Allergy Ingredients: Dairy (in yogurt), nuts (in granola). Special Dietary Needs: Vegan option available.', 3, 1, 6.00, 'https://swirlsofflavor.com/wp-content/uploads/2022/01/Fruit-Yogurt-Parfait-Horizontal-1-700x467.jpg.webp', 1),
('Miniature Lobster Rolls', 'Allergy Ingredients: Shellfish (lobster), wheat (in rolls). Special Dietary Needs: Seasonal, gluten-free option.', 4, 1, 10.00, 'https://i.pinimg.com/474x/a7/3e/fa/a73efad997c5b651afbd251ad57dd772.jpg', 1),
('Crispy Brussel Sprouts with Sriracha Honey Glaze', 'Allergy Ingredients: None. Special Dietary Needs: Vegetarian, gluten-free.', 4, 1, 7.00, 'https://www.theendlessmeal.com/wp-content/uploads/2020/11/Bacon-Roasted-Brussels-3-scaled.jpg', 1),
('Truffle Fries with Parmesan', 'Allergy Ingredients: Dairy (in Parmesan). Special Dietary Needs: Vegetarian.', 4, 1, 6.00, 'https://diethood.com/wp-content/uploads/2023/02/truffle-fries-7.jpg', 1);

INSERT INTO dietary_needs (menu_item_id, special_diet_id) VALUES
(1, 1),  -- Korean BBQ Lettuce Wraps - Gluten-free
(2, 2),  -- Vietnamese Summer Rolls - Vegetarian
(3, 2),  -- Miniature Beef Empanadas - Vegetarian
(4, 2),  -- Loaded Mac & Cheese Bites - Vegetarian
(6, 2),  -- Bacon-Wrapped Dates - Vegetarian
(7, 3),  -- Grilled Vegetable Skewers with Hummus - Vegan
(8, 1),  -- Edamame with Spicy Mayo - Gluten-free
(8, 3),  -- Edamame with Spicy Mayo - Vegan
(9, 3),  -- Fresh Fruit & Yogurt Parfaits - Vegan
(10, 1), -- Miniature Lobster Rolls - Gluten-free
(10, 4), -- Miniature Lobster Rolls - Seasonal
(11, 1), -- Crispy Brussel Sprouts with Sriracha Honey Glaze - Gluten-free
(11, 2), -- Crispy Brussel Sprouts with Sriracha Honey Glaze - Vegetarian
(12, 2); -- Truffle Fries with Parmesan - Vegetarian
