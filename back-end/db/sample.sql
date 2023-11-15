-- Create roles table
CREATE TABLE IF NOT EXISTS roles (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255)
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

-- Create user_roles table for many-to-many relationship
CREATE TABLE IF NOT EXISTS user_roles (
  userId INTEGER,
  roleId INTEGER,
  PRIMARY KEY (userId, roleId),
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (roleId) REFERENCES roles(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert sample roles
INSERT INTO roles (id, name) VALUES
(1, 'user'),
(2, 'admin'),
(3, 'moderator');

-- Insert sample users
INSERT INTO users (username, email, password) VALUES
('user1', 'user1@example.com', 'password1'),
('admin1', 'admin1@example.com', 'password1'),
('moderator1', 'moderator1@example.com', 'password1');

-- Assign roles to users
INSERT INTO user_roles (userId, roleId) VALUES
(1, 1), -- user1 has role 'user'
(2, 2), -- admin1 has role 'admin'
(3, 3); -- moderator1 has role 'moderator'
