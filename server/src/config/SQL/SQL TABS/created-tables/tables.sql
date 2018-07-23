-- USERS TABLES
drop table if exists Users;
create table Users (
id int not null auto_increment primary key,
firstname varchar(256) not null,
lastname varchar(256) not null,
email varchar(256) not null unique,
);
-- PASSWORD TABLES
drop table if exists Password;
create table Passwords (
id int not null auto_increment primary key,
userid int not null,
password text not null
);
-- USER REVIEWS TABLE
drop table if exists UserReviews;
create table UserReviews (
id int not null auto_increment primary key,
userid int not null,
review text not null
);
-- STORAGE TABLES
drop table if exists Storages;
create table Storages (
id int not null auto_increment primary key,
itemname varchar(256),
container varchar(256) not null

);
-- FAVORITES TABLE
drop table if exists Favorites;
create table Favorites (
id int not null auto_increment primary key,
food varchar(256) not null

);
-- USER HISTORY TABLE
drop table if exists History;
create table History (
id int not null auto_increment primary key,
userid int not null,
-- -- previous orders text not null
);
-- USER ALLERGIES TABLE
drop table if exists Allergies;
create table Allergies (
id int not null auto_increment primary key,
userid int not null,
allergy varchar(256) not null
);

-- USER/STORAGE CROSS REFERNECE
drop table if exists UserStorage
create table UserStorage (
userid int not null,
storageid int not null
);