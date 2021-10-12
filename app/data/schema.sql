
USE msisdb;
DROP TABLE IF EXISTS books;
CREATE TABLE books (
	bookId int PRIMARY KEY NOT NULL,
	title varchar(222) NOT NULL,
	author VARCHAR(100) NOT NULL,
    yearPublish int NOT NULL,
    publisher VARCHAR(100) NOT NULL,
	pageCount int NOT NULL,
	msrp FLOAT NOT NULL 
    );
    
INSERT INTO books (bookId, title, author, yearPublish, publisher, pageCount, msrp)
VALUES
(1, 'The Four Winds', 'Kristin Hannah', 2021, 'St. Martins Publishing Group', 293, 37),
(2, 'Things We Lost to the Water', 'Eric Nguyen', 2021, 'Knopf Doubleday Publishing Grou', 167, 27),
(3, 'The Lost Apothecary', 'Sarah Penner', 2021, 'Park Row Books', 401, 56),
(4, 'Best Book', 'Jack Krieps', 2021, 'MSIS Publishing', 324, 143);

SHOW TABLES;
SELECT * FROM books;