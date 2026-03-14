CREATE DATABASE IF NOT EXISTS smartcart;
USE smartcart;

CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    store_name VARCHAR(100) NOT NULL,
    purchased BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO items (name, category, quantity, price, store_name, purchased)
VALUES
    ('Milk', 'Dairy', 1, 3.99, 'Walmart', FALSE),
    ('Bread', 'Bakery', 2, 2.49, 'Target', TRUE),
    ('Eggs', 'Dairy', 1, 4.29, 'Costco', FALSE);
