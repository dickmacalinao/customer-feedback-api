--Customer
INSERT INTO customer(name, slug) 
  VALUES('Cafe Nook', 'cafe-nook');

--Category
INSERT INTO category(customer_id, order_seq, category)
  SELECT id, 1, 'Product Quality (Food & Beverages)' FROM customer WHERE slug = 'cafe-nook';
INSERT INTO category(customer_id, order_seq, category)
  SELECT id, 2, 'Customer Service' FROM customer WHERE slug = 'cafe-nook';
INSERT INTO category(customer_id, order_seq, category)
  SELECT id, 3, 'Cleanliness & Ambience' FROM customer WHERE slug = 'cafe-nook';

--Question
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'slidingRate', 'How would you rate the overall quality of the food and beverages you ordered today?', '5', 'required'
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Product Quality (Food & Beverages)';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'yesNo', 'Were the flavors, freshness, and presentation of your items satisfactory?', null, 'required'
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Product Quality (Food & Beverages)';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'smileyRate', 'How satisfied were you with the temperature and consistency of your beverage?', '1', 'required'
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Product Quality (Food & Beverages)';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'yesNo', 'Did your order meet your expectations based on the menu description?', null, 'required'
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Product Quality (Food & Beverages)';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'yesNo', 'Were portion sizes appropriate for the price paid?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Product Quality (Food & Beverages)';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'textarea', 'Is there any specific item you particularly enjoyed or believe could be improved?', null, 'required'
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Product Quality (Food & Beverages)';

INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'slidingRate', 'How would you rate the friendliness and professionalism of our staff?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Customer Service';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'yesNo', 'Did our team respond promptly to your questions or requests?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Customer Service';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'yesNo', 'Were you greeted and acknowledged in a timely manner upon arrival?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Customer Service';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'yesNo', 'Did the staff demonstrate good product knowledge when assisting you?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Customer Service';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'slidingRate', 'How satisfied are you with the overall attentiveness of our service team?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Customer Service';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'text', 'Is there anything our staff could do to improve your experience?', null, 'required'
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Customer Service';

INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'slidingRate', 'How would you rate the cleanliness of the dining area?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Cleanliness & Ambience';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'yesNo', 'Were the tables, restrooms, and service counters well maintained?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Cleanliness & Ambience';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'slidingRate', 'How comfortable was the seating and overall layout of the café?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Cleanliness & Ambience';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'yesNo', 'Did the atmosphere (lighting, music, décor) enhance your experience?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Cleanliness & Ambience';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'slidingRate', 'How satisfied were you with the noise level inside the café?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Cleanliness & Ambience';
INSERT INTO question(category_id, type, question, default_value, validations)
  SELECT category.id, 'text', 'What improvements, if any, would make our environment more enjoyable?', null, null
  FROM customer 
  JOIN category ON category.customer_id = customer.id 
  WHERE customer.slug = 'cafe-nook'
    AND category.category = 'Cleanliness & Ambience';