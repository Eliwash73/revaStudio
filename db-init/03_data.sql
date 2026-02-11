CREATE TABLE IF NOT EXISTS users (
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50),
    role_id INT
);

INSERT INTO users (username, password, role, role_id) VALUES
('Jane','$2a$12$qeKZRVzn0.PyZbCPUnHr9uwA7hk7Zos59wOwzbC0vIWP/boDvEcc6','EMPLOYEE',3),
('Margaret','$2a$12$4R1xC8zeTxdFII6..hFelOoSl9jeeOrqLAianQ2wEwK65HQPUA536','EMPLOYEE',4),
('Steve','$2a$12$MqoEJcLDxNbzKPhzdaHq..HskCAjwH42Edy.kAasQlS5AGxDfXJ.m','EMPLOYEE',5);

INSERT INTO users (username, password, role, role_id)
SELECT
    c.email,
    crypt(c.email, gen_salt('bf', 12)),
    'CUSTOMER',
    NULL
FROM customer c
ON CONFLICT (username) DO NOTHING;
