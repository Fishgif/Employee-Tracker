
USE employee_cms;

INSERT INTO departments(name) values 
("sales"),
("finance"),
("accounting"),
("engineering");



-- TRUNCATE roles;

INSERT INTO roles(title, salary, department_id)
VALUES
('MD', 100000, 1),
('State Sales Manager', 67000, 2),
('HR Department', 72000, 4),
('Field Sales Manager', 45000, 3),
('Ass to MD', 47000, 1),
('Marketing Assistant', 89000, 1);



INSERT INTO employees(first_name, last_name, role_id) 
VALUES
('Jason', 'Sergent', 1),
('Micky', 'Wilson', 5),
('Karen', 'Shields', 2),
('George', 'Andreaou', 3),
('Karen', 'Jones', 6),
('Emma', 'Rasoue', 3);