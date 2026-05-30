CREATE TABLE customer (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE category (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  customer_id INT REFERENCES customer(id) NOT NULL,
  order_seq INT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE question_type AS ENUM('text', 'textarea', 'yesNo', 'slidingRate', 'smileyRate');

CREATE TABLE question (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category_id INT REFERENCES category(id) NOT NULL,
  type question_type NOT NULL, 
  question TEXT NOT NULL,
  default_value TEXT,
  validations TEXT
);
