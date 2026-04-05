-- Khởi tạo bảng và dữ liệu mẫu cho PostgreSQL
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price) VALUES 
('Product 1', 99.99),
('Product 2', 149.99),
('Product 3', 199.99);
