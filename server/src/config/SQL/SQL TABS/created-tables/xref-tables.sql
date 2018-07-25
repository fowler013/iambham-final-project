-- USER PASSWORD TABLES
drop table if exists Password;
create table Passwords (
id int not null auto_increment primary key,
userid int not null,
password text not null
);
-- USER DIET
drop table if exists UserDiets;
create table UserDiets (
id int not null auto_increment primary key,
dietid int not null,
userid int not null
);
-- USER REVIEWS TABLE
drop table if exists UserReviews;
create table UserReviews (
id int not null auto_increment primary key,
userid int not null,
review text not null
);
-- USER FAVORITES TABLE
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