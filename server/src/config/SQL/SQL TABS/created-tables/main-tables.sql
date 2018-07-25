-- DIETS / HEALTH TABLE
drop table if exists Diets;
create table Diets (
id int not null auto_increment primary key,
type varchar(256) not null
);
-- USERS TABLES
drop table if exists Users;
create table Users (
id int not null auto_increment primary key,
firstname varchar(256) not null,
lastname varchar(256) not null,
email varchar(256) not null unique,
);
-- STORAGE TABLES **MIGHT BE GOING AWAY
drop table if exists Storages;
create table Storages (
id int not null auto_increment primary key,
itemname varchar(256) not null,
container varchar(256) not null
);