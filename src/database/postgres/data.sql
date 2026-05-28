INSERT INTO customer(name, slug) 
VALUES('Cafe Nook', 'cafe-nook');

INSERT INTO category(customer_id, order_seq, category) 
SELECT id, 1, 'Product Quality (Food & Beverages)' FROM customer WHERE slug = 'cafe-nook';

INSERT INTO category(customer_id, order_seq, category) 
SELECT id, 2, 'Customer Service' FROM customer WHERE slug = 'cafe-nook';

INSERT INTO category(customer_id, order_seq, category) 
SELECT id, 3, 'Cleanliness & Ambience' FROM customer WHERE slug = 'cafe-nook';