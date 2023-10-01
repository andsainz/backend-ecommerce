create database productsdb;
use productsdb;
create table products(
    id_product int auto_increment, primary key(id_product),
    name_product varchar(50) not null,
    price int not null,
    director varchar(20) not null,
    stock int not null,
    id_brand int not null,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE 
    CURRENT_TIMESTAMP);
create table brands (
	id_brand int auto_increment, primary key(id_brand),
    name_brand varchar(30) not null unique,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE 
    CURRENT_TIMESTAMP
);
